'use client'

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";
import { usePathname } from "next/navigation";
import { motion } from "motion/react"; 

export default function Footer() {
  const pathname = usePathname();

  if (pathname.includes('dashboard')) {
    return null;
  }

  return (
    <footer className=" border-t border-[#dfcbaf]/70 bg-[#ebdcc9] text-[#2c221e] relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#dfcbaf]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Main Grid Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-12"
        >
          
          {/* Brand Column (Span 4) */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <div className="relative overflow-hidden rounded-xl bg-[#2c221e]/5 p-1.5 transition-transform duration-300 group-hover:scale-105">
                <Image
                  height={36}
                  width={36}
                  loading="eager"
                  src="/logo.webp"
                  alt="logo"
                  className="w-9 h-9 object-contain"
                />
              </div>
              <span className="font-black text-lg uppercase tracking-widest text-[#2c221e]">Shanto</span>
            </Link>

            <p className="text-xs font-medium text-[#2c221e]/70 max-w-sm leading-relaxed tracking-wide">
              Discover quality products at great prices. Fast delivery, secure payments, and exceptional customer service.
            </p>

            <div className="mt-2 flex items-center gap-2.5">
              {[
                { icon: <FaFacebook className="h-4 w-4" />, href: "#" },
                { icon: <BsInstagram className="h-4 w-4" />, href: "#" },
                { icon: <BsTwitter className="h-4 w-4" />, href: "#" },
                { icon: <LiaLinkedin className="h-4 w-4" />, href: "#" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ 
                    scale: 1.1, 
                    backgroundColor: "#2c221e", 
                    color: "#ebdcc9",
                    borderColor: "#2c221e",
                    y: -3
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className="rounded-xl border border-[#dfcbaf] p-2.5 text-[#2c221e]/80 transition-colors shadow-sm cursor-pointer bg-white/10 backdrop-blur-sm"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links Column 1 (Span 2) */}
          <div className="lg:col-span-2">
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.15em] text-[#2c221e]/50">
              Shop
            </h3>
            <ul className="space-y-3 text-xs font-semibold text-[#2c221e]/80">
              {['All Products', 'Categories', 'New Arrivals', 'Best Selling'].map((item, index) => (
                <li key={index}>
                  <Link 
                    href={`/${item.toLowerCase().replace(" ", "-")}`} 
                    className="relative pb-1 block w-fit group text-[#2c221e]/80 hover:text-[#2c221e] transition-colors"
                  >
                    {item}
                    <span className="absolute left-0 bottom-0 w-0 h-[1.5px] bg-[#2c221e] transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column 2 (Span 2) */}
          <div className="lg:col-span-2">
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.15em] text-[#2c221e]/50">
              Support
            </h3>
            <ul className="space-y-3 text-xs font-semibold text-[#2c221e]/80">
              {[
                { name: 'Contact Us', path: '/contact' },
                { name: 'FAQ', path: '/faq' },
                { name: 'Privacy Policy', path: '/privacy-policy' },
                { name: 'Terms & Conditions', path: '/terms' }
              ].map((item, index) => (
                <li key={index}>
                  <Link 
                    href={item.path} 
                    className="relative pb-1 block w-fit group text-[#2c221e]/80 hover:text-[#2c221e] transition-colors"
                  >
                    {item.name}
                    <span className="absolute left-0 bottom-0 w-0 h-[1.5px] bg-[#2c221e] transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter (Span 4) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div>
              <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-[#2c221e]/50">
                Newsletter
              </h3>
              <div className="relative flex items-center mt-2 max-w-sm">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full h-11 px-4 pr-12 text-xs font-medium rounded-xl bg-white/20 border border-[#dfcbaf] focus:border-[#2c221e] text-[#2c221e] placeholder-[#2c221e]/40 outline-none transition-all"
                />
                <button className="absolute right-1.5 p-2 bg-[#2c221e] text-[#ebdcc9] rounded-lg hover:opacity-90 transition-opacity">
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="space-y-3.5 text-xs font-semibold text-[#2c221e]/70 border-t border-[#dfcbaf]/40 pt-4">
              <div className="flex gap-3 items-center group cursor-pointer">
                <div className="p-1.5 rounded-lg bg-white/20 border border-[#dfcbaf]/40 group-hover:bg-[#2c221e] group-hover:text-[#ebdcc9] transition-colors">
                  <MapPin className="h-3.5 w-3.5 shrink-0" />
                </div>
                <span>Dhaka, Bangladesh</span>
              </div>
              <div className="flex gap-3 items-center group cursor-pointer">
                <div className="p-1.5 rounded-lg bg-white/20 border border-[#dfcbaf]/40 group-hover:bg-[#2c221e] group-hover:text-[#ebdcc9] transition-colors">
                  <Phone className="h-3.5 w-3.5 shrink-0" />
                </div>
                <span>+880 1234-567890</span>
              </div>
            </div>
          </div>

        </motion.div>

        {/* Bottom Bar Section */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-[#dfcbaf]/60 py-6 text-center text-xs font-semibold text-[#2c221e]/60 md:flex-row">
          <p className="tracking-wide">
            © {new Date().getFullYear()} <span className="text-[#2c221e] font-bold">Shanto</span>. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-[#2c221e]/70">
            {['Privacy', 'Terms', 'Cookies'].map((text, idx) => (
              <Link 
                key={idx} 
                href={`/${text.toLowerCase()}`} 
                className="hover:text-[#2c221e] transition-colors relative group"
              >
                {text}
                <span className="absolute left-0 -bottom-0.5 w-0 h-[1px] bg-[#2c221e] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>
        </div>
        
      </div>
    </footer>
  );
}