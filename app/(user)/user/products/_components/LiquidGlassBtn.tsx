// LiquidGlassButton.jsx
import React, { MouseEventHandler, ReactNode, useId } from "react";

interface LiquidGlassButtonProps {
    children?: ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    width?: number;
    height?: number;
    borderRadius?: number;
    innerShadowColor?: string;
    innerShadowSpread?: number;
    innerShadowBlur?: number;
    glassTintColor?: string;
    frostBlurRadius?: number;
    noiseFrequency?: number;
    noiseStrength?: number;
    className?: string;
    "aria-label"?: string;
}

export default function LiquidGlassButton({
    children,
    onClick,
    disabled = false,
    width = 60,
    height = 60,
    borderRadius = 9999,
    innerShadowColor = "#000000",
    innerShadowSpread = -5,
    innerShadowBlur = 11,
    glassTintColor = "rgba(255, 255, 255, 0.4)",
    frostBlurRadius = 1,
    noiseFrequency = 0.022,
    noiseStrength = 30,
    className = "",
    "aria-label": ariaLabel,
}: LiquidGlassButtonProps) {
    const rawId = useId();
    const filterId = `liquid-noise-${rawId.replace(/:/g, "")}`;

    return (
        <div
            className={`inline-flex items-center justify-center shrink-0 ${className}`}
            style={{ width: `${width}px`, height: `${height}px` }}
        >
            {/* Dynamic SVG Refraction Filter */}
            <svg
                className="absolute w-0 h-0 overflow-hidden"
                aria-hidden="true"
            >
                <defs>
                    <filter
                        id={filterId}
                        x="-20%"
                        y="-20%"
                        width="140%"
                        height="140%"
                    >
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency={noiseFrequency}
                            numOctaves="2"
                            result="noise"
                        />
                        <feDisplacementMap
                            in="SourceGraphic"
                            in2="noise"
                            scale={disabled ? 0 : noiseStrength}
                            xChannelSelector="R"
                            yChannelSelector="G"
                        />
                    </filter>
                </defs>
            </svg>

            {/* Liquid Glass Button Container */}
            <button
                onClick={onClick}
                disabled={disabled}
                aria-label={ariaLabel}
                className="relative w-full h-full flex items-center justify-center cursor-pointer overflow-hidden transition-all duration-200 active:scale-90 disabled:cursor-not-allowed"
                style={{
                    borderRadius: `${borderRadius}px`,
                    backgroundColor: glassTintColor,
                    backdropFilter: `url(#${filterId}) blur(${frostBlurRadius}px)`,
                    WebkitBackdropFilter: `url(#${filterId}) blur(${frostBlurRadius}px)`,
                    // boxShadow: `inset 0 1px 2px ${innerShadowColor}, inset 0 -1px 3px rgba(0,0,0,0.15), 0 4px 12px rgba(0,0,0,0.1)`,
                    boxShadow: `inset 0 0 ${innerShadowBlur}px ${innerShadowSpread}px ${innerShadowColor}, 0 20px 40px rgba(0,0,0,0.3)`,
                }}
            >
                {/* Subtle Glass Bevel Rim Light */}
                <div
                    className="absolute inset-0 pointer-events-none border border-white/60"
                    style={{ borderRadius: `${borderRadius}px` }}
                />

                {/* Button Icon / Content */}
                <span className="relative z-10 flex items-center justify-center text-slate-800">
                    {children}
                </span>
            </button>
        </div>
    );
}
