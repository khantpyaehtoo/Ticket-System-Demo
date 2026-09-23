export type Priority = "Critical" | "High" | "Medium" | "Low";

export const PRIORITY_VAR_MAP: Record<string, string> = {
    critical: "var(--critical)",
    high: "var(--high)",
    medium: "var(--medium)",
    low: "var(--low)",
};

export const getPriorityColor = (status: string) => {
    const normalized = status?.toLowerCase()?.trim() || "";
    return PRIORITY_VAR_MAP[normalized] || "var(--status-closed)";
};
