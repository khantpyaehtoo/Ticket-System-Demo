"use client";

import React, { useState } from "react";
import "quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { Form, Select, Input, Button, Upload } from "antd";
import { PlusCircle, UploadIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import DebounceSelect from "./DebounceSelect";
import { useAppModal } from "@/components/ui/SuccessModal";

const { Dragger } = Upload;

const ReactQuill = dynamic(() => import("react-quill-new"), {
    ssr: false,
    loading: () => (
        <div className="h-32 bg-gray-50 border rounded-md animate-pulse" />
    ),
});

const quillModules = {
    toolbar: [
        ["bold", "italic", "underline"],
        [{ list: "ordered" }, { list: "bullet" }],
    ],
};

const quillFormats = ["bold", "italic", "underline", "list"];

// Dummy Data
const MOCK_ISSUE_TYPES = [
    { label: "Bug Report", value: "bug" },
    { label: "Feature Request", value: "feature" },
    { label: "Billing Issue", value: "billing" },
];

export default function TicketCreateForm() {
    const router = useRouter();
    const [form] = Form.useForm();
    const { showModal, contextHolder } = useAppModal();

    const [isDirty, setIsDirty] = useState(false);

    const fetchIssueTypes = async (search: string) => {
        return MOCK_ISSUE_TYPES.filter((item) =>
            item.label.toLowerCase().includes(search.toLowerCase()),
        );
    };

    const onFinish = (values: any) => {
        setIsDirty(false);
        showModal({
            variant: "ticket-success",
            ticketId: "DB-TK1",
            description:
                "Our support team will review your ticket within 24 hours.",
            type: "success",
            onResetForm: () => {
                console.log("Form reset executed!");
            },
        });
    };

    return (
        <div className="w-full max-w-3xl py-4 sm:py-6 px-4 sm:px-6 bg-white border border-gray-100 rounded-2xl shadow-sm space-y-4">
            {contextHolder}
            <div>
                <h1 className="text-lg sm:text-xl font-semibold text-secondary">
                    Ticket Information
                </h1>
            </div>

            <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                className="space-y-4 sm:space-y-6"
            >
                {/* Product Selection */}
                <Form.Item
                    name="product"
                    label={
                        <div>
                            <p className="font-semibold text-primary text-sm sm:text-base">
                                Which product do you need help with?
                            </p>
                            <p className="text-xs text-gray-500 font-normal">
                                Select the product or service related to your
                                issue.
                            </p>
                        </div>
                    }
                    // rules={[
                    //     { required: true, message: "Please select a product" },
                    // ]}
                >
                    <Select
                        placeholder="Choose a Product"
                        size="large"
                        className="w-full"
                    >
                        <Select.Option value="service-a">
                            Service A
                        </Select.Option>
                        <Select.Option value="service-b">
                            Service B
                        </Select.Option>
                    </Select>
                </Form.Item>

                {/* Issue Type */}
                <Form.Item
                    name="issueType"
                    label={
                        <div>
                            <p className="font-semibold text-gray-800 text-sm sm:text-base">
                                Issue Type
                            </p>
                            <p className="text-xs text-gray-500 font-normal">
                                Choose the option that best describes the issue
                                you're experiencing.
                            </p>
                        </div>
                    }
                    rules={
                        [
                            // {
                            //     required: true,
                            //     message: "Please select an issue type",
                            // },
                        ]
                    }
                >
                    <DebounceSelect
                        style={{ width: "100%" }}
                        placeholder="Search or select an issue type"
                        size="large"
                        allowClear
                        fetchOptions={fetchIssueTypes}
                    />
                </Form.Item>

                {/* Issue Summary */}
                <Form.Item
                    name="summary"
                    label={
                        <div>
                            <p className="font-semibold text-gray-800 text-sm sm:text-base">
                                Issue Summary
                            </p>
                            <p className="text-xs text-gray-500 font-normal">
                                Briefly describe the issue you're experiencing.
                            </p>
                        </div>
                    }
                    rules={
                        [
                            // {
                            //     required: true,
                            //     message: "Please enter issue summary",
                            // },
                        ]
                    }
                >
                    <Input
                        placeholder="e.g. Unable to log in to my account"
                        size="large"
                        className="w-full"
                    />
                </Form.Item>

                {/* Description (React Quill) */}
                <Form.Item
                    name="description"
                    label={
                        <div>
                            <p className="font-semibold text-gray-800 text-sm sm:text-base">
                                Description
                            </p>
                            <p className="text-xs text-gray-500 font-normal">
                                Provide more details about the issue.
                            </p>
                        </div>
                    }
                    rules={[
                        {
                            required: true,
                            message: "Please provide a description",
                        },
                    ]}
                >
                    <ReactQuill
                        theme="snow"
                        modules={quillModules}
                        formats={quillFormats}
                        placeholder="Tell us what happened..."
                        className="bg-white rounded-md [&_.ql-toolbar]:rounded-t-md [&_.ql-container]:rounded-b-md [&_.ql-container]:min-h-[120px] sm:[&_.ql-container]:min-h-[160px]"
                    />
                </Form.Item>

                {/* File Upload Dragger */}
                <Form.Item name="attachments" valuePropName="fileList">
                    <Dragger
                        name="files"
                        multiple={true}
                        beforeUpload={() => false}
                        className="p-2 sm:p-4"
                    >
                        <p className="ant-upload-drag-icon flex justify-center text-gray-500 mb-2 font-light!">
                            <UploadIcon size={28} className="sm:w-8 sm:h-8" />
                        </p>
                        <p className="text-xs sm:text-sm font-medium text-indigo-600">
                            Drag and drop files{" "}
                            <span className="text-gray-500 font-normal block sm:inline">
                                here or browse files
                            </span>
                        </p>
                        <p className="text-[11px] sm:text-xs text-gray-400 mt-1">
                            (20 MB max file size)
                        </p>
                    </Dragger>
                </Form.Item>

                {/* Form Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-start gap-3 sm:gap-4 pt-4">
                    <Button
                        type="primary"
                        htmlType="submit"
                        // disabled={!isDirty}
                        size="large"
                        className="w-full sm:w-auto bg-primary flex items-center justify-center gap-2 px-6"
                    >
                        <PlusCircle size={18} /> Create Ticket
                    </Button>
                    <Button
                        type="text"
                        size="large"
                        onClick={() => router.back()}
                        className="w-full sm:w-auto text-gray-600"
                    >
                        Cancel
                    </Button>
                </div>
            </Form>
        </div>
    );
}
