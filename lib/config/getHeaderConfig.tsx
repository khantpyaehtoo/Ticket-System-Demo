import { ReactNode } from "react";

export type HeaderLeftConfig = {
    type: "search" | "title";
    title?: string | ReactNode;
    description?: string;
    searchPlaceholder?: string;
};

// Static route configurations
export const staticHeaderLeftMap: Record<string, HeaderLeftConfig> = {
    "/dashboard": {
        type: "title",
        title: "Welcome Back!",
        description: "Here's an overview of your tickets and service requests",
    },
    "/tickets": {
        type: "title",
        title: "My Tickets",
        description: "View and manage all your support requests",
    },
    "/tickets/create": {
        type: "title",
        title: "My Tickets",
        description:
            "Describe your issue and provide any details that may help our support team understand and resolve it.",
    },
    "/products": {
        type: "title",
        title: "My Products",
        description: "Your active tools and subscription services",
    },
    "/notifications": {
        type: "title",
        title: "Notifications",
        description: "Recent alerts and updates",
    },
    "/settings": {
        type: "title",
        title: "Account Settings",
        description: "Manage your preferences and profile details",
    },
};

// Resolver function that handles both static and dynamic routes
export function getHeaderConfig(
    pathname: string,
    params: Record<string, string | string[] | undefined>,
): HeaderLeftConfig {
    // Check for exact static route matches
    if (staticHeaderLeftMap[pathname]) {
        return staticHeaderLeftMap[pathname];
    }

    // Dynamic Route: /tickets/details/[id]
    if (pathname.startsWith("/tickets/details/")) {
        const ticketId = params?.id || pathname.split("/").pop();
        return {
            type: "title",
            title: (
                <div className="font-jetbrains flex space-x-4">
                    <span>{ticketId}</span>
                    <span className="underline">Technical Issues</span>
                </div>
            ),
            description:
                "View your ticket status, details and conversation with our support team.",
        };
    }

    // Dynamic Route: /products/viewProduct/[id]
    if (pathname.startsWith("/products/viewProduct/")) {
        const productId = params?.id || pathname.split("/").pop();
        return {
            type: "title",
            title: (
                <div className="flex space-x-4">
                    <span>{productId}</span>
                </div>
            ),
            description: "Service Booking and Management System",
        };
    }

    // Default fallback configuration
    return {
        type: "title",
        title: "Dashboard",
        description: "Welcome to your panel",
    };
}
