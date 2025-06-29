import Link from "next/link"
import { Github, Linkedin, Mail, Instagram } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t py-12 md:py-16 mt-24">
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-purple-600 dark:from-violet-400 dark:to-purple-500 mb-4">
              Varun Choudhary
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold mb-4">Site Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/#about" className="text-muted-foreground hover:text-foreground transition">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/#education" className="text-muted-foreground hover:text-foreground transition">
                    Education
                  </Link>
                </li>
                <li>
                  <Link href="/#experience" className="text-muted-foreground hover:text-foreground transition">
                    Experience
                  </Link>
                </li>
                <li>
                  <Link href="/#projects" className="text-muted-foreground hover:text-foreground transition">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/#leadership" className="text-muted-foreground hover:text-foreground transition">
                    Leadership
                  </Link>
                </li>
                <li>
                  <Link href="/#certifications" className="text-muted-foreground hover:text-foreground transition">
                    Certifications
                  </Link>
                </li>
                <li>
                  <Link href="/#skills" className="text-muted-foreground hover:text-foreground transition">
                    Skills
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="text-muted-foreground hover:text-foreground transition">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="https://github.com/Maverick101321"
                    className="text-muted-foreground hover:text-foreground transition flex items-center gap-2"
                    target="_blank"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/in/choudhary-varun"
                    className="text-muted-foreground hover:text-foreground transition flex items-center gap-2"
                    target="_blank"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com/totally_not_varun/"
                    className="text-muted-foreground hover:text-foreground transition flex items-center gap-2"
                    target="_blank"
                  >
                    <Instagram className="h-4 w-4" />
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    href="mailto:choudharyvarun4u@gmail.com"
                    className="text-muted-foreground hover:text-foreground transition flex items-center gap-2"
                  >
                    <Mail className="h-4 w-4" />
                    Email
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
          &copy; {currentYear} Varun Choudhary. All rights reserved.
        </div>
      </div>
    </footer>
  )
}