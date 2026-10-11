"use client";

import { signOut } from "@/actions/authAction";
import { LogOut } from "lucide-react";

export default function SignOutBtn() {
    return (
        <button
            onClick={() => signOut()}
            className="flex items-center justify-center gap-2 -mx-6 px-6 pb-1 pt-10 bg-primary text-gray-400 border-t-2 border-t-secondary font-medium hover:text-secondary transition-colors cursor-pointer"
        >
            <LogOut />
            <span>Log Out</span>
        </button>
    );
}
