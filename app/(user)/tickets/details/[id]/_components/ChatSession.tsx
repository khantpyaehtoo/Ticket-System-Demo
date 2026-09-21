"use client";

import "quill/dist/quill.snow.css";

import React, { useState, useRef } from "react";
import { Clock, Send, Paperclip, Lock, X, FileText } from "lucide-react";
import dynamic from "next/dynamic";
import { Avatar } from "antd";
import Image from "next/image";
import { useUserStore } from "@/store/useUserStore";
import profileImg from "@/public/defaultProfile.jpg";

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

export default function ChatSession() {
    const [editorValue, setEditorValue] = useState("");
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

    const fileInputRef = useRef<HTMLInputElement>(null);

    const imageSrc = useUserStore((state) => state.imageSrc);
    const avatarUrl = imageSrc || profileImg.src;

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

    return (
        <div className="w-full bg-background border border-primary/10 rounded-xl shadow-sm overflow-hidden text-primary">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-6 border-b border-primary/10 bg-primary/5 gap-2">
                <div>
                    <h2 className="font-bold text-base md:text-lg">
                        Support Activity & Thread
                    </h2>
                    <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                        <Lock className="w-3 h-3 text-green-600 shrink-0" /> All
                        communication is encrypted & logged
                    </p>
                </div>
                <span className="self-start sm:self-auto text-xs font-semibold px-2.5 py-1 bg-primary/10 text-primary rounded-md">
                    2 Messages
                </span>
            </div>

            {/* Communication Thread Section */}
            <div className="p-4 md:p-6 space-y-4 sm:space-y-6 max-h-[550px] overflow-y-auto">
                {/* System Message */}
                <div className="flex gap-2.5 sm:gap-4 items-start">
                    <Avatar
                        src={
                            <div className="relative w-full h-full">
                                <Image
                                    src={avatarUrl}
                                    alt="Support Team Avatar"
                                    fill
                                    priority
                                    sizes="40px"
                                    className="object-cover rounded-full"
                                />
                            </div>
                        }
                        size={36}
                        className="ring-2 ring-primary/20 shrink-0 border-none sm:w-[40px] sm:h-[40px]"
                    />
                    <div className="flex-1 bg-muted/40 border border-primary/10 rounded-2xl p-3.5 sm:p-5 space-y-2 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-primary/5 pb-2 gap-1">
                            <h3 className="font-bold text-xs sm:text-sm text-primary">
                                System Team
                            </h3>
                            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                <Clock className="w-3.5 h-3.5 shrink-0" />
                                <span>15 Sep 11:30 AM</span>
                            </div>
                        </div>
                        <p className="text-xs sm:text-sm leading-relaxed text-foreground/90">
                            Hi Megan Fox, We’ve received your technical issue
                            and our support team is currently investigating it.
                        </p>
                    </div>
                </div>

                {/* User Message */}
                <div className="flex gap-2.5 sm:gap-4 items-start">
                    <Avatar
                        src={
                            <div className="relative w-full h-full">
                                <Image
                                    src={avatarUrl}
                                    alt="User Avatar"
                                    fill
                                    priority
                                    sizes="40px"
                                    className="object-cover rounded-full"
                                />
                            </div>
                        }
                        size={36}
                        className="ring-2 ring-primary/20 shrink-0 border-none sm:w-[40px] sm:h-[40px]"
                    />
                    <div className="flex-1 bg-primary/5 border border-primary/15 rounded-2xl p-3.5 sm:p-5 space-y-2 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-primary/5 pb-2 gap-1">
                            <h3 className="font-bold text-xs sm:text-sm text-secondary">
                                Megan Fox
                            </h3>
                            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                <Clock className="w-3.5 h-3.5 shrink-0" />
                                <span>15 Sep 11:35 AM</span>
                            </div>
                        </div>
                        <p className="text-xs sm:text-sm leading-relaxed text-foreground/90">
                            Hi Support Team, I’ve attached a screenshot of the
                            issue.
                        </p>
                    </div>
                </div>
            </div>

            {/* Reply / Typing Section */}
            <div className="p-4 md:p-6 border-t border-primary/10 bg-background space-y-4">
                {/* Hidden File Input */}
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="hidden"
                    multiple
                    accept="image/*,.pdf,.doc,.docx"
                />

                {/* Selected Files List Preview */}
                {selectedFiles.length > 0 && (
                    <div className="flex flex-wrap gap-2 pb-1">
                        {selectedFiles.map((file, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2 text-xs bg-primary/10 text-primary border border-primary/20 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg"
                            >
                                <FileText className="w-3.5 h-3.5 shrink-0" />
                                <span className="max-w-[120px] sm:max-w-[150px] truncate font-medium">
                                    {file.name}
                                </span>
                                <button
                                    type="button"
                                    onClick={() => handleRemoveFile(index)}
                                    className="hover:text-red-500 transition-colors p-0.5"
                                >
                                    <X className="w-3.5 h-3.5" />
                                </button>
                            </div>
                        ))}
                    </div>
                )}

                {/* Editor */}
                <div className="rounded-lg overflow-hidden border border-primary/20 focus-within:ring-1 focus-within:ring-primary">
                    <ReactQuill
                        theme="snow"
                        value={editorValue}
                        onChange={setEditorValue}
                        modules={quillModules}
                        formats={quillFormats}
                        placeholder="Type your reply here..."
                        className="bg-white [&_.ql-toolbar]:border-none [&_.ql-toolbar]:bg-muted/20 [&_.ql-container]:border-none [&_.ql-container]:min-h-[90px] sm:[&_.ql-container]:min-h-[110px] [&_.ql-editor]:text-xs sm:[&_.ql-editor]:text-sm"
                    />
                </div>

                {/* Editor Action Buttons */}
                <div className="flex items-center justify-between gap-2 flex-wrap">
                    <button
                        type="button"
                        onClick={handleAttachClick}
                        className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-md hover:bg-muted/50 cursor-pointer"
                    >
                        <Paperclip className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        <span>Attach files</span>
                    </button>

                    <button
                        type="button"
                        className="flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-xs sm:text-sm font-semibold rounded-lg shadow-sm hover:opacity-90 transition-all active:scale-95 cursor-pointer ml-auto"
                    >
                        <span className="text-background">Send Reply</span>
                        <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-background" />
                    </button>
                </div>
            </div>
        </div>
    );
}
