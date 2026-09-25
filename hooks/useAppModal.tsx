"use client";

import { Button, Modal } from "antd";
import {
    CheckCircle2,
    AlertCircle,
    PlusCircle,
    CheckCircle,
    Check,
} from "lucide-react";
import { useRouter } from "next/navigation";

// Base Options
interface BaseModalOptions {
    title?: string;
    description?: string;
    type?: "success" | "error";
}

// Option 1: Auto-close Notification Modal Options
interface NotificationModalOptions extends BaseModalOptions {
    variant: "notification";
    duration?: number; // default 3 seconds
}

// Option 2: Ticket Submission Modal Options
interface TicketSuccessModalOptions extends BaseModalOptions {
    variant: "ticket-success";
    ticketId: string;
    onResetForm?: () => void;
}

type AppModalOptions = NotificationModalOptions | TicketSuccessModalOptions;

export function useAppModal() {
    const router = useRouter();
    const [modal, contextHolder] = Modal.useModal();

    const showModal = (options: AppModalOptions) => {
        const { type = "success", title, description } = options;
        const isSuccess = type === "success";
        const Icon = isSuccess ? Check : AlertCircle;

        // Notification modal with auto closing
        if (options.variant === "notification") {
            const { duration = 3 } = options;
            let secondsToGo = duration;

            const iconColor = isSuccess
                ? "bg-emerald-500 text-white w-10 h-10 rounded-full p-2.5"
                : "bg-red-500 text-white w-10 h-10 rounded-full p-2.5";

            const instance = modal[type]({
                icon: null,
                title: (
                    <div className="text-lg font-bold text-gray-900 flex flex-col items-center gap-2">
                        <Icon size={24} className={iconColor} />
                        <span>
                            {title || (isSuccess ? "Success!" : "Error!")}
                        </span>
                    </div>
                ),
                content: (
                    <div className="mt-2 text-sm text-gray-600 text-center">
                        {description}
                        <div className="mt-1 text-xs text-gray-400">
                            Closing in{" "}
                            <span className="font-semibold text-gray-800 mx-1">
                                {secondsToGo}
                            </span>
                            seconds...
                        </div>
                    </div>
                ),
                // footer: null,
                centered: true,
                width: 380,
            });

            const timer = setInterval(() => {
                secondsToGo -= 1;
                instance.update({
                    content: (
                        <div className="mt-2 text-sm text-gray-600 text-center">
                            {description}
                            <div className="mt-1 text-xs text-gray-400">
                                Closing in{" "}
                                <span className="font-semibold text-gray-800 mx-1">
                                    {secondsToGo}
                                </span>
                                seconds...
                            </div>
                        </div>
                    ),
                });
            }, 1000);

            setTimeout(() => {
                clearInterval(timer);
                instance.destroy();
            }, duration * 1000);

            return;
        }

        // Ticket Success Modal
        if (options.variant === "ticket-success") {
            const { ticketId, onResetForm } = options;

            const instance = modal[type]({
                icon: null,
                title: null,
                content: (
                    <div className="text-center py-2 space-y-4">
                        <div className="flex flex-col items-center justify-center mx-auto w-[80%] bg-secondary rounded-2xl px-3 py-4">
                            <div className="flex items-center justify-center space-x-3">
                                <h3 className="text-xl font-bold text-gray-900 leading-snug">
                                    {title || "Ticket Submitted"}
                                </h3>

                                <div
                                    className={`p-1 rounded-full flex items-center justify-center ${
                                        isSuccess
                                            ? "bg-[#2563eb] text-secondary"
                                            : "bg-red-100 text-red-600"
                                    }`}
                                >
                                    <Icon size={20} />
                                </div>
                            </div>
                            <h3 className="text-sm font-normal text-black leading-snug mt-3">
                                Your ticket has been submitted successfully!
                            </h3>
                        </div>

                        <div className="bg-gray-50 py-2.5 px-4 inline-flex items-center justify-center gap-2">
                            <span className="text-2xl font-medium text-primary">
                                Ticket ID:
                            </span>
                            <span className="text-2xl font-medium text-secondary font-jetbrains">
                                {ticketId}
                            </span>
                        </div>

                        {description && (
                            <p className="text-sm text-gray-500 max-w-sm mx-auto leading-relaxed">
                                {description}
                            </p>
                        )}
                    </div>
                ),
                footer: (
                    <div className="mt-6 space-y-4">
                        <div className="flex flex-col sm:flex-row gap-2 justify-center">
                            <Button
                                type="primary"
                                onClick={() => {
                                    instance.destroy();
                                    router.push(`/tickets/details/${ticketId}`);
                                }}
                                className="bg-black hover:!bg-gray-800 text-white rounded-lg h-10 px-5 text-sm font-medium cursor-pointer border-none"
                            >
                                View Ticket
                            </Button>
                            <Button
                                type="text"
                                onClick={() => {
                                    instance.destroy();
                                    router.push("/dashboard");
                                }}
                                className="rounded-lg h-10 px-5 text-sm font-medium hover:underline cursor-pointer"
                            >
                                Back to Dashboard
                            </Button>
                        </div>

                        <div className="text-center pt-1">
                            <button
                                type="button"
                                onClick={() => {
                                    instance.destroy();
                                    if (onResetForm) onResetForm();
                                }}
                                className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-gray-600 hover:text-black hover:underline transition-all cursor-pointer mt-3"
                            >
                                <PlusCircle size={15} />
                                <span>Create Another Ticket</span>
                            </button>
                        </div>
                    </div>
                ),
                centered: true,
                maskClosable: false,
                width: 440,
            });
        }
    };

    return { showModal, contextHolder };
}
