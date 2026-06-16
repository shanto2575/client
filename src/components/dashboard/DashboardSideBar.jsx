'use client'
import { ComponentType, SVGProps } from "react";
import { Bars } from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";
import Link from "next/link";
import { ChartArea, User2 } from "lucide-react";
import { TbAsset } from "react-icons/tb";
import { BiMoney } from "react-icons/bi";
import { FaHome, FaSignOutAlt } from "react-icons/fa";
import { authClient } from '@/lib/auth-client';
import { useRouter } from "next/navigation";


export default function DashboardSideBar() {
    const route=useRouter()
    const { data: session } = authClient.useSession()
    const user = session?.user;
    const role = user?.role || 'buyer';


    const daashboardItems = {
        seller: [
            { icon: ChartArea, label: "Overview", link: "/dashboard/seller" },
            { icon: TbAsset, label: "Products", link: "/dashboard/seller/products" },
            { icon: BiMoney, label: "Transaction", link: "/dashboard/seller/transaction" },
        ],
        buyer: [
            { icon: ChartArea, label: "Overview", link: "/dashboard/buyer" },
            { icon: TbAsset, label: "Add-Products", link: "/dashboard/buyer/add-products" },
            { icon: BiMoney, label: "Transaction", link: "/dashboard/buyer/transaction" },
        ],
        admin: [
            { icon: ChartArea, label: "Overview", link: "/dashboard/buyer" },
            { icon: User2, label: "User Manage", link: "/dashboard/buyer/products" },
            { icon: BiMoney, label: "Transaction", link: "/dashboard/buyer/transaction" },
        ],
    };

    const navItems = daashboardItems[role] || [];

    const handleLogout = async () => {
        await authClient.signOut()
        route.push('/')
    };



    return (
        <Drawer>
            <Button className="hidden" variant="secondary">
                <Bars />
                Menu
            </Button>
            <div className="flex flex-col h-full justify-between text-[#2c221e]">
                <nav className="flex flex-col gap-1.5">
                    <div className="p-3 space-y-2">
                        <Link href="/">
                            <h2 className="font-black text-2xl uppercase tracking-wider bg-gradient-to-r from-[#2c221e] via-[#4a3b35] to-[#2c221e] bg-clip-text text-transparent">
                                Eventora
                            </h2>
                        </Link>
                        <div className="text-xs font-medium text-[#2c221e]/60 space-y-0.5">
                            <p className="truncate">{user?.email}</p>
                            <p className="uppercase tracking-widest text-[10px] bg-[#2c221e]/5 px-2 py-0.5 rounded inline-block font-bold">
                                {user?.role}
                            </p>
                        </div>
                    </div>

                    {navItems.map((item) => (
                        <Link key={item.label} href={item.link}>
                            <button
                                className="w-full flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-[#2c221e]/80 transition-all duration-200 hover:text-[#2c221e] hover:bg-[#2c221e]/5 group"
                                type="button"
                            >
                                <item.icon className="size-5 text-[#2c221e]/50 group-hover:text-[#2c221e] transition-colors duration-200" />
                                {item.label}
                            </button>
                        </Link>
                    ))}
                </nav>

                <div className="px-1 py-4 border-t border-[#dfcbaf] space-y-1">
                    <Link
                        href="/"
                        className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-bold text-[#2c221e]/70 hover:text-[#2c221e] hover:bg-[#2c221e]/5 transition-all duration-200 group"
                    >
                        <span className="w-9 h-9 rounded-lg bg-[#2c221e]/5 flex items-center justify-center text-[#2c221e]/60 group-hover:bg-[#2c221e] group-hover:text-[#ebdcc9] transition-all duration-200 border border-[#dfcbaf]/30">
                            <FaHome size={14} />
                        </span>
                        Back to Site
                    </Link>

                    
                        <button
                            type="submit"
                            onClick={handleLogout}
                            className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-bold text-[#2c221e]/70 hover:text-red-700 hover:bg-red-500/10 transition-all duration-200 cursor-pointer group"
                        >
                            <span className="w-9 h-9 rounded-lg bg-[#2c221e]/5 flex items-center justify-center text-[#2c221e]/60 group-hover:bg-red-600 group-hover:text-[#ebdcc9] transition-all duration-200 border border-[#dfcbaf]/30">
                                <FaSignOutAlt size={14} />
                            </span>
                            Sign Out
                        </button>
                   
                </div>
            </div>

            <Drawer.Backdrop>
                <Drawer.Content placement="left" className="bg-[#ebdcc9]">
                    <Drawer.Dialog>
                        <Drawer.CloseTrigger />
                        <Drawer.Header>
                            <Drawer.Heading className="text-[#2c221e] font-bold">Navigation</Drawer.Heading>
                        </Drawer.Header>
                        <Drawer.Body>
                            <nav className="flex flex-col gap-1">
                                {navItems.map((item) => (
                                    <Link key={item.label} href={item.link}>
                                        <button
                                            className="w-full flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-[#2c221e]/80 hover:bg-[#2c221e]/5 transition-colors"
                                            type="button"
                                        >
                                            <item.icon className="size-5 text-[#2c221e]/50" />
                                            {item.label}
                                        </button>
                                    </Link>
                                ))}
                            </nav>
                        </Drawer.Body>
                    </Drawer.Dialog>
                </Drawer.Content>
            </Drawer.Backdrop>
        </Drawer>
    );
}