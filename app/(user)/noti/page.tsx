import NotiTabs from "./_components/NotiTabs";

export default function page() {
    return (
        <div className="w-full space-y-4 bg-background">
            <div className="space-y-2 tracking-wide">
                <h1 className="text-black text-2xl">Your Notifications</h1>
                <p className="text-primary">
                    Stay updated on your ticket statuses, SLA hours and team
                    responses.
                </p>
            </div>

            <NotiTabs />
        </div>
    );
}
