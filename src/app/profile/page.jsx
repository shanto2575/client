

import React from "react";
import {
  Card,
  CardBody,
  Button,
  Chip,
  Avatar,
  Divider
} from "@heroui/react";
import {
  Calendar,
  Mail,
  ShieldCheck,
  Gem,
  User,
  ArrowLeft,
  Edit3,
  AlertCircle
} from "lucide-react";
import Link from "next/link";
import { getSession } from "@/lib/session";
import Image from "next/image";

export default async function ProfilePage() {
  const session = await getSession()
  const user=session?.user
  // console.log(user?.image)

  return (
    <div className="min-h-screen w-full bg-[#ebdcc9] text-[#2c221e] py-24 px-4 md:px-8 select-none">
      <div className="max-w-4xl mx-auto space-y-6">

        {/* BACK TO HOME & ACTIONS */}
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#2c221e]/70 hover:text-[#2c221e] transition-colors"
          >
            <ArrowLeft size={14} /> Back to Home
          </Link>
          <Button
            size="sm"
            variant="flat"
            className="bg-[#2c221e]/5 hover:bg-[#2c221e]/10 text-[#2c221e] font-bold text-xs uppercase tracking-wider rounded-xl"

          >
            Edit Profile
          </Button>
        </div>

        {/* MAIN PROFILE CARD */}
        <Card className="w-full border border-[#dfcbaf] bg-white/30 backdrop-blur-xl shadow-[0_25px_50px_-12px_rgba(44,34,30,0.04)] rounded-3xl overflow-hidden">

          {/* BANNER AREA */}
          <div className="h-40 w-full bg-gradient-to-r from-[#2c221e] via-[#4a3b35] to-[#2c221e] relative">
            <div  className="absolute -bottom-12 left-6 md:left-10 z-10">
              <Image 
                src={user?.image}
                height={300}
                width={300}
                alt="profile"
                name={user?.name}
                className="w-24 h-24 md:w-28 md:h-28 text-large ring-4 ring-[#ebdcc9]"
                
              />
            </div>
            {/* PLAN BADGE */}
            <div className="absolute top-4 right-4">
              <Chip

                variant="flat"
                className="bg-[#ebdcc9] text-[#2c221e] font-bold uppercase tracking-wider text-[10px] border border-[#dfcbaf] h-6"
              >
                {user.plan} Account
              </Chip>
            </div>
          </div>

          {/* CARD CONTENT / BODY */}
          <div className="pt-16 pb-8 px-6 md:px-10 space-y-6 overflow-hidden">

            {/* USER TITLE */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <h1 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-[#2c221e]">
                    {user.name}
                  </h1>
                  <Chip
                    size="sm"
                    className="bg-[#2c221e] text-[#ebdcc9] font-bold text-[10px] uppercase tracking-widest px-2 h-5"
                  >
                    {user.role}
                  </Chip>
                </div>
                <p className="text-sm font-medium text-[#2c221e]/60 mt-1">
                  Account ID: <span className="font-mono text-xs text-[#2c221e]/80">{user.id}</span>
                </p>
              </div>
            </div>


            {/* DETAILS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* EMAIL COMPONENT */}
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/40 border border-[#dfcbaf]/40">
                <div className="p-2.5 rounded-xl bg-[#2c221e]/5 text-[#2c221e] mt-0.5">
                  <Mail size={18} />
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#2c221e]/50">Email Address</p>
                  <p className="text-sm font-bold text-[#2c221e] break-all">{user.email}</p>
                  <div className="pt-1">
                    {user.emailVerified ? (
                      <Chip
                        size="sm"
                        variant="flat"
                        color="success"
                        className="text-[10px] font-bold uppercase tracking-wider h-5"
                      >
                        Verified
                      </Chip>
                    ) : (
                      <Chip
                        size="sm"
                        variant="flat"
                        color="warning"

                        className="text-[10px] font-bold uppercase tracking-wider h-5"
                      >
                        Pending
                      </Chip>
                    )}
                  </div>
                </div>
              </div>

              {/* JOINED DATE */}
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/40 border border-[#dfcbaf]/40">
                <div className="p-2.5 rounded-xl bg-[#2c221e]/5 text-[#2c221e] mt-0.5">
                  <Calendar size={18} />
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#2c221e]/50">Member Since</p>
                  <p className="text-xs font-medium text-[#2c221e]/60">Fully registered user</p>
                </div>
              </div>

              {/* ACCOUNT TYPE */}
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/40 border border-[#dfcbaf]/40">
                <div className="p-2.5 rounded-xl bg-[#2c221e]/5 text-[#2c221e] mt-0.5">
                  <Gem size={18} />
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#2c221e]/50">Subscription Plan</p>
                  <p className="text-sm font-bold text-[#2c221e] uppercase tracking-wide">{user.plan} Access</p>
                  <p className="text-xs font-medium text-[#2c221e]/60">Enjoying all pro capabilities</p>
                </div>
              </div>

              {/* ACCOUNT ROLE */}
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/40 border border-[#dfcbaf]/40">
                <div className="p-2.5 rounded-xl bg-[#2c221e]/5 text-[#2c221e] mt-0.5">
                  <User size={18} />
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#2c221e]/50">Marketplace Role</p>
                  <p className="text-sm font-bold text-[#2c221e] uppercase tracking-wide">{user.role}</p>
                  <p className="text-xs font-medium text-[#2c221e]/60">Authorized to list and sell items</p>
                </div>
              </div>

            </div>

          </div>
        </Card>
      </div>
    </div>
  );
}