"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuMutedTriggerStyle,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import {
  menuButtonVariants,
  collapseButtonVariants,
  expandedMenuVariants,
  navItemVariants,
  colourOneButtonVariants,
  searchButtonVariants,
  mobileNavWrapperVariants,
  mobileMenuButtonVariants,
  mobileCollapseButtonVariants,
  mobileExpandedMenuVariants,
  mobileNavItemVariants,
} from "@/app/utils/motionVariants";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/special-projects", label: "Special Projects" },
  { href: "/services", label: "Services" },
  { href: "/articles", label: "Articles" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const pathname = usePathname();
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  const desktopMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const expandMenu = useCallback(() => {
    setIsMenuExpanded(true);
  }, []);

  const collapseMenu = useCallback(
    (event: React.MouseEvent, duration?: number) => {
      if (!duration) {
        setIsMenuExpanded(false);
      } else {
        setTimeout(() => {
          setIsMenuExpanded(false);
        }, duration);
      }
    },
    []
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuExpanded &&
        desktopMenuRef.current &&
        !desktopMenuRef.current.contains(event.target as Node) &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMenuExpanded(false);
      }
    };

    if (isMenuExpanded) {
      // Use capture phase to ensure we get the event before other handlers
      document.addEventListener("mousedown", handleClickOutside, true);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside, true);
    };
  }, [isMenuExpanded]);

  const handleMobileBackgroundClick = useCallback(() => {
    if (isMenuExpanded) {
      setTimeout(() => {
        setIsMenuExpanded(false);
      }, 20);
    }
  }, [isMenuExpanded]);

  return (
    <NavigationMenu
      ref={desktopMenuRef}
      viewport={false}
      className="min-w-full"
    >
      <div className="container py-4 hidden sm:flex justify-between overflow-x-hidden">
        <NavigationMenuList>
          <motion.div
            variants={menuButtonVariants}
            initial="collapsed"
            animate={isMenuExpanded ? "expanded" : "collapsed"}
          >
            <AnimatePresence mode="wait">
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle}
                  onClick={expandMenu}
                >
                  <Button
                    variant="ghost"
                    className="transition-all hover:bg-transparent cursor-pointer"
                  >
                    Menu
                  </Button>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </AnimatePresence>
          </motion.div>
          <div className="w-0 flex absolute z-1000 top-0 static items-center">
            {/* Collapse button */}
            <motion.div
              key="collapse-button"
              variants={collapseButtonVariants}
              initial="collapsed"
              animate={isMenuExpanded ? "expanded" : "collapsed"}
              exit="collapsed"
            >
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuMutedTriggerStyle}
                  onClick={collapseMenu}
                >
                  <Button
                    variant="ghost"
                    className="transition-all hover:bg-transparent cursor-pointer"
                  >
                    Close
                  </Button>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </motion.div>

            {/* Parent of expanded menu items */}
            <motion.div
              className="flex w-0"
              initial="hidden"
              animate={isMenuExpanded ? "visible" : "hidden"}
              variants={expandedMenuVariants}
            >
              {navItems.map((navItem, index) => (
                <motion.div
                  key={`${navItem.href}-${index}`}
                  variants={navItemVariants}
                  custom={index}
                >
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      asChild
                      className={navigationMenuTriggerStyle}
                      active={pathname === navItem.href}
                    >
                      <Link href={navItem.href} className="text-lg">
                        <span
                          className={`transition-all duration-150 ease-in-out ${
                            pathname === navItem.href
                              ? "font-bold"
                              : "font-light"
                          }`}
                        >
                          {navItem.label}
                        </span>
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </NavigationMenuList>
        <NavigationMenuList>
          <motion.div
            variants={colourOneButtonVariants}
            initial="visible"
            animate={isMenuExpanded ? "hidden" : "visible"}
          >
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle}
              >
                <Link href="/" className="text-lg">
                  Colour One
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </motion.div>
        </NavigationMenuList>
        <NavigationMenuList>
          <motion.div
            variants={searchButtonVariants}
            initial="visible"
            animate={isMenuExpanded ? "hidden" : "visible"}
          >
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle}
              >
                <Link href="#" className="text-lg">
                  Search
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </motion.div>
        </NavigationMenuList>
      </div>

      {/* Mobile nav menu */}
      <motion.div
        ref={mobileMenuRef}
        className="backdrop-blur-xl sm:hidden container bg-background absolute top-0 z-1000 py-4 flex justify-between overflow-hidden h-[100vh]"
        initial="collapsed"
        variants={mobileNavWrapperVariants}
        animate={isMenuExpanded ? "expanded" : "collapsed"}
        onClick={handleMobileBackgroundClick}
      >
        <NavigationMenuList>
          <motion.div
            variants={mobileMenuButtonVariants}
            initial="collapsed"
            animate={isMenuExpanded ? "expanded" : "collapsed"}
          >
            <AnimatePresence mode="wait">
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle}
                  onClick={expandMenu}
                >
                  <Button
                    variant="ghost"
                    className="transition-all hover:bg-transparent cursor-pointer"
                  >
                    Menu
                  </Button>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </AnimatePresence>
          </motion.div>
          <div className="w-0 absolute z-1000 top-0 items-center">
            {/* Collapse button */}
            <motion.div
              key="collapse-button"
              variants={mobileCollapseButtonVariants}
              initial="collapsed"
              animate={isMenuExpanded ? "expanded" : "collapsed"}
              exit="collapsed"
            >
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle}
                  onClick={collapseMenu}
                >
                  <Button
                    variant="ghost"
                    className="transition-all hover:bg-transparent cursor-pointer"
                  >
                    Close
                  </Button>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </motion.div>

            {/* Parent of expanded menu items */}
            <motion.div
              initial="hidden"
              animate={isMenuExpanded ? "visible" : "hidden"}
              variants={mobileExpandedMenuVariants}
              className="flex flex-col gap-4 pt-4"
            >
              {navItems.map((navItem, index) => (
                <motion.div
                  key={`${navItem.href}-${index}`}
                  variants={mobileNavItemVariants}
                  custom={index}
                >
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      asChild
                      className={`${navigationMenuTriggerStyle} bg-none`}
                      active={pathname === navItem.href}
                      onClick={(e) => collapseMenu(e, 150)}
                    >
                      <Link className="text-xl" href={navItem.href}>
                        <span
                          className={`transition-all duration-150 ease-in-out ${
                            pathname === navItem.href
                              ? "font-bold"
                              : "font-light"
                          }`}
                        >
                          {navItem.label}
                        </span>
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </NavigationMenuList>
        <NavigationMenuList>
          <motion.div
            variants={colourOneButtonVariants}
            initial="visible"
            animate={isMenuExpanded ? "hidden" : "visible"}
          >
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle}
              >
                <Link href="/">Colour One</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </motion.div>
        </NavigationMenuList>
        <NavigationMenuList>
          <motion.div
            variants={searchButtonVariants}
            initial="visible"
            animate={isMenuExpanded ? "hidden" : "visible"}
          >
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle}
                onClick={expandMenu}
              >
                <Link href="#">Search</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </motion.div>
        </NavigationMenuList>
      </motion.div>
    </NavigationMenu>
  );
}

export default React.memo(Navigation);
