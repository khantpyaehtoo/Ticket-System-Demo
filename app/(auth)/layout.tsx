import React, { Suspense } from "react";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <Suspense fallback={null}>
            <div className="bg-background">{children}</div>
        </Suspense>
    );
}
