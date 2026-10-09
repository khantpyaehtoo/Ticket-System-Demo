import type { Metadata } from "next";
import { JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Providers from "./provider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const jakartaSans = Plus_Jakarta_Sans({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
    variable: "--font-jakata-sans",
});

const jetbrainsMono = JetBrains_Mono({
    weight: ["300", "400", "500"],
    subsets: ["latin"],
    variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
    title: "Digital Base",
    description: "Digital Base Ticketing System",
    icons: {
        icon: [{ url: "/logo.svg", type: "image/svg+xml" }],
    },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html
            lang="en"
            className={`${jakartaSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
        >
            <body
                className="h-screen bg-background font-sans antialiased"
                suppressHydrationWarning
            >
                <AntdRegistry>
                    <Providers>
                        {children}
                        <ReactQueryDevtools initialIsOpen={false} />
                    </Providers>
                </AntdRegistry>
            </body>
        </html>
    );
}
