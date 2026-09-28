"use client";

import { useEffect } from "react";
import { Button, Result } from "antd";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error("App Error:", error);
    }, [error]);

    const isUnauthorized =
        error.message.includes("401") || error.message.includes("Unauthorized");

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <Result
                status={isUnauthorized ? "403" : "500"}
                title={
                    isUnauthorized ? "401 - Unauthorized" : "500 - Server Error"
                }
                subTitle={
                    isUnauthorized
                        ? "You don't have permission to access this page. Please log in first."
                        : "Something went wrong on our end. Please try again."
                }
                extra={
                    <Button type="primary" onClick={() => reset()}>
                        Try Again
                    </Button>
                }
            />
        </div>
    );
}
