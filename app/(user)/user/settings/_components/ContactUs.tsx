import { Clock, Globe, Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import React from "react";

export default function ContactUs() {
    return (
        <div className="space-y-8 w-full pb-10">
            {/* Header Section */}
            <div className="w-full text-primary space-y-2 border-b-2 border-[#E0E0E0] pb-5 my-6">
                <h1 className="text-2xl text-black font-bold">
                    Contact Us & Support
                </h1>
                <p className="text-primary text-sm sm:text-base">
                    Need help with your workspace? Get in touch with the digital
                    base support team.
                </p>
            </div>

            {/* Direct Support & Social Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Direct Support Card */}
                <div className="rounded-2xl bg-background p-6 border border-[#E0E0E0] shadow-sm">
                    <div className="border-b border-b-[#E0E0E0]">
                        <h2 className="uppercase text-lg text-primary font-medium py-4">
                            Direct Support
                        </h2>
                    </div>

                    <div className="flex flex-col items-start gap-4 py-6">
                        <div className="flex items-start space-x-4 w-full border-b border-gray-200 pb-4">
                            <Mail className="text-white bg-primary rounded-xl w-12 h-12 p-2 shrink-0" />
                            <div>
                                <h3 className="text-base sm:text-lg font-medium uppercase">
                                    Support Email
                                </h3>
                                <div className="flex flex-wrap items-center gap-2 text-sm mt-1">
                                    <a
                                        href="mailto:support@digitalbase.com.mm"
                                        className="text-gray-500 hover:text-primary hover:underline"
                                    >
                                        support@digitalbase.com.mm
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4 w-full border-b border-gray-200 pb-4">
                            <Phone className="text-white bg-primary rounded-xl w-12 h-12 p-2 shrink-0" />
                            <div>
                                <h3 className="text-base sm:text-lg font-medium uppercase">
                                    Direct hotline / viber
                                </h3>
                                <div className="flex flex-wrap items-center gap-2 text-sm mt-1">
                                    <a
                                        href="tel:09775999680"
                                        className="text-gray-500 hover:text-primary hover:underline"
                                    >
                                        09 775 999 680
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4 w-full">
                            <Clock className="text-white bg-primary rounded-xl w-12 h-12 p-2 shrink-0" />
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-2">
                                <div>
                                    <h3 className="text-base sm:text-lg font-medium uppercase">
                                        Open Time
                                    </h3>
                                    <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mt-1">
                                        <span>
                                            9:00 AM to 5:00 PM (Mon to Fri)
                                        </span>
                                    </div>
                                </div>
                                <div className="bg-primary rounded-lg text-white px-3 py-1 text-xs shrink-0">
                                    MMT (UTC +6:30)
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Online & Social Card */}
                <div className="rounded-2xl bg-background p-6 border border-[#E0E0E0] shadow-sm">
                    <div className="border-b border-b-[#E0E0E0]">
                        <h2 className="uppercase text-lg text-primary font-medium py-4">
                            Online & Social
                        </h2>
                    </div>

                    <div className="flex flex-col items-start gap-4 py-6">
                        <div className="flex items-start space-x-4 w-full border-b border-gray-200 pb-4">
                            <Globe className="text-white bg-primary rounded-xl w-12 h-12 p-2 shrink-0" />
                            <div>
                                <h3 className="text-base sm:text-lg font-medium uppercase">
                                    Website
                                </h3>
                                <div className="flex flex-wrap items-center gap-2 text-sm mt-1">
                                    <a
                                        href="https://digitalbase.com.mm"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-500 hover:text-primary hover:underline"
                                    >
                                        https://digitalbase.com.mm
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4 w-full border-b border-gray-200 pb-4">
                            <div className="text-white bg-primary rounded-xl w-12 h-12 flex items-center justify-center font-bold text-lg shrink-0">
                                f
                            </div>
                            <div>
                                <h3 className="text-base sm:text-lg font-medium uppercase">
                                    Facebook
                                </h3>
                                <div className="flex flex-wrap items-center gap-2 text-sm mt-1">
                                    <a
                                        href="https://facebook.com/share/14mycZ7AwDE/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-500 hover:text-primary hover:underline!"
                                    >
                                        Digital Base
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4 w-full">
                            <div className="text-white bg-primary rounded-xl w-12 h-12 flex items-center justify-center font-bold text-lg shrink-0">
                                in
                            </div>
                            <div>
                                <h3 className="text-base sm:text-lg font-medium uppercase">
                                    LinkedIn
                                </h3>
                                <div className="flex flex-wrap items-center gap-2 text-sm mt-1">
                                    <a
                                        href="https://www.linkedin.com/company/digital-base-software-development-company/mycompany/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-500 hover:text-primary hover:underline!"
                                    >
                                        Digital Base
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Office Location Card */}
            <div className="w-full">
                <div className="relative overflow-hidden rounded-2xl bg-background p-6 border border-[#E0E0E0] shadow-sm flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 transition-all duration-300 group/card">
                    {/* Hover Layer */}
                    <div className="absolute inset-x-0 bottom-0 h-0 bg-primary transition-all duration-500 ease-in-out group-hover/card:h-full z-0"></div>

                    <div className="relative z-10 space-y-4 w-full">
                        <div className="space-y-2">
                            <a
                                href="https://maps.app.goo.gl/tME9kxbz3wuSxr4o9"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block group/loc"
                            >
                                <div className="flex items-center space-x-2 text-gray-700 group-hover/card:text-white/90 transition-colors">
                                    <MapPin className="w-4 h-4" />
                                    <span className="text-xs uppercase font-jetbrains font-semibold">
                                        Office Location
                                    </span>
                                </div>
                                <h2 className="text-lg text-primary group-hover/card:text-white font-medium transition-colors mt-1">
                                    Building 15, 3rd Floor, Hlaing, MICT Park,
                                    Yangon
                                </h2>
                                <p className="text-sm text-gray-500 group-hover/card:text-white/80 max-w-2xl transition-colors mt-1">
                                    Regional Engineering Headquarters &
                                    Enterprise Technical Support Operations
                                    Center
                                </p>
                            </a>
                        </div>

                        <div className="flex flex-wrap items-center gap-2 font-jetbrains">
                            <div className="bg-primary group-hover/card:bg-white group-hover/card:text-primary text-background rounded-xl px-4 py-1.5 text-xs transition-colors">
                                MICT Park Tech Cluster
                            </div>
                            <div className="bg-primary group-hover/card:bg-white group-hover/card:text-primary text-background rounded-xl px-4 py-1.5 text-xs transition-colors">
                                Yangon, Myanmar
                            </div>
                            <div className="bg-primary group-hover/card:bg-white group-hover/card:text-primary text-background rounded-xl px-4 py-1.5 text-xs transition-colors">
                                P-Code: 11211
                            </div>
                        </div>
                    </div>

                    <a
                        href="https://maps.app.goo.gl/tME9kxbz3wuSxr4o9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative z-10 group w-full lg:w-auto bg-primary! group-hover/card:bg-white! text-white! group-hover/card:text-primary! font-jetbrains px-8 py-3 rounded-xl text-sm font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-all cursor-pointer shrink-0 shadow-sm"
                    >
                        <span>Open in Google Maps</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
                    </a>
                </div>
            </div>
        </div>
    );
}
