"use client"

import { motion } from "framer-motion"

export default function AboutSection() {
  return (
    <section id="about" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-4"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          About Me
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-violet-500 to-purple-600 mx-auto rounded-full" />
      </motion.div>

      <div className="mt-12 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>
              Hi! I'm Varun Choudhary, a passionate and curious software engineer with a growing focus on data-driven systems, machine learning, and production-grade automation. Currently pursuing my B.Tech in Computer Science from SRM Institute of Science and Technology, I've had the opportunity to work on projects ranging from real-time autonomous vehicle perception to API testing frameworks and financial modeling systems.
            </p>
            <p>
              I enjoy building things that live in the real world—whether it's an ML-powered prediction pipeline, a Selenium bot that books slots autonomously, or a robust anomaly detection system for financial transactions. I believe that elegant code isn't just functional—it's thoughtful, scalable, and serves a purpose beyond the IDE.
            </p>
            <p>
              Alongside academic rigor, I've published research at national conferences (IJISRT, ICISML), interned at Tech Mahindra in a structured data science role, and led a 60+ member team for SRM's flagship fest AARUUSH—where logistics, coordination, and stakeholder management taught me just as much as coding ever did.
            </p>
            <p>
              As I move forward, I'm excited to work at the intersection of technology, impact, and people. I'm especially drawn to roles where I can solve complex engineering problems while collaborating with smart, kind teams who care deeply about their work.
            </p>
            <p className="font-medium text-foreground">
              Let's build something meaningful together!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}