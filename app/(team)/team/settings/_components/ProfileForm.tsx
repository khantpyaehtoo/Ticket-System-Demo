"use client";

import React, { useState } from "react";
import { Upload, X, Lock } from "lucide-react";
import Image from "next/image";
import profileImg from "@/public/defaultProfile.jpg";

export default function ProfileForm() {
    const [fullName, setFullName] = useState("John Aung");
    const [email, setEmail] = useState("developer_01@gmail.com");
    const [role] = useState("Frontend Developer");
    const [profileImage, setProfileImage] = useState(profileImg);

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setProfileImage(imageUrl);
        }
    };

    const handleRemovePhoto = () => {
        setProfileImage("");
    };

    return (
        <div className="flex-1 space-y-6">
            {/* 1. Profile Image Card */}
            <div className="bg-white border border-gray-200/80 rounded-2xl p-6 shadow-sm hidden lg:block">
                <h3 className="text-sm font-semibold text-gray-800 mb-4">
                    Profile Image
                </h3>

                <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                    {/* Avatar Preview */}
                    <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-100 shrink-0 border border-gray-200">
                        {profileImage ? (
                            <Image
                                src={profileImage}
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs font-medium">
                                No Photo
                            </div>
                        )}
                    </div>

                    {/* Buttons & File Hint */}
                    <div className="space-y-3">
                        <div className="flex flex-wrap items-center gap-3">
                            {/* Upload Button */}
                            <label className="cursor-pointer inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#3d333a] hover:bg-[#2e262b] text-white text-xs font-semibold shadow-sm transition-colors">
                                <Upload className="w-4 h-4" />
                                <span>Upload new photo</span>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    className="hidden"
                                />
                            </label>

                            {/* Remove Photo Button */}
                            <button
                                type="button"
                                onClick={handleRemovePhoto}
                                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-red-200 bg-red-50/50 hover:bg-red-100/50 text-red-500 text-xs font-semibold transition-colors"
                            >
                                <X className="w-4 h-4" />
                                <span>Remove Photo</span>
                            </button>
                        </div>

                        <p className="text-xs text-gray-400">
                            JPG, PNG or GIF up to 5MB. Recommended dimension
                            400x400px.
                        </p>
                    </div>
                </div>
            </div>

            {/* 2. Personal Information Form Card */}
            <div className="bg-white border border-gray-200/80 rounded-2xl p-6 shadow-sm space-y-5">
                {/* Full Name Input */}
                <div className="space-y-2">
                    <label className="block text-xs font-semibold text-gray-700">
                        Full Name
                    </label>
                    <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400/20 focus:border-gray-400 transition-all"
                        placeholder="Enter full name"
                    />
                </div>

                {/* Email Address Input */}
                <div className="space-y-2">
                    <label className="block text-xs font-semibold text-gray-700">
                        Email Address
                    </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400/20 focus:border-gray-400 transition-all"
                        placeholder="Enter email address"
                    />
                </div>

                {/* Developer Role Input (Disabled / Read-only with Lock Icon) */}
                <div className="space-y-2">
                    <label className="block text-xs font-semibold text-gray-700">
                        Developer Role
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            value={role}
                            disabled
                            className="w-full px-4 py-3 pr-10 rounded-xl border border-gray-200 bg-gray-100 text-sm text-gray-500 cursor-not-allowed select-none"
                        />
                        <Lock className="w-4 h-4 text-gray-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
                    </div>
                </div>
            </div>
        </div>
    );
}
