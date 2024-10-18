/* eslint-disable tailwindcss/migration-from-tailwind-2 */
/* eslint-disable @next/next/no-img-element */
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

// Define MaxWidthWrapper component


interface Template {
  id: number
  title: string
  description: string
  tags: string[]
  category: string
  siteUrl: string
  githubUrl: string
  imageUrl: string
}

const templates: Template[] = [
  {
    id: 1,
    title: "E-Commerce Starter",
    description: "A fully functional e-commerce template with product listings and cart functionality.",
    tags: ["Next.js", "Tailwind CSS", "Stripe"],
    category: "E-Commerce",
    siteUrl: "https://example.com/ecommerce",
    githubUrl: "https://github.com/example/ecommerce",
    imageUrl: "/blog-post-3.jpg",
  },
  {
    id: 2,
    title: "Blog Platform",
    description: "A sleek blog platform with markdown support and built-in SEO optimization.",
    tags: ["React", "MDX", "SEO"],
    category: "Blog",
    siteUrl: "https://example.com/blog-platform",
    githubUrl: "https://github.com/example/blog-platform",
    imageUrl: "/blog-post-3.jpg",
  },
  {
    id: 3,
    title: "SaaS Dashboard",
    description: "A responsive admin dashboard with charts, tables, and user management.",
    tags: ["Vue.js", "Vuetify", "Chart.js"],
    category: "SaaS",
    siteUrl: "https://example.com/saas-dashboard",
    githubUrl: "https://github.com/example/saas-dashboard",
    imageUrl: "/blog-post-3.jpg",
  },
  {
    id: 4,
    title: "Portfolio Showcase",
    description: "A modern portfolio template for showcasing your projects and skills.",
    tags: ["Gatsby", "GraphQL", "Animations"],
    category: "Portfolio",
    siteUrl: "https://example.com/portfolio",
    githubUrl: "https://github.com/example/portfolio",
    imageUrl: "/blog-post-3.jpg",
  },
  {
    id: 5,
    title: "Landing Page Builder",
    description: "A drag-and-drop landing page builder with customizable components.",
    tags: ["React", "DnD", "Styled Components"],
    category: "Landing Page",
    siteUrl: "https://example.com/landing-builder",
    githubUrl: "https://github.com/example/landing-builder",
    imageUrl: "/blog-post-3.jpg",
  },
  {
    id: 6,
    title: "Subscription Box",
    description: "An e-commerce template specialized for subscription-based products.",
    tags: ["Next.js", "Stripe", "Subscriptions"],
    category: "E-Commerce",
    siteUrl: "https://example.com/subscription-box",
    githubUrl: "https://github.com/example/subscription-box",
    imageUrl: "/blog-post-3.jpg",
  },
]

const categories = ["All", "E-Commerce", "Blog", "SaaS", "Portfolio", "Landing Page"]

export default function TemplatesPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")
  const [filteredTemplates, setFilteredTemplates] = useState(templates)

  useEffect(() => {
    const filtered = templates.filter(
      (template) =>
        (activeCategory === "All" || template.category === activeCategory) &&
        (template.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          template.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          template.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())))
    )
    setFilteredTemplates(filtered)
  }, [searchTerm, activeCategory])

  return (
    <MaxWidthWrapper>
      <div className="container mx-auto py-6">
      <h1 className="mb-2 text-4xl font-bold">Templates</h1>
        <p className="mb-8 text-xl text-muted-foreground">
          Durchsuchen Sie unsere Vorlagen für verschiedene Anwendungen.
        </p>
        <div className="mb-8">
          <Input
            type="text"
            placeholder="Search templates..."
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
            {filteredTemplates.map((template) => (
              <motion.div
                key={template.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.3 }}
                onHoverStart={() => setHoveredCard(template.id)}
                onHoverEnd={() => setHoveredCard(null)}
                layout
              >
                <Card className="flex h-full flex-col overflow-hidden transition-shadow duration-300 hover:shadow-lg dark:hover:shadow-primary/25">
                  <CardHeader className="p-0">
                    <motion.div
                      className="relative h-48 overflow-hidden"
                      animate={{
                        scale: hoveredCard === template.id ? 1.05 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                    // eslint-disable-next-line react/jsx-no-comment-textnodes
                    >
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={template.imageUrl}
                        alt={template.title}
                        className="size-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 transition-opacity duration-300 hover:opacity-100">
                        <a href={template.siteUrl} target="_blank" rel="noopener noreferrer" className="button secondary sm">
                          View Demo
                        </a>
                      </div>
                    </motion.div>
                  </CardHeader>
                  <CardContent className="grow p-4">
                    <CardTitle className="mb-2 text-xl">{template.title}</CardTitle>
                    <p className="mb-4 text-muted-foreground">{template.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {template.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between p-4 pt-0">
                    <a href={template.siteUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-primary hover:bg-primary hover:text-primary-foreground">
                      <ExternalLink size={18} className="mr-2" />
                      Visit Site
                    </a>
                    <Button variant="ghost" size="sm" className="text-primary hover:bg-primary hover:text-primary-foreground">
                      <a href={template.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={18} className="mr-2" />
                        View Code
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
