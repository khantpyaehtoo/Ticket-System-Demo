"use client";
import { Avatar, Button, Form, Input } from "antd";
import Image from "next/image";
import profileImg from "@/public/profile.jpeg";
import { LockKeyhole, Save, Upload } from "lucide-react";

export default function ProfileForm() {
    return (
        <div className="space-y-4">
            <div className="space-y-2 border-b-2 border-[#E0E0E0] pb-5 my-10">
                <h1 className="text-2xl text-black">Personal Profile</h1>
                <p className="text-primary">
                    Manange your public personal and workspace information.
                </p>
            </div>

            <Form layout="vertical" className="space-y-8! w-full">
                {/* Image Section */}
                <Form.Item>
                    <div className="flex gap-10 items-center bg-[#d4d4d4]/10 p-10 rounded-2xl border-2 border-[#E0E0E0]">
                        <Avatar
                            src={
                                <Image
                                    src={profileImg}
                                    alt="User Avatar"
                                    fill
                                    priority
                                />
                            }
                            size={100}
                            className="ring-2 ring-offset-2 ring-primary cursor-pointer"
                        />

                        <div className="space-y-4">
                            <Button className="px-3! py-5! h-11 md:h-12 border-none! bg-primary! text-background! hover:bg-secondary! rounded-lg! font-medium text-sm transition-all group flex items-center justify-center gap-2 cursor-pointer">
                                <Upload size="20px" />{" "}
                                <span>Upload new Photo</span>
                            </Button>
                            <p className="text-[#25272C]/80">
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
                        className="px-3! py-5! h-11 md:h-12 border-none! bg-primary! text-background! hover:bg-secondary! rounded-lg! font-medium text-sm transition-all group flex items-center justify-center gap-1 cursor-pointer"
                    >
                        <Save size="20px" /> <span>Save Changes</span>
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}
