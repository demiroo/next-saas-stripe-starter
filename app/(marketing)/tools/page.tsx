'use client'

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import MaxWidthWrapper from "@/components/shared/max-width-wrapper"

interface Tool {
  id: number
  title: string
  description: string
  tags: string[]
  category: string
  websiteUrl: string
  betterAttachment: string
  imageUrl: string
}

const tools: Tool[] = [
  {
    id: 1,
    title: "Code Editor Pro",
    description: "A powerful code editor with advanced features for developers.",
    tags: ["IDE", "Syntax Highlighting", "Git Integration"],
    category: "Development",
    websiteUrl: "https://example.com/code-editor-pro",
    betterAttachment: "https://example.com/code-editor-pro-attachment",
    imageUrl: "/blog-post-3.jpg",
  },
  {
    id: 2,
    title: "Design Wizard",
    description: "An intuitive design tool for creating stunning graphics and layouts.",
    tags: ["Graphic Design", "Templates", "Collaboration"],
    category: "Design",
    websiteUrl: "https://example.com/design-wizard",
    betterAttachment: "https://example.com/design-wizard-attachment",
    imageUrl: "/blog-post-3.jpg",
  },
  {
    id: 3,
    title: "Project Manager",
    description: "A comprehensive project management tool for teams of all sizes.",
    tags: ["Task Tracking", "Gantt Charts", "Team Collaboration"],
    category: "Productivity",
    websiteUrl: "https://example.com/project-manager",
    betterAttachment: "https://example.com/project-manager-attachment",
    imageUrl: "/blog-post-3.jpg",
  },
  {
    id: 4,
    title: "Analytics Dashboard",
    description: "A powerful analytics tool for visualizing and interpreting data.",
    tags: ["Data Visualization", "Reporting", "Integrations"],
    category: "Analytics",
    websiteUrl: "https://example.com/analytics-dashboard",
    betterAttachment: "https://example.com/analytics-dashboard-attachment",
    imageUrl: "/blog-post-3.jpg",
  },
  {
    id: 5,
    title: "Marketing Automation",
    description: "Streamline your marketing efforts with this comprehensive automation platform.",
    tags: ["Email Campaigns", "Lead Scoring", "A/B Testing"],
    category: "Marketing",
    websiteUrl: "https://example.com/marketing-automation",
    betterAttachment: "https://example.com/marketing-automation-attachment",
    imageUrl: "/blog-post-3.jpg",
  },
  {
    id: 6,
    title: "Cloud Storage Solution",
    description: "Secure and scalable cloud storage for businesses and individuals.",
    tags: ["File Sharing", "Backup", "Encryption"],
    category: "Storage",
    websiteUrl: "https://example.com/cloud-storage",
    betterAttachment: "https://example.com/cloud-storage-attachment",
    imageUrl: "/blog-post-3.jpg",
  },
]

const categories = ["All", "Development", "Design", "Productivity", "Analytics", "Marketing", "Storage"]

export default function ToolsPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")
  const [filteredTools, setFilteredTools] = useState(tools)

  useEffect(() => {
    const filtered = tools.filter(
      (tool) =>
        (activeCategory === "All" || tool.category === activeCategory) &&
        (tool.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          tool.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())))
    )
    setFilteredTools(filtered)
  }, [searchTerm, activeCategory])

  return (
    <MaxWidthWrapper>
      <div className="container mx-auto py-6">
        <h1 className="mb-2 text-4xl font-bold">Tools</h1>
        <p className="mb-8 text-xl text-muted-foreground">
          Entdecken Sie unsere Auswahl an nützlichen Tools für verschiedene Aufgaben.
        </p>
        <div className="mb-8">
          <Input
            type="text"
            placeholder="Search tools..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mb-4 max-w-md"
          />
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            <TabsList className="h-auto w-full flex-wrap justify-start">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="m-1 rounded-full px-4 py-2 transition-all duration-200 ease-in-out data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
        <AnimatePresence>
          <motion.div
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            {filteredTools.map((tool) => (
              <motion.div
                key={tool.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.3 }}
                onHoverStart={() => setHoveredCard(tool.id)}
                onHoverEnd={() => setHoveredCard(null)}
                layout
              >
                <Card className="flex h-full flex-col overflow-hidden transition-shadow duration-300 hover:shadow-lg dark:hover:shadow-primary/25">
                  <CardHeader className="p-0">
                    <motion.div
                      className="relative h-48 overflow-hidden"
                      animate={{
                        scale: hoveredCard === tool.id ? 1.05 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={tool.imageUrl}
                        alt={tool.title}
                        className="size-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 transition-opacity duration-300 hover:opacity-100">
                        <a href={tool.websiteUrl} target="_blank" rel="noopener noreferrer" className="button secondary sm">
                          Visit Website
                        </a>
                      </div>
                    </motion.div>
                  </CardHeader>
                  <CardContent className="grow p-4">
                    <CardTitle className="mb-2 text-xl">{tool.title}</CardTitle>
                    <p className="mb-4 text-muted-foreground">{tool.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {tool.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between p-4 pt-0">
                    <a href={tool.websiteUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-primary hover:bg-primary hover:text-primary-foreground">
                      <ExternalLink size={18} className="mr-2" />
                      Visit Website
                    </a>
                    <Button variant="ghost" size="icon" className="text-primary hover:bg-primary hover:text-primary-foreground">
                      <a href={tool.betterAttachment} target="_blank" rel="noopener noreferrer" aria-label="Better Attachment">
                        <Github size={20} />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </MaxWidthWrapper>
  )
}