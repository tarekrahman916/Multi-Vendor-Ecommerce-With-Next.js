"use client";

import { Button, Navbar } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo1.png";
import SearchForm from "./SearchForm";
import { HelpCircle, ShoppingCart, User } from "lucide-react";
import ThemeSwitcherBtn from "../ThemeSwitcherBtn";
import HelpModal from "./HelpModal";

export default function NavbarTwo() {
  return (
    <div className="bg-white dark:bg-slate-700">
      <Navbar fluid rounded className="">
        <Navbar.Brand href="/">
          <Image src={logo} alt="EFY logo" className="w-32" />
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Link
            href="/login"
            className="flex items-center space-x-1 text-green-950 dark:text-slate-100"
          >
            <User />
            <span>Login</span>
          </Link>

          <HelpModal />
          <Link
            href="/cart"
            type="button"
            className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-transparent rounded-lg "
          >
            <ShoppingCart className="text-lime-700 dark:text-lime-500" />
            <span className="sr-only">Cart</span>
            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500  rounded-full -top-0 end-6 dark:border-gray-900">
              20
            </div>
          </Link>
          <ThemeSwitcherBtn />
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          {/* <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link> */}

          <SearchForm />
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
