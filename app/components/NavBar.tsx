"use client";
import React from "react";
import logo from "../assets/logo.png";
import facebook from "../assets/Facebook.png";
import instagram from "../assets/Instagram.png";
import twitter from "../assets/Twitter.png";
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";

export default function NavBar() {
  const pathName = usePathname();
  return (
    <nav className="bg-white w-full fixed z-10">
      <section className="container mx-auto flex  items-center justify-between p-2">
        <Image
          src={logo}
          className="w-32 "
          alt="logo"
          width={300}
          height={300}
        />

        <section className="flex justify-between gap-4 text-black">
          {pathName != "/" && <Link href="/">Home</Link>}
          <Link className="hover:text-main " href="">
            Enter the Community
          </Link>
          <Link className="hover:text-main " href="">
            Contact
          </Link>
          <section className="flex items-center">
            <Link className="" href="https://facebook.com">
              {" "}
              <Image
                src={facebook}
                width={100}
                height={100}
                alt="Facebook Icon"
                className="w-8 h-8"
              />
            </Link>
            <Link className="" href="https://instagram.com">
              <Image
                src={instagram}
                width={100}
                height={100}
                alt="Instagram Icon"
                className="w-8 h-8"
              />
            </Link>
            <Link className="" href="https://twitter.com">
              {" "}
              <Image
                src={twitter}
                width={100}
                height={100}
                alt="Twitter Icon"
                className="w-8 h-8"
              />
            </Link>
          </section>
        </section>
      </section>
    </nav>
  );
}
