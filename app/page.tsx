'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mail, Phone, Github, Linkedin } from "lucide-react"

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("about")

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="bg-primary text-primary-foreground p-6">
        <div className="container mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold">Abhishek Shanmuga Vengatasalam</h1>
            <div className="flex items-center mt-2 space-x-4">
              <a href="mailto:abhisheksv.iitm@gmail.com" className="flex items-center">
                <Mail className="mr-2" size={18} />
                abhisheksv.iitm@gmail.com
              </a>
              <a href="tel:+918300682565" className="flex items-center">
                <Phone className="mr-2" size={18} />
                +91 8300-682-565
              </a>
              <a href="https://github.com/Abhisheksv25" className="flex items-center">
                <Github className="mr-2" size={18} />
                Abhisheksv
              </a>
              <a href="https://www.linkedin.com/in/abhishek-sv" className="flex items-center">
                <Linkedin className="mr-2" size={18} />
                Abhisheksv
              </a>
            </div>
          </div>
          <img
            src="/DP.jpg"
            alt=""
            className="rounded-full w-32 h-32 object-cover border-4 border-white"
          />
        </div>
      </header>

      <main className="container mx-auto py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="startup">Startup</TabsTrigger>
            <TabsTrigger value="hobbies">Hobbies</TabsTrigger>
          </TabsList>
          <TabsContent value="about" className="space-y-4">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Objective</h2>
              <p>To deepen existing expertise in Computational Biology and Biotechnology, with a focus on Entrepreneurship. I would like to build a startup to address challenges such as improving health outcomes and creating sustainable solutions.</p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4">Key Courseworks</h2>
              <div className="flex flex-wrap gap-2">
                {["Biostatistics", "Immunology", "Genetics", "Bioinformatics", "Molecular Biology", "Biochemistry", "Complex Network", "Computational Neuroscience", "Molecular Basis of Diseases", "Computer Simulations of Biological Systems", "Functional Genomics & Precision Medicine", "Data Structures and Algorithms for Biology"].map((course, index) => (
                  <Badge key={index} variant="secondary">{course}</Badge>
                ))}
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4">Scholastic Achievements</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Awarded the prestigious MITACS Globalink research internship at the University of Calgary, Canada (2023)</li>
                <li>Nominated for the Australian National University as a Future Research Talent (FRT) Scholar (2023)</li>
                <li>One of the 12 students selected from 10000+ applicants, all over India, for Charpak Scholarship (2022)</li>
                <li>Selected for participation in the academic and cultural exchange program at Université Paris Saclay, Paris (2022)</li>
                <li>Ranked 3rd out of a cohort of 70 in the Department of Biotechnology, IIT Madras</li>
              </ul>
            </section>
          </TabsContent>
          <TabsContent value="experience" className="space-y-4">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Research Experience</h2>
              <Card className="mb-4">
                <CardHeader>
                  <CardTitle>Constructing a Network Model and a Database for Human Autoimmunity</CardTitle>
                  <CardDescription>Master's Thesis | Guide: Prof. Vani Janakiraman | Aug 2023 - May 2024</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Constructed a network model and a database to analyze the complex interaction within autoimmune diseases (AID)</li>
                    <li>Conducted high-throughput analysis using epitope data to investigate the role of viral infections in autoimmunity</li>
                    <li>Developed an algorithm to predict secondary autoimmune diseases and identify diagnostic markers for AI disease</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="mb-4">
                <CardHeader>
                  <CardTitle>Role of iNOS During Lymph Node Inflammation</CardTitle>
                  <CardDescription>MITACS Research Internship | Guide: Prof. Shan Liao | May 2023 - Aug 2023</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Investigated the potential of inhibiting iNOS function to enhance lymph drainage in OX2-inflamed lymph nodes</li>
                    <li>Conducted research to investigate potential changes in LN microenvironments by comparing wildtype and iNOS-/-</li>
                    <li>Employed various experimental techniques to quantify and compare lymph drainage in wildtype vs. iNOS-/- model</li>
                  </ul>
                </CardContent>
              </Card>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4">Professional Experience</h2>
              <Card className="mb-4">
                <CardHeader>
                  <CardTitle>Founder and Entrepreneur in Residence</CardTitle>
                  <CardDescription>Entrepreneur First (Global Talent Investors) | Aug 2024 - Present</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Conceptualized and validated innovative biotech solutions addressing sustainability and health challenge</li>
                    <li>Collaborated with a network of founders, mentors and costumers to ideate novel protein-based sweeteners</li>
                    <li>Identifying key market segments, potential partnerships and comprehensive GTM strategies for the startup</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Research and Development Intern</CardTitle>
                  <CardDescription>Kaere (Healthcare startup) | May 2023 - Aug 2023</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Identified novel diagnostic markers for type 1 diabetes, enhancing early detection and treatment efficacy</li>
                    <li>Optimized the performance of CO2 and acetone sensors in Diagnovate's diagnostic device to increase its accuracy</li>
                    <li>Assisted in conducting clinical trials and studies to validate results, contributing to the enhancement of reliability</li>
                  </ul>
                </CardContent>
              </Card>
            </section>
          </TabsContent>
          <TabsContent value="education" className="space-y-4">
            <Card className="mb-4">
              <CardHeader>
                <CardTitle>Indian Institute of Technology Madras</CardTitle>
                <CardDescription>Jul 2019 - Jun 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Dual Degree (Bachelor's+Master's) in Biological Engineering; Minor: Computational Biology</p>
                <p>CGPA: 8.57/10</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Université Paris-Saclay, France</CardTitle>
                <CardDescription>Jan 2022 - Aug 2022</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Erasmus M1 Biologie Santé (Semester Exchange)</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="startup" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Biotech Startup Initiative</CardTitle>
                <CardDescription>In Development</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Currently working on a biotech startup idea focused on developing novel protein-based sweeteners. The project aims to address both health and sustainability challenges in the food industry.</p>
                <ul className="list-disc pl-5 space-y-2 mt-4">
                  <li>Conducting market research and feasibility studies</li>
                  <li>Developing prototypes and testing methodologies</li>
                  <li>Exploring potential partnerships with food industry players</li>
                  <li>Investigating intellectual property strategies</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="hobbies" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Personal Interests and Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Badminton: Member of the institute and hostel Badminton team</li>
                  <li>Travel: Backpacked across 18 different European countries, exploring cultures and traditions</li>
                  <li>Languages: Multilingual with fluency in English and Tamil, basic conversational skills in Hindi, German, and French</li>
                  <li>Volunteering: Involved with "Love to Serve" non-profit trust to mitigate food waste</li>
                  <li>Public Policy: Participated in public policy discourse as a Student Legislative Council delegate to the Indian Parliament</li>
                  <li>Reading: Enjoy books on biotechnology advancements, entrepreneurship, and science fiction</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="bg-primary text-primary-foreground p-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Abhishek Shanmuga Vengatasalam. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}