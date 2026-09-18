"use client";

import "quill/dist/quill.snow.css";

import { Avatar } from "antd";
import Image from "next/image";
import Link from "next/link";
import profileImg from "@/public/defaultProfile.jpg";
import { useUserStore } from "@/store/useUserStore";
import { Clock } from "lucide-react";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill-new"), {
    ssr: false,
    loading: () => (
        <div className="h-32 bg-gray-50 border rounded-md animate-pulse" />
    ),
});

const quillModules = {
    toolbar: [
        ["bold", "italic", "underline"],
        [{ list: "ordered" }, { list: "bullet" }],
    ],
};

const quillFormats = ["bold", "italic", "underline", "list"];

export default function page() {
    const imageSrc = useUserStore((state) => state.imageSrc);

    const avatarUrl = imageSrc || profileImg.src;

    return (
        <div className="space-y-6">
            <Link
                href="/tickets"
                className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-800 transition-colors"
            >
                Back <span className="text-gray-300">{">"}</span> Ticket Details
            </Link>

            {/* Ticket Details */}
            <div className="flex justify-between items-start text-primary w-full gap-10">
                <div className="max-w-4xl border border-primary p-10">
                    <div className="flex justify-between items-center">
                        <div className="flex justify-between items-center gap-6">
                            <h1 className="text-xl font-semibold text-secondary">
                                Technical Issues
                            </h1>
                            <div>
                                <p className="uppercase pt-1">DB-TK1</p>
                            </div>
                        </div>
                        <div>
                            <span>Submitted</span>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-6">
                        <p>Description</p>
                        <div className="flex items-center gap-3 ">
                            <Avatar
                                src={
                                    <Image
                                        src={avatarUrl}
                                        alt="User Avatar"
                                        fill
                                        priority
                                        className="object-cover rounded-full"
                                    />
                                }
                                size={40}
                                className="ring  ring-offset-2 ring-primary relative overflow-hidden border-none!"
                            />
                            <div className="flex space-x-10">
                                <div>
                                    <h1>Megan Fox</h1>
                                    <span>To: digitalbase@gmail.com</span>
                                </div>
                                <span>
                                    {"<"}meganfox@gmail.com{">"}
                                </span>
                                <span className="flex">
                                    <Clock /> 15 Sep 11:00 AM
                                </span>
                            </div>
                        </div>
                        <div className="space-y-10">
                            <p>
                                Hello Support, I’m experiencing a technical
                                issue with the system. Some features are not
                                working properly, and the page sometimes becomes
                                unresponsive. I have tried refreshing the page
                                and logging in again, but the issue still
                                persists. Please check and help resolve this
                                issue. Best regards, Megan Fox
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-80 h-80 bg-primary" />
                                <div className="w-80 h-80 bg-primary" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Ticket Properties */}
                <div className="flex flex-1 flex-wrap p-10 border border-primary">
                    <h1 className="text-xl font-semibold text-secondary w-full">
                        Ticket Properties
                    </h1>
                    <div className="flex flex-col w-full mt-5 pb-10">
                        <div className="space-y-6">
                            <div className="flex justify-between items-center border-b border-b-primary pb-4">
                                <p>Ticket ID</p>
                                <p>DB-TK1</p>
                            </div>
                            <div className="flex justify-between items-center border-b border-b-primary pb-4">
                                <p>Ticket ID</p>
                                <p>DB-TK1</p>
                            </div>
                            <div className="flex justify-between items-center border-b border-b-primary pb-4">
                                <p>Ticket ID</p>
                                <p>DB-TK1</p>
                            </div>
                            <div className="flex justify-between items-center border-b border-b-primary pb-4">
                                <p>Ticket ID</p>
                                <p>DB-TK1</p>
                            </div>
                            <div className="flex justify-between items-center border-b border-b-primary pb-4">
                                <p>Ticket ID</p>
                                <p>DB-TK1</p>
                            </div>
                            <div className="flex justify-between items-center border-b border-b-primary pb-4">
                                <p>Ticket ID</p>
                                <p>DB-TK1</p>
                            </div>
                            <div className="flex justify-between items-center border-b border-b-primary pb-4">
                                <p>Ticket ID</p>
                                <p>DB-TK1</p>
                            </div>
                            <div className="flex justify-between items-center border-b border-b-primary pb-4">
                                <p>Ticket ID</p>
                                <p>DB-TK1</p>
                            </div>
                            <div className="flex justify-between items-center border-b border-b-primary pb-4">
                                <p>Ticket ID</p>
                                <p>DB-TK1</p>
                            </div>
                            <div className="flex justify-between items-center border-b border-b-primary pb-4">
                                <p>Ticket ID</p>
                                <p>DB-TK1</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Chat Session */}
            <div className="w-full border border-primary  text-black">
                <div className="flex justify-between items-center p-10 border-b border-b-primary pb-8">
                    <h1>Support Activity & Message</h1>
                    <p>All communication is recorded & encrypted</p>
                </div>

                {/* Communication section */}
                <div className="flex flex-col text-black p-8 space-y-6">
                    {/* Per Message */}
                    <div className="flex gap-5">
                        <Avatar
                            src={
                                <Image
                                    src={avatarUrl}
                                    alt="User Avatar"
                                    fill
                                    priority
                                    className="object-cover rounded-full"
                                />
                            }
                            size={40}
                            className="ring  ring-offset-2 ring-primary relative overflow-hidden border-none!"
                        />
                        <div className="w-full border border-primary rounded-2xl p-6">
                            {/* Sender Name */}
                            <div className="flex justify-between items-center pb-5">
                                <h1 className="font-bold text-lg">
                                    System Team,
                                </h1>
                                <p className="flex items-center gap-2">
                                    <Clock /> 15 Sep 11:30 AM
                                </p>
                            </div>
                            {/* Message Section */}
                            <p>
                                Hi Megan Fox,We’ve received your technical issue
                                and our support team is currently investigating
                                it. We’ll keep you updated as soon as we have
                                more information or a solution. If you have any
                                additional details or screenshots, please share
                                them here to help us investigate the issue more
                                quickly.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-5">
                        <Avatar
                            src={
                                <Image
                                    src={avatarUrl}
                                    alt="User Avatar"
                                    fill
                                    priority
                                    className="object-cover rounded-full"
                                />
                            }
                            size={40}
                            className="ring  ring-offset-2 ring-primary relative overflow-hidden border-none!"
                        />
                        <div className="w-full border border-primary rounded-2xl p-6">
                            {/* Sender Name */}
                            <div className="flex justify-between items-center pb-5">
                                <h1 className="font-bold text-lg">
                                    Megan Fox,
                                </h1>
                                <p className="flex items-center gap-2">
                                    <Clock /> 15 Sep 11:30 AM
                                </p>
                            </div>
                            {/* Message Section */}
                            <p>
                                Hi Support Team,I’ve attached a screenshot of
                                the issue. The dashboard keeps loading when I
                                try to access it, and the information is not
                                displayed correctly.Please let me know if you
                                need any additional information.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Typing Section */}
                <ReactQuill
                    theme="snow"
                    modules={quillModules}
                    formats={quillFormats}
                    placeholder="Tell us what happened..."
                    className="bg-white rounded-md p-10 [&_.ql-toolbar]:rounded-t-md [&_.ql-container]:rounded-b-md [&_.ql-container]:min-h-[120px]"
                />
            </div>
        </div>
    );
}
