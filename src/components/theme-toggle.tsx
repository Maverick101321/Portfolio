"use client"

import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const isDark = theme === "dark"

  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark")
  }

  return (
    <Button variant="outline" size="icon" className="rounded-full hover:bg-primary/30" onClick={toggleTheme}>
      <Sun className={`h-[1.2rem] w-[1.2rem] transition-all ${isDark ? 'scale-0' : 'scale-100'}`} />
      <Moon className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${isDark ? 'scale-100' : 'scale-0'}`} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
