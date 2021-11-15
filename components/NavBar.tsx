import React from "react";
import Image from "next/image";
import Link from "next/link";

export const NavBar = () => {
  return (
    <div>
      <Image src="/vercel.svg" alt="Logo" width={100} height={75} />
      <nav>
        <Link href="#">Home</Link>
      </nav>
    </div>
  );
};
