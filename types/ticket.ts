import { TicketStatus } from "@/lib/config/getStatusColors";

export interface AttachmentType {
    name: string;
    url: string;
    type: "image" | "document";
}

export interface MessageType {
    id: string;
    senderType: "SYSTEM" | "USER" | "AGENT";
    senderName: string;
    senderAvatar?: string;
    content: string;
    createdAt: string;
    attachments?: AttachmentType[];
}

export interface TicketDetailsType {
    id: string; // TCK-1001 (URL Query ID)
    ticketId: string; // DB-TK1
    title: string;
    status: TicketStatus;
    issueType: string;
    assign: string;
    relatedService?: string;
    priority: "Low" | "Medium" | "High" | "Critical";
    duration: string;
    senderName: string;
    senderEmail: string;
    recipientEmail: string;
    createdAt: string;
    lastUpdated: string;
    description: string;
    attachments?: AttachmentType[];
    hasUnreadNoti?: boolean;
    messages: MessageType[];
}
