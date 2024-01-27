"use client";
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link} from "@nextui-org/react";
import {  NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem} from "@nextui-org/react";


export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Games",
    "FAQs",
    "Refer & Earn",
    "Ludo Tournament",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className=" bg-[#210c3688] font-bold text-inherit">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          
          <p className="font-bold text-inherit justify-start">LOGO</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex justify-end gap-7 " >
        <NavbarItem>
          <Link href="/" aria-current="page" className="text-white">
            Games
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/faqs" className=" text-white px-2">
            FAQs
          </Link>
        </NavbarItem>
        <NavbarItem>
        <Link href="/refer" className=" text-white">
            Refer & Earns
          </Link>
        </NavbarItem>
        <NavbarItem>
        <Link href="/ludo" className=" text-white">
           Ludo Tournament
          </Link>
        </NavbarItem>
      </NavbarContent>
      
      <NavbarMenu className=" bg-[#210c3688]">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full text-white font-bold py-3 pointer"
              href="/"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
