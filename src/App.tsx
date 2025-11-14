import { Fragment, useRef, type ReactNode } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Download,
  Globe,
  Instagram,
  Lightbulb,
  Linkedin,
  Mail,
  Phone,
  Quote,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Video,
  Zap,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { HeroSection } from "@/components/ui/feature-carousel"
import { Separator } from "@/components/ui/separator"

interface TimelineItem {
  title: string
  company: string
  period: string
  description: string
  achievements: string[]
}

interface Project {
  title: string
  challenge: string
  approach: string
  impact: string[]
}

interface Testimonial {
  name: string
  role: string
  quote: string
}

interface Skill {
  category: string
  items: string[]
  icon: ReactNode
}

const PortfolioWebsite = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const skills: Skill[] = [
    {
      category: "Strategic & Creative",
      icon: <Lightbulb className="w-6 h-6" />,
      items: [
        "Social Media Strategy",
        "Storytelling & Copywriting",
        "Content Architecture & Campaign Planning",
      ],
    },
    {
      category: "Analytical & Technical",
      icon: <BarChart3 className="w-6 h-6" />,
      items: [
        "AI-Driven SEO",
        "Analytics & Data Visualization",
        "Marketing Automation & CRM",
        "Paid Media & Performance Reporting",
      ],
    },
    {
      category: "Creative Production",
      icon: <Video className="w-6 h-6" />,
      items: [
        "Video Scripting & Editing",
        "Multimedia Design",
        "Creative Direction for Digital Campaigns",
      ],
    },
    {
      category: "Languages",
      icon: <Globe className="w-6 h-6" />,
      items: [
        "Arabic — Native",
        "English — Fluent",
        "French — Intermediate",
        "Spanish — Basic",
      ],
    },
  ]

  const timeline: TimelineItem[] = [
    {
      title: "Freelance Digital Strategy Consultant",
      company: "Independent",
      period: "2025 – Present",
      description:
        "Helping organizations and brands scale their digital impact through strategy, analytics, and automation.",
      achievements: [
        "Conduct SEO and content audits for visibility and engagement growth",
        "Build data-informed communication frameworks",
        "Advise on AI, CRM, and marketing automation integration",
      ],
    },
    {
      title: "Digital Communications Officer",
      company: "UNDP Egypt",
      period: "Sep 2023 – Oct 2025",
      description:
        "Developed and implemented digital communication strategies that elevated UNDP Egypt's visibility and public trust.",
      achievements: [
        "Managed bilingual content across platforms reaching millions",
        "Increased engagement by 220% and grew audience reach significantly",
        "Produced storytelling campaigns such as \"Partners at Core,\" \"MSME Day,\" and \"Green Growth & Jobs Accelerator Project\"",
        "Strengthened donor visibility and coordinated high-level digital campaigns",
      ],
    },
    {
      title: "Content Creator",
      company: "MO4 Network",
      period: "Jan 2023 – Aug 2023",
      description:
        "Created bilingual lifestyle content and short-form videos that resonated with regional audiences.",
      achievements: [
        "Produced creative scripts and high-performing social content",
        "Boosted engagement by 4.8% and generated over 100K views across channels",
      ],
    },
    {
      title: "Creative Copywriter",
      company: "Zone360 SA",
      period: "2022",
      description:
        "Developed culturally tailored copy and digital content for Gulf-region brands.",
      achievements: [
        "Built brand voice and identity for product launches",
        "Delivered high-converting campaign content and taglines",
      ],
    },
  ]

  const projects: Project[] = [
    {
      title: "UNDP Egypt — Digital Communications Campaigns",
      challenge:
        "Build visibility, credibility, and trust for large-scale sustainability projects.",
      approach:
        "Designed editorial strategy and bilingual storytelling for initiatives like Partners at Core, GGJAP, ENID Qena, and MSME Day.",
      impact: [
        "+220% engagement",
        "1.5M+ organic reach",
        "Featured on UNDP global channels",
      ],
    },
    {
      title: "KFC & Papa John's (MENA)",
      challenge:
        "Maintain cohesive tone and brand identity across multiple regions.",
      approach:
        "Localized bilingual scripts, campaign captions, and data-led social insights.",
      impact: [
        "Increased click-through rate",
        "Enhanced brand engagement across markets",
      ],
    },
    {
      title: "Zone360 & MO4 Network",
      challenge:
        "Create distinct lifestyle content in oversaturated markets.",
      approach:
        "Minimalist visuals, strong bilingual voice, fast creative iteration cycles.",
      impact: [
        "+4.8% engagement growth",
        "Stronger brand affinity",
      ],
    },
    {
      title: "Infinix Saudi Arabia — Product Launch Campaigns",
      challenge: "Elevate storytelling around new mobile product lines.",
      approach:
        "Feature-led content strategy, launch videos, and bilingual campaigns.",
      impact: [
        "High brand recall among Gen Z audiences",
        "Improved launch-week metrics",
      ],
    },
  ]

  const testimonials: Testimonial[] = [
    {
      name: "UNDP Egypt Team",
      role: "United Nations Development Programme",
      quote:
        "Mohamed's creativity and structure helped elevate our digital presence and donor communication.",
    },
    {
      name: "MO4 Creative Director",
      role: "MO4 Network",
      quote:
        "His bilingual precision and storytelling instincts consistently improved campaign clarity and performance.",
    },
    {
      name: "SME Owner",
      role: "Freelance Client",
      quote:
        "Finally someone who connects analytics to creativity — Mo's audits transformed how we see digital growth.",
    },
  ]

  const metrics = [
    {
      value: "+220%",
      label: "Engagement Growth",
      icon: <TrendingUp className="w-8 h-8" />,
    },
    {
      value: "1.5M+",
      label: "Organic Reach",
      icon: <Users className="w-8 h-8" />,
    },
    {
      value: "140K+",
      label: "TikTok Followers",
      icon: <Sparkles className="w-8 h-8" />,
    },
    {
      value: "+4.8%",
      label: "Engagement Rate",
      icon: <Zap className="w-8 h-8" />,
    },
  ]

  const services = [
    {
      title: "Retainer",
      description:
        "Ongoing content strategy, analytics, and creative direction for organizations or agencies.",
      icon: <Target className="w-12 h-12" />,
    },
    {
      title: "Campaign",
      description:
        "Short-term creative campaigns for launches or awareness drives.",
      icon: <Sparkles className="w-12 h-12" />,
    },
    {
      title: "Intensive",
      description:
        "Two-week sprint to optimize content systems or scale performance fast.",
      icon: <Zap className="w-12 h-12" />,
    },
  ]

  const workflow = [
    { step: "Discover", description: "Audit challenges, define goals" },
    { step: "Strategize", description: "Design content and media plan" },
    { step: "Create", description: "Produce visuals, copy, and motion assets" },
    { step: "Launch", description: "Distribute and monitor campaign rollout" },
    { step: "Learn", description: "Analyze data, refine strategy for next phase" },
  ]

  return (
    <div
      ref={containerRef}
      className="relative bg-background text-foreground overflow-hidden"
    >
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
        style={{ scaleX }}
      />

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-red-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-primary/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [-50, 50, -50],
            y: [-50, 50, -50],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 perspective-2000">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left space-y-6 order-2 md:order-1"
            >
              <Badge className="text-sm px-4 py-2" variant="outline">
                <Sparkles className="w-4 h-4 mr-2" />
                Digital Specialist
              </Badge>

              <div>
                <div className="text-sm text-muted-foreground mb-2">Based in</div>
                <div className="flex items-center gap-2 text-lg font-semibold">
                  <Globe className="w-5 h-5 text-primary" />
                  Cairo, Egypt
                </div>
              </div>

              <div>
                <div className="text-sm text-muted-foreground mb-2">Availability</div>
                <div className="text-base">Open to global remote & hybrid roles</div>
              </div>

              <div>
                <div className="text-sm text-muted-foreground mb-2">Languages</div>
                <div className="text-base">Arabic & English (Bilingual)</div>
              </div>
            </motion.div>

            <div className="relative flex justify-center items-center h-full order-1 md:order-2">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.2,
                }}
                className="absolute z-0 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-primary/30 via-red-600/20 to-red-900/30 blur-2xl md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]"
              />
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.3,
                }}
                className="absolute z-0 h-[280px] w-[280px] rounded-full bg-primary/40 md:h-[380px] md:w-[380px] lg:h-[480px] lg:w-[480px]"
              />
              <motion.img
                src="https://i.imgur.com/8gY5X7Z.jpeg"
                alt="Mohamed ElSaadawey"
                className="relative z-10 h-auto w-64 object-cover rounded-full md:w-80 lg:w-96 border-4 border-background shadow-2xl"
                initial={{ opacity: 0, y: 50, rotateY: -15 }}
                animate={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.4,
                }}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-left space-y-6 order-3"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary via-red-700 to-red-900 bg-clip-text text-transparent text-glow leading-tight">
                Mohamed
                <br />
                ElSaadawey
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Combining creativity, analytics, and emerging technologies to tell stories that inspire change.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="mt-16 text-center max-w-4xl mx-auto space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              With a background in content strategy, storytelling, and AI-driven marketing, I help brands and organizations craft communication that connects data with emotion.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 group">
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                My Work
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                Get in Touch
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4">Proven Impact</h2>
            <p className="text-xl text-muted-foreground">
              Results that speak for themselves
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 50, rotateY: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotateY: 5, z: 50 }}
                className="perspective-1000"
              >
                <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-300 border-2 cinematic-glow preserve-3d">
                  <CardContent className="p-8 text-center">
                    <div className="mb-4 text-primary flex justify-center group-hover:scale-110 transition-transform duration-300">
                      {metric.icon}
                    </div>
                    <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-red-600 bg-clip-text text-transparent">
                      {metric.value}
                    </div>
                    <div className="text-muted-foreground">{metric.label}</div>
                  </CardContent>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-0">
        <HeroSection
          title={
            <>
              My Creative
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-600">
                {" "}Reels
              </span>
            </>
          }
          subtitle="Authentic storytelling, transitions, and humor for lifestyle audiences. 140K+ TikTok followers and consistent engagement growth."
          images={[
            {
              src: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600",
              alt: "Content Creation 1",
            },
            {
              src: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600",
              alt: "Content Creation 2",
            },
            {
              src: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=600",
              alt: "Content Creation 3",
            },
            {
              src: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=600",
              alt: "Content Creation 4",
            },
            {
              src: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600",
              alt: "Content Creation 5",
            },
          ]}
        />
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4">Core Skills</h2>
            <p className="text-xl text-muted-foreground">
              A comprehensive toolkit for digital excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -50 : 50,
                  rotateY: index % 2 === 0 ? -20 : 20,
                }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, rotateX: 5, z: 30 }}
                className="perspective-1000"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 group cinematic-glow preserve-3d">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </div>
                      <h3 className="text-2xl font-bold">{skill.category}</h3>
                    </div>
                    <ul className="space-y-3">
                      {skill.items.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4">Experience Timeline</h2>
            <p className="text-xl text-muted-foreground">
              A journey of growth and impact
            </p>
          </motion.div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -50, rotateY: -15 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, x: 10, rotateY: 2 }}
                className="perspective-1000"
              >
                <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary cinematic-glow preserve-3d">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                        <div className="text-lg text-primary font-semibold">
                          {item.company}
                        </div>
                      </div>
                      <Badge
                        variant="secondary"
                        className="text-sm px-4 py-2 mt-2 md:mt-0"
                      >
                        {item.period}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                    <ul className="space-y-2">
                      {item.achievements.map((achievement) => (
                        <li key={achievement} className="flex items-start gap-3">
                          <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground">
              Transforming challenges into measurable success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.8, rotateX: -20 }}
                whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotateY: 5, z: 50 }}
                className="perspective-1000"
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-2 group cinematic-glow preserve-3d">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>

                    <div className="space-y-4">
                      <div>
                        <div className="text-sm font-semibold text-primary mb-2">
                          Challenge
                        </div>
                        <p className="text-muted-foreground">{project.challenge}</p>
                      </div>

                      <div>
                        <div className="text-sm font-semibold text-primary mb-2">
                          Approach
                        </div>
                        <p className="text-muted-foreground">{project.approach}</p>
                      </div>

                      <div>
                        <div className="text-sm font-semibold text-primary mb-2">
                          Impact
                        </div>
                        <ul className="space-y-2">
                          {project.impact.map((item) => (
                            <li key={item} className="flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                              <span className="text-muted-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4">Services</h2>
            <p className="text-xl text-muted-foreground">
              Flexible engagement modes for your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50, rotateX: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.08, rotateY: 5, z: 50 }}
                className="perspective-1000"
              >
                <Card className="h-full text-center hover:shadow-xl transition-all duration-300 group border-2 cinematic-glow preserve-3d">
                  <CardContent className="p-8">
                    <div className="text-primary mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-3xl font-bold mb-8">Workflow Process</h3>
            <div className="flex flex-wrap justify-center items-center gap-4">
              {workflow.map((step, index) => (
                <Fragment key={step.step}>
                  <div className="text-center">
                    <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-2 mx-auto">
                      {index + 1}
                    </div>
                    <div className="font-bold mb-1">{step.step}</div>
                    <div className="text-sm text-muted-foreground max-w-[150px]">
                      {step.description}
                    </div>
                  </div>
                  {index < workflow.length - 1 && (
                    <ArrowRight className="w-6 h-6 text-primary hidden md:block" />
                  )}
                </Fragment>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4">Testimonials</h2>
            <p className="text-xl text-muted-foreground">
              What clients and partners say
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotateY: 3, z: 30 }}
                className="perspective-1000"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 cinematic-glow preserve-3d">
                  <CardContent className="p-8">
                    <Quote className="w-10 h-10 text-primary mb-4" />
                    <p className="text-muted-foreground mb-6 italic">
                      {testimonial.quote}
                    </p>
                    <div>
                      <div className="font-bold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-red-500/10 to-red-900/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold mb-4">Let's build something bold.</h2>
            <p className="text-xl text-muted-foreground mb-12">
              Available for collaborations, freelance projects, or strategy consulting.
            </p>

            <Card className="mb-8 border-2">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Email</div>
                      <div className="font-semibold">moe.allaa.93@gmail.com</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Phone</div>
                      <div className="font-semibold">+20 111 812 8892</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Linkedin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">LinkedIn</div>
                      <div className="font-semibold">mohamed-elsaadawey</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Globe className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Location</div>
                      <div className="font-semibold">Cairo, Egypt</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 group">
                Start a Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                <Instagram className="w-5 h-5 mr-2" />
                View Reels
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold mb-2">Mohamed ElSaadawey</div>
              <div className="text-muted-foreground">
                Digital Communications & Marketing Specialist
              </div>
            </div>

            <div className="flex gap-4">
              <Button size="icon" variant="outline" className="rounded-full">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="outline" className="rounded-full">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="outline" className="rounded-full">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="text-center text-sm text-muted-foreground">
            <p>© 2025 Mohamed ElSaadawey. All rights reserved.</p>
            <p className="mt-2">Built with passion, powered by creativity and data.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default PortfolioWebsite
