import Image from "next/image";
import React from "react";
import Nav from "./components/Nav";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-5">
      <div className="relative w-12 h-12">
        <Image
          src="/main-logo.png"
          alt="logo"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <Nav />
    </div>
  );
};

export default Header;
