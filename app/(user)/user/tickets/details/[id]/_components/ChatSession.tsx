"use client";

import "quill/dist/quill.snow.css";

import React, { useState, useRef, useEffect } from "react";
import {
    Clock,
    Paperclip,
    Lock,
    X,
    FileText,
    SendHorizonal,
    MessageSquare,
    AlertCircle,
} from "lucide-react";
import dynamic from "next/dynamic";
import { Avatar } from "antd";
import Image from "next/image";
import { useUserStore } from "@/store/useUserStore";
import profileImg from "@/public/defaultProfile.jpg";
import { MessageType } from "@/types/ticket";

const ReactQuill = dynamic(() => import("react-quill-new"), {
    ssr: false,
    loading: () => (
        <div className="h-32 bg-gray-50 border border-primary/10 rounded-md animate-pulse" />
    ),
});

const quillModules = {
    toolbar: [
        ["bold", "italic", "underline"],
        [{ list: "ordered" }, { list: "bullet" }],
    ],
};

const quillFormats = ["bold", "italic", "underline", "list"];

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
    const [editorValue, setEditorValue] = useState("");
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [hasNewMessage, setHasNewMessage] = useState(false);

    const fileInputRef = useRef<HTMLInputElement>(null);
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

    const scrollToBottom = () => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTo({
                top: chatContainerRef.current.scrollHeight,
                behavior: "smooth",
            });
            setHasNewMessage(false);
        }
    };

    const handleScroll = () => {
        if (!chatContainerRef.current) return;
        const { scrollTop, scrollHeight, clientHeight } =
            chatContainerRef.current;
        const isAtBottom = scrollHeight - scrollTop - clientHeight < 60;

        if (isAtBottom) {
            setHasNewMessage(false);
        }
    };

    const handleAttachClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const filesArray = Array.from(e.target.files);
            setSelectedFiles((prev) => [...prev, ...filesArray]);
        }
    };

    const handleRemoveFile = (indexToRemove: number) => {
        setSelectedFiles((prev) =>
            prev.filter((_, index) => index !== indexToRemove),
        );
    };

    const handleSend = async () => {
        if (!editorValue.trim() && selectedFiles.length === 0) return;

        try {
            setIsSubmitting(true);
            if (onSendReply) {
                await onSendReply(editorValue, selectedFiles);
            }
            setEditorValue("");
            setSelectedFiles([]);
            setIsExpanded(false);

            setTimeout(scrollToBottom, 100);
        } catch (error) {
            console.error("Failed to send reply:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="relative w-full bg-background border border-primary/10 rounded-xl shadow-sm overflow-hidden text-primary">
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
                className="p-4 md:p-6 space-y-4 sm:space-y-6 max-h-[550px] overflow-y-auto"
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
                    <div className="relative border border-red-200/60 rounded-xl overflow-hidden shadow-xs">
                        <div className="p-3.5 sm:p-4 space-y-3 opacity-30 select-none pointer-events-none bg-red-50/20">
                            <div className="flex items-center gap-3 border-b border-gray-200 pb-2 text-muted-foreground text-xs font-bold">
                                <span className="font-serif font-bold text-sm">
                                    B
                                </span>
                                <span className="italic font-serif text-sm">
                                    I
                                </span>
                                <span className="underline font-serif text-sm">
                                    U
                                </span>
                            </div>
                            <div className="h-14 text-xs text-red-900/40 italic">
                                Ticket conversation ended...
                            </div>
                        </div>
                        <div className="absolute inset-0 bg-white/60 backdrop-blur-[3px] flex items-center justify-center p-4">
                            <div className="flex items-center gap-2 px-3.5 py-2 bg-red-50/90 border border-red-200/80 rounded-xl text-xs font-medium text-red-700 shadow-xs">
                                <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                                <span>
                                    This ticket is closed. Keyboard is locked.
                                </span>
                            </div>
                        </div>
                    </div>
                ) : !isExpanded ? (
                    /* 2. Collapsed State (Blur Backdrop Editor Box) */
                    <div
                        onClick={() => setIsExpanded(true)}
                        className="relative group border border-primary/20 rounded-xl overflow-hidden cursor-pointer hover:border-primary/50 transition-all shadow-xs"
                    >
                        <div className="p-3.5 sm:p-4 space-y-3 opacity-40 select-none pointer-events-none bg-white">
                            <div className="flex items-center gap-3 border-b border-primary/10 pb-2 text-muted-foreground text-xs font-bold">
                                <span className="font-serif font-bold text-sm">
                                    B
                                </span>
                                <span className="italic font-serif text-sm">
                                    I
                                </span>
                                <span className="underline font-serif text-sm">
                                    U
                                </span>
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
                ) : (
                    /* 3. Active Expanded Editor Box */
                    <div className="space-y-3 transition-all animate-in fade-in zoom-in-95 duration-200">
                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            className="hidden"
                            multiple
                            accept="image/*,.pdf,.doc,.docx"
                        />

                        {selectedFiles.length > 0 && (
                            <div className="flex flex-wrap gap-2 pb-1">
                                {selectedFiles.map((file, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-2 text-xs bg-primary/10 text-primary border border-primary/20 px-2.5 py-1 rounded-lg"
                                    >
                                        <FileText className="w-3.5 h-3.5 shrink-0" />
                                        <span className="max-w-[120px] truncate font-medium">
                                            {file.name}
                                        </span>
                                        <button
                                            type="button"
                                            onClick={() =>
                                                handleRemoveFile(index)
                                            }
                                            className="hover:text-red-500 transition-colors p-0.5"
                                        >
                                            <X className="w-3.5 h-3.5" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="relative rounded-xl border border-primary/20 focus-within:border-primary transition-all overflow-hidden bg-white">
                            <button
                                type="button"
                                onClick={() => setIsExpanded(false)}
                                className="absolute top-2 right-2 z-10 p-1 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors"
                            >
                                <X className="w-4 h-4" />
                            </button>

                            <ReactQuill
                                theme="snow"
                                value={editorValue}
                                onChange={setEditorValue}
                                modules={quillModules}
                                formats={quillFormats}
                                placeholder="Type your reply here..."
                                className="[&_.ql-toolbar]:border-none! [&_.ql-toolbar]:bg-muted/10 [&_.ql-container]:border-none! [&_.ql-container]:min-h-[100px]! sm:[&_.ql-container]:min-h-[120px]! [&_.ql-editor]:text-xs sm:[&_.ql-editor]:text-sm [&_.ql-editor]:pb-12"
                            />

                            <div className="flex items-center justify-between p-2.5 bg-muted/10 border-t border-primary/10">
                                <button
                                    type="button"
                                    onClick={handleAttachClick}
                                    className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors px-2.5 py-1.5 rounded-md hover:bg-muted/50"
                                >
                                    <Paperclip className="w-3.5 h-3.5" />
                                    <span>Attach files</span>
                                </button>

                                <button
                                    type="button"
                                    onClick={handleSend}
                                    disabled={isSubmitting}
                                    className="flex items-center justify-center gap-1.5 px-3.5 py-1.5 bg-primary text-white text-xs sm:text-sm font-medium rounded-lg shadow-sm hover:opacity-90 transition-all active:scale-95 disabled:opacity-50"
                                >
                                    <SendHorizonal className="w-3.5 h-3.5" />
                                    <span>
                                        {isSubmitting ? "Sending..." : "Send"}
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
