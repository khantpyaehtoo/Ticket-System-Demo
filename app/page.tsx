import ArrowRight from "@/public/ArrowRight.svg";
import BellRinging from "@/public/BellRinging.svg";

export default function Home() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-background">
            <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-background text-primary sm:items-start">
                <h1 className="font-sans text-[32px] leading-[40px] font-medium">
                    Roboto Heading
                </h1>

                <p className="font-mono text-base leading-[24px] font-medium">
                    JetBrains Mono Text
                </p>

                <div className="flex space-x-3">
                    <ArrowRight className="w-5 h-5 text-secondary" />
                    <BellRinging className="w-5 h-5 text-resolved" />
                </div>

                <div className="flex space-x-3">
                    <div className="bg-submitted/10 text-submitted px-4 py-2 rounded-xl font-medium">
                        submitted
                    </div>
                    <div className="bg-reviewing/10 text-reviewing px-4 py-2 rounded-xl font-medium">
                        reviewing
                    </div>
                    <div className="bg-assigned/10 text-assigned px-4 py-2 rounded-xl font-medium">
                        assigned
                    </div>
                    <div className="bg-progress/10 text-progress px-4 py-2 rounded-xl font-medium">
                        progress
                    </div>
                    <div className="bg-hold/10 text-hold px-4 py-2 rounded-xl font-medium">
                        hold
                    </div>
                    <div className="bg-resolved/10 text-resolved px-4 py-2 rounded-xl font-medium">
                        resolved
                    </div>
                    <div className="bg-reopen/10 text-reopen px-4 py-2 rounded-xl font-medium">
                        reopen
                    </div>
                    <div className="bg-closed/10 text-closed px-4 py-2 rounded-xl font-medium">
                        closed
                    </div>
                    <div className="bg-cancelled/10 text-cancelled px-4 py-2 rounded-xl font-medium">
                        cancelled
                    </div>
                    <div className="bg-rejected/10 text-rejected px-4 py-2 rounded-xl font-medium">
                        rejected
                    </div>
                </div>
            </main>
        </div>
    );
}
