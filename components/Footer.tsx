"use client"

import { useCallback, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";

export function SiteFooter() {
  const [emailText, setEmailText] = useState('')
  const handleEmailTextChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailText(e.target.value)
  }, [])
  return (
    <footer className="bg-background/50 backdrop-blur-md">
      <div className="container mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        {/* Contact*/}
        <div>
          <p className="text-xs font-medium mb-4 uppercase text-foreground">Contact</p>
          <nav className="space-y-2">
            <Link
              href="/work"
              className="text-foreground hover:text-muted-foreground transition-colors"
            >
              info@colourone.com
            </Link>
            <Link
              href="/about"
              className="block text-foreground hover:text-muted-foreground transition-colors"
            >
              +44 (0) 207 495 0700
            </Link>
          </nav>
        </div>

        {/* Address */}
        <div>
          <p className="text-xs font-medium mb-4 uppercase text-foreground">Address</p>
          <p>
            33 Cork Street,
            <br />
            London, England, W1S 3NQ
          </p>
          <p className="pt-2">
            One Monte Carlo,
            <br />
            Plaçe du Casino, 98000 Monaco
          </p>
        </div>

        {/* Newsletter */}
        <div>
          <p className="text-xs font-medium mb-4 uppercase text-foreground">Subscribe to our newsletter</p>
          <div className="flex w-full max-w-sm items-center gap-2 border-b-1 pb-1">
            <Input className="focus-visible:ring-[0] pl-0 focus-visible:border-color-foreground border-0 rounded-none shadow-none" type="email" placeholder="Email" value={emailText} onChange={handleEmailTextChange} />
            <Button type="submit" variant="ghost" disabled={!emailText}>
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="py-4 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Colour One. All rights reserved.
      </div>
    </footer>
  );
}
