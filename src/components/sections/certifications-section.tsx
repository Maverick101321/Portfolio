"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Book, Award, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const certifications = [
  {
    title: "Oracle Cloud Infrastructure 2024 Generative AI Certified Professional",
    issuer: "Oracle",
    status: "Completed",
    icon: <Award className="w-6 h-6 text-white" />,
    description: "Advanced certification in generative AI technologies and Oracle Cloud Infrastructure services."
  },
  {
    title: "Oracle Cloud Infrastructure 2023 Certified Foundations Associate",
    issuer: "Oracle",
    status: "Completed",
    icon: <Award className="w-6 h-6 text-white" />,
    description: "Foundational knowledge of Oracle Cloud Infrastructure core services and concepts."
  },
  {
    title: "AWS Certified AI Practitioner AIF-C01",
    issuer: "Amazon Web Services",
    status: "In Progress",
    icon: <Clock className="w-6 h-6 text-white" />,
    description: "Comprehensive certification covering AI and machine learning services on AWS platform."
  }
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-4"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Certifications
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-violet-500 to-purple-600 mx-auto rounded-full" />
        <p className="text-center text-muted-foreground max-w-2xl mx-auto">
          Professional certifications that validate my expertise in cloud technologies and AI/ML platforms.
        </p>
      </motion.div>

      <div className="mt-12 max-w-4xl mx-auto space-y-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="p-6 bg-gradient-to-r from-violet-500/10 to-purple-500/10 border-b">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-violet-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                      {cert.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-medium">{cert.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{cert.issuer}</p>
                    </div>
                    <Badge 
                      variant={cert.status === "Completed" ? "default" : "secondary"}
                      className="rounded-full"
                    >
                      {cert.status}
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}