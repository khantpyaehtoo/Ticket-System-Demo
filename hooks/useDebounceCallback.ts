import { useCallback, useEffect, useRef } from "react";

export const useDebounceCallback = <T extends (...args: any[]) => void>(
    callback: T,
    delay: number = 300,
) => {
    const callbackRef = useRef(callback);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    // Keep callback ref fresh without re-triggering effects
    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    // Clean up timer on unmount or delay change
    useEffect(() => {
        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        };
    }, [delay]);

    return useCallback(
        (...args: Parameters<T>) => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }

            timerRef.current = setTimeout(() => {
                callbackRef.current(...args);
            }, delay);
        },
        [delay],
    );
};
