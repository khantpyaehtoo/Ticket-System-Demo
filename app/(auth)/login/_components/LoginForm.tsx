"use client";

import { Button, Checkbox, Form, Input, message } from "antd";
import { ArrowRight, Info } from "lucide-react";
import { useRouter } from "next/navigation";
import { useLoginAccountMutation } from "../_hooks/useAuthQuries";

interface LoginFormValues {
    email: string;
    password: string;
    remember?: boolean;
}

interface LoginFormProps {
    onForgotPassword: () => void;
}

export default function LoginForm({ onForgotPassword }: LoginFormProps) {
    const router = useRouter();

    const { mutate: login, isPending: isLoggingIn } = useLoginAccountMutation();

    const handleFinish = (values: LoginFormValues) => {
        login(
            {
                email: values.email,
                password: values.password,
                remember: values.remember ?? false,
            },
            {
                onSuccess: (data) => {
                    message.success("Logged in successfully!");
                    console.log("Login Response Data:", data);

                    if (data?.accessToken) {
                        localStorage.setItem("token", data.accessToken);
                    }

                    const targetPath = data?.targetPath || "/user/dashboard";

                    router.push(targetPath);
                    router.refresh();
                },
                onError: (err) => {
                    message.error(
                        err?.message ||
                            "Login failed. Please check your credentials.",
                    );
                },
            },
        );
    };

    return (
        <div className="w-full max-w-md mx-auto p-6 md:p-10 flex flex-col justify-center">
            {/* Form Header */}
            <div className="space-y-2 mb-6 md:mb-8">
                <h1 className="text-xl md:text-2xl font-semibold text-black">
                    Sign in to your portal
                </h1>
                <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                    Access your workspace securely and stay close to every
                    support milestone
                </p>
            </div>

            <Form
                name="login"
                layout="vertical"
                requiredMark={false}
                autoComplete="off"
                onFinish={handleFinish}
            >
                {/* Email Field */}
                <Form.Item
                    name="email"
                    label={
                        <span className="text-sm font-medium text-gray-700">
                            Email Address
                        </span>
                    }
                    rules={[
                        { required: true, message: "Please enter your email!" },
                        {
                            type: "email",
                            message: "Please enter a valid email address!",
                        },
                    ]}
                >
                    <Input
                        type="email"
                        placeholder="Enter your email address"
                        className="h-11 md:h-12 rounded-xl! border-zinc-300! bg-zinc-50! hover:bg-zinc-100! focus:bg-white! transition-all"
                    />
                </Form.Item>

                {/* Password Field */}
                <Form.Item
                    name="password"
                    className="[&_.ant-form-item-label]:w-full [&_label]:w-full"
                    label={
                        <div className="flex justify-between items-center w-full">
                            <span className="text-sm font-medium text-gray-700">
                                Password
                            </span>
                            <button
                                type="button"
                                onClick={onForgotPassword}
                                className="text-xs font-medium text-primary! hover:text-secondary! hover:underline! transition-colors!"
                            >
                                Forgot Password?
                            </button>
                        </div>
                    }
                    rules={[
                        {
                            required: true,
                            message: "Please enter your password!",
                        },
                        {
                            required: true,
                            min: 8,
                            message: "Password must be at least 8 characters!",
                        },
                    ]}
                >
                    <Input.Password
                        placeholder="Enter your password"
                        className="h-11 md:h-12 rounded-xl! border-zinc-300! bg-zinc-50! hover:bg-zinc-100! focus:bg-white! transition-all [&_input]:bg-transparent!"
                    />
                </Form.Item>

                {/* Remember Me Checkbox */}
                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    className="mb-6"
                >
                    <Checkbox className="[&_.ant-checkbox]:p-2! [&_.ant-checkbox]:rounded-lg! [&_.ant-checkbox-checked]:bg-black! text-xs md:text-sm text-gray-600">
                        Remember me for 30 days
                    </Checkbox>
                </Form.Item>

                {/* Submit Button */}
                <Form.Item>
                    <Button
                        block
                        htmlType="submit"
                        loading={isLoggingIn}
                        className="loginFormBtn! group flex items-center justify-center gap-2"
                    >
                        <span>Sign In</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </Form.Item>

                {/* Security Footer Notice */}
                <div className="flex items-center justify-center gap-2 text-xs text-gray-400 mt-4">
                    <Info className="w-4 h-4 shrink-0" />
                    <span className="text-center">
                        Authorized Personnel Only. System activity is logged.
                    </span>
                </div>
            </Form>
        </div>
    );
}
