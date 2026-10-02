"use client";

import React, { useState, useRef, useEffect } from "react";
import { Clock, Lock, MessageSquare } from "lucide-react";
import { Avatar } from "antd";
import Image from "next/image";
import { useUserStore } from "@/store/useUserStore";
import profileImg from "@/public/defaultProfile.jpg";
import { MessageType } from "@/types/ticket";
import BlurCloseKeyboard from "./BlurCloseKeyboard";
import BlurKeyboard from "./BlurKeyboard";
import ActiveKeyboard from "./ActiveKeyboard";

interface ChatSessionProps {
    ticketId?: string;
    isClosed?: boolean;
    messages?: MessageType[];
    onSendReply?: (content: string, files: File[]) => Promise<void>;
}

export default function ChatSession({
    isClosed = false,
    messages = [],
    onSendReply,
}: ChatSessionProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [hasNewMessage, setHasNewMessage] = useState(false);

    const imageSrc = useUserStore((state) => state.imageSrc);
    const currentUserAvatar = imageSrc || profileImg.src;

    const prevMessagesLength = useRef(messages.length);
    const chatContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (messages.length > prevMessagesLength.current) {
            if (chatContainerRef.current) {
                const { scrollTop, scrollHeight, clientHeight } =
                    chatContainerRef.current;
                const isAtBottom = scrollHeight - scrollTop - clientHeight < 60;

                if (!isAtBottom) {
                    setHasNewMessage(true);
                }
            }
        }
        prevMessagesLength.current = messages.length;
    }, [messages]);

    const handleScroll = () => {
        if (!chatContainerRef.current) return;
        const { scrollTop, scrollHeight, clientHeight } =
            chatContainerRef.current;
        const isAtBottom = scrollHeight - scrollTop - clientHeight < 60;

        if (isAtBottom) {
            setHasNewMessage(false);
        }
    };

    return (
        <div className="relative teamHeaderCard shadow-sm overflow-hidden text-primary">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-6 border-b border-primary/10 gap-2">
                <div>
                    <h2 className="font-bold text-base md:text-lg">
                        Support Activity & Thread
                    </h2>
                    <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                        <Lock className="w-3 h-3 text-green-600 shrink-0" /> All
                        communication is encrypted & logged
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    {isClosed ? (
                        <span className="text-xs font-semibold px-2.5 py-1 bg-red-100 text-red-600 rounded-md border border-red-200 flex items-center gap-1">
                            <Lock className="w-3 h-3" /> Session Ended
                        </span>
                    ) : (
                        <span className="self-start sm:self-auto text-xs font-semibold px-2.5 py-1 bg-primary/10 text-primary rounded-md">
                            {messages.length} Messages
                        </span>
                    )}
                </div>
            </div>

            {/* Communication Thread Section */}
            <div
                ref={chatContainerRef}
                onScroll={handleScroll}
                className="p-4 md:p-6 space-y-4 sm:space-y-6 min-h-[450px] overflow-y-auto"
            >
                {messages.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center space-y-3">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <MessageSquare className="w-6 h-6" />
                        </div>
                        <div className="space-y-1">
                            <h3 className="font-semibold text-sm text-foreground">
                                No messages yet
                            </h3>
                            <p className="text-xs text-muted-foreground max-w-xs">
                                Start the conversation by typing a reply below.
                            </p>
                        </div>
                    </div>
                ) : (
                    /* Thread List */
                    messages.map((msg) => {
                        const isUser = msg.senderType === "USER";

                        return (
                            <div
                                key={msg.id}
                                className="flex gap-2.5 sm:gap-4 items-start"
                            >
                                <Avatar
                                    src={
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={
                                                    isUser
                                                        ? currentUserAvatar
                                                        : msg.senderAvatar ||
                                                          profileImg.src
                                                }
                                                alt={`${msg.senderName} Avatar`}
                                                fill
                                                priority
                                                sizes="40px"
                                                className="object-cover rounded-full"
                                            />
                                        </div>
                                    }
                                    size={36}
                                    className="ring-2 ring-primary/70 ring-offset-2 shrink-0 border-none! sm:w-[40px] sm:h-[40px]"
                                />
                                <div
                                    className={`flex-1 border border-primary/10 rounded-2xl p-3.5 sm:p-5 space-y-2 min-w-0 ${
                                        isUser ? "bg-background" : "bg-muted/40"
                                    }`}
                                >
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 gap-1">
                                        <h3
                                            className={`font-bold text-xs sm:text-sm ${
                                                isUser
                                                    ? "text-secondary"
                                                    : "text-primary"
                                            }`}
                                        >
                                            {msg.senderName}
                                        </h3>
                                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                            <Clock className="w-3.5 h-3.5 shrink-0" />
                                            <span>{msg.createdAt}</span>
                                        </div>
                                    </div>
                                    <div
                                        className="text-xs sm:text-sm leading-relaxed text-foreground/90 prose prose-sm max-w-none"
                                        dangerouslySetInnerHTML={{
                                            __html: msg.content,
                                        }}
                                    />
                                </div>
                            </div>
                        );
                    })
                )}
            </div>

            {/* Reply / Typing Section */}
            <div className="p-4 md:p-6 border-t border-primary/10 bg-background relative z-10">
                {isClosed ? (
                    /* 1. Session Ended State (Blur Backdrop + Lock Badge) */
                    <BlurCloseKeyboard />
                ) : !isExpanded ? (
                    /* 2. Collapsed State (Blur Backdrop Editor Box) */
                    <BlurKeyboard onClick={() => setIsExpanded(true)} />
                ) : (
                    /* 3. Active Expanded Editor Box */
                    <ActiveKeyboard
                        onClick={() => setIsExpanded(false)}
                        onSendReply={onSendReply}
                    />
                )}
            </div>
        </div>
    );
}
