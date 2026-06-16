"use client";

import { FaAward, FaShieldAlt, FaUsers } from "react-icons/fa";
import { motion } from "motion/react";

export default function WhyChoose() {
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
      filter: "blur(6px)" 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { 
        type: "spring", 
        stiffness: 90, 
        damping: 18 
      },
    },
  };

  const features = [
    {
      icon: <FaAward size={28} />,
      title: "Premium Events Only",
      description: "Every event created is moderated by administrators to guarantee maximum platform authenticity and top-tier event experiences.",
      borderColor: "rgba(44, 34, 30, 0.3)",
      shadowColor: "rgba(44, 34, 30, 0.08)"
    },
    {
      icon: <FaShieldAlt size={28} />,
      title: "100% Secure Checkout",
      description: "Ticket transactions and package upgrades are integrated directly with Stripe Checkout, keeping payments fast and secure.",
      borderColor: "rgba(44, 34, 30, 0.3)",
      shadowColor: "rgba(44, 34, 30, 0.08)"
    },
    {
      icon: <FaUsers size={28} />,
      title: "Organizer Analytics",
      description: "Organizers receive dedicated dashboards containing detailed tables of attendees, ticket sales tracking, and real-time revenue stats.",
      borderColor: "rgba(44, 34, 30, 0.3)",
      shadowColor: "rgba(44, 34, 30, 0.08)"
    }
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
          Why Choose <span className="bg-gradient-to-r from-[#2c221e] via-[#4a3b35] to-[#2c221e] bg-clip-text text-transparent">Eventora</span>
        </h2>
        <p className="text-[#2c221e]/70 max-w-2xl mx-auto text-base leading-relaxed font-medium">
          Delivering an elite and state-of-the-art event management system that empowers everyone.
        </p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }} 
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {features.map((card, index) => (
          <motion.div 
            key={index}
            variants={cardVariants}
            whileHover={{ 
              y: -8, 
              scale: 1.02,
              borderColor: card.borderColor, 
              boxShadow: `0 20px 40px -15px ${card.shadowColor}`
            }}
            whileTap={{ scale: 0.98 }}
            className="p-8 rounded-2xl border border-[#dfcbaf] bg-white/20 backdrop-blur-md transition-all duration-300 group cursor-pointer"
          >
            <div className="bg-[#2c221e]/5 text-[#2c221e] p-4 rounded-xl inline-block mb-6 group-hover:scale-110 group-hover:bg-[#2c221e] group-hover:text-[#ebdcc9] transition-all duration-300 border border-[#dfcbaf]/50">
              {card.icon}
            </div>
            <h3 className="text-xl font-bold text-[#2c221e] mb-3 transition-colors duration-300">
              {card.title}
            </h3>
            <p className="text-[#2c221e]/70 text-sm leading-relaxed transition-colors duration-300 font-medium">
              {card.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}