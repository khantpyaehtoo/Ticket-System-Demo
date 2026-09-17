import AccountTabs from "./_components/AccountTabs";

export default function page() {
    return (
        <div className=" w-1/2 space-y-4 bg-background">
            <div className="space-y-2 tracking-wide">
                <h1 className="text-black text-2xl">Account Settings</h1>
                <p className="text-primary">
                    Update your personal profile, email address, and security
                    password.
                </p>
            </div>

            <AccountTabs />
        </div>
    );
}
