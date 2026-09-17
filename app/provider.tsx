"use client";

import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConfigProvider } from "antd";

export default function Providers({ children }: { children: React.ReactNode }) {
    // TanStack Query Client Instance
    const [queryClient] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            <ConfigProvider
                theme={{
                    token: {
                        fontFamily: "var(--font-roboto), sans-serif",
                        colorPrimary: "var(--primary)",
                    },
                }}
            >
                {children}
            </ConfigProvider>
        </QueryClientProvider>
    );
}
