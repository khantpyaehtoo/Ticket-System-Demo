import React from "react";
import RecentActivity from "@/app/(user)/user/dashboard/_components/RecentActivity";
import TimerCard from "./TimerCard";

const timerCardValue = [
    {
        title: "continue your work",
        ticketStatus: "critical",
        ticketId: "DB-TK1",
        ticketIssueType: "Technical Issues",
        productName: "Salon Management",
        timerStatus: "Paused",
        timer: "01:42:18",
        issueSummary: "I can't Login to my account",
        note: "Debugging Auth Token at line 42 ...",
    },
    {
        title: "continue your work",
        ticketStatus: "medium",
        ticketId: "DB-TK1",
        ticketIssueType: "Technical Issues",
        productName: "Salon Management",
        // timerStatus: "Paused",
        timer: "02:00:00",
        issueSummary: "I can't Login to my account",
        note: "Debugging Auth Token at line 42 ...",
    },
];

export default function TimerSection() {
    return (
        <div className="flex space-x-7 max-w-full">
            <div className="space-y-10 w-1/2">
                {timerCardValue.map((value, id) => (
                    <div
                        key={id}
                        className="w-full teamHeaderCard p-4 sm:p-6 shadow-sm space-y-4 sm:space-y-6 text-black"
                    >
                        <TimerCard
                            title={value.title}
                            ticketStatus={value.ticketStatus}
                            ticketId={value.ticketId}
                            ticketIssueType={value.ticketIssueType}
                            productName={value.productName}
                            timerStatus={value.timerStatus}
                            timer={value.timer}
                            issueSummary={value.issueSummary}
                            note={value.note}
                        />
                    </div>
                ))}
            </div>

            <div className="w-1/2">
                <RecentActivity ActivityListWrapperClass="h-130" />
            </div>
        </div>
    );
}
