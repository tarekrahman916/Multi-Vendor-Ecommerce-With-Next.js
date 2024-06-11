import {
  AlignJustify,
  Bell,
  LayoutDashboard,
  Sun,
  User,
  X,
} from "lucide-react";
import profile from "../../../public/user.png";
import Image from "next/image";

import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  UserPlus,
  Users,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ThemeSwitcherBtn from "../ThemeSwitcherBtn";
import Link from "next/link";

export default function Navbar({
  showSidebar,
  setShowSidebar,
}: {
  showSidebar: any;
  setShowSidebar: any;
}) {
  return (
    <div className="">
      <div className="flex items-center  p justify-between bg-white dark:bg-slate-800 text-slate-50 h-20 px-8 py-8  fixed top-0 w-full z-50 sm:pr-[18rem]">
        <div className="flex items-center gap-5">
          <Link href={"/dashboard"} className="sm:hidden">
            EFY Mart
          </Link>
          {/* Icon */}
          <button className="text-lime-800 dark:text-lime-500">
            <AlignJustify onClick={() => setShowSidebar(!showSidebar)} />
          </button>
        </div>
        {/* 3 Icon  */}
        <div className="flex space-x-3 text-green-600">
          {/* <button>
            <Sun />
          </button> */}
          <ThemeSwitcherBtn />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="relative inline-flex items-center p-3 text-sm font-medium text-center  bg-transparent rounded-lg  "
              >
                <Bell />
                <span className="sr-only">Notifications</span>
                <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500  rounded-full -top-0 end-6 dark:border-gray-900">
                  20
                </div>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className=" mr-8 bg-slate-900 text-slate-50">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem className="bg-slate-900 ">
                  <div className="flex items-center space-x-2 ">
                    <Image
                      src={profile}
                      alt="User profile"
                      width={200}
                      height={200}
                      className="w-8 h-8 rounded-full"
                    />
                    <div className="flex flex-col space-y-1">
                      <p>Yellow sweet corn stock out</p>
                      <div className="flex items-center space-x-2">
                        <p className="px-2 py-.5 text-sm bg-red-700 rounded-full">
                          Stock Out
                        </p>
                        <p>Dec 12 2024 - 12.40PM</p>
                      </div>
                    </div>
                    <button>
                      <X />
                    </button>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="bg-slate-900 ">
                  <div className="flex items-center space-x-2 ">
                    <Image
                      src={profile}
                      alt="User profile"
                      width={200}
                      height={200}
                      className="w-8 h-8 rounded-full"
                    />
                    <div className="flex flex-col space-y-1">
                      <p>Yellow sweet corn stock out</p>
                      <div className="flex items-center space-x-2">
                        <p className="px-2 py-.5 text-sm bg-red-700 rounded-full">
                          Stock Out
                        </p>
                        <p>Dec 12 2024 - 12.40PM</p>
                      </div>
                    </div>
                    <button>
                      <X />
                    </button>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Image
                  src={profile}
                  alt="User profile"
                  width={200}
                  height={200}
                  className="w-8 h-8 rounded-full"
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 mr-8 bg-slate-900 text-slate-50">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <button className="flex items-center space-x-2">
                      <LayoutDashboard className="mr-2 h-4 w-4" />
                      <span>Dashboard</span>
                    </button>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <button className="flex items-center space-x-2">
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Edit Profile</span>
                    </button>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <button className="flex items-center space-x-2">
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </button>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </button>
        </div>
      </div>
    </div>
  );
}
