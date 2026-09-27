import { TicketStatus } from "@/lib/config/getStatusColors";

// 1. Ticket Data Type Definition
export interface TicketType {
    key: string;
    id: string;
    ticketId: string;
    status: TicketStatus;
    issueType: string;
    assign: string;
    priority: "Low" | "Medium" | "High" | "Critical";
    duration: string;
}

// 2. Dummy Data (6 Rows)
export const dummyTicketData: TicketType[] = [
    {
        key: "1",
        id: "TCK-1001",
        ticketId: "TCK-1001",
        status: "Submitted",
        issueType: "Technical Issue",
        assign: "DevOps Team",
        priority: "High",
        duration: "2h 30m",
    },
    {
        key: "2",
        id: "TCK-1002",
        ticketId: "TCK-1002",
        status: "Reviewing",
        issueType: "Billing & Payment",
        assign: "Finance Support",
        priority: "Medium",
        duration: "45m",
    },
    {
        key: "3",
        id: "TCK-1003",
        ticketId: "TCK-1003",
        status: "Assigned",
        issueType: "Account Access",
        assign: "IT Helpdesk",
        priority: "Critical",
        duration: "1h 15m",
    },
    {
        key: "4",
        id: "TCK-1004",
        ticketId: "TCK-1004",
        status: "In Progress",
        issueType: "Feature Request",
        assign: "Product Team",
        priority: "Low",
        duration: "4h 00m",
    },
    {
        key: "5",
        id: "TCK-1005",
        ticketId: "TCK-1005",
        status: "Closed",
        issueType: "Bug Report",
        assign: "QA & Support",
        priority: "Medium",
        duration: "3h 20m",
    },
    {
        key: "6",
        id: "TCK-1006",
        ticketId: "TCK-1006",
        status: "On Hold",
        issueType: "API Integration",
        assign: "Backend Team",
        priority: "High",
        duration: "1h 50m",
    },
    {
        key: "7",
        id: "TCK-1007",
        ticketId: "TCK-1007",
        status: "Reopened",
        issueType: "Bug Report",
        assign: "QA & Support",
        priority: "Medium",
        duration: "3h 20m",
    },
    {
        key: "8",
        id: "TCK-1008",
        ticketId: "TCK-1008",
        status: "Cancelled",
        issueType: "API Integration",
        assign: "Backend Team",
        priority: "High",
        duration: "1h 50m",
    },
    {
        key: "9",
        id: "TCK-1009",
        ticketId: "TCK-1009",
        status: "Rejected",
        issueType: "API Integration",
        assign: "Backend Team",
        priority: "High",
        duration: "1h 50m",
    },
];
