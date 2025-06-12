import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { 
  LinkedInLogoIcon, 
  InstagramLogoIcon, 
  TwitterLogoIcon 
} from "@radix-ui/react-icons"

export function SiteFooter() {
  return (
    <footer className="border-t bg-background/50 backdrop-blur-md">
      <div className="container mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Colour One</h3>
          <p className="text-muted-foreground">
            Creative design studio specializing in brand transformation
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-medium mb-4">Quick Links</h4>
          <nav className="space-y-2">
            <Link 
              href="/work" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Projects
            </Link>
            <Link 
              href="/about" 
              className="block text-muted-foreground hover:text-foreground transition-colors"
            >
              About Us
            </Link>
            <Link 
              href="/contact" 
              className="block text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Social & Contact */}
        <div>
          <h4 className="font-medium mb-4">Connect</h4>
          <div className="flex space-x-4 mb-4">
            <Button variant="outline" size="icon">
              <LinkedInLogoIcon className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon">
              <InstagramLogoIcon className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon">
              <TwitterLogoIcon className="h-5 w-5" />
            </Button>
          </div>
          <p className="text-muted-foreground">
            hello@colourone.com
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t py-4 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Colour One. All rights reserved.
      </div>
    </footer>
  )
}