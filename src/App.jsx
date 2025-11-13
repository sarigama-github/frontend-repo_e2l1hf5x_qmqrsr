import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { Bot, PhoneCall, Workflow, Zap, Shield, Gauge, Rocket, Coins, Sparkles, MessageCircle } from 'lucide-react'

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
}

const GlowButton = ({ children }) => (
  <button className="relative inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold text-white transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]">
    <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 opacity-90 blur-md"></span>
    <span className="absolute inset-[2px] rounded-[10px] bg-[#0b0f1a]" />
    <span className="relative z-10 flex items-center gap-2">
      {children}
    </span>
  </button>
)

function SectionHeader({ overline, title, subtitle }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      {overline && (
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs tracking-wider text-cyan-300">
          <Sparkles size={14} /> {overline}
        </div>
      )}
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 text-balance text-white/60">{subtitle}</p>}
    </div>
  )
}

function Card({ icon: Icon, title, text }) {
  return (
    <motion.div
      variants={item}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
    >
      <div className="pointer-events-none absolute -inset-1 -z-10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-70" style={{ background: 'radial-gradient(120px circle at var(--x,50%) var(--y,50%), rgba(56,189,248,0.35), transparent 40%), radial-gradient(180px circle at 80% 20%, rgba(168,85,247,0.25), transparent 40%)' }} />
      <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-600/20 p-3 text-cyan-300 ring-1 ring-inset ring-white/10">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>
      <p className="text-sm text-white/60">{text}</p>
    </motion.div>
  )
}

function Testimonial({ quote, author, role }) {
  return (
    <div className="relative w-[320px] shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 text-white/90 backdrop-blur-sm">
      <div className="mb-4 text-sm text-white/70">“{quote}”</div>
      <div className="text-sm font-semibold">{author}</div>
      <div className="text-xs text-white/50">{role}</div>
    </div>
  )
}

export default function App() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100])
  const opacityBg = useTransform(scrollYProgress, [0, 0.4, 1], [1, 0.8, 0.6])

  return (
    <div ref={ref} className="min-h-screen bg-[#060a12] text-white selection:bg-cyan-500/30 selection:text-white">
      {/* Ambient background layers */}
      <motion.div style={{ opacity: opacityBg }} className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_10%,rgba(21,94,215,0.25),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_80%_10%,rgba(124,58,237,0.18),transparent_55%)]" />
        <motion.div style={{ y: y2 }} className="absolute inset-0 bg-[radial-gradient(45%_45%_at_20%_90%,rgba(34,211,238,0.14),transparent_60%)]" />
      </motion.div>

      {/* Floating CTA */}
      <a href="#contact" className="fixed bottom-6 right-6 z-40">
        <div className="group relative">
          <div className="absolute -inset-2 rounded-full bg-cyan-500/30 blur-md transition-opacity group-hover:opacity-80" />
          <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 text-white shadow-lg ring-1 ring-white/20">
            <MessageCircle className="h-6 w-6" />
          </div>
        </div>
      </a>

      {/* Navbar */}
      <div className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-[#060a12]/50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600" />
            <span className="text-sm font-semibold tracking-wider text-white/80">FLAMES.AI</span>
          </div>
          <div className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <a href="#about" className="hover:text-white">What We Do</a>
            <a href="#why" className="hover:text-white">Why Us</a>
            <a href="#solutions" className="hover:text-white">Solutions</a>
            <a href="#testimonials" className="hover:text-white">Testimonials</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
          <div className="hidden md:block">
            <GlowButton>
              <span>Book a Free Strategy Call</span>
            </GlowButton>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden">
        <motion.div style={{ y: y1 }} className="pointer-events-none absolute inset-0 -z-10">
          <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" />
        </motion.div>

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-24 md:grid-cols-2">
          <motion.div variants={container} initial="hidden" animate="show" className="relative">
            <motion.h1 variants={item} className="mb-6 text-5xl font-semibold leading-[1.1] sm:text-6xl md:text-7xl">
              Automate. Accelerate. <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">Dominate.</span>
            </motion.h1>
            <motion.p variants={item} className="mb-8 max-w-xl text-lg text-white/70">
              We build intelligent automations and AI voice agents that scale your business 10×.
            </motion.p>
            <motion.div variants={item} className="flex flex-wrap items-center gap-4">
              <GlowButton>
                <span>Book a Free Strategy Call</span>
              </GlowButton>
              <a href="#about" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-white/80 backdrop-blur transition hover:bg-white/10">
                Learn more
              </a>
            </motion.div>
            <motion.div variants={item} className="mt-10 flex items-center gap-6 text-white/50">
              <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-cyan-400" /> Faster Ops</div>
              <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-purple-400" /> Enterprise-grade</div>
              <div className="flex items-center gap-2"><Gauge className="h-4 w-4 text-blue-400" /> Scales on demand</div>
            </motion.div>
          </motion.div>
          <div className="relative hidden h-[520px] md:block">
            <div className="pointer-events-none absolute -inset-10 -z-10 rounded-full bg-gradient-to-tr from-cyan-500/15 via-blue-600/10 to-purple-600/15 blur-3xl" />
            <div className="absolute right-0 top-10 h-80 w-80 rounded-3xl border border-white/10 bg-white/5 backdrop-blur" />
            <div className="absolute bottom-10 left-10 h-52 w-52 rounded-full border border-white/10 bg-white/[0.06] backdrop-blur" />
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section id="about" className="relative mx-auto max-w-7xl px-6 py-24">
        <SectionHeader
          overline="WHAT WE DO"
          title="Automation that moves like magic"
          subtitle="Lead capture, AI call agents, and workflow intelligence — orchestrated to deliver outcomes, not just outputs."
        />
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid gap-6 md:grid-cols-3">
          <Card icon={Bot} title="AI Voice Agents" text="Natural, on-brand conversations that book meetings, qualify leads, and resolve support — 24/7." />
          <Card icon={PhoneCall} title="Lead Automation" text="End-to-end acquisition: enrich, route, and follow-up automatically across channels." />
          <Card icon={Workflow} title="Workflow Intelligence" text="We connect tools with logic and memory so your ops run efficiently without babysitting." />
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section id="why" className="relative mx-auto max-w-7xl px-6 py-24">
        <SectionHeader
          overline="WHY CHOOSE US"
          title="Built for speed, precision, and scale"
          subtitle="We combine enterprise rigor with startup velocity to deliver measurable impact."
        />
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          <Card icon={Rocket} title="Speed" text="Rapid sprints from idea to deployed automation." />
          <Card icon={Shield} title="Precision" text="Robust guardrails and monitoring to keep things on track." />
          <Card icon={Gauge} title="Scalability" text="Elastic infra and models that grow with you." />
          <Card icon={Coins} title="Efficiency" text="Lower cost per task with higher throughput." />
        </motion.div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="relative mx-auto max-w-7xl px-6 py-24">
        <SectionHeader
          overline="OUR SOLUTIONS"
          title="From first touch to full automation"
          subtitle="A modular stack of services tailored to your goals."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {["Lead Capture & Enrichment","AI Call & SMS Agents","Ops & Back-office Automation"].map((title, i) => (
            <motion.div key={i} initial={{ rotateY: 0, opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ rotateY: 6 }} transition={{ type: 'spring', stiffness: 120, damping: 15 }} viewport={{ once: true }} className="group perspective">
              <div className="relative min-h-[220px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur">
                <div className="pointer-events-none absolute -inset-1 -z-10 bg-gradient-to-tr from-cyan-500/20 via-blue-600/20 to-purple-600/20 opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-100" />
                <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>
                <p className="mb-6 text-sm text-white/60">We integrate your stack and design agents that execute with context, speed, and measurable ROI.</p>
                <div className="h-1 w-1/2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="relative overflow-hidden px-6 py-24">
        <SectionHeader
          overline="RESULTS"
          title="What partners say"
          subtitle="Real outcomes from teams that automated with us."
        />
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 24, ease: 'linear' }}
            className="flex gap-6"
          >
            {[1,2,3,4,5,6].map((i) => (
              <Testimonial key={i} quote="Scaled outbound with AI calling — 4.7x more qualified demos in 6 weeks." author="Ops Lead, SaaS" role="B2B SaaS" />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative mx-auto max-w-5xl px-6 pb-28">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-8 backdrop-blur">
          <div className="pointer-events-none absolute -inset-1 -z-10 bg-[radial-gradient(200px_circle_at_20%_20%,rgba(34,211,238,0.25),transparent_60%),radial-gradient(240px_circle_at_80%_80%,rgba(168,85,247,0.25),transparent_60%)] opacity-80 blur-xl" />
          <div className="mb-8 text-center">
            <h3 className="text-2xl font-semibold">Let’s design your automation roadmap</h3>
            <p className="mt-2 text-white/70">Tell us about your goals. We’ll propose a strategy in 24 hours.</p>
          </div>
          <form onSubmit={(e)=>{e.preventDefault(); alert('Thanks! We\'ll reach out shortly.')}} className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm text-white/70">Name</label>
              <input required className="w-full rounded-xl border border-white/10 bg-[#0b0f1a] px-4 py-3 text-white outline-none ring-0 transition focus:border-cyan-400/50" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="mb-2 block text-sm text-white/70">Email</label>
              <input type="email" required className="w-full rounded-xl border border-white/10 bg-[#0b0f1a] px-4 py-3 text-white outline-none transition focus:border-cyan-400/50" placeholder="jane@company.com" />
            </div>
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm text-white/70">What are you looking to automate?</label>
              <textarea rows="4" className="w-full rounded-xl border border-white/10 bg-[#0b0f1a] px-4 py-3 text-white outline-none transition focus:border-cyan-400/50" placeholder="Lead qualification, outbound calling, support, back-office flows..." />
            </div>
            <div className="md:col-span-2 flex items-center justify-between">
              <p className="text-xs text-white/50">By submitting, you agree to our privacy policy.</p>
              <GlowButton>
                <span>Request Strategy Call</span>
              </GlowButton>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10/0 bg-[#070b13] py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600" />
            <span className="text-sm font-semibold tracking-wider text-white/70">FLAMES.AI</span>
          </div>
          <p className="text-xs text-white/50">© {new Date().getFullYear()} Flames AI Automation — All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs text-white/60">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
