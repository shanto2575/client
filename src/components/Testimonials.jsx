"use client";

import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

export default function Testimonials() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            scale: 0.95,
            filter: "blur(6px)",
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            transition: {
                type: "spring",
                stiffness: 90,
                damping: 18,
            },
        },
    };

    const reviews = [
        {
            name: "Sarah Jenkins",
            role: "Corporate Lead",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
            rating: 5,
            comment: "Organizing our annual gala with Eventora was absolute perfection. The automated system and seamless check-ins saved us countless hours.",
        },
        {
            name: "Alex Rivera",
            role: "Festival Director",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
            rating: 5,
            comment: "The real-time organizer dashboard is flawless. Tracking ticket revenue and managing thousands of attendees has never been this premium.",
        },
        {
            name: "Elena Rostova",
            role: "Creative Planner",
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
            rating: 5,
            comment: "Uncompromising quality and elite customer interface. Secure payment routing via Stripe gives our guests maximum peace of mind.",
        },
    ];

    return (
        <section className="relative py-28 max-w-7xl mx-auto px-6 w-full overflow-hidden bg-[#ebdcc9] text-[#2c221e]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#dfcbaf]/20 rounded-full blur-[150px] -z-10 pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ type: "spring", stiffness: 70, damping: 15 }}
                className="text-center mb-20 space-y-4"
            >
                <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl text-[#2c221e]">
                    Voices of <span className="bg-gradient-to-r from-[#2c221e] via-[#4a3b35] to-[#2c221e] bg-clip-text text-transparent">Excellence</span>
                </h2>
                <p className="text-[#2c221e]/70 max-w-2xl mx-auto text-base leading-relaxed font-medium">
                    Hear from the visionaries and planners who trust our state-of-the-art management system.
                </p>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.1 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
                {reviews.map((review, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        whileHover={{
                            y: -8,
                            scale: 1.02,
                            borderColor: "rgba(44, 34, 30, 0.3)",
                            boxShadow: "0 20px 40px -15px rgba(44, 34, 30, 0.08)",
                        }}
                        whileTap={{ scale: 0.98 }}
                        className="p-8 rounded-2xl border border-[#dfcbaf] bg-white/20 backdrop-blur-md transition-all duration-300 flex flex-col justify-between group cursor-pointer relative"
                    >
                        <div className="absolute top-6 right-8 text-[#2c221e]/5 group-hover:text-[#2c221e]/10 transition-colors duration-300">
                            <Quote size={56} className="rotate-180" />
                        </div>

                        <div className="space-y-4 relative z-10">
                            <div className="flex items-center gap-1">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} size={14} className="fill-[#2c221e] text-[#2c221e]" />
                                ))}
                            </div>

                            <p className="text-[#2c221e]/80 text-sm leading-relaxed font-medium italic">
                                "{review.comment}"
                            </p>
                        </div>

                        <div className="flex items-center gap-4 mt-8 pt-6 border-t border-[#dfcbaf]/40 relative z-10">
                            <div className="relative w-11 h-11 rounded-full overflow-hidden border border-[#dfcbaf] bg-[#2c221e]/5">
                                <Image
                                    src={review.image}
                                    alt={review.name}
                                    fill
                                    sizes="44px"
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-[#2c221e]">
                                    {review.name}
                                </h4>
                                <p className="text-xs font-semibold text-[#2c221e]/50">
                                    {review.role}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}