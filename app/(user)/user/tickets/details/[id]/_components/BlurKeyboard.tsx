import { MessageSquare } from "lucide-react";
import React from "react";

interface keyBoardProps {
    onClick: () => void;
}

export default function BlurKeyboard({ onClick }: keyBoardProps) {
    return (
        <div
            onClick={onClick}
            className="relative group border border-primary/20 rounded-xl overflow-hidden cursor-pointer hover:border-primary/50 transition-all shadow-xs"
        >
            <div className="p-3.5 sm:p-4 space-y-3 opacity-40 select-none pointer-events-none bg-white">
                <div className="flex items-center gap-3 border-b border-primary/10 pb-2 text-muted-foreground text-xs font-bold">
                    <span className="font-serif font-bold text-sm">B</span>
                    <span className="italic font-serif text-sm">I</span>
                    <span className="underline font-serif text-sm">U</span>
                </div>
                <div className="h-14 text-xs sm:text-sm text-muted-foreground italic">
                    Type your reply here...
                </div>
            </div>
            <div className="absolute inset-0 bg-background/50 backdrop-blur-[3px] group-hover:bg-background/30 transition-all flex items-center justify-center">
                <div className="flex items-center gap-2.5 px-4 py-2 bg-white/90 border border-primary/20 rounded-xl shadow-md group-hover:scale-105 transition-all">
                    <MessageSquare className="w-4 h-4 text-primary animate-pulse" />
                    <span className="text-xs sm:text-sm font-medium text-foreground">
                        Click here to type a reply...
                    </span>
                    <span className="text-[11px] bg-primary/10 text-primary px-2 py-0.5 rounded-md font-semibold ml-1">
                        Reply
                    </span>
                </div>
            </div>
        </div>
    );
}
