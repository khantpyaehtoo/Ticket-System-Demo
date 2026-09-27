"use client";

import { Progress } from "antd";
import { CheckCircle2, Circle } from "lucide-react";

type IndicatorProps = {
    hasMinLen: boolean;
    hasNumber: boolean;
    hasSymbol: boolean;
    percent: number;
    status: string;
    color: string;
};

export default function PasswordStrengthIndicator({
    hasMinLen,
    hasNumber,
    hasSymbol,
    percent,
    status,
    color,
}: IndicatorProps) {
    const requirements = [
        { label: "At least 12 characters", isMet: hasMinLen },
        { label: "At least 1 number (0-9)", isMet: hasNumber },
        { label: "At least 1 special char (!@#$%^&*)", isMet: hasSymbol },
    ];

    return (
        <div className="space-y-3 p-3 bg-gray-50/80 rounded-lg border border-gray-100">
            {/* Progress Bar & Status */}
            <div className="space-y-1">
                <div className="flex justify-between items-center text-xs font-medium">
                    <span className="text-gray-500">
                        Password Strength Requires
                    </span>
                    <span style={{ color }}>{status}</span>
                </div>
                <Progress
                    percent={percent}
                    strokeColor={color}
                    showInfo={false}
                    size="small"
                />
            </div>

            {/* Dynamic Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 border-t border-gray-200/60">
                {requirements.map((req, index) => (
                    <div
                        key={index}
                        className={`flex items-center gap-1.5 text-xs transition-colors duration-200 ${
                            req.isMet
                                ? "text-emerald-600 font-medium"
                                : "text-gray-400"
                        }`}
                    >
                        {req.isMet ? (
                            <CheckCircle2
                                size={14}
                                className="text-emerald-600 shrink-0"
                            />
                        ) : (
                            <Circle
                                size={14}
                                className="text-gray-300 shrink-0"
                            />
                        )}
                        <span>{req.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
