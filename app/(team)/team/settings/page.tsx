"use client";

import { Button } from "antd";
import { Save } from "lucide-react";
import React, { useState } from "react";
import ProfileSidebarCard from "./_components/ProfileSiderCard";
import ProfileForm from "./_components/ProfileForm";
import SecurityForm from "./_components/SecurityForm";

export default function Page() {
    const [activeTab, setActiveTab] = useState("profile");

    const handleSaveAll = () => {
        if (activeTab === "profile") {
            // Trigger profile save logic
            console.log("Saving Personal Profile...");
        } else {
            // Trigger password change logic
            console.log("Saving Password Changes...");
        }
    };

    return (
        <div className="max-w-7xl mx-auto p-6 space-y-6 text-black">
            {/* Settings Header */}
            <div className="flex justify-between items-end">
                <div className="space-y-4">
                    <h1 className="text-2xl font-medium">Developer Settings</h1>
                    <p className="text-gray-800 text-sm">
                        Update your personal profile, email address, and
                        security password.
                    </p>
                </div>
                <Button
                    htmlType="submit"
                    onClick={handleSaveAll}
                    // disabled={!isDirty}
                    className="px-3! py-5! h-11 md:h-12 border-none! bg-primary! text-background! hover:bg-secondary! disabled:bg-gray-200! disabled:text-gray-500! disabled:cursor-not-allowed rounded-lg! font-medium text-sm transition-all group flex items-center justify-center gap-1 cursor-pointer"
                >
                    <Save size="20px" /> <span>Save Changes</span>
                </Button>
            </div>

            {/* Main Wrapper */}
            <div className="flex flex-col lg:items-start justify-between lg:flex-row space-x-10 space-y-10 mx-auto mt-10">
                {/* Left Side */}
                <ProfileSidebarCard
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />

                {/* Right Side */}
                <div className="flex-1 w-full">
                    {activeTab === "profile" && <ProfileForm />}
                    {activeTab === "password" && <SecurityForm />}
                </div>
            </div>
        </div>
    );
}
