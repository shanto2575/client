"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  Description,
  FieldError,
  Fieldset,
  Form,
  Input,
  Label,
  Surface,
  TextField,
} from "@heroui/react";
import React from "react";
import { motion } from "motion/react";
import { Sparkles, Calendar, ArrowUpRight } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

export default function SignInPage() {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    await authClient.signIn.email({
      ...user,
      callbackURL: "/",
    });
  };

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  return (
    <div className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-10 bg-[#ebdcc9] text-[#2c221e] overflow-hidden select-none">
      <div className="hidden lg:flex lg:col-span-4 relative flex-col justify-between p-15 pr-4 overflow-hidden ">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-[#dfcbaf]/30 rounded-full blur-[100px] pointer-events-none"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 60, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 -right-10 w-[350px] h-[350px] bg-white/20 rounded-full blur-[120px] pointer-events-none"
        />
        <div className="space-y-6 relative z-10 my-auto">
          <motion.div
            initial={{ opacity: 0, x: -30, filter: "blur(5px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ type: "spring", stiffness: 70, damping: 16, delay: 0.1 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#2c221e]/5 border border-[#dfcbaf] text-[#2c221e]/80 uppercase tracking-wider mb-4">
              <Sparkles size={12} className="text-[#2c221e]" /> Welcome back
            </span>
            <h1 className="text-4xl xl:text-5xl font-black tracking-tight leading-[1.1] uppercase">
              Unlock Elite <br />
              <span className="bg-gradient-to-r from-[#2c221e] via-[#5c4a41] to-[#2c221e] bg-clip-text text-transparent">Experiences</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, filter: "blur(4px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ delay: 0.3 }}
            className="text-sm font-medium text-[#2c221e]/70 max-w-sm leading-relaxed"
          >
            Sign in to manage your premium events, seamless ticket check-ins, and orchestrate top-tier analytics platforms.
          </motion.p>
        </div>
      </div>

      <div className="lg:col-span-6 flex items-center justify-center p-6 sm:p-12 md:p-16 pl-4 lg:pl-8 relative bg-white/5 backdrop-blur-sm">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#dfcbaf]/15 rounded-full blur-[130px] -z-10 pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          transition={{ type: "spring", stiffness: 85, damping: 17 }}
          className="w-full max-w-xl"
        >
          <Surface className="w-full p-10 md:p-12 rounded-3xl border border-[#dfcbaf] bg-white/20 backdrop-blur-xl shadow-[0_25px_50px_-12px_rgba(44,34,30,0.06)]">
            <Form onSubmit={onSubmit} className="w-full">
              <Fieldset className="w-full space-y-8">
                <div className="space-y-2 pb-4 border-b border-[#dfcbaf]/50">
                  <Fieldset.Legend className="text-3xl font-black uppercase tracking-tight text-[#2c221e]">
                    Sign In
                  </Fieldset.Legend>
                  <Description className="text-sm font-semibold text-[#2c221e]/60">
                    Access your secure organizer or attendee dashboard
                  </Description>
                </div>

                <Fieldset.Group className="space-y-5">
                  <TextField isRequired name="email" type="email" className="w-full">
                    <Label className="text-xs font-bold uppercase tracking-widest text-[#2c221e]/80 mb-2 block">Email Address</Label>
                    <Input
                      placeholder="john@example.com"
                      variant="secondary"
                      className="w-full bg-[#ebdcc9]/40 border border-[#dfcbaf] hover:border-[#2c221e]/40 focus:border-[#2c221e] rounded-xl text-base font-medium text-[#2c221e] transition-all duration-200 py-1.5"
                    />
                    <FieldError className="text-xs font-semibold text-red-700 mt-1" />
                  </TextField>

                  <TextField isRequired name="password" type="password" className="w-full">
                    <div className="flex items-center justify-between mb-2">
                      <Label className="text-xs font-bold uppercase tracking-widest text-[#2c221e]/80 block">Password</Label>
                      <span className="text-xs font-bold text-[#2c221e]/60 hover:text-[#2c221e] cursor-pointer transition-colors">Forgot?</span>
                    </div>
                    <Input
                      placeholder="••••••••"
                      variant="secondary"
                      className="w-full bg-[#ebdcc9]/40 border border-[#dfcbaf] hover:border-[#2c221e]/40 focus:border-[#2c221e] rounded-xl text-base font-medium text-[#2c221e] transition-all duration-200 py-1.5"
                    />
                    <FieldError className="text-xs font-semibold text-red-700 mt-1" />
                  </TextField>
                </Fieldset.Group>

                <div className="space-y-5 pt-2">
                  <Button
                    type="submit"
                    className="w-full bg-[#2c221e] text-[#ebdcc9] hover:bg-[#4a3b35] font-bold uppercase tracking-widest py-4 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-1.5 group text-xs"
                  >
                    Enter Platform
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Button>

                  <button
                    type="button"
                    onClick={handleGoogleSignIn}
                    className="w-full flex items-center justify-center gap-3 bg-white/40 hover:bg-white/60 border border-[#dfcbaf] text-[#2c221e] font-bold text-sm py-3.5 rounded-xl transition-all duration-300 shadow-sm cursor-pointer"
                  >
                    <FcGoogle size={20} />
                    Continue with Google
                  </button>

                  <Link href={'/signup'}>
                  <p className="text-center text-sm font-semibold text-[#2c221e]/60 pt-2">
                    Don`t have an account?{" "}
                    <span className="text-[#2c221e] font-bold underline underline-offset-4 cursor-pointer hover:text-[#4a3b35] transition-colors">
                      Create an account
                    </span>
                  </p>
                  </Link>
                </div>
              </Fieldset>
            </Form>
          </Surface>
        </motion.div>
      </div>
    </div>
  );
}