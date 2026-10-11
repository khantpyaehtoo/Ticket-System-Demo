import { TicketDetailsType } from "@/types/ticket";
import { Modal } from "antd";
import React, { useState } from "react";

interface TicketDetailsProps {
    ticket: TicketDetailsType;
}

export default function TicketDetailDescription({
    ticket,
}: TicketDetailsProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // ${ticket?.description}
    const text = `Hello Support,\n\nI’m experiencing a technical issue with the system. Some features are not working properly, and the page sometimes becomes unresponsive. I have tried refreshing the page and logging in again, but the issue still persists.\n\nPlease check and help resolve this issue.\n\nBest regards,\nMegan Fox`;

    const CHARACTER_LIMIT = 180;
    const isLongText = text.length > CHARACTER_LIMIT;
    return (
        <>
            <p className="whitespace-pre-line text-foreground/90 text-sm">
                {isLongText ? text.slice(0, CHARACTER_LIMIT) : text}
                {isLongText && (
                    <>
                        <span>... </span>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="font-semibold text-primary hover:underline focus:outline-none inline"
                        >
                            See More
                        </button>
                    </>
                )}
            </p>

            <Modal
                title="Full Description"
                open={isModalOpen}
                onCancel={() => setIsModalOpen(false)}
                footer={null}
                centered
            >
                <p className="whitespace-pre-line text-foreground/90 text-sm py-2">
                    {text}
                </p>
            </Modal>

            {/* Attachments / Image Session */}
            <div className="pt-4 border-t border-primary/10">
                <p className="text-xs font-semibold text-muted-foreground mb-3">
                    Attachments ({ticket?.attachments?.length || 2})
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-lg">
                    <div className="w-full aspect-video sm:aspect-square bg-primary/10 rounded-lg border border-primary/20 flex items-center justify-center text-xs text-muted-foreground p-2 text-center">
                        Attachment 1
                    </div>
                    <div className="w-full aspect-video sm:aspect-square bg-primary/10 rounded-lg border border-primary/20 flex items-center justify-center text-xs text-muted-foreground p-2 text-center">
                        Attachment 2
                    </div>
                </div>
            </div>
        </>
    );
}
