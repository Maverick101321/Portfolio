"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Skill {
  name: string;
  level: "beginner" | "intermediate" | "advanced" | "expert";
  category: string;
}

const skillsData: Record<string, Skill[]> = {
  languages: [
    { name: "C", level: "intermediate", category: "languages" },
    { name: "C++", level: "intermediate", category: "languages" },
    { name: "Python", level: "expert", category: "languages" },
    { name: "SQL", level: "advanced", category: "languages" },
    { name: "R", level: "intermediate", category: "languages" },
  ],
  coursework: [
    { name: "Data Structures and Algorithms", level: "advanced", category: "coursework" },
    { name: "Object-Oriented Programming", level: "advanced", category: "coursework" },
    { name: "Foundations of Analytics", level: "advanced", category: "coursework" },
    { name: "Introduction to Machine Learning", level: "advanced", category: "coursework" },
    { name: "DBMS", level: "intermediate", category: "coursework" },
    { name: "AI", level: "advanced", category: "coursework" },
    { name: "Digital Image Processing", level: "intermediate", category: "coursework" },
    { name: "Operating System", level: "intermediate", category: "coursework" },
    { name: "SDLC", level: "intermediate", category: "coursework" },
    { name: "Agile Methodology", level: "intermediate", category: "coursework" },
  ],
  ml_toolkit: [
    { name: "TensorFlow", level: "advanced", category: "ml_toolkit" },
    { name: "Keras", level: "advanced", category: "ml_toolkit" },
    { name: "PyTorch", level: "advanced", category: "ml_toolkit" },
    { name: "Huggingface", level: "intermediate", category: "ml_toolkit" },
    { name: "Scikit-learn", level: "expert", category: "ml_toolkit" },
  ],
  libraries: [
    { name: "NumPy", level: "expert", category: "libraries" },
    { name: "Matplotlib", level: "advanced", category: "libraries" },
    { name: "Pandas", level: "expert", category: "libraries" },
    { name: "OpenCV", level: "advanced", category: "libraries" },
    { name: "Seaborn", level: "advanced", category: "libraries" },
    { name: "Selenium", level: "intermediate", category: "libraries" },
    { name: "PyTest", level: "intermediate", category: "libraries" },
  ],
};

const getLevelColor = (level: string) => {
  switch (level) {
    case "beginner":
      return "bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400 border-blue-200 dark:border-blue-900";
    case "intermediate":
      return "bg-green-100 text-green-600 dark:bg-green-950 dark:text-green-400 border-green-200 dark:border-green-900";
    case "advanced":
      return "bg-amber-100 text-amber-600 dark:bg-amber-950 dark:text-amber-400 border-amber-200 dark:border-amber-900";
    case "expert":
      return "bg-violet-100 text-violet-600 dark:bg-violet-950 dark:text-violet-400 border-violet-200 dark:border-violet-900";
    default:
      return "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400 border-gray-200 dark:border-gray-700";
  }
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-4"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Skills
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-violet-500 to-purple-600 mx-auto rounded-full" />
        <p className="text-center text-muted-foreground max-w-2xl mx-auto">
          Technical skills I've acquired through education, work experience,
          and personal projects.
        </p>
      </motion.div>

      <div className="mt-12">
        <Tabs defaultValue="languages" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 h-auto">
              <TabsTrigger
                value="languages"
                className="px-4 py-2 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Languages
              </TabsTrigger>
              <TabsTrigger
                value="coursework"
                className="px-4 py-2 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Coursework
              </TabsTrigger>
              <TabsTrigger
                value="ml_toolkit"
                className="px-4 py-2 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                ML Toolkit
              </TabsTrigger>
              <TabsTrigger
                value="libraries"
                className="px-4 py-2 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Libraries & Frameworks
              </TabsTrigger>
            </TabsList>
          </div>

          {Object.keys(skillsData).map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="flex flex-wrap gap-3 justify-center">
                {skillsData[category].map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Badge
                      variant="outline"
                      className={`text-sm py-2 px-4 rounded-full border ${getLevelColor(skill.level)}`}
                    >
                      {skill.name}
                      <span className="ml-2 text-xs opacity-70">
                        {skill.level.charAt(0).toUpperCase() + skill.level.slice(1)}
                      </span>
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-16 p-6 border rounded-xl bg-muted/30"
      >
        <h3 className="text-xl font-medium text-center mb-4">Skill Level Legend</h3>
        <div className="flex flex-wrap gap-4 justify-center">
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full bg-blue-500`}></div>
            <span className="text-sm">Beginner - Basic understanding and limited practical application</span>
          </div>
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full bg-green-500`}></div>
            <span className="text-sm">Intermediate - Practical experience with moderate complexity</span>
          </div>
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full bg-amber-500`}></div>
            <span className="text-sm">Advanced - Strong knowledge with significant project experience</span>
          </div>
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full bg-violet-500`}></div>
            <span className="text-sm">Expert - Deep understanding and extensive practical applications</span>
          </div>
        </div>
      </motion.div>
    </section>
  )
}