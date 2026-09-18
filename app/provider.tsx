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
                        colorBgElevated: "#ffffff",
                    },
                    components: {
                        Select: {
                            optionSelectedColor: "var(--background)",
                        },
                        Form: {
                            labelColor: "#374151",
                        },
                    },
                }}
            >
                {children}
            </ConfigProvider>
        </QueryClientProvider>
    );
}
