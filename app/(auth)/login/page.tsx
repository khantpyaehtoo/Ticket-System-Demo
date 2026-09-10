import Image from "next/image";
import LoginForm from "./LoginForm";

export default function LoginPage() {
    return (
        <div className="grid grid-cols-2 w-full min-h-screen">
            <div className="bg-linear-to-b from-primary to-secondary py-8 px-14">
                <Image
                    src="/logo&text.svg"
                    alt="digitalbase-logo"
                    width={180}
                    height={40}
                    priority
                />

                <div className="mt-14 space-y-6 py-8 border-b border-b-background/40  max-w-full w-180">
                    <div className="bg-background flex justify-center items-center space-x-6 py-1 rounded-full max-w-full w-74">
                        <div className="w-3 h-3 rounded-full bg-primary" />
                        <span className="text-primary font-medium">
                            {" "}
                            Trusted service operations
                        </span>
                    </div>
                    <p className="text-5xl font-medium bg-linear-to-r from-background to-secondary bg-clip-text text-transparent pb-4">
                        Technical Service Workspace & SLA Management
                    </p>
                    <p className="text-md font-light">
                        Manage your service requests, track SLA hours in
                        real-time, and collaborate with technical team.
                    </p>
                </div>

                {/* Stepper Section */}
                <div className="pt-8 space-y-10 relative max-w-full w-180">
                    {/* Connecting Line */}
                    <div className="absolute left-4 top-12 -bottom-10 w-0.5 bg-background -z-0" />

                    {/* Steps List */}
                    {[
                        "Service Incident Logged",
                        "Vendor Analysis",
                        "SLA Milestone Check",
                        "Verified Patch Resolved",
                    ].map((step, index) => (
                        <div
                            key={index}
                            className="flex items-center space-x-5 relative z-10"
                        >
                            {/* Number Badge */}
                            <div className="w-8 h-8 rounded-full bg-background text-primary flex items-center justify-center font-medium text-sm border border-background shrink-0">
                                {index + 1}
                            </div>
                            {/* Step Title */}
                            <span className="text-background text-sm tracking-wider">
                                {step}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right: Login Form */}
            <LoginForm />
        </div>
    );
}
