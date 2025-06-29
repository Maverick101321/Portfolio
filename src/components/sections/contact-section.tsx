"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Instagram } from "lucide-react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactSection() {
  return (
    <section id="contact" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-4"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Get In Touch
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-violet-500 to-purple-600 mx-auto rounded-full" />
        <p className="text-center text-muted-foreground max-w-2xl mx-auto">
          Feel free to reach out through any of my social platforms or send me an email directly.
        </p>
      </motion.div>

      <div className="mt-12 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="space-y-6">
            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 p-3 rounded-full bg-primary/10 text-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-medium">Email</h4>
                    <Link
                      href="mailto:choudharyvarun4u@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      choudharyvarun4u@gmail.com
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 p-3 rounded-full bg-primary/10 text-primary">
                    <Linkedin className="h-6 w-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-medium">LinkedIn</h4>
                    <Link
                      href="https://www.linkedin.com/in/choudhary-varun"
                      target="_blank"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      linkedin.com/in/choudhary-varun
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 p-3 rounded-full bg-primary/10 text-primary">
                    <Github className="h-6 w-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-medium">GitHub</h4>
                    <Link
                      href="https://github.com/Maverick101321"
                      target="_blank"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      github.com/Maverick101321
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 p-3 rounded-full bg-primary/10 text-primary">
                    <Instagram className="h-6 w-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-medium">Instagram</h4>
                    <Link
                      href="https://www.instagram.com/totally_not_varun/"
                      target="_blank"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      @totally_not_varun
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  )
}