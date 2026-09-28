"use client";

import { FileText, Paperclip, SendHorizonal, X } from "lucide-react";
import dynamic from "next/dynamic";
import React, { useRef, useState } from "react";

import "quill/dist/quill.snow.css";

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

interface ActiveKeyboardProps {
    onClick: () => void; // Used for closing/collapsing the editor
    onSendReply?: (content: string, files: File[]) => Promise<void>;
    scrollToBottom?: () => void;
}

export default function ActiveKeyboard({
    onClick,
    onSendReply,
    scrollToBottom,
}: ActiveKeyboardProps) {
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const [editorValue, setEditorValue] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const fileInputRef = useRef<HTMLInputElement>(null);

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

    const handleAttachClick = () => {
        fileInputRef.current?.click();
    };

    const handleSend = async () => {
        if (!editorValue.trim() && selectedFiles.length === 0) return;

        try {
            setIsSubmitting(true);
            if (onSendReply) {
                await onSendReply(editorValue, selectedFiles);
            }
            setEditorValue("");
            console.log("this is testing keyboard value - ", editorValue);

            setSelectedFiles([]);
            // onClick(); // Collapse the editor back

            if (scrollToBottom) {
                setTimeout(scrollToBottom, 100);
            }
        } catch (error) {
            console.error("Failed to send reply:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
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
                                onClick={() => handleRemoveFile(index)}
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
                    onClick={onClick}
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
                        <span>{isSubmitting ? "Sending..." : "Send"}</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
