"use client";

import React, { useCallback, useState } from "react";
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

const navItems = [
  { href: "/special-projects", label: "Special Projects" },
  { href: "/services", label: "Services" },
  { href: "/articles", label: "Articles" },
  { href: "/contact", label: "Contact" },
];

const menuButtonVariants = {
  expanded: {
    opacity: 0,
    x: -10,
    pointerEvents: "none",
    scale: 0.8,
    width: 100,
    zIndex: 100,
    display: "none",
    transition: {
      duration: 0,
      ease: "easeInOut" as const,
    },
  },
  collapsed: {
    display: "block",
    opacity: 1,
    pointerEvents: "auto",
    scale: 1,
    width: 100,
    zIndex: 0,
    transition: {
      duration: 0,
      ease: "easeInOut" as const,
    },
  },
};

const expandedMenuVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: "easeInOut" as const,
      staggerChildren: 0.05,
    },
  },
};

const collapseButtonVariants = {
  collapsed: {
    opacity: 0,
    x: -20,
    width: 100,
    display: "none",
    pointerEvents: "none",
    transition: {
      duration: 0,
      ease: "easeInOut" as const,
    },
  },
  expanded: {
    opacity: 1,
    x: 0,
    width: 100,
    display: "block",
    pointerEvents: "auto",
    transition: {
      duration: 0,
      ease: "easeOut" as const,
    },
  },
};

const colourOneButtonVariants = {
  hidden: {
    opacity: 0,
    x: 20,
    transition: {
      duration: 0.2,
      ease: "easeOut" as const,
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.2,
      ease: "easeOut" as const,
    },
  },
};

const searchButtonVariants = {
  hidden: {
    opacity: 0,
    x: 20,
    transition: {
      duration: 0.3,
      ease: "easeOut" as const,
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.2,
      ease: "easeOut" as const,
    },
  },
};

export function Navigation() {
  const pathname = usePathname();
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);

  const expandMenu = useCallback(() => {
    console.log("@@expand");
    setIsMenuExpanded(true);
  }, []);

  const collapseMenu = useCallback(() => {
    console.log("@@collapse");
    setIsMenuExpanded(false);
  }, []);

  return (
    <NavigationMenu
      viewport={false}
      className="container py-4 max-w-full flex justify-between overflow-x-hidden"
    >
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
                className={navigationMenuTriggerStyle()}
                onClick={expandMenu}
              >
                <Button variant="ghost">Menu</Button>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </AnimatePresence>
        </motion.div>
        <div className="w-0 flex items-center">
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
                className={navigationMenuMutedTriggerStyle()}
                onClick={collapseMenu}
              >
                <Button variant="ghost">Collapse</Button>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </motion.div>

          {/* Parent of expanded menu items */}
          <motion.div
            className="flex"
            initial="hidden"
            animate={isMenuExpanded ? "visible" : "hidden"}
            variants={expandedMenuVariants}
          >
            {navItems.map((navItem, index) => (
              <motion.div
                key={`${navItem.href}-${index}`}
                variants={{
                  hidden: {
                    opacity: 0,
                    x: -20,
                    pointerEvents: "none",
                    transition: {
                      duration: 0.3,
                      ease: "easeInOut",
                    },
                  },
                  visible: {
                    opacity: 1,
                    x: 0,
                    pointerEvents: "auto",
                    transition: {
                      duration: 0.3,
                      ease: "easeOut",
                    },
                  },
                }}
                custom={index}
              >
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                    active={pathname === navItem.href}
                  >
                    <Link href={navItem.href}>{navItem.label}</Link>
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
              className={navigationMenuTriggerStyle()}
              onClick={expandMenu}
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
              className={navigationMenuTriggerStyle()}
              onClick={expandMenu}
            >
              <Link href="#">Search</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </motion.div>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default React.memo(Navigation);
