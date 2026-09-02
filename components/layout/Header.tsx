// import Image from "next/image";
import { Icon } from "@/components/ui/icon";

export default function Header() {
    return (
        <header className="flex items-center justify-between pb-6 border-b border-zinc-200 shadow-md p-8">
            <div>
                <h1 className="text-xl font-bold text-zinc-900 font-sans">
                    Hello, Ohmar Kyaw
                </h1>
                <p className="text-sm text-zinc-500 font-sans">
                    Welcome. Here&apos;s an overview of your service activity.
                </p>
            </div>

            <div className="flex items-center gap-4">
                {/* User Profile Avatar */}
                <div className="w-10 h-10 rounded-full overflow-hidden relative border border-zinc-200">
                    {/* <Image src="" alt="Profile" fill className="object-cover" /> */}
                    <div className="bg-progress w-full h-full" />
                </div>

                {/* Create Ticket Primary Action Button */}
                <button className="flex items-center gap-2 bg-[#26212E] text-white px-4 py-2.5 rounded-xl hover:bg-zinc-800 transition-colors text-sm font-medium">
                    <span>Create Ticket</span>
                    <Icon name="plusCircle" className="w-4 h-4" />
                </button>
            </div>
        </header>
    );
}
