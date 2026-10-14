import { LaptopMinimal, Smartphone, Tablet } from "lucide-react";
import React, { useState } from "react";

interface Session {
    id: string;
    deviceType: "laptop" | "phone" | "tablet";
    deviceName: string;
    browserOs: string;
    location: string;
    ip: string;
    isCurrent: boolean;
}

const initialSessions: Session[] = [
    {
        id: "1",
        deviceType: "laptop",
        deviceName: 'MacBook Pro 16"',
        browserOs: "Chrome on macOS",
        location: "Yangon, Myanmar",
        ip: "103.25.122.45",
        isCurrent: true,
    },
    {
        id: "2",
        deviceType: "phone",
        deviceName: "iPhone 17 Pro",
        browserOs: "Chrome on iOS",
        location: "Yangon, Myanmar",
        ip: "103.25.122.45",
        isCurrent: false,
    },
    {
        id: "3",
        deviceType: "tablet",
        deviceName: 'Tablet 12"',
        browserOs: "Chrome on iPadOS",
        location: "Yangon, Myanmar",
        ip: "103.25.122.45",
        isCurrent: false,
    },
];

export default function ActiveSession() {
    const [sessions, setSessions] = useState<Session[]>(initialSessions);

    const handleRevoke = (id: string) => {
        setSessions(sessions.filter((s) => s.id !== id));
    };

    const currentSession = sessions.find((s) => s.isCurrent);
    const otherSessions = sessions.filter((s) => !s.isCurrent);

    const getDeviceIcon = (type: string) => {
        switch (type) {
            case "laptop":
                return (
                    <LaptopMinimal className="text-white bg-primary rounded-xl w-12 h-12 p-2 shrink-0" />
                );
            case "phone":
                return (
                    <Smartphone className="text-white bg-primary rounded-xl w-12 h-12 p-2 shrink-0" />
                );
            case "tablet":
                return (
                    <Tablet className="text-white bg-primary rounded-xl w-12 h-12 p-2 shrink-0" />
                );
            default:
                return (
                    <LaptopMinimal className="text-white bg-primary rounded-xl w-12 h-12 p-2 shrink-0" />
                );
        }
    };

    return (
        <div className="w-full">
            <div>
                {/* Header Section */}
                <div className="text-primary my-10 border-b-2 border-[#E0E0E0] pb-5">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-4">
                        <div className="space-y-2">
                            <div className="flex items-center">
                                <h1 className="text-2xl font-bold">
                                    Active Sessions
                                </h1>
                                <div className="fixed right-10 bg-primary rounded-2xl flex items-center space-x-3 px-4 py-2 shrink-0">
                                    <div className="w-2 h-2 rounded-full bg-background animate-pulse" />
                                    <h1 className="hidden md:block text-background font-jetbrains text-xs sm:text-sm">
                                        {sessions.length} active sessions across
                                        2 locations
                                    </h1>
                                    <h1 className="block md:hidden text-background font-jetbrains text-xs sm:text-sm">
                                        {sessions.length} active
                                    </h1>
                                </div>
                            </div>
                            <p className="text-sm text-gray-500 mt-1">
                                Manage and revoke access to your account across
                                different devices and browsers.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-8 space-y-8">
                    {/* Current Device Section */}
                    {currentSession && (
                        <div className="border border-gray-200 rounded-2xl px-4 sm:px-6 py-3">
                            <div className="border-b border-b-gray-200">
                                <h1 className="font-jetbrains text-black text-lg font-medium py-4">
                                    Current Session
                                </h1>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-6">
                                <div className="flex items-start space-x-4 w-full sm:w-auto">
                                    {getDeviceIcon(currentSession.deviceType)}
                                    <div>
                                        <h1 className="text-base sm:text-lg font-medium">
                                            {currentSession.deviceName} -{" "}
                                            {currentSession.browserOs}
                                        </h1>
                                        <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mt-1">
                                            <span>
                                                {currentSession.location}
                                            </span>
                                            <span>&bull;</span>
                                            <span>IP: {currentSession.ip}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-200 rounded-xl flex items-center justify-center px-4 py-2 w-full sm:w-auto shrink-0">
                                    <span className="text-primary font-jetbrains text-sm font-medium">
                                        Active Device
                                    </span>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Other Device Section */}
                    {otherSessions.length > 0 && (
                        <div className="border border-gray-200 rounded-2xl px-4 sm:px-6 py-3">
                            <div className="border-b border-b-gray-200">
                                <h1 className="font-jetbrains text-black text-lg font-medium py-4">
                                    Other Active Sessions
                                </h1>
                            </div>

                            {otherSessions.map((session, index) => (
                                <div
                                    key={session.id}
                                    className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-6 ${
                                        index !== otherSessions.length - 1
                                            ? "border-b border-b-gray-200"
                                            : ""
                                    }`}
                                >
                                    <div className="flex items-start space-x-4 w-full sm:w-auto">
                                        {getDeviceIcon(session.deviceType)}
                                        <div>
                                            <h1 className="text-base sm:text-lg font-medium">
                                                {session.deviceName} -{" "}
                                                {session.browserOs}
                                            </h1>
                                            <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mt-1">
                                                <span>{session.location}</span>
                                                <span>&bull;</span>
                                                <span>IP: {session.ip}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => handleRevoke(session.id)}
                                        className="bg-primary hover:bg-primary/90 transition-colors rounded-xl flex items-center justify-center px-6 py-2 w-full sm:w-auto shrink-0 cursor-pointer"
                                    >
                                        <span className="text-background font-jetbrains text-sm font-medium">
                                            Revoke
                                        </span>
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
