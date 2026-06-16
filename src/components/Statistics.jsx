"use client";

import { motion, useMotionValue, useTransform, animate, useInView } from "motion/react";
import { useEffect, useRef } from "react";

function Counter({ value }) {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const rounded = useTransform(motionValue, (latest) => Math.round(latest).toLocaleString());
    const isInView = useInView(ref, { once: false, amount: 0.5 });

    useEffect(() => {
        if (isInView) {
            const controls = animate(motionValue, value, {
                duration: 2,
                ease: "easeOut",
            });
            return controls.stop;
        } else {
            motionValue.set(0);
        }
    }, [isInView, value, motionValue]);

    return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function Statistics({ stats }) {
    // console.log(stats)
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { type: "spring", stiffness: 100, damping: 20 },
        },
    };

    return (
        <section className="py-20 bg-[#ebdcc9] border-t border-[#dfcbaf] w-full overflow-hidden text-[#2c221e]">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center"
            >
                <motion.div variants={itemVariants} className="space-y-2 group cursor-default">
                    <div className="text-5xl font-black bg-gradient-to-r from-[#2c221e] via-[#4a3b35] to-[#2c221e] bg-clip-text text-transparent transition-transform duration-300 group-hover:scale-105 inline-block">
                        <Counter value={stats.totalEvents} />+
                    </div>
                    <p className="text-[#2c221e]/70 font-bold text-xs uppercase tracking-widest group-hover:text-[#2c221e] transition-colors duration-300">
                        Premium Events Held
                    </p>
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-2 group cursor-default">
                    <div className="text-5xl font-black bg-gradient-to-r from-[#2c221e] via-[#4a3b35] to-[#2c221e] bg-clip-text text-transparent transition-transform duration-300 group-hover:scale-105 inline-block">
                        <Counter value={stats.totalAttendees} />+
                    </div>
                    <p className="text-[#2c221e]/70 font-bold text-xs uppercase tracking-widest group-hover:text-[#2c221e] transition-colors duration-300">
                        Happy Attendees
                    </p>
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-2 group cursor-default">
                    <div className="text-5xl font-black bg-gradient-to-r from-[#2c221e] via-[#4a3b35] to-[#2c221e] bg-clip-text text-transparent transition-transform duration-300 group-hover:scale-105 inline-block">
                        <Counter value={stats.totalOrgs} />+
                    </div>
                    <p className="text-[#2c221e]/70 font-bold text-xs uppercase tracking-widest group-hover:text-[#2c221e] transition-colors duration-300">
                        Vetted Organizations
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
}