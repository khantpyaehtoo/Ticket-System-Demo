"use client";

import { signOut } from "@/actions/authAction";
import { Icon } from "../ui/icon";

export default function SignOutBtn() {
    return (
        <button
            onClick={() => signOut()}
            className="flex items-center justify-center gap-2 w-full py-2.5 bg-background text-secondary font-medium rounded-xl hover:bg-secondary hover:text-background transition-colors cursor-pointer"
        >
            <Icon name="signOut" className="w-4 h-4" />
            <span>Log Out</span>
        </button>
    );
}
