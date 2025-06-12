"use client";

import React, { useCallback, useMemo, useState } from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home " },
  { href: "/special-projects", label: "Special Projects" },
  { href: "/services", label: "Services" },
  { href: "/articles", label: "Articles" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const pathname = usePathname();
  const [isExpanded, setIsExpanded] = useState(false);

  const expandMenu = useCallback(() => {
    setIsExpanded(true);
  }, []);

  const collapseMenu = useCallback(() => {
    setIsExpanded(false);
  }, []);

  const collapsedMenu = useMemo(
    () => (
      <NavigationMenu viewport={false}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()} onClick={expandMenu}>
              <Link href="#">Menu</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    ),
    [expandMenu]
  );

  const expandedMenu = useMemo(
    () =>
      navItems.map((navItem, index) => (
        <NavigationMenuItem key={index}>
          <NavigationMenuLink
            asChild
            className={navigationMenuTriggerStyle()}
            active={pathname === navItem.href}
          >
            <Link href={navItem.href}>{navItem.label}</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      )),
    [pathname]
  );

  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        {isExpanded ? (
          <>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()} onClick={collapseMenu}>
                <Link href="#">Collapse</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            {expandedMenu}
          </>
        ) : (
          collapsedMenu
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default React.memo(Navigation);
