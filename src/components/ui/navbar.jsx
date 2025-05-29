"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
} from "./resizable-navbar";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

export default function NavbarDemo() {
  const navItems = [
    { name: "Home", link: "#hero" },
    { name: "About Me", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              className="px-4 py-2 rounded-md bg-white button bg-white text-black text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center"
            >
              Let's Talk
            </ScrollLink>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <ScrollLink
                key={`mobile-link-${idx}`}
                to={item.link.replace("#", "")}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300 cursor-pointer"
              >
                <span className="block">{item.name}</span>
              </ScrollLink>
            ))}
            <div className="flex w-full flex-col gap-4">
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                offset={-70}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-2 rounded-md bg-white button bg-white text-black text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center w-full"
              >
                Let's Talk
              </ScrollLink>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
