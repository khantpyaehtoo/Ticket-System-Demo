"use client";

import { useRef, useState } from "react";
import { Avatar, Button, Form, Input } from "antd";
import Image from "next/image";
import { LockKeyhole, Save, Trash, Upload } from "lucide-react";
import { useUserStore } from "@/store/useUserStore";
import profileImg from "@/public/defaultProfile.jpg";
import { useAppModal } from "@/components/ui/SuccessModal";

const getBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
    });

export default function ProfileForm() {
    const [form] = Form.useForm();
    const { showModal, contextHolder } = useAppModal();

    const storeImageSrc = useUserStore((state) => state.imageSrc);
    const setImageSrc = useUserStore((state) => state.setImageSrc);

    // Local temporary image state (doesn't update global state immediately)
    const [tempImageSrc, setTempImageSrc] = useState<string | null>(
        storeImageSrc,
    );
    const [isDirty, setIsDirty] = useState(false);

    const fileInputRef = useRef<HTMLInputElement>(null);

    // Handle File Selection
    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const base64 = await getBase64(file);
            setTempImageSrc(base64);
            setIsDirty(true); // Enable Save Changes button
        }
    };

    // Trigger File Picker
    const handleUploadClick = () => {
        fileInputRef.current?.click();
    };

    // Handle Delete
    const handleDeleteImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setTempImageSrc(null);
        setIsDirty(true); // Enable Save Changes button
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    // Save changes to Zustand global store
    const handleSubmit = (values: any) => {
        setImageSrc(tempImageSrc);
        setIsDirty(false);
        showModal({
            variant: "notification",
            title: "Profile Updated Successfully!",
            // description: "This notification will close in",
            type: "success",
        });
    };

    return (
        <div className="space-y-4">
            {contextHolder}
            <div className="space-y-2 border-b-2 border-[#E0E0E0] pb-5 my-10">
                <h1 className="text-2xl text-black">Personal Profile</h1>
                <p className="text-primary">
                    Manage your public personal and workspace information.
                </p>
            </div>

            {/* Hidden File Input */}
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/png, image/jpeg, image/gif"
                className="hidden"
            />

            <Form
                form={form}
                layout="vertical"
                className="space-y-8! w-full"
                onValuesChange={() => setIsDirty(true)}
                onFinish={handleSubmit}
            >
                {/* Image Section */}
                <Form.Item>
                    <div className="flex gap-10 items-center bg-[#d4d4d4]/10 p-10 rounded-2xl border-2 border-[#E0E0E0]">
                        <div className="relative group">
                            <Avatar
                                src={
                                    <Image
                                        src={tempImageSrc || profileImg.src}
                                        alt="User Avatar"
                                        fill
                                        priority
                                        className="object-cover rounded-full"
                                    />
                                }
                                size={100}
                                className="ring-2 ring-offset-4 ring-primary cursor-pointer relative overflow-hidden border-none!"
                            />

                            {tempImageSrc && (
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex justify-center items-center z-10 rounded-full">
                                    <button
                                        type="button"
                                        onClick={handleDeleteImage}
                                        className="p-2 bg-red-600 hover:bg-red-700 rounded-full transform scale-75 group-hover:scale-100 transition-all duration-300 shadow-lg cursor-pointer"
                                    >
                                        <Trash size={20} />
                                    </button>
                                </div>
                            )}
                        </div>

                        <div className="space-y-4">
                            <Button
                                htmlType="button"
                                onClick={handleUploadClick}
                                className="px-0 py-1 sm:px-1 sm:py-2 md:px-3! md:py-5! h-11 md:h-12 border-none! bg-primary! text-background! hover:bg-secondary! rounded-lg! font-medium text-sm transition-all group flex items-center justify-center gap-2 cursor-pointer"
                            >
                                <Upload size="20px" />{" "}
                                <span className="text-xs md:text-base ">
                                    Upload Photo
                                </span>
                            </Button>
                            <p className="text-[#25272C]/80 text-xs md:text-base">
                                JPG, PNG or GIF up to 5MB. Recommended dimension
                                400x400px.
                            </p>
                        </div>
                    </div>
                </Form.Item>

                <Form.Item name="name" label="Full Name">
                    <Input
                        type="text"
                        placeholder="Megan Fox"
                        className="h-12 bg-[#d4d4d4]/10! border-2! border-[#E0E0E0]! rounded-lg!"
                    />
                </Form.Item>

                <Form.Item
                    className="[&_.ant-form-item-label]:w-full [&_label]:w-full"
                    name="email"
                    label={
                        <div className="flex justify-between items-center w-full">
                            <span>Email Address</span>
                            <span className="text-resolved font-light text-xs tracking-wide">
                                Verified
                            </span>
                        </div>
                    }
                >
                    <Input
                        type="text"
                        placeholder="example@gmail.com"
                        className="h-12 rounded-lg! bg-[#d4d4d4]/40! border-2! border-[#E0E0E0]!"
                        suffix={<LockKeyhole size="20px" />}
                        disabled
                    />
                </Form.Item>

                <Form.Item>
                    <Button
                        htmlType="submit"
                        disabled={!isDirty}
                        className="px-3! py-5! h-11 md:h-12 border-none! bg-primary! text-background! hover:bg-secondary! disabled:bg-gray-300! disabled:text-gray-500! disabled:cursor-not-allowed rounded-lg! font-medium text-sm transition-all group flex items-center justify-center gap-1 cursor-pointer"
                    >
                        <Save size="20px" /> <span>Save Changes</span>
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}
