"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Calendar } from "lucide-react"

export default function LeadershipSection() {
  return (
    <section id="leadership" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-4"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Leadership
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-violet-500 to-purple-600 mx-auto rounded-full" />
        <p className="text-center text-muted-foreground max-w-2xl mx-auto">
          Leadership roles and responsibilities that shaped my organizational and management skills.
        </p>
      </motion.div>

      <div className="mt-12 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="p-6 bg-gradient-to-r from-violet-500/10 to-purple-500/10 border-b">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-violet-500 to-purple-600 flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium">Committee Head at AARUUSH</h3>
                    <p className="text-sm text-muted-foreground">SRM's Student Fest</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Calendar className="h-4 w-4" />
                  <span>July 2022 - July 2023</span>
                </div>
                
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Led a dynamic team of 60+ members in organizing and executing 12+ events for SRM's flagship technical and cultural fest, managing logistics, coordination, and stakeholder relationships.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-muted/30 rounded-lg">
                      <div className="flex items-center justify-center mb-2">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                      <p className="text-2xl font-bold text-primary">60+</p>
                      <p className="text-sm text-muted-foreground">Team Members</p>
                    </div>
                    
                    <div className="text-center p-4 bg-muted/30 rounded-lg">
                      <div className="flex items-center justify-center mb-2">
                        <Award className="h-6 w-6 text-primary" />
                      </div>
                      <p className="text-2xl font-bold text-primary">12+</p>
                      <p className="text-sm text-muted-foreground">Events Organized</p>
                    </div>
                    
                    <div className="text-center p-4 bg-muted/30 rounded-lg">
                      <div className="flex items-center justify-center mb-2">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                      <p className="text-2xl font-bold text-primary">1,500+</p>
                      <p className="text-sm text-muted-foreground">Participants</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-2">Key Responsibilities:</h4>
                    <ul className="space-y-1 list-disc pl-5 text-sm text-muted-foreground">
                      <li>Strategic planning and execution of multiple concurrent events</li>
                      <li>Team coordination and resource management across different departments</li>
                      <li>Stakeholder communication and vendor negotiations</li>
                      <li>Budget planning and financial oversight for event operations</li>
                      <li>Crisis management and real-time problem solving during events</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}