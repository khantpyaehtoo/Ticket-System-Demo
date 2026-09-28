import { TicketDetailsType } from "@/types/ticket";

export const dummyTicketsList: TicketDetailsType[] = [
    //  Scenario 1: Unread Notification
    {
        id: "TCK-1001",
        ticketId: "DB-TK1",
        title: "Technical Issues",
        status: "Submitted",
        issueType: "Technical Issues",
        assign: "System Team",
        relatedService: "Nail Salon",
        priority: "Medium",
        duration: "2 Hours",
        senderName: "Megan Fox",
        senderEmail: "meganfox@gmail.com",
        recipientEmail: "digitalbase@gmail.com",
        createdAt: "15 Sep 2026, 11:00 AM",
        lastUpdated: "15 Sep 2026, 11:30 AM",
        description: `Hello Support,\n\nI'm experiencing a technical issue with the system. Some features are not working properly.`,
        hasUnreadNoti: true,
        attachments: [
            {
                name: "Screenshot 1.png",
                url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800",
                type: "image",
            },
        ],
        messages: [
            {
                id: "m-1",
                senderType: "SYSTEM",
                senderName: "System Team",
                createdAt: "15 Sep 11:30 AM",
                content:
                    "Hi Megan Fox, We've received your technical issue and our support team is currently investigating it.",
            },
        ],
    },

    {
        id: "TCK-1002",
        ticketId: "DB-TK2",
        title: "Billing & Payment Issue",
        status: "Reviewing",
        issueType: "Billing & Payment",
        assign: "Finance Support",
        relatedService: "Cloud Server",
        priority: "High",
        duration: "45m",
        senderName: "Alex Turner",
        senderEmail: "alex@artic.com",
        recipientEmail: "digitalbase@gmail.com",
        createdAt: "18 Sep 2026, 02:15 PM",
        lastUpdated: "18 Sep 2026, 02:45 PM",
        description:
            "Payment was deducted twice from my bank account. Attaching the invoice receipt screenshot.",
        hasUnreadNoti: true,
        messages: [
            {
                id: "m-201",
                senderType: "USER",
                senderName: "Alex Turner",
                createdAt: "18 Sep 02:15 PM",
                content:
                    "Here is the payment receipt image from my banking app:",
                attachments: [
                    {
                        name: "bank_receipt.jpg",
                        url: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600",
                        type: "image",
                    },
                ],
            },
            {
                id: "m-202",
                senderType: "AGENT",
                senderName: "Finance Support",
                createdAt: "18 Sep 02:45 PM",
                content:
                    "Thank you for the receipt. We are checking with our payment gateway.",
            },
        ],
    },

    {
        id: "TCK-1003",
        ticketId: "DB-TK3",
        title: "Account Access Lockout",
        status: "Assigned",
        issueType: "Account Access",
        assign: "IT Helpdesk",
        relatedService: "Portal Login",
        priority: "Critical",
        duration: "1h 15m",
        senderName: "Sarah Connor",
        senderEmail: "sarah@sky.net",
        recipientEmail: "digitalbase@gmail.com",
        createdAt: "20 Sep 2026, 08:30 AM",
        lastUpdated: "20 Sep 2026, 08:30 AM",
        description: "Unable to log in to my admin workspace after 2FA reset.",
        hasUnreadNoti: false,
        messages: [],
    },

    {
        id: "TCK-1005",
        ticketId: "DB-TK5",
        title: "Bug Report & Resolution",
        status: "Closed",
        issueType: "Bug Report",
        assign: "QA & Support",
        priority: "Medium",
        duration: "3h 20m",
        senderName: "John Doe",
        senderEmail: "johndoe@example.com",
        recipientEmail: "digitalbase@gmail.com",
        createdAt: "14 Sep 2026, 09:00 AM",
        lastUpdated: "14 Sep 2026, 02:00 PM",
        description:
            "Payment gateway integration bug causing checkout failures.",
        hasUnreadNoti: false,
        messages: [
            {
                id: "m-10",
                senderType: "AGENT",
                senderName: "QA Support",
                createdAt: "14 Sep 01:50 PM",
                content:
                    "The bug has been fixed and deployed. We are closing this ticket.",
            },
        ],
    },
];
