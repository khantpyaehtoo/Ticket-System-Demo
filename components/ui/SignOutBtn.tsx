"use client";

import { signOut } from "@/actions/authAction";
import { LogOut } from "lucide-react";

export default function SignOutBtn() {
    return (
        <button
            onClick={() => signOut()}
            className="w-[calc(100%+3rem)] -mx-6 flex items-center justify-center gap-2 px-6 py-3 text-gray-400 border-t-2 border-t-secondary font-medium hover:text-secondary transition-colors cursor-pointer bg-inherit pt-6"
        >
            <LogOut size={20} />
            <span className="text-sm font-medium">Log Out</span>
        </button>
    );
}
