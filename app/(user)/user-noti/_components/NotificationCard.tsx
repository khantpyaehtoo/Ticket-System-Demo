import { AlarmClock } from "lucide-react";
import React from "react";

export default function NotificationCard() {
    return (
        <div className="flex justify-between items-center mx-auto">
            <div className="border border-primary w-full py-5 px-7 rounded-2xl">
                <div className="flex">
                    <AlarmClock />
                    <div>
                        <div>
                            <h1>Your mins are very low: 10 mins remaining</h1>
                            <p>
                                You don't have enough remaining minutes to
                                submit additional tickets. Please contact us if
                                you want to purchase extra minutes now.
                            </p>
                            <a>Check your mins</a>
                        </div>
                        <div>
                            <span>new</span>
                            <span>15 mins ago</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
