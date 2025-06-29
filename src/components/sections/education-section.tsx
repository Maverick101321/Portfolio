"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, School, BookOpen, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const educationData = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "SRM Institute of Science and Technology",
    duration: "2021 - 2025",
    score: "CGPA: 7.57/10",
    icon: <GraduationCap className="w-6 h-6 text-white" />,
    mapUrl: "https://maps.app.goo.gl/dPMoTb6vRq1zvxyT8"
  },
  {
    degree: "Higher Secondary (11th-12th)",
    institution: "RN Podar School, Mumbai",
    duration: "2019 - 2021",
    score: "Score: 74.5%",
    icon: <School className="w-6 h-6 text-white" />,
    mapUrl: "https://maps.app.goo.gl/Gke4wg6QhkQ8enHt8"
  },
  {
    degree: "Secondary School (10th)",
    institution: "RN Podar School, Mumbai",
    duration: "2018 - 2019",
    score: "Score: 91.2%",
    icon: <BookOpen className="w-6 h-6 text-white" />,
    mapUrl: "https://maps.app.goo.gl/6cBdsbdecLxotQgf9"
  }
];

export default function EducationSection() {
  return (
    <section id="education" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-4"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Education
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-violet-500 to-purple-600 mx-auto rounded-full" />
        <p className="text-center text-muted-foreground max-w-2xl mx-auto">
          My academic journey and educational background that shaped my technical foundation.
        </p>
      </motion.div>

      <div className="mt-12 max-w-4xl mx-auto space-y-6">
        {educationData.map((education, index) => (
          <motion.div
            key={education.degree}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="p-6 bg-gradient-to-r from-violet-500/10 to-purple-500/10 border-b">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-violet-500 to-purple-600 flex items-center justify-center">
                      {education.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-medium">{education.degree}</h3>
                      <p className="text-sm text-muted-foreground">{education.institution}</p>
                    </div>
                    <Link href={education.mapUrl} target="_blank" rel="noopener noreferrer">
                      <Button 
                        size="icon" 
                        variant="ghost" 
                        className="rounded-full hover:bg-white/20 text-violet-600 hover:text-violet-700"
                        aria-label={`View ${education.institution} location on map`}
                      >
                        <MapPin className="h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm text-muted-foreground">{education.duration}</p>
                      <p className="text-sm mt-2 font-medium">{education.score}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}