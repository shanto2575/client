"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button, Dropdown, Label } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { MdDashboard } from "react-icons/md";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const pathname = usePathname();

  if (pathname.includes('dashboard')) {
    return null;
  }

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  const isActive = (path) => pathname === path;

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-7xl">
      <nav className="w-full border border-[#dfcbaf] bg-[#ebdcc9] text-[#2c221e] rounded-2xl shadow-lg shadow-[#2c221e]/5 backdrop-blur-md">
        <header className="flex h-14 items-center justify-between px-6">
          
          {/* LEFT SIDE: LOGO & MOBILE HAMBURGER */}
          <div className="flex items-center gap-4">
            <button
              className="md:hidden text-[#2c221e] p-1 rounded-lg hover:bg-[#2c221e]/5 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
            
            <Link href={'/'} className="hover:opacity-90 transition-opacity">
              <div className="flex items-center gap-2.5">
                <Image
                  height={32}
                  width={32}
                  loading="eager"
                  src="/logo.webp"
                  alt="logo"
                  className="w-8 h-8 object-contain"
                />
                <span className="font-extrabold tracking-tight text-sm uppercase">Shanto</span>
              </div>
            </Link>
          </div>

          {/* MIDDLE SIDE: MODERN NAVIGATION LINKS */}
          <ul className="hidden items-center gap-1 md:flex text-xs font-semibold tracking-wide uppercase">
            <li>
              <Link 
                href="/" 
                className={`px-4 py-1.5 rounded-xl transition-all ${
                  isActive('/') 
                    ? "bg-[#2c221e] text-[#ebdcc9]" 
                    : "hover:bg-[#2c221e]/5 text-[#2c221e]/80 hover:text-[#2c221e]"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className={`px-4 py-1.5 rounded-xl transition-all ${
                  isActive('/products') 
                    ? "bg-[#2c221e] text-[#ebdcc9]" 
                    : "hover:bg-[#2c221e]/5 text-[#2c221e]/80 hover:text-[#2c221e]"
                }`}
              >
                Products
              </Link>
            </li>
          </ul>

          {/* RIGHT SIDE: AUTH BUTTONS / USER PROFILE */}
          {!user && (
            <div className="hidden items-center gap-4 md:flex text-xs font-bold tracking-wide uppercase">
              <Link href="/signin" className="text-[#2c221e]/80 hover:text-[#2c221e] transition-colors px-2 py-1">
                Login
              </Link>
              <Link href="/signup">
                <Button className="bg-[#2c221e] text-[#ebdcc9] font-bold text-xs uppercase tracking-wider h-9 px-5 shadow-md shadow-[#2c221e]/10 hover:shadow-[#2c221e]/20 transition-all" radius="xl">
                  Sign Up
                </Button>
              </Link>
            </div>
          )}

          {user && (
            <div className="hidden items-center gap-4 md:flex">
              <Dropdown>
                <Dropdown.Trigger className="rounded-full cursor-pointer p-0.5 border border-[#dfcbaf] hover:border-[#2c221e]/40 transition-colors">
                  <Avatar size="sm" className="w-7 h-7 cursor-pointer" aria-label="Menu">
                    <Avatar.Image referrerPolicy="no-referrer" alt={user?.name} src={user?.image} />
                    <Avatar.Fallback className="bg-[#2c221e] text-[#ebdcc9] text-xs">{user?.name?.charAt(0)}</Avatar.Fallback>
                  </Avatar>
                </Dropdown.Trigger>
                <Dropdown.Popover className="bg-[#ebdcc9] border border-[#dfcbaf] shadow-xl rounded-2xl min-w-[200px] mt-1">
                  <div className="px-4 py-3 border-b border-[#dfcbaf]/50">
                    <p className="text-xs font-extrabold text-[#2c221e] truncate">{user?.name}</p>
                    <p className="text-[10px] text-[#2c221e]/60 truncate mt-0.5">{user?.email}</p>
                  </div>
                  <Dropdown.Menu className="text-[#2c221e] p-1.5 gap-1">
                    <Dropdown.Item id="dashboard" textValue="Dashboard" className="hover:bg-[#2c221e]/5 rounded-xl p-2 transition-colors">
                      <Link className="flex items-center gap-2.5 w-full h-full text-xs font-semibold text-[#2c221e]" href={`/dashboard/${user?.role}`}>
                        <MdDashboard className="w-4 h-4 opacity-80" />
                        <Label className="cursor-pointer">Dashboard</Label>
                      </Link>
                    </Dropdown.Item>

                    <Dropdown.Item id="profile" textValue="Profile" className="hover:bg-[#2c221e]/5 rounded-xl p-2 transition-colors">
                      <div className="flex items-center gap-2.5 text-xs font-semibold text-[#2c221e]">
                        <CgProfile className="w-4 h-4 opacity-80" />
                        <Label className="cursor-pointer">Profile</Label>
                      </div>
                    </Dropdown.Item>

                    <Dropdown.Item id="logout" textValue="Logout" variant="danger" className="hover:bg-red-500/10 text-red-600 rounded-xl p-2 transition-colors" onClick={handleSignOut}>
                      <div className="flex items-center gap-2.5 text-xs font-semibold">
                        <BiLogOut className="w-4 h-4" />
                        <Label className="cursor-pointer">Logout</Label>
                      </div>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown.Popover>
              </Dropdown>
            </div>
          )}
        </header>

        {/* MOBILE MENU PANEL */}
        {isMenuOpen && (
          <div className="border-t border-[#dfcbaf] md:hidden bg-[#ebdcc9] rounded-b-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
            <ul className="flex flex-col gap-1 p-4 text-xs font-bold uppercase tracking-wide">
              <li>
                <Link href="/" className="block py-2 px-3 rounded-xl hover:bg-[#2c221e]/5">Features</Link>
              </li>
              <li>
                <Link href="/dashboard" className="block py-2 px-3 rounded-xl text-[#2c221e] bg-[#2c221e]/5">Dashboard</Link>
              </li>
              <li>
                <Link href="#" className="block py-2 px-3 rounded-xl hover:bg-[#2c221e]/5">Pricing</Link>
              </li>
              <li className="mt-2 pt-3 border-t border-[#dfcbaf] flex flex-col gap-2">
                <Link href="/signin" className="block py-2 text-center hover:bg-[#2c221e]/5 rounded-xl">Login</Link>
                <Button className="w-full bg-[#2c221e] text-[#ebdcc9] font-bold text-xs uppercase tracking-wider h-10" radius="xl">
                  Sign Up
                </Button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;