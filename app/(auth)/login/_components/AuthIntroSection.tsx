import Image from "next/image";

const STEPPER_ITEMS = [
    "Service Incident Logged",
    "Vendor Analysis",
    "SLA Milestone Check",
    "Verified Patch Resolved",
];

export default function AuthIntroSection() {
    return (
        <div className="intro-section absolute inset-0 h-full py-8 px-6 md:px-14 flex flex-col z-10 bg-linear-to-b from-primary to-secondary md:w-1/2 w-full">
            <div className="intro-header">
                <Image
                    src="/logo&text.svg"
                    alt="logo"
                    width={180}
                    height={40}
                    priority
                    className="w-auto h-auto"
                />
                <div className="intro-content mt-6 md:mt-14 space-y-4 py-4 border-b border-b-background/40">
                    <div className="bg-background flex items-center space-x-3 py-1 rounded-full w-fit px-4">
                        <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                        <span className="text-primary text-xs font-medium">
                            Trusted service operations
                        </span>
                    </div>
                    <p className="w-full inline-block text-2xl md:text-5xl font-medium bg-gradient-to-r from-background to-secondary bg-clip-text text-transparent pb-3 pt-1 leading-tight">
                        Technical Service Workspace & SLA Management
                    </p>
                    <p className="text-xs md:text-md font-light text-background/90">
                        Manage your service requests, track SLA hours in
                        real-time.
                    </p>
                </div>
            </div>

            <div className="pt-4 md:pt-8 space-y-4 md:space-y-10 relative">
                <div className="connecting-line absolute left-3 md:left-4 top-8 -bottom-4 w-0.5 bg-background origin-top" />
                {STEPPER_ITEMS.map((step, index) => (
                    <div
                        key={step}
                        className="stepper-item flex items-center space-x-4 relative z-10"
                    >
                        <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-background text-primary flex items-center justify-center font-medium text-xs border shrink-0">
                            {index + 1}
                        </div>
                        <span className="text-background text-xs md:text-sm">
                            {step}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
