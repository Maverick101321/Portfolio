"use client"

import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const isDark = theme === "dark"

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark")
  }

  return (
    <Button variant="outline" size="icon" className="rounded-full" onClick={toggleTheme}>
      <Sun className={`h-[1.2rem] w-[1.2rem] transition-all ${isDark ? 'scale-0' : 'scale-100'}`} />
      <Moon className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${isDark ? 'scale-100' : 'scale-0'}`} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
