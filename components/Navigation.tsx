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
  const [isDesktopMenuExpanded, setIsDesktopMenuExpanded] = useState(false);
  const [isMobileMenuExpanded, setIsMobileMenuExpanded] = useState(false);

  const desktopMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const expandDesktopMenu = useCallback(() => {
    setIsDesktopMenuExpanded(true);
  }, []);

  const expandMobileMenu = useCallback(() => {
    setIsMobileMenuExpanded(true);
  }, []);

  const collapseDesktopMenu = useCallback(
    (event: React.MouseEvent, duration?: number) => {
      if (!duration) {
        setIsDesktopMenuExpanded(false);
      } else {
        setTimeout(() => {
          setIsDesktopMenuExpanded(false);
        }, duration);
      }
    },
    []
  );

  useEffect(() => {
    const handleClickOutsideDesktopMenu = (event: MouseEvent) => {
      if (
        isDesktopMenuExpanded &&
        desktopMenuRef.current &&
        !desktopMenuRef.current.contains(event.target as Node)
      ) {
        setIsDesktopMenuExpanded(false);
      }
    };

    if (isDesktopMenuExpanded) {
      // Use capture phase to ensure we get the event before other handlers
      document.addEventListener(
        "mousedown",
        handleClickOutsideDesktopMenu,
        true
      );
    }

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutsideDesktopMenu,
        true
      );
    };
  }, [isDesktopMenuExpanded]);

  const handleMobileBackgroundClick = useCallback(() => {
    if (isMobileMenuExpanded) {
      setTimeout(() => {
        setIsMobileMenuExpanded(false);
      }, 20);
    }
  }, [isMobileMenuExpanded]);

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
            animate={isDesktopMenuExpanded ? "expanded" : "collapsed"}
          >
            <AnimatePresence mode="wait">
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle}
                  onClick={expandDesktopMenu}
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
              animate={isDesktopMenuExpanded ? "expanded" : "collapsed"}
              exit="collapsed"
            >
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuMutedTriggerStyle}
                  onClick={collapseDesktopMenu}
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
              animate={isDesktopMenuExpanded ? "visible" : "hidden"}
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
            animate={isDesktopMenuExpanded ? "hidden" : "visible"}
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
            animate={isDesktopMenuExpanded ? "hidden" : "visible"}
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
        animate={isMobileMenuExpanded ? "expanded" : "collapsed"}
        onClick={handleMobileBackgroundClick}
      >
        <NavigationMenuList>
          <motion.div
            variants={mobileMenuButtonVariants}
            initial="collapsed"
            animate={isMobileMenuExpanded ? "expanded" : "collapsed"}
          >
            <AnimatePresence mode="wait">
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle}
                  onClick={expandMobileMenu}
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
              animate={isMobileMenuExpanded ? "expanded" : "collapsed"}
              exit="collapsed"
            >
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle}
                  onClick={collapseDesktopMenu}
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
              animate={isMobileMenuExpanded ? "visible" : "hidden"}
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
                      onClick={(e) => collapseDesktopMenu(e, 150)}
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
            animate={isMobileMenuExpanded ? "hidden" : "visible"}
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
            animate={isMobileMenuExpanded ? "hidden" : "visible"}
          >
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle}
                onClick={expandMobileMenu}
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
