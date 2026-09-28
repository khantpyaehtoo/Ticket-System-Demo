import { AlertCircle } from "lucide-react";
import React from "react";

export default function BlurCloseKeyboard() {
    return (
        <div className="relative border border-red-200/60 rounded-xl overflow-hidden shadow-xs">
            <div className="p-3.5 sm:p-4 space-y-3 opacity-30 select-none pointer-events-none bg-red-50/20">
                <div className="flex items-center gap-3 border-b border-gray-200 pb-2 text-muted-foreground text-xs font-bold">
                    <span className="font-serif font-bold text-sm">B</span>
                    <span className="italic font-serif text-sm">I</span>
                    <span className="underline font-serif text-sm">U</span>
                </div>
                <div className="h-14 text-xs text-red-900/40 italic">
                    Ticket conversation ended...
                </div>
            </div>
            <div className="absolute inset-0 bg-white/60 backdrop-blur-[3px] flex items-center justify-center p-4">
                <div className="flex items-center gap-2 px-3.5 py-2 bg-red-50/90 border border-red-200/80 rounded-xl text-xs font-medium text-red-700 shadow-xs">
                    <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                    <span>This ticket is closed. Keyboard is locked.</span>
                </div>
            </div>
        </div>
    );
}
