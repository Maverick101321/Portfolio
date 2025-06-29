"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"
import { Github, ExternalLink } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const projects = [
  {
    id: "algorithmic-trading",
    title: "Algorithmic Trading & Portfolio Optimization",
    description: "Developed a machine learning-driven trading strategy using historical S&P 500 data, achieving 15% higher risk-adjusted returns versus benchmark index.",
    tags: ["Python", "Machine Learning", "LSTM", "Pandas", "StreamLit"],
    imageUrl: "", // Placeholder for image URL
    gitHubUrl: "https://github.com/Maverick101321/Algorithmic-Trading-with-SP500-A-Portfolio-Optimisation-Approach",
    demoUrl: "",
    category: "machine-learning"
  },
  {
    id: "road-accident-prediction",
    title: "Road Accident Prediction",
    description: "Engineered an advanced CNN system for road safety, identifying hazards with 90% accuracy and reducing traffic incidents by 25%.",
    tags: ["Python", "Computer Vision", "TensorFlow", "OpenCV", "CNN"],
    imageUrl: "", // Placeholder for image URL
    gitHubUrl: "https://github.com/mayankpuvvala/Road-Accident-Prediction",
    demoUrl: "",
    category: "computer-vision"
  },
  {
    id: "fraud-detection",
    title: "Anomaly Detection in Credit Card Transactions",
    description: "Built a fraud detection system using Artificial Neural Networks and SMOTE, achieving 98% fraud detection rate while reducing false positives by 15%.",
    tags: ["Python", "Machine Learning", "ANN", "SMOTE", "Data Analysis"],
    imageUrl: "", // Placeholder for image URL
    gitHubUrl: "https://github.com/Maverick101321/Anamoly-Detection-in-Credit-Card-Transactions",
    demoUrl: "",
    category: "machine-learning"
  },
  {
    id: "college-dating-app",
    title: "College Dating Website",
    description: "Contributed to the development of a college-dedicated dating website with domain-specific email authentication.",
    tags: ["HTML", "CSS", "JavaScript", "MongoDB", "Node.js"],
    imageUrl: "", // Placeholder for image URL
    gitHubUrl: "https://github.com/karas0904/Flings",
    demoUrl: "https://amourette-seven.vercel.app",
    category: "web-development"
  },
  {
    id: "auto-booking-bot",
    title: "Automated Booking Bot",
    description: "Developed a Selenium-based bot to automate the booking process on web platforms, implementing web scraping techniques for dynamic web interactions.",
    tags: ["Python", "Selenium", "Web Scraping", "Automation"],
    imageUrl: "", // Placeholder for image URL
    gitHubUrl: "",
    demoUrl: "",
    category: "automation"
  },
  {
    id: "api-testing",
    title: "API Testing for To-Do Application",
    description: "Designed and executed test cases to validate RESTful To-Do API functionality, implementing automated tests for CRUD operations.",
    tags: ["API Testing", "REST", "Automation", "Test Cases"],
    imageUrl: "", // Placeholder for image URL
    gitHubUrl: "",
    demoUrl: "",
    category: "testing"
  }
];

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  gitHubUrl: string;
  demoUrl: string;
  category: string;
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-4"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Projects
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-violet-500 to-purple-600 mx-auto rounded-full" />
        <p className="text-center text-muted-foreground max-w-2xl mx-auto">
          A selection of projects I've worked on, showcasing my skills in machine learning,
          computer vision, web development, and more.
        </p>
      </motion.div>

      <div className="mt-12">
        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 md:grid-cols-6 h-auto">
              <TabsTrigger
                value="all"
                className="px-4 py-2 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                All
              </TabsTrigger>
              <TabsTrigger
                value="machine-learning"
                className="px-4 py-2 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                ML
              </TabsTrigger>
              <TabsTrigger
                value="computer-vision"
                className="px-4 py-2 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Computer Vision
              </TabsTrigger>
              <TabsTrigger
                value="web-development"
                className="px-4 py-2 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Web Dev
              </TabsTrigger>
              <TabsTrigger
                value="automation"
                className="px-4 py-2 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Automation
              </TabsTrigger>
              <TabsTrigger
                value="testing"
                className="px-4 py-2 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Testing
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="machine-learning" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects
                .filter(project => project.category === 'machine-learning')
                .map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="computer-vision" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects
                .filter(project => project.category === 'computer-vision')
                .map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="web-development" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects
                .filter(project => project.category === 'web-development')
                .map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="automation" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects
                .filter(project => project.category === 'automation')
                .map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="testing" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects
                .filter(project => project.category === 'testing')
                .map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: Project, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="h-full flex flex-col overflow-hidden border hover:shadow-md transition-shadow">
        <CardHeader className="pb-4">
          <CardTitle>{project.title}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
        <CardContent className="pb-4 flex-grow">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag: string) => (
              <Badge key={tag} variant="secondary" className="rounded-full">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex gap-3 pt-0">
          {project.gitHubUrl && (
            <Button asChild variant="outline" size="sm">
              <Link href={project.gitHubUrl} target="_blank" className="flex items-center gap-2">
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </Link>
            </Button>
          )}
          {project.demoUrl && (
            <Button asChild size="sm">
              <Link href={project.demoUrl} target="_blank" className="flex items-center gap-2">
                <ExternalLink className="h-4 w-4" />
                <span>Demo</span>
              </Link>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  )
}
