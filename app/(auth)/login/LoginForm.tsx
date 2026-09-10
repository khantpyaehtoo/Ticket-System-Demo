"use client";

import { Button, Checkbox, Form, Input } from "antd";
import { ArrowRight, Info } from "lucide-react";

export default function LoginForm() {
    const { Item } = Form;

    return (
        <div className="bg-background min-h-screen flex items-center justify-center">
            <div className="w-[80%] h-200 p-10">
                <div className="space-y-5 mb-9">
                    <h1 className="text-2xl font-medium text-black">
                        Sign in to your portal
                    </h1>
                    <p className="text-base font-medium text-gray-600">
                        Access your workspace securely and stay close to every
                        support milestone
                    </p>
                </div>
                <Form
                    name="login"
                    // initialValues={{ remember: true }}
                    // onFinish={onFinish}
                    layout="vertical"
                >
                    <Item name="email">
                        <div className=" mb-2 px-1 w-full">
                            <label
                                htmlFor="email"
                                className="text-lg text-gray-600 cursor-pointer"
                            >
                                Email Address
                            </label>
                        </div>

                        <Input
                            id="email"
                            type="email"
                            placeholder="Enter your email address"
                            className="h-12 rounded-xl! border-2! border-zinc-300! bg-zinc-100!"
                        />
                    </Item>
                    <Item name="password">
                        <div className="flex justify-between items-center mb-2 px-1 w-full">
                            <label
                                htmlFor="password"
                                className="text-lg text-gray-600 cursor-pointer"
                            >
                                Password
                            </label>
                            <a
                                href="#"
                                className="font-medium text-primary! hover:text-secondary/80!"
                            >
                                Forgot Password?
                            </a>
                        </div>

                        <Input
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            className="h-12 rounded-xl! border-2! border-zinc-300! bg-zinc-100!"
                        />
                    </Item>
                    <Item name="remember" valuePropName="checked">
                        <Checkbox className="[&_.ant-checkbox]:p-2! [&_.ant-checkbox]:rounded-lg! [&_.ant-checkbox-checked]:bg-black!">
                            Remember me for 30 days
                        </Checkbox>
                    </Item>
                    <Item>
                        <Button
                            block
                            htmlType="submit"
                            // loading={isSubmitting}
                            className="h-12! border-none! bg-primary! text-background! hover:bg-secondary! hover:border-0! 
                                group"
                            // disabled={isFormEmpty}
                        >
                            Sign In{" "}
                            <ArrowRight className="mr-2 text-xs group-hover:translate-x-2 transition-transform" />
                        </Button>
                    </Item>
                    <p className="flex justify-center items-center gap-3 text-cancelled">
                        <Info />
                        <span>
                            Authorized Personnel Only. System activity is
                            logged.
                        </span>
                    </p>
                </Form>
            </div>
        </div>
    );
}
