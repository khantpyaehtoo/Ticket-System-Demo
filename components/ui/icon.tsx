// components/ui/icon.tsx
import ArrowRight from "@/public/ArrowRight.svg";
import Ticket from "@/public/Ticket.svg";
import SquaresFour from "@/public/SquaresFour.svg";
import Package from "@/public/Package.svg";
import BellRinging from "@/public/BellRinging.svg";
import GearSix from "@/public/GearSix.svg";
import PlusCircle from "@/public/PlusCircle.svg";
import SignOut from "@/public/SignOut.svg";

const icons = {
    arrowRight: ArrowRight,
    ticket: Ticket,
    squaresFour: SquaresFour,
    package: Package,
    bellRinging: BellRinging,
    gearSix: GearSix,
    plusCircle: PlusCircle,
    signOut: SignOut,
};

export type IconName = keyof typeof icons;

interface IconProps {
    name: IconName;
    className?: string;
}

export function Icon({ name, className = "w-5 h-5" }: IconProps) {
    const Component = icons[name];
    if (!Component) return null;

    return <Component className={className} />;
}
