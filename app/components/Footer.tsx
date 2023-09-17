import React from "react";
import Image from "next/image";
import logo from "../assets/logo.png";
import Link from "next/link";

export default function footer() {
  return (
    <footer className=" bg-white">
      <section className=" container mx-auto p-4 text-black ">
        <section className="flex justify-between items-center">
          <Image className="w-32 " src={logo} alt="footer" />
          <section className="flex gap-20 justify-center w-full">
            <Link className="hover:text-main " href="">
              About Us
            </Link>
            <Link className="hover:text-main " href="">
              Contact
            </Link>
            <Link className="hover:text-main " href="">
              FAQ
            </Link>
            <Link className="hover:text-main " href="">
              Legal disclosure
            </Link>
            <Link className="hover:text-main " href="">
              Privacy policy
            </Link>
          </section>
        </section>
        <p className="w-full text-center">
          Copyright @2023 youChef. All rights reserved
        </p>
      </section>
    </footer>
  );
}
