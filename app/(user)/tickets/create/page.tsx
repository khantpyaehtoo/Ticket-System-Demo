"use client";

import "quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { Form, Select, Input, Button, Upload } from "antd";
import { PlusCircle, UploadIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import DebounceSelect from "./_components/DebounceSelect";

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

export default function CreateTicketPage() {
    const router = useRouter();
    const [form] = Form.useForm();

    const fetchIssueTypes = async (search: string) => {
        return MOCK_ISSUE_TYPES.filter((item) =>
            item.label.toLowerCase().includes(search.toLowerCase()),
        );
    };

    // Add New Issue Type Handler
    // const handleAddOption = (searchValue: string) => {
    //     Modal.confirm({
    //         title: "Add New Issue Type",
    //         content: `Do you want to create "${searchValue}" as a new issue type?`,
    //         onOk() {
    //             const newOption = {
    //                 label: searchValue,
    //                 value: searchValue.toLowerCase(),
    //             };
    //             MOCK_ISSUE_TYPES.push(newOption);

    //             form.setFieldsValue({ issueType: newOption });
    //         },
    //     });
    // };

    const onFinish = (values: any) => {
        console.log("Form Values:", values);
        router.push("/tickets");
    };

    return (
        <div className="max-w-3xl py-8 px-4 space-y-6">
            <Link
                href="/tickets"
                className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-800 transition-colors"
            >
                Back <span className="text-gray-300">{">"}</span> Create Ticket
            </Link>

            <div>
                <h1 className="text-xl font-semibold text-secondary">
                    Ticket Information
                </h1>
            </div>

            <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                className="space-y-6"
            >
                {/* Product Selection */}
                <Form.Item
                    name="product"
                    label={
                        <div>
                            <p className="font-semibold text-primary text-base">
                                Which product do you need help with?
                            </p>
                            <p className="text-xs text-gray-500 font-normal">
                                Select the product or service related to your
                                issue.
                            </p>
                        </div>
                    }
                    rules={[
                        { required: true, message: "Please select a product" },
                    ]}
                >
                    <Select placeholder="Choose a Product" size="large">
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
                            <p className="font-semibold text-gray-800 text-base">
                                Issue Type
                            </p>
                            <p className="text-xs text-gray-500 font-normal">
                                Choose the option that best describes the issue
                                you're experiencing.
                            </p>
                        </div>
                    }
                    rules={[
                        {
                            required: true,
                            message: "Please select an issue type",
                        },
                    ]}
                >
                    <DebounceSelect
                        style={{ width: "100%" }}
                        placeholder="Search or select an issue type"
                        // className="calendar-inputs!"
                        size="large"
                        allowClear
                        fetchOptions={fetchIssueTypes}
                        // onAddOption={handleAddOption}
                    />
                </Form.Item>

                {/* Issue Summary */}
                <Form.Item
                    name="summary"
                    label={
                        <div>
                            <p className="font-semibold text-gray-800 text-base">
                                Issue Summary
                            </p>
                            <p className="text-xs text-gray-500 font-normal">
                                Briefly describe the issue you're experiencing.
                            </p>
                        </div>
                    }
                    rules={[
                        {
                            required: true,
                            message: "Please enter issue summary",
                        },
                    ]}
                >
                    <Input
                        placeholder="e.g. Unable to log in to my account"
                        size="large"
                    />
                </Form.Item>

                {/* Description */}
                <Form.Item
                    name="description"
                    label={
                        <div>
                            <p className="font-semibold text-gray-800 text-base">
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
                        className="bg-white rounded-md [&_.ql-toolbar]:rounded-t-md [&_.ql-container]:rounded-b-md [&_.ql-container]:min-h-[120px]"
                    />
                </Form.Item>

                {/* File Upload Dragger */}
                <Form.Item name="attachments" valuePropName="fileList">
                    <Dragger
                        name="files"
                        multiple={true}
                        beforeUpload={() => false}
                    >
                        <p className="ant-upload-drag-icon flex justify-center text-indigo-500">
                            <UploadIcon size={32} />
                        </p>
                        <p className="text-sm font-medium text-indigo-600">
                            Drag and drop files{" "}
                            <span className="text-gray-500 font-normal">
                                here or browse files
                            </span>
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                            (20 MB max file size)
                        </p>
                    </Dragger>
                </Form.Item>

                {/* Form Action Buttons */}
                <div className="flex items-center gap-4 pt-4">
                    <Button
                        type="primary"
                        htmlType="submit"
                        size="large"
                        className="bg-zinc-800 hover:!bg-zinc-700 flex items-center gap-2 px-6"
                    >
                        <PlusCircle size={18} /> Create Ticket
                    </Button>
                    <Button
                        type="text"
                        size="large"
                        onClick={() => router.back()}
                        className="text-gray-600"
                    >
                        Cancel
                    </Button>
                </div>
            </Form>
        </div>
    );
}
