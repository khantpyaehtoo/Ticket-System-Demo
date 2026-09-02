import type { Metadata } from "next";
import { JetBrains_Mono, Roboto } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/shared/sidebar";
import Header from "@/components/shared/header";

const roboto = Roboto({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
    variable: "--font-roboto",
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
        // <body className="flex h-screen overflow-hidden bg-background">
        //     {/* Fixed Left Sidebar */}
        //     <Sidebar />

        //     {/* Main Content Scroll Area */}
        //     <div className="flex-1 flex flex-col overflow-y-auto bg-background">
        //         <div className="w-full mx-auto space-y-6 ">
        //             <Header />
        //             <main className="px-8">{children}</main>
        //         </div>
        //     </div>
        // </body>
        <html
            lang="en"
            className={`${roboto.variable} ${jetbrainsMono.variable} h-full antialiased`}
        >
            <body className="h-screen bg-background antialiased">
                {children}
            </body>
        </html>
    );
}
