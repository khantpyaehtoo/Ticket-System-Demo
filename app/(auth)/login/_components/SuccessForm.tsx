import { ArrowLeft, CircleCheck } from "lucide-react";
import React from "react";

interface completeFormProps {
    onBackToLogin?: () => void;
}

export default function SuccessForm({ onBackToLogin }: completeFormProps) {
    return (
        <div className="w-full max-w-md mx-auto p-6 md:p-8 bg-background border border-zinc-200/50 rounded-2xl shadow-2xl backdrop-blur-md">
            {/* Header Section */}
            <div className="flex justify-center items-center mb-6">
                <p className="h-15 w-15 p-1 rounded-full bg-primary flex items-center justify-center">
                    <CircleCheck />
                </p>
            </div>
            <div className="space-y-3 mb-6 text-center md:text-center">
                <h1 className="text-xl md:text-xl font-semibold text-black">
                    Password Reset Successfully
                </h1>
                <div>
                    <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                        Your Password has been successfully reset.
                    </p>
                    <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                        Click below to login.
                    </p>
                </div>
                {/* Back to Login */}
                <div className="text-center mt-4">
                    <button
                        type="button"
                        onClick={onBackToLogin}
                        className="inline-flex items-center gap-2 px-10 h-11 md:h-12 border-none! bg-primary! text-background! hover:bg-secondary! rounded-xl! font-medium text-sm transition-all cursor-pointer"
                    >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        <span>Back to Login</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
