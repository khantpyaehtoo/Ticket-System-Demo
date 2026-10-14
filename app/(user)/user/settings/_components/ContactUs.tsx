import React from "react";

export default function ContactUs() {
    return (
        <div>
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

            <div>
                <div className="rounded-2xl bg-primary">
                    <div>
                        <h1 className="uppercase text-[#8e9192] font-medium">
                            Direct Support
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
