export type TicketStatus =
    | "Submitted"
    | "Reviewing"
    | "Assigned"
    | "In Progress"
    | "On Hold"
    | "Resolved"
    | "Reopened"
    | "Closed"
    | "Cancelled"
    | "Rejected";

export const STATUS_VAR_MAP: Record<string, string> = {
    submitted: "var(--submitted)",
    reviewing: "var(--reviewing)",
    assigned: "var(--assigned)",
    "in progress": "var(--progress)",
    progress: "var(--progress)",
    "on hold": "var(--hold)",
    hold: "var(--hold)",
    resolved: "var(--resolved)",
    reopened: "var(--reopen)",
    reopen: "var(--reopen)",
    closed: "var(--closed)",
    cancelled: "var(--cancelled)",
    rejected: "var(--rejected)",
};

export const getStatusColor = (status: string) => {
    const normalized = status?.toLowerCase()?.trim() || "";
    return STATUS_VAR_MAP[normalized] || "var(--status-closed)";
};
