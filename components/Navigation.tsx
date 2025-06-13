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

const navItems = [
  { href: "/special-projects", label: "Special Projects" },
  { href: "/services", label: "Services" },
  { href: "/articles", label: "Articles" },
  { href: "/contact", label: "Contact" },
];

// Animation variants - Fixed to prevent jumping
const menuButtonVariants = {
  expanded: {
    opacity: 0,
    x: -10,
    pointerEvents: "none",
    scale: 0.8,
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
    zIndex: 0,
    transition: {
      duration: 0,
      ease: "easeInOut" as const,
    },
  },
};

const containerVariants = {
  collapsed: {
    width: 0,
    transition: {
      duration: 0,
      ease: "easeInOut" as const,
      staggerChildren: 0.5,
      staggerDirection: -1 as const,
    },
  },
  expanded: {
    width: 'auto',
    transition: {
      duration: 0,
      ease: "easeInOut" as const,
      staggerChildren: 0.1,
    },
  },
};

const listVariants = {
  collapsed: {
    gap: 0,
    transition: {
      duration: 0,
      ease: "easeInOut" as const,
    },
  },
  expanded: {
    gap: 8,
    transition: {
      duration: 0.3,
      ease: "easeInOut" as const,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  collapsed: {
    opacity: 0,
    x: -20,
    pointerEvents: "none",
    transition: {
      duration: 0,
      ease: "easeInOut" as const,
    },
  },
  expanded: {
    opacity: 1,
    x: 0,
    pointerEvents: "auto",
    transition: {
      duration: 0.3,
      ease: "easeOut" as const,
    },
  },
};

const collapseButtonVariants = {
  collapsed: {
    opacity: 0,
    x: -20,
    pointerEvents: "none",
    transition: {
      duration: 0,
      ease: "easeInOut" as const,
    },
  },
  expanded: {
    opacity: 1,
    x: 0,
    pointerEvents: "auto",
    transition: {
      duration: 0.3,
      ease: "easeOut" as const,
    },
  },
};

export function Navigation() {
  const pathname = usePathname();
  const [isExpanded, setIsExpanded] = useState(false);

  const expandMenu = useCallback(() => {
    console.log("@@expand");
    setIsExpanded(true);
  }, []);

  const collapseMenu = useCallback(() => {
    console.log("@@collapse");
    setIsExpanded(false);
  }, []);

  return (
    <NavigationMenu viewport={false} className="w-full max-w-full flex justify-between">
      <NavigationMenuList>
        <motion.div
          variants={menuButtonVariants}
          initial="collapsed"
          animate={isExpanded ? "expanded" : "collapsed"}
        >
          <AnimatePresence mode="wait">
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
                onClick={expandMenu}
              >
                <Link href="#">Menu</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </AnimatePresence>
        </motion.div>
        <motion.div
          variants={containerVariants}
          animate={isExpanded ? "expanded" : "collapsed"}
          style={{width: 0}}
        >
          <motion.div
            variants={listVariants}
            animate={isExpanded ? "expanded" : "collapsed"}
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key="collapse-button"
                variants={collapseButtonVariants}
                initial="collapsed"
                animate={isExpanded ? "expanded" : "collapsed"}
                exit="collapsed"
              >
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuMutedTriggerStyle()}
                    onClick={collapseMenu}
                  >
                    <Link href="#">Collapse</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence>
              {navItems.map((navItem, index) => (
                <motion.div
                  key={`${navItem.href}-${index}`}
                  variants={itemVariants}
                  initial="collapsed"
                  animate={isExpanded ? "expanded" : "collapsed"}
                  exit="collapsed"
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
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </NavigationMenuList>
      <NavigationMenuList>
        <motion.div
          variants={menuButtonVariants}
          initial="collapsed"
          animate={isExpanded ? "expanded" : "collapsed"}
        >
          <AnimatePresence mode="wait">
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
                onClick={expandMenu}
              >
                <Link href="/">Colour One</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </AnimatePresence>
        </motion.div>
      </NavigationMenuList>
      <NavigationMenuList>
        <motion.div
          variants={menuButtonVariants}
          initial="collapsed"
          animate={isExpanded ? "expanded" : "collapsed"}
        >
          <AnimatePresence mode="wait">
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
                onClick={expandMenu}
              >
                <Link href="#">Search</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </AnimatePresence>
        </motion.div>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default React.memo(Navigation);
