"use client";
import Link from "next/link";
import logo from "../../../public/logo.png";
import Image from "next/image";
import {
  Boxes,
  Building2,
  ChevronDown,
  ChevronRight,
  CircleDollarSign,
  Compass,
  ExternalLink,
  LayoutGrid,
  LayoutList,
  LogOut,
  MonitorPlay,
  ScanSearch,
  SendToBack,
  Settings,
  Slack,
  User,
  UserSquare2,
  Users2,
  Warehouse,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Sidebar({
  showSidebar,
  setShowSidebar,
}: {
  showSidebar: boolean;
  setShowSidebar: any;
}) {
  const pathname = usePathname();
  const sidebarLinks = [
    {
      title: "Customers",
      icon: Users2,
      href: "/dashboard/customers",
    },

    {
      title: "Markets",
      icon: Warehouse,
      href: "/dashboard/markets",
    },
    {
      title: "Suppliers",
      icon: UserSquare2,
      href: "/dashboard/suppliers",
    },
    {
      title: "Orders",
      icon: Compass,
      href: "/dashboard/orders",
    },
    {
      title: "Our Staff",
      icon: User,
      href: "/dashboard/staff",
    },
    {
      title: "EFY Community",
      icon: Building2,
      href: "/dashboard/community",
    },

    {
      title: "Wallet",
      icon: CircleDollarSign,
      href: "/dashboard/wallet",
    },
    {
      title: "Settings",
      icon: Settings,
      href: "/dashboard/settings",
    },
    {
      title: "Online Store",
      icon: ExternalLink,
      href: "/",
    },
  ];
  const catalogueLinks = [
    {
      title: "Products",
      icon: Boxes,
      href: "/dashboard/products",
    },
    {
      title: "Categories",
      icon: LayoutList,
      href: "/dashboard/categories",
    },
    // {
    //   title: "Attributes",
    //   icon: SendToBack,
    //   href: "/dashboard/attributes",
    // },
    {
      title: "Coupons",
      icon: ScanSearch,
      href: "/dashboard/coupons",
    },
    {
      title: "Store sliders",
      icon: MonitorPlay,
      href: "/dashboard/sliders",
    },
  ];

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div
      className={
        showSidebar
          ? " sm:block mt-20 sm:mt-0 dark:bg-slate-800 bg-white  w-64  h-screen fixed top-0 left-0 z-30 text-slate-800 dark:text-slate-300 shadow-md overflow-y-scroll"
          : "mt-20 hidden sm:block sm:mt-0  dark:bg-slate-800 bg-white  w-64  h-screen fixed top-0 left-0 z-30 text-slate-800 dark:text-slate-300 shadow-md overflow-y-scroll"
      }
    >
      <div className="px-6 py-4">
        <Link
          onClick={() => setShowSidebar(false)}
          href="/dashboard"
          className=""
        >
          <Image
            src={logo}
            alt="logo"
            width={100}
            height={100}
            className="w-40"
          />
        </Link>
      </div>
      <div className="space-y-2 flex flex-col">
        <Link
          onClick={() => setShowSidebar(false)}
          href="/dashboard"
          className={
            pathname === "/dashboard"
              ? " flex items-center space-x-3 px-6 py-2 border-l-4 border-lime-600 text-lime-500"
              : "flex items-center space-x-3 px-6 py-2 "
          }
        >
          <LayoutGrid />
          <span>Dashboard</span>
        </Link>

        <Collapsible className="px-6 py-2 ">
          <CollapsibleTrigger
            onClick={() => setOpenMenu(!openMenu)}
            className="flex items-center space-x-6  py-2 "
          >
            <div className="flex items-center space-x-3">
              <Slack />
              <span>Catalogue</span>
            </div>
            {openMenu ? <ChevronDown /> : <ChevronRight />}
          </CollapsibleTrigger>
          <CollapsibleContent className="px-3 py-3 pl-6 dark:bg-slate-800 rounded-lg mt-2">
            {catalogueLinks.map((item, i) => {
              const Icon = item.icon;
              return (
                <Link
                  onClick={() => setShowSidebar(false)}
                  key={i}
                  href={item.href}
                  className={
                    pathname === item.href
                      ? " flex items-center space-x-3  py-1  text-lime-500 text-sm"
                      : "flex items-center space-x-3  py-1 text-sm"
                  }
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.title}</span>
                </Link>
              );
            })}
          </CollapsibleContent>
        </Collapsible>

        {sidebarLinks.map((item, i) => {
          const Icon = item.icon;
          return (
            <Link
              onClick={() => setShowSidebar(false)}
              key={i}
              href={item.href}
              className={
                item.href == pathname
                  ? " flex items-center space-x-3 px-6 py-2 border-l-4 border-lime-600 text-lime-500"
                  : "flex items-center space-x-3 px-6 py-2 "
              }
            >
              <Icon />
              <span>{item.title}</span>
            </Link>
          );
        })}
        <div className="px-6 py-2">
          <button className="flex items-center space-x-3 px-8 py-2 bg-lime-600 rounded-md">
            <LogOut />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}
