"use client";

import { Modal } from "antd";
import { CheckCircle2, AlertCircle } from "lucide-react";

interface NotiModalOptions {
    title: string;
    description?: string;
    type?: "success" | "error";
    duration?: number;
}

export function useNotificationModal() {
    const [modal, contextHolder] = Modal.useModal();

    const showModal = ({
        title,
        description,
        type = "success",
        duration = 3,
    }: NotiModalOptions) => {
        let secondsToGo = duration;

        const Icon = type === "success" ? CheckCircle2 : AlertCircle;
        const iconColor =
            type === "success"
                ? "bg-resolved text-white w-10 h-10 rounded-full p-3"
                : "bg-rejected text-white w-10 h-10 rounded-full p-3";

        const instance = modal[type]({
            icon: null,
            title: (
                <div className="text-xl font-bold text-primary flex flex-col items-center gap-2">
                    <Icon size={24} className={iconColor} />
                    <span>{title}</span>
                </div>
            ),
            content: (
                <div className="mt-2 text-sm text-zinc-600 flex items-center justify-center">
                    {description}
                    <span className="font-semibold text-primary mx-1">
                        {secondsToGo}
                    </span>
                    seconds.
                </div>
            ),
            centered: true,
        });

        const timer = setInterval(() => {
            secondsToGo -= 1;
            instance.update({
                content: (
                    <div className="mt-2 text-sm text-zinc-600 flex items-center justify-center">
                        {description}
                        <span className="font-semibold text-primary mx-1">
                            {secondsToGo}
                        </span>
                        seconds.
                    </div>
                ),
            });
        }, 1000);

        setTimeout(() => {
            clearInterval(timer);
            instance.destroy();
        }, duration * 1000);
    };

    return { showModal, contextHolder };
}
