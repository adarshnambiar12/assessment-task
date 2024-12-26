import React, { useEffect } from "react";
import { motion, animate, useMotionValue } from "framer-motion";
import useMeasure from "react-use-measure";

export default function Carousel() {
    const tags = [
        { id: 1, tag: "Durable" },
        { id: 2, tag: "Stylish" },
        { id: 3, tag: "Comfortable" },
        { id: 4, tag: "Waterproof" },
    ];

    const [ref, { width }] = useMeasure();
    const xTranslation = useMotionValue(0);

    useEffect(() => {
        if (width === 0) return;

        const finalPosition = -width;
        const controls = animate(xTranslation, [0, finalPosition], {
            duration: 30,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
        });

        return controls.stop;
    }, [xTranslation, width]);

    return (
        <div className="bg-[#2F4F4F] text-button py-5 sm:py-2 -mt-12 md:-mt-14 relative z-[-1]">
            <div className="max-w-7xl mx-auto px-4 overflow-hidden">
                <motion.div
                    className="flex left-0 items-center whitespace-nowrap gap-6 sm:gap-8 md:gap-10"
                    ref={ref}
                    style={{ x: xTranslation }}
                >
                    {[...tags, ...tags, ...tags].map((tag, index) => (
                        <React.Fragment key={index}>
                            <div className="text-xl sm:text-6xl md:text-4xl font-slider px-2 py-2 md:py-7 font-semibold">
                                {tag.tag}
                            </div>
                            <span className="text-xl sm:text-5xl md:text-5xl px-2">✦</span>
                        </React.Fragment>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
