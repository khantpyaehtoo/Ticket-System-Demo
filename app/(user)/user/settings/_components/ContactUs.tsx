import { Clock, Globe, Mail, MapPin, Phone } from "lucide-react";
import React from "react";

export default function ContactUs() {
    return (
        <div className="space-y-10">
            <div className="">
                <div className="flex justify-between items-center">
                    <div className="w-full text-primary space-y-2 border-b-2 border-[#E0E0E0] pb-5 my-10">
                        <h1 className="text-2xl text-black font-bold">
                            Contact Us & Support
                        </h1>
                        <p className="text-primary">
                            Need help with your workspace? Get in touch with the
                            digital base support team.
                        </p>
                    </div>
                </div>

                <div className="flex justify-between items-center space-x-10">
                    <div className="rounded-2xl bg-background p-6 border border-[#E0E0E0]">
                        <div className="border-b border-b-[#E0E0E0]">
                            <h1 className="uppercase text-lg text-primary font-medium py-4">
                                Direct Support
                            </h1>
                        </div>

                        <div className="flex flex-col items-start gap-4 py-6">
                            <div className="flex items-start space-x-4 w-full border-b border-gray-300 pb-4">
                                <Mail className="text-white bg-primary rounded-xl w-12 h-12 p-2 shrink-0" />
                                <div>
                                    <h1 className="text-base sm:text-lg font-medium uppercase">
                                        Support Email
                                    </h1>
                                    <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mt-1">
                                        <span>support@digitalbase.io</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4 w-full border-b border-gray-300 pb-4">
                                <Phone className="text-white bg-primary rounded-xl w-12 h-12 p-2 shrink-0" />
                                <div>
                                    <h1 className="text-base sm:text-lg font-medium uppercase">
                                        Direct hotline / viber
                                    </h1>
                                    <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mt-1">
                                        <span>09 755 999 680</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4 w-full">
                                <Clock className="text-white bg-primary rounded-xl w-12 h-12 p-2 shrink-0" />
                                <div className="flex justify-between items-center w-full">
                                    <div>
                                        <h1 className="text-base sm:text-lg font-medium uppercase">
                                            Open Time
                                        </h1>
                                        <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mt-1">
                                            <span>
                                                9:00 AM to 5:00 PM (Mon to Fri)
                                            </span>
                                        </div>
                                    </div>
                                    <div className="bg-primary rounded-lg text-white px-4 py-2">
                                        MMT (UTC +6:30)
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-2xl bg-background p-6 border border-[#E0E0E0]">
                        <div className="border-b border-b-[#E0E0E0]">
                            <h1 className="uppercase text-lg text-primary font-medium py-4">
                                online & social
                            </h1>
                        </div>

                        <div className="flex flex-col items-start gap-4 py-6">
                            <div className="flex items-start space-x-4 w-full border-b border-gray-300 pb-4">
                                <Globe className="text-white bg-primary rounded-xl w-12 h-12 p-2 shrink-0" />
                                <div>
                                    <h1 className="text-base sm:text-lg font-medium uppercase">
                                        Website
                                    </h1>
                                    <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mt-1">
                                        <span>https://digitalbase.com.mm</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4 w-full border-b border-gray-300 pb-4">
                                {/* <Phone className="text-white bg-primary rounded-xl w-12 h-12 p-2 shrink-0" /> */}
                                <div>
                                    <h1 className="text-base sm:text-lg font-medium uppercase">
                                        facebook
                                    </h1>
                                    <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mt-1">
                                        <span>digital base</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4 w-full">
                                {/* <LinkedIn className="text-white bg-primary rounded-xl w-12 h-12 p-2 shrink-0" /> */}
                                <div>
                                    <h1 className="text-base sm:text-lg font-medium uppercase">
                                        linkedin
                                    </h1>
                                    <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mt-1">
                                        <span>digital base</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="">
                <div className="rounded-2xl bg-background p-6 border border-[#E0E0E0]">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <div className="flex items-end space-x-2 text-gray-800">
                                <MapPin className="w-4 h-4" />
                                <small className="uppercase font-jetbrains">
                                    Office Location
                                </small>
                            </div>
                            <h1 className="text-lg text-primary font-medium">
                                Building 15, Floor 3, Hlaing, MICT Park, Yangon
                            </h1>
                            <p className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
                                <span>
                                    Regional Engineering Headquarters &
                                    Enterprise Technical Support Operations
                                    Center
                                </span>
                            </p>
                        </div>

                        <div className="space-x-4 flex items-center font-jetbrains ">
                            <div className="bg-primary text-background rounded-2xl px-6 py-2 text-xs text-center">
                                MICT Park Tech Cluster
                            </div>
                            <div className="bg-primary text-background rounded-2xl px-6 py-2 text-xs text-center">
                                Yangon, Myanmar
                            </div>
                            <div className="bg-primary text-background rounded-2xl px-6 py-2 text-xs text-center">
                                P-Code: 11052
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
