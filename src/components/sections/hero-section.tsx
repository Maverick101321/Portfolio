"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="pt-28 md:pt-36 pb-16 text-center md:text-left"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-purple-600 dark:from-violet-400 dark:to-purple-500">Varun Choudhary</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="mt-6 text-xl md:text-2xl text-muted-foreground max-w-md mx-auto md:mx-0">
              Machine Learning Enthusiast
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start"
          >
            <Button asChild>
              <Link href="/#contact">Get In Touch</Link>
            </Button>
            <Button variant="outline" asChild className="hover:bg-primary/30">
              <Link href="/#projects">View Projects</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-8 flex items-center gap-4 justify-center md:justify-start"
          >
            <Link href="https://github.com/Maverick101321" target="_blank" aria-label="GitHub">
              <Button size="icon" variant="ghost" className="rounded-full hover:bg-primary/30">
                <Github className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/choudhary-varun" target="_blank" aria-label="LinkedIn">
              <Button size="icon" variant="ghost" className="rounded-full hover:bg-primary/30">
                <Linkedin className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="mailto:choudharyvarun4u@gmail.com" aria-label="Email">
              <Button size="icon" variant="ghost" className="rounded-full hover:bg-primary/30">
                <Mail className="h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative hidden md:block"
        >
          <div className="relative w-full h-[400px] overflow-hidden rounded-xl border p-5">
            <Image
              src="/IMG_4906.HEIC.png"
              alt="Background"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-xl z-0"
              priority
            />
            <div className="absolute inset-0 bg-black/10 dark:bg-black/30 z-10" />

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20">
              <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl mx-auto">
                <Image
                  src="/IMG_4839 compressed.jpg"
                  alt="Varun Choudhary"
                  width={112}
                  height={112}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="mt-4 px-4 py-2 rounded-lg bg-white/80 dark:bg-slate-700/80 backdrop-blur-sm shadow-lg">
                <p className="text-sm font-medium">
                  SRM Institute of Science and Technology
                </p>
                <p className="text-xs text-muted-foreground">
                  B.Tech in Computer Science and Engineering
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="mt-16 flex justify-center"
      >
        <Link href="/#about">
          <Button variant="ghost" size="icon" className="rounded-full animate-bounce">
            <ArrowDown className="h-6 w-6" />
          </Button>
        </Link>
      </motion.div>
    </section>
  )
}