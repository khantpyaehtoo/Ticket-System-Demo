"use client";

import { useEffect, useState } from "react";

export function useRealTime() {
    const [currentTime, setCurrentTime] = useState<Date | null>(null);

    useEffect(() => {
        // Component mount and initial local time
        setCurrentTime(new Date());

        // 1 (1000ms) update interval
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        // Component unmount
        return () => clearInterval(timer);
    }, []);

    // Local Date Format helper
    const formattedDate = currentTime
        ? currentTime.toLocaleDateString(undefined, {
              month: "short",
              day: "numeric",
              year: "numeric",
          })
        : "Loading...";

    // Local Time (AM/PM) Format helper
    const formattedTime = currentTime
        ? currentTime.toLocaleTimeString(undefined, {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
              hour12: true,
          })
        : "--:--";

    return {
        currentTime,
        formattedDate,
        formattedTime,
    };
}
