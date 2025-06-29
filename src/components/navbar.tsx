"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "./theme-toggle"
import { Button } from "./ui/button"
import { usePathname } from "next/navigation"
import {
  Github,
  Linkedin,
  Mail,
  MenuIcon,
  X
} from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Education", href: "/#education" },
  { name: "Experience", href: "/#experience" },
  { name: "Projects", href: "/#projects" },
  { name: "Leadership", href: "/#leadership" },
  { name: "Certifications", href: "/#certifications" },
  { name: "Skills", href: "/#skills" },
  { name: "Contact", href: "/#contact" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [hoveredNav, setHoveredNav] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/70 backdrop-blur-md border-b"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex items-center gap-x-12">
          <Link
            href="/"
            className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-purple-600 dark:from-violet-400 dark:to-purple-500"
          >
            Varun Choudhary
          </Link>
          <div className="hidden md:flex md:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onMouseEnter={() => setHoveredNav(item.name)}
                onMouseLeave={() => setHoveredNav(null)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  item.href === pathname
                    ? "text-foreground"
                    : "text-muted-foreground",
                  hoveredNav && hoveredNav !== item.name ? "blur-sm opacity-60" : "opacity-100"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-x-2 md:gap-x-4">
          <div className="hidden md:flex space-x-2">
            <Link href="https://github.com/Maverick101321" target="_blank" aria-label="GitHub">
              <Button size="icon" variant="ghost" className="rounded-full">
                <Github className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/choudhary-varun" target="_blank" aria-label="LinkedIn">
              <Button size="icon" variant="ghost" className="rounded-full">
                <Linkedin className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="mailto:choudharyvarun4u@gmail.com" aria-label="Email">
              <Button size="icon" variant="ghost" className="rounded-full">
                <Mail className="h-5 w-5" />
              </Button>
            </Link>
          </div>
          <ThemeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="rounded-full">
                <MenuIcon className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[240px] sm:w-[300px]">
              <div className="flex flex-col gap-y-6 h-full">
                <div className="flex items-center justify-between">
                  <Link
                    href="/"
                    className="text-xl font-bold"
                    onClick={() => setIsOpen(false)}
                  >
                    Varun
                  </Link>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full"
                    onClick={() => setIsOpen(false)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                <div className="flex flex-col space-y-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        "text-md font-medium transition-colors hover:text-primary",
                        item.href === pathname
                          ? "text-foreground"
                          : "text-muted-foreground"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="flex space-x-2 mt-auto">
                  <Link href="https://github.com/Maverick101321" target="_blank" aria-label="GitHub">
                    <Button size="icon" variant="ghost" className="rounded-full">
                      <Github className="h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="https://www.linkedin.com/in/choudhary-varun" target="_blank" aria-label="LinkedIn">
                    <Button size="icon" variant="ghost" className="rounded-full">
                      <Linkedin className="h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="mailto:choudharyvarun4u@gmail.com" aria-label="Email">
                    <Button size="icon" variant="ghost" className="rounded-full">
                      <Mail className="h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}