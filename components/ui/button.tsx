// "use client";

// import { cn } from "@/lib/utils";
// import { Icon, IconName } from "./icon";

// interface ButtonProps {
//     onClick?: () => void;
//     name: string;
//     iconName?: IconName;
//     className?: string;
// }

// export default function Button({
//     onClick,
//     name,
//     iconName,
//     className,
// }: ButtonProps) {
//     return (
//         <button
//             onClick={onClick}
//             className={cn(
//                 "flex items-center gap-2 border bg-primary text-background px-4 py-2.5 rounded-xl hover:bg-background hover:text-primary hover:border hover:border-primary transition-colors text-sm font-medium cursor-pointer",
//                 className,
//             )}
//         >
//             <span>{name}</span>
//             {iconName && <Icon name={iconName} className="w-4 h-4" />}
//         </button>
//     );
// }
