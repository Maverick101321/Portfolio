"use client"

import { motion } from "framer-motion"
import {
  Briefcase,
  CalendarDays
} from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    id: "data-science-intern",
    title: "Data Science Intern",
    company: "Tech Mahindra",
    type: "Internship",
    duration: "May 2022 - August 2022",
    location: "Remote",
    description: "Gained practical experience with machine learning algorithms, data analysis, and development tools.",
    accomplishments: [
      "Worked with Firebase and Microsoft Power Apps for data integration and analysis",
      "Implemented data visualization techniques for complex datasets",
      "Collaborated with cross-functional teams to deliver actionable insights"
    ],
    icon: <Briefcase className="h-6 w-6" />,
    skills: ["Machine Learning", "Firebase", "Power Apps", "Data Visualization", "Team Collaboration"]
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-4"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Experience
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-violet-500 to-purple-600 mx-auto rounded-full" />
        <p className="text-center text-muted-foreground max-w-2xl mx-auto">
          My professional experience in data science and software development.
        </p>
      </motion.div>

      <div className="mt-12 max-w-4xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <AccordionItem value={experience.id} className="border rounded-lg mb-4 overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/30 data-[state=open]:bg-muted/30 [&>svg]:hidden">
                  <div className="flex items-start gap-4 text-left w-full">
                    <div className="hidden sm:flex mt-1 items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                      {experience.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-medium">{experience.title}</h3>
                      <div className="flex flex-wrap gap-2 items-center text-sm text-muted-foreground mt-1">
                        <span>{experience.company}</span>
                        <span className="h-1 w-1 rounded-full bg-muted-foreground"></span>
                        <span className="flex items-center gap-1">
                          <CalendarDays className="h-3.5 w-3.5" />
                          {experience.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pt-0 pb-6">
                  <div className="pt-4 pl-0 sm:pl-16">
                    <div className="space-y-4">
                      <p className="text-muted-foreground">
                        {experience.description}
                      </p>

                      <div>
                        <h4 className="text-sm font-medium mb-2">Key Accomplishments:</h4>
                        <ul className="space-y-2 list-disc pl-5 text-sm text-muted-foreground">
                          {experience.accomplishments.map((accomplishment, i) => (
                            <li key={i}>{accomplishment}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium mb-2">Skills:</h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.skills.map((skill, i) => (
                            <Badge key={i} variant="outline" className="rounded-full bg-primary/5">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  )
}