"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Search, X, ArrowRight } from "lucide-react";
import { searchData } from "@/app/data/searchData";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/special-projects", label: "Special Projects" },
  { href: "/articles", label: "Articles" },
  { href: "/contact", label: "Contact" },
  { href: "/about", label: "About" },
];

export function Navigation() {
  const pathname = usePathname();
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<typeof searchData>([]);
  const menuRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const expandMenu = useCallback(() => {
    setIsMenuExpanded(true);
  }, []);

  const collapseMenu = useCallback(() => {
    setIsMenuExpanded(false);
  }, []);

  const expandSearch = useCallback(() => {
    setIsSearchExpanded(true);
    // Focus the input after the modal is rendered
    setTimeout(() => {
      searchInputRef.current?.focus();
    }, 100);
  }, []);

  const collapseSearch = useCallback(() => {
    setIsSearchExpanded(false);
    setSearchQuery("");
  }, []);

  const renderSearchResults = () => {
    if (searchQuery.trim() === "") {
      return (
        <div className="text-center text-muted-foreground py-8">
          <p>Start typing to search the website...</p>
        </div>
      );
    }

    if (searchResults.length > 0) {
      return (
        <div className="space-y-4">
          {searchResults.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                href={result.url}
                onClick={collapseSearch}
                className="block p-4 border border-foreground/10 hover:border-foreground/30 transition-all duration-200 group"
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium mb-2 group-hover:text-foreground transition-colors">
                      {result.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {result.description}
                    </p>
                    <span className="text-xs text-foreground/60 uppercase tracking-wide">
                      {result.category} • {result.page}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      );
    }

    return (
      <div className="text-center text-muted-foreground py-8">
        <p>No results found for &quot;{searchQuery}&quot;</p>
      </div>
    );
  };

  // Search functionality
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    const filtered = searchData.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.content.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query) ||
        item.page.toLowerCase().includes(query)
    );
    setSearchResults(filtered);
  }, [searchQuery]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuExpanded &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsMenuExpanded(false);
      }
    };

    if (isMenuExpanded) {
      document.addEventListener("mousedown", handleClickOutside, true);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside, true);
    };
  }, [isMenuExpanded]);

  // Handle escape key for search
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isSearchExpanded) {
        collapseSearch();
      }
    };

    if (isSearchExpanded) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isSearchExpanded, collapseSearch]);

  // Auto-focus search input when modal opens
  useEffect(() => {
    if (isSearchExpanded) {
      const timer = setTimeout(() => {
        searchInputRef.current?.focus();
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [isSearchExpanded]);

  return (
    <nav ref={menuRef} className="relative">
      {/* Desktop Navigation */}
      <div className="hidden md:flex container mx-auto py-4 justify-between items-center">
        {/* Menu Button */}
        <Button
          variant="ghost"
          onClick={expandMenu}
          className="transition-all font-light hover:bg-transparent cursor-pointer uppercase rounded-none z-10"
        >
          Menu
        </Button>

        {/* Centered Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link
            href="/"
            className="text-sm font-light hover:text-muted-foreground transition-colors uppercase"
          >
            Colour One
          </Link>
        </div>

        {/* Search Button - positioned at right edge */}
        <div className="flex-1 flex justify-end">
          <Button
            variant="ghost"
            onClick={expandSearch}
            className="transition-all font-light hover:bg-transparent cursor-pointer uppercase rounded-none z-10"
          >
            Search
          </Button>
        </div>

        {/* Desktop Expanded Menu - fanned out across navbar */}
        <AnimatePresence>
          {isMenuExpanded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute top-0 left-0 w-full h-full bg-background/95 backdrop-blur-sm z-50"
            >
              <div className="hidden md:flex container mx-auto py-4 justify-between items-center">
                {/* Close Button - same position as Menu button */}
                <Button
                  variant="ghost"
                  onClick={collapseMenu}
                  className="transition-all font-light hover:bg-transparent cursor-pointer uppercase rounded-none z-10"
                >
                  Close
                </Button>

                {/* Navigation Items - centered in the middle */}
                <div className="flex gap-8 ml-8 justify-between">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{
                        delay: index * 0.15,
                        duration: 0.3,
                        ease: "easeOut",
                      }}
                    >
                      <Link
                        href={item.href}
                        className={`text-sm transition-all duration-150 ease-in-out uppercase px-3 py-2 rounded-none whitespace-nowrap ${
                          pathname === item.href
                            ? "bg-foreground/10 hover:bg-foreground/20"
                            : "hover:bg-foreground/10"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Invisible spacer to maintain Search button position */}
                <div className="flex-1 flex justify-end">
                  <Button
                    variant="ghost"
                    className="transition-all font-light hover:bg-transparent cursor-pointer uppercase invisible rounded-none"
                  >
                    Search
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Search Modal */}
        <AnimatePresence>
          {isSearchExpanded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute top-0 left-0 w-full h-screen bg-background/95 backdrop-blur-sm z-50"
              onClick={collapseSearch}
            >
              <div
                className="container mx-auto px-6 py-4 h-full flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Search Header */}
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-light">Search</h2>
                  <Button
                    variant="ghost"
                    onClick={collapseSearch}
                    className="transition-all hover:bg-transparent cursor-pointer uppercase rounded-none z-10"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                {/* Search Input */}
                <div className="relative mb-8">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Search the website..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                    className="pl-10 text-lg border-0 border-b-2 border-foreground/20 focus:border-foreground rounded-none bg-transparent focus:ring-0"
                  />
                </div>

                {/* Search Results */}
                <div className="flex-1 overflow-y-auto">
                  {renderSearchResults()}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Menu Button */}
        <Button
          variant="ghost"
          onClick={expandMenu}
          className="transition-all font-light hover:bg-transparent cursor-pointer uppercase rounded-none z-10"
        >
          Menu
        </Button>

        {/* Centered Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link
            href="/"
            className="text-sm font-light hover:text-muted-foreground transition-colors uppercase"
          >
            Colour One
          </Link>
        </div>

        {/* Search Button - positioned at right edge */}
        <div className="flex-1 flex justify-end">
          <Button
            variant="ghost"
            onClick={expandSearch}
            className="transition-all font-light hover:bg-transparent cursor-pointer uppercase rounded-none z-10"
          >
            Search
          </Button>
        </div>

        {/* Mobile Expanded Menu - full overlay with vertical fan-out */}
        <AnimatePresence>
          {isMenuExpanded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute top-0 left-0 w-full h-screen bg-background/95 backdrop-blur-sm z-50"
              onClick={collapseMenu}
            >
              <div className="container mx-auto px-6 py-4 h-[80vh] flex justify-center items-center">
                {/* Close Button - same position as Menu button */}
                <Button
                  variant="ghost"
                  onClick={collapseMenu}
                  className="font-light absolute left-6 top-4 transition-all hover:bg-transparent cursor-pointer uppercase rounded-none z-10"
                >
                  Close
                </Button>

                {/* Navigation Items - vertical fan-out */}
                <div className="flex flex-col gap-4 pt-8 items-center">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.2, duration: 0.3 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setTimeout(collapseMenu, 100)}
                        className={`text-sm transition-all duration-250 ease-in-out uppercase px-3 py-2 rounded-none whitespace-nowrap ${
                          pathname === item.href
                            ? "bg-foreground/10 hover:bg-foreground/20"
                            : "hover:bg-foreground/10"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Search Modal */}
        <AnimatePresence>
          {isSearchExpanded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute top-0 left-0 w-full h-screen bg-background/95 backdrop-blur-sm z-50"
              onClick={collapseSearch}
            >
              <div
                className="container mx-auto px-6 py-4 h-full flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Search Header */}
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-light">Search</h2>
                  <Button
                    variant="ghost"
                    onClick={collapseSearch}
                    className="transition-all hover:bg-transparent cursor-pointer uppercase rounded-none z-10"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                {/* Search Input */}
                <div className="relative mb-8">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Search the website..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                    className="pl-10 text-lg border-0 border-b-2 border-foreground/20 focus:border-foreground rounded-none bg-transparent focus:ring-0"
                  />
                </div>

                {/* Search Results */}
                <div className="flex-1 overflow-y-auto">
                  {renderSearchResults()}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

export default React.memo(Navigation);
