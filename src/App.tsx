/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link, 
  useParams,
  useLocation
} from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { 
  Code2, 
  Search, 
  Megaphone, 
  Cpu, 
  Bot, 
  MessageSquare, 
  ArrowRight, 
  Mail, 
  MapPin, 
  Phone,
  Github,
  Twitter,
  Linkedin,
  Instagram,
  Send,
  CheckCircle2,
  ExternalLink,
  Zap,
  Globe,
  Layers,
  Menu,
  X
} from "lucide-react";

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between bg-white/80 backdrop-blur-md border-2 border-brand-black rounded-full px-4 md:px-6 py-2 md:py-3 shadow-brutalist relative">
        <Link to="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
          <div className="w-8 h-8 bg-brand-lime border-2 border-brand-black rounded-lg flex items-center justify-center font-display font-bold text-xl">H</div>
          <span className="font-display font-extrabold text-lg md:text-xl tracking-tight">HOLONCODE</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 font-display font-bold uppercase text-sm">
          <Link to="/#services" className="hover:text-brand-lime transition-colors">Services</Link>
          <Link to="/#portfolio" className="hover:text-brand-lime transition-colors">Portfolio</Link>
          <Link to="/#contact" className="hover:text-brand-lime transition-colors">Contact</Link>
        </div>

        <div className="flex items-center gap-2">
          <Link to="/#contact" className="hidden sm:block btn-brutalist py-2 px-4 text-xs">
            Get a Quote
          </Link>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 border-2 border-brand-black rounded-full flex items-center justify-center bg-brand-lime shadow-brutalist active:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 mt-4 bg-white border-2 border-brand-black rounded-3xl p-6 shadow-brutalist md:hidden flex flex-col gap-4 z-40"
            >
              <Link to="/#services" className="font-display font-bold uppercase text-lg hover:text-brand-lime" onClick={() => setIsOpen(false)}>Services</Link>
              <Link to="/#portfolio" className="font-display font-bold uppercase text-lg hover:text-brand-lime" onClick={() => setIsOpen(false)}>Portfolio</Link>
              <Link to="/#contact" className="font-display font-bold uppercase text-lg hover:text-brand-lime" onClick={() => setIsOpen(false)}>Contact</Link>
              <Link to="/#contact" className="btn-brutalist text-center py-3" onClick={() => setIsOpen(false)}>Get a Quote</Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-brand-black text-white py-16 px-6 border-t-2 border-white/10">
    <div className="max-w-[1600px] mx-auto">
      <div className="grid md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-brand-lime border-2 border-brand-black rounded-lg flex items-center justify-center font-display font-bold text-xl text-brand-black">H</div>
            <span className="font-display font-extrabold text-2xl tracking-tight">HOLONCODE</span>
          </div>
          <p className="text-gray-400 max-w-sm mb-8">
            Building the digital infrastructure of tomorrow. From custom AI agents to high-performance web applications.
          </p>
          <div className="flex gap-4">
            {[Twitter, Github, Linkedin, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 border-2 border-white/20 rounded-full flex items-center justify-center hover:bg-brand-lime hover:text-brand-black transition-all">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display font-bold uppercase mb-6 text-brand-lime">Services</h4>
          <ul className="space-y-4 text-gray-400 text-sm font-medium">
            <li><Link to="/service/web-dev" className="hover:text-white transition-colors">Web Development</Link></li>
            <li><Link to="/service/seo" className="hover:text-white transition-colors">SEO & Growth</Link></li>
            <li><Link to="/service/software" className="hover:text-white transition-colors">Custom Software</Link></li>
            <li><Link to="/service/ai" className="hover:text-white transition-colors">AI Solutions</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-bold uppercase mb-6 text-brand-lime">Company</h4>
          <ul className="space-y-4 text-gray-400 text-sm font-medium">
            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
          </ul>
        </div>
      </div>
      <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-xs font-medium uppercase tracking-widest">
          © 2024 HOLONCODE. ALL RIGHTS RESERVED.
        </p>
        <p className="text-gray-500 text-xs font-medium uppercase tracking-widest">
          MADE WITH ❤️ FOR THE FUTURE
        </p>
      </div>
    </div>
  </footer>
);

const Marquee = () => (
  <div className="bg-brand-lime border-y-2 border-brand-black py-4 overflow-hidden whitespace-nowrap">
    <motion.div 
      animate={{ x: [0, -1000] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="inline-block"
    >
      {[...Array(10)].map((_, i) => (
        <span key={i} className="font-display font-extrabold text-4xl mx-8 uppercase">
          Website Development • SEO • Digital Marketing • Custom Software • AI Solutions • 
        </span>
      ))}
    </motion.div>
  </div>
);

const SERVICE_IMAGES: Record<string, string> = {
  "web-dev": "/web_development.png",
  "seo": "/SEO.png",
  "software": "/custom_application.png",
  "ai": "/AI_solution.png",
};

const ServiceIllustration = ({ id }: { id: string }) => {
  const src = SERVICE_IMAGES[id];
  if (!src) return null;
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="w-full h-full flex items-center justify-center p-2"
    >
      <img
        src={src}
        alt={id}
        className="w-full h-full object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.10)]"
      />
    </motion.div>
  );
};

/* Live iframe preview component — lazy-loads each site only when card enters viewport */
const SitePreview = ({ url, title }: { url: string; title: string }) => {
  const [isInView, setIsInView] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsInView(true); obs.disconnect(); } },
      { rootMargin: '120px' }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative w-full aspect-video overflow-hidden bg-gray-100">
      {/* Shimmer while loading */}
      <div className={`absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-50 to-gray-200 animate-pulse transition-opacity duration-500 ${loaded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} />
      {isInView && (
        <iframe
          src={url}
          title={title}
          onLoad={() => setLoaded(true)}
          className={`absolute top-0 left-0 w-[200%] h-[200%] origin-top-left scale-[0.5] border-0 pointer-events-none transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          sandbox="allow-scripts allow-same-origin"
        />
      )}
    </div>
  );
};

const ALL_PROJECTS = [
  {
    title: "SubSafe",
    desc: "AI-powered Reddit compliance checker that helps founders post without getting shadowbanned.",
    category: "AI SaaS",
    url: "https://subsafe-rho.vercel.app/",
    tags: ["AI", "SaaS", "Reddit"],
    featured: true,
  },
  {
    title: "EditFlow",
    desc: "Weekly scheduling planner for video editing agencies — drag, assign, and track team capacity.",
    category: "Team SaaS",
    url: "https://editflow.entrext.in/",
    tags: ["SaaS", "Productivity", "Agency"],
    featured: true,
  },
  {
    title: "Herth",
    desc: "India's hyper-local business visibility engine connecting women entrepreneurs with buyers nationwide.",
    category: "Marketplace",
    url: "https://herth.entrext.in/",
    tags: ["Marketplace", "Social", "India"],
    featured: true,
  },
  {
    title: "Dr. BioReset",
    desc: "Data-driven metabolic reversal clinic for high-performing executives — biohacking meets medicine.",
    category: "Healthcare Web",
    url: "https://drbioreset-puce.vercel.app/",
    tags: ["Healthcare", "Landing Page", "SaaS"],
    featured: true,
  },
  {
    title: "InviteFlow",
    desc: "AI bulk invite generator — replace Canva with code-first, CSV-powered personalised event design.",
    category: "AI SaaS",
    url: "https://inviteflow-steel.vercel.app/",
    tags: ["AI", "Events", "Design"],
    featured: true,
  },
  {
    title: "NOA",
    desc: "Unified prompt engineering ecosystem — discover, manage, and share AI prompts with multi-model visualisation.",
    category: "AI Tools",
    url: "https://noa.entrext.in/",
    tags: ["AI", "Prompt Engineering", "SaaS"],
    featured: false,
  },
  {
    title: "SYM — Speak Your Mind",
    desc: "EdTech platform for 21st-century communication skills — live classes, AI debate practice, and MUN events.",
    category: "EdTech",
    url: "https://www.symedu.in/",
    tags: ["EdTech", "AI", "Education"],
    featured: false,
  },
  {
    title: "Helix",
    desc: "Non-linear agentic AI platform with swarm orchestration, spatial isolation, and enterprise security.",
    category: "AI SaaS",
    url: "https://helix-web-page.vercel.app/",
    tags: ["AI", "Agents", "Enterprise"],
    featured: false,
  },
  {
    title: "VoiceDine",
    desc: "AI voice agent for restaurants — answers every call, upsells orders, and syncs directly to your POS.",
    category: "AI / Restaurant",
    url: "https://voicedine.vercel.app/",
    tags: ["AI", "Voice", "Restaurant"],
    featured: false,
  },
  {
    title: "Secret Room",
    desc: "Ephemeral anonymous chat platform — no login, time-limited sessions, and self-destructing messages.",
    category: "Web App",
    url: "https://secretroom.entrext.in/",
    tags: ["Privacy", "Real-Time", "Chat"],
    featured: false,
  },
];

const Home = () => {
  const services = [
    {
      id: "web-dev",
      icon: <Code2 className="w-8 h-8" />,
      title: "Web Dev.",
      desc: "High-performance websites built with modern frameworks.",
      link: "/service/web-dev",
      color: "bg-blue-50"
    },
    {
      id: "seo",
      icon: <Search className="w-8 h-8" />,
      title: "SEO & Growth",
      desc: "Data-driven strategies to dominate search results.",
      link: "/service/seo",
      color: "bg-orange-50"
    },
    {
      id: "software",
      icon: <Cpu className="w-8 h-8" />,
      title: "Custom Apps",
      desc: "Scalable software tailored to your business logic.",
      link: "/service/software",
      color: "bg-purple-50"
    },
    {
      id: "ai",
      icon: <Bot className="w-8 h-8" />,
      title: "AI Solutions",
      desc: "Custom automation, agents, and intelligent bots.",
      link: "/service/ai",
      color: "bg-brand-cream"
    }
  ];

  const portfolio = ALL_PROJECTS.filter(p => p.featured);

  return (
    <div className="">
      {/* 1. HERO: The High-Level Promise */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Dot grid background */}
        <div className="absolute inset-0 -z-10" style={{ backgroundImage: 'radial-gradient(circle, #9ca3af 1px, transparent 1px)', backgroundSize: '22px 22px', opacity: 0.35 }}></div>

        <div className="max-w-[1800px] mx-auto w-full px-6 md:px-10 lg:px-14 pt-28 pb-12 lg:pt-0 lg:pb-0">
          <div className="grid lg:grid-cols-[1fr_1.15fr] gap-8 lg:gap-4 items-center min-h-screen">

            {/* LEFT: Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-start text-left lg:pr-8"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-brand-black rounded-full font-display font-bold text-[10px] uppercase mb-8 shadow-[3px_3px_0px_rgba(0,0,0,1)]">
                <span className="w-2 h-2 bg-brand-lime rounded-full animate-pulse"></span>
                EST. 2024 / NEXT-GEN DIGITAL AGENCY
              </div>

              {/* Headline */}
              <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl mb-6 leading-[0.88] tracking-tighter">
                WE BUILD<br />
                THE <span className="text-brand-lime" style={{ WebkitTextStroke: '2px #000', paintOrder: 'stroke fill' }}>FUTURE</span><br />
                OF DIGITAL<br />
                <span className="text-brand-lime" style={{ WebkitTextStroke: '2px #000', paintOrder: 'stroke fill' }}>GROWTH.</span>
              </h1>

              {/* Subtext */}
              <p className="text-base md:text-lg text-gray-700 max-w-lg mb-10 leading-snug font-medium">
                From <strong>Web Development</strong> to SEO, custom <strong>AI Solutions</strong>, and powerful <strong>Software Creation</strong>. We dominate <strong>Digital Marketing</strong> and build your future. We don't just build; we <strong>innovate</strong>.
              </p>

              {/* CTA Row */}
              <div className="flex flex-wrap gap-6 items-center">
                <a href="#contact" className="btn-brutalist text-base md:text-lg px-7 md:px-9 py-3 md:py-4">
                  Start Your Journey
                </a>
                <div className="flex flex-col items-start gap-1">
                  <span className="text-[10px] font-display font-black uppercase tracking-widest text-gray-400">Trusted by</span>
                  <div className="flex gap-3 grayscale opacity-50">
                    <Globe className="w-5 h-5 md:w-6 md:h-6" />
                    <Zap className="w-5 h-5 md:w-6 md:h-6" />
                    <Cpu className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT: Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex items-center justify-center lg:justify-end h-full"
            >
              <div className="relative w-full">
                <img
                  src="/hero_section.png"
                  alt="HolonCode — digital agency illustration"
                  className="w-full h-auto object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.12)] scale-110 lg:scale-125 origin-center"
                />
                {/* 100% CUSTOM Badge */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-6 right-4 md:bottom-10 md:right-6"
                >
                  
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <Marquee />

      {/* 2. THE PROBLEM: Empathy & Pain Points */}
      <section className="py-16 md:py-24 px-6 bg-brand-cream border-b-2 border-brand-black">
        <div className="max-w-[1600px] mx-auto text-center">
          <h2 className="text-3xl md:text-6xl mb-8">STRUGGLING TO STAND OUT ONLINE?</h2>
          <p className="text-lg md:text-xl text-gray-600 mb-12 font-medium max-w-3xl mx-auto">
            Most agencies use cookie-cutter templates that make you look like everyone else. We believe your digital presence should be as unique as your business.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: <Zap className="w-6 h-6" />, text: "Inconsistent Branding" },
              { icon: <Zap className="w-6 h-6" />, text: "Manual Data Entry" },
              { icon: <Zap className="w-6 h-6" />, text: "Low Search Visibility" }
            ].map((item, i) => (
              <div key={i} className="p-6 border-2 border-brand-black rounded-xl bg-white shadow-brutalist">
                <div className="flex justify-center mb-4 text-brand-lime drop-shadow-[1px_1px_0px_rgba(0,0,0,1)]">
                  {item.icon}
                </div>
                <p className="font-display font-bold uppercase text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2.5 THE EDGE: Why Us? */}
      <section className="py-16 md:py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="card-brutalist bg-brand-lime p-8 md:p-12 rotate-[-2deg] relative z-10">
                <h3 className="text-2xl md:text-5xl mb-6">NOT YOUR TYPICAL AGENCY.</h3>
                <p className="text-base md:text-lg mb-8 font-medium">We don't do "safe". We do effective. Our brutalist approach ensures your brand is remembered, not just seen.</p>
                <ul className="space-y-4">
                  {[
                    "AI-First Architecture",
                    "Conversion-Focused Design",
                    "Zero Template Policy",
                    "Direct Access to Founders"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 font-display font-bold uppercase text-sm">
                      <CheckCircle2 className="w-5 h-5" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-2 border-brand-black/5 rounded-full -z-0"></div>
            </div>
            <div>
              <h2 className="text-3xl md:text-6xl mb-8">THE HOLONCODE EDGE</h2>
              <div className="space-y-12">
                {[
                  { title: "Brutalist Aesthetics", desc: "Bold typography and high contrast that commands attention in a sea of sameness." },
                  { title: "AI-Powered Workflows", desc: "We integrate custom AI agents into your business to automate the boring stuff." },
                  { title: "Data-Driven Growth", desc: "Every pixel and every line of code is optimized for your bottom line." }
                ].map((edge, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="text-4xl font-display font-black text-brand-lime drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">0{i+1}</div>
                    <div>
                      <h4 className="text-2xl mb-2">{edge.title}</h4>
                      <p className="text-gray-600 font-medium">{edge.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE CAPABILITIES: Our Solution */}
      <section id="services" className="py-16 md:py-24 px-6 bg-brand-cream border-y-2 border-brand-black overflow-hidden">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6">
            <div className="relative">
              <h2 className="text-4xl md:text-7xl mb-4 leading-none">OUR<br /><span className="text-brand-lime drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">EXPERTISE</span></h2>
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-brand-lime/20 rounded-full blur-3xl -z-10"></div>
            </div>
            <div className="max-w-md">
              <p className="text-gray-600 font-medium text-lg mb-6 leading-relaxed">
                We don't just offer services; we engineer growth. Our capabilities are designed to scale with your ambition.
              </p>
              <div className="flex gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-brand-black bg-brand-lime flex items-center justify-center font-display font-bold text-brand-black text-xs">
                      {i === 3 ? '50+' : <CheckCircle2 className="w-4 h-4" />}
                    </div>
                  ))}
                </div>
                <p className="text-xs font-display font-bold uppercase tracking-widest text-brand-black pt-3">Projects Delivered</p>
              </div>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((s, i) => (
              <Link to={s.link} key={i} className="group">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative p-1 border-2 border-brand-black rounded-[2.5rem] ${s.color} transition-all shadow-brutalist hover:shadow-none hover:translate-x-1 hover:translate-y-1 overflow-hidden`}
                >
                  <div className="bg-white rounded-[2.3rem] p-6 md:p-10 h-full">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div className="order-2 md:order-1">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-brand-lime rounded-2xl border-2 border-brand-black flex items-center justify-center text-brand-black mb-6 group-hover:rotate-12 transition-transform">
                          {s.icon}
                        </div>
                        <h3 className="text-2xl md:text-4xl mb-4 group-hover:text-brand-lime transition-colors">{s.title}</h3>
                        <p className="text-gray-500 mb-8 text-base md:text-lg leading-relaxed">{s.desc}</p>
                        <div className="inline-flex items-center gap-3 px-6 py-3 bg-brand-black text-white rounded-full font-display font-bold text-[10px] md:text-xs uppercase group-hover:bg-brand-lime group-hover:text-brand-black transition-all">
                          View Details <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                      <div className="order-1 md:order-2 h-56 md:h-80 lg:h-[420px] bg-brand-cream/50 rounded-3xl border-2 border-brand-black/5 overflow-hidden group-hover:border-brand-lime transition-colors">
                        <ServiceIllustration id={s.id} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE PROOF: Portfolio */}
      <section id="portfolio" className="py-16 md:py-24 px-6">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-6xl mb-4">SELECTED WORKS</h2>
              <p className="text-gray-500 font-display font-bold italic uppercase tracking-widest text-xs">Proof of Concept</p>
            </div>
            <Link to="/portfolio" className="btn-brutalist text-sm px-6 py-3">View All Projects</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolio.map((p, i) => (
              <motion.a
                key={i}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="card-brutalist bg-white p-0 overflow-hidden mb-6">
                  <SitePreview url={p.url} title={p.title} />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl mb-1">{p.title}</h3>
                    <p className="text-gray-500 font-display font-bold uppercase text-xs">{p.category}</p>
                  </div>
                  <div className="w-10 h-10 border-2 border-brand-black rounded-full flex items-center justify-center group-hover:bg-brand-lime transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* 5. THE TRUST: Testimonials */}
      <section className="py-16 md:py-24 px-6 bg-brand-lime border-y-2 border-brand-black">
        <div className="max-w-[1600px] mx-auto">
          <h2 className="text-3xl md:text-6xl mb-12 md:mb-16">WHAT CLIENTS SAY</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: "Sarah Jenkins", role: "CEO, TechFlow", quote: "HolonCode transformed our legacy system into a high-performance AI-driven platform. Their brutalist design is exactly what we needed to stand out." },
              { name: "Marcus Chen", role: "Founder, EcoStream", quote: "The AI agents they built for our customer support have reduced our response time by 80%. Truly a game changer for our business." }
            ].map((t, i) => (
              <div key={i} className="card-brutalist bg-white p-6 md:p-8">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => <Zap key={i} className="w-4 h-4 md:w-5 md:h-5 text-brand-lime fill-brand-black" />)}
                </div>
                <p className="text-lg md:text-xl mb-8 font-medium italic">"{t.quote}"</p>
                <div>
                  <p className="font-display font-bold uppercase text-sm md:text-base">{t.name}</p>
                  <p className="text-gray-500 text-[10px] md:text-sm font-bold uppercase">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. THE METHOD: How We Work */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-[1600px] mx-auto">
          <h2 className="text-3xl md:text-6xl mb-12 md:mb-16 text-center">OUR PROCESS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { step: "01", title: "Strategy", desc: "We dive deep into your business goals and user needs." },
              { step: "02", title: "Design", desc: "Brutalist aesthetics meets pixel-perfect functionality." },
              { step: "03", title: "Build", desc: "Clean code, scalable architecture, and AI integration." }
            ].map((p, i) => (
              <div key={i} className="text-center group">
                <div className="text-6xl md:text-8xl font-display font-black text-brand-black/5 mb-[-30px] md:mb-[-40px] relative z-0 group-hover:text-brand-lime/20 transition-colors">{p.step}</div>
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl mb-4">{p.title}</h3>
                  <p className="text-gray-600 font-medium text-sm md:text-base">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. THE CTA: Contact */}
      <section id="contact" className="py-16 md:py-24 px-6 bg-brand-cream border-t-2 border-brand-black">
        <div className="max-w-[1600px] mx-auto">

          {/* Section Header — full width */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-4xl md:text-6xl lg:text-7xl mb-4">LET'S CREATE SOMETHING UNFORGETTABLE.</h2>
            <p className="text-base md:text-lg text-gray-600 font-medium max-w-xl leading-snug">
              Have a project in mind? Reach out and let's build something remarkable together.
            </p>
          </div>

          {/* Two columns: contact info left, form right */}
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-8 lg:gap-12 items-start">

            {/* Left: Contact Details */}
            <div className="flex flex-col gap-4">
              <a
                href="mailto:taha.sadikot.m@gmail.com"
                className="group flex items-center gap-6 bg-white border-2 border-brand-black rounded-2xl px-7 py-6 shadow-brutalist hover:shadow-brutalist-hover hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
              >
                <div className="w-16 h-16 bg-brand-lime border-2 border-brand-black rounded-full flex items-center justify-center shrink-0">
                  <Mail className="w-7 h-7" />
                </div>
                <div className="min-w-0">
                  <p className="font-display font-black uppercase text-[10px] tracking-widest text-gray-400 mb-0.5">Email</p>
                  <p className="font-display text-lg md:text-2xl lg:text-3xl group-hover:text-brand-lime transition-colors break-all leading-tight">taha.sadikot.m@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+919427030666"
                className="group flex items-center gap-6 bg-white border-2 border-brand-black rounded-2xl px-7 py-6 shadow-brutalist hover:shadow-brutalist-hover hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
              >
                <div className="w-16 h-16 bg-brand-black border-2 border-brand-black rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-7 h-7 text-brand-lime" />
                </div>
                <div>
                  <p className="font-display font-black uppercase text-[10px] tracking-widest text-gray-400 mb-0.5">Phone</p>
                  <p className="font-display text-lg md:text-2xl lg:text-3xl group-hover:text-brand-lime transition-colors leading-tight">+91 94270 30666</p>
                </div>
              </a>

              <div className="mt-2 p-6 bg-brand-lime border-2 border-brand-black rounded-2xl shadow-brutalist">
                <p className="font-display font-black uppercase text-xs tracking-widest mb-2">Response Time</p>
                <p className="font-display font-bold text-2xl">Within 24 hrs</p>
                <p className="text-sm font-medium text-brand-black/60 mt-1">We reply fast. Always.</p>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="card-brutalist p-8 md:p-12 bg-white">
              <h3 className="text-3xl md:text-4xl mb-8">SEND A MESSAGE</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-display font-bold uppercase text-xs tracking-widest">Your Name</label>
                    <input type="text" placeholder="John Doe" className="w-full px-5 py-4 bg-brand-cream border-2 border-brand-black rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-lime text-base font-medium" />
                  </div>
                  <div className="space-y-2">
                    <label className="font-display font-bold uppercase text-xs tracking-widest">Your Email</label>
                    <input type="email" placeholder="john@example.com" className="w-full px-5 py-4 bg-brand-cream border-2 border-brand-black rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-lime text-base font-medium" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-display font-bold uppercase text-xs tracking-widest">Phone Number</label>
                    <input type="tel" placeholder="+1 (555) 000-0000" className="w-full px-5 py-4 bg-brand-cream border-2 border-brand-black rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-lime text-base font-medium" />
                  </div>
                  <div className="space-y-2">
                    <label className="font-display font-bold uppercase text-xs tracking-widest">Service Needed</label>
                    <select className="w-full px-5 py-4 bg-brand-cream border-2 border-brand-black rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-lime text-base font-medium appearance-none cursor-pointer">
                      <option value="">Select a service...</option>
                      <option value="web-dev">Web Development</option>
                      <option value="seo">SEO & Growth</option>
                      <option value="software">Custom Software</option>
                      <option value="ai">AI Solutions</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="font-display font-bold uppercase text-xs tracking-widest">Message</label>
                  <textarea rows={6} placeholder="Tell us about your vision..." className="w-full px-5 py-4 bg-brand-cream border-2 border-brand-black rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-lime resize-none text-base font-medium"></textarea>
                </div>
                <button type="submit" className="btn-brutalist w-full flex items-center justify-center gap-2 py-4 text-base md:text-lg">
                  Send Message <Send className="w-5 h-5" />
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

const WebDevPage = () => {
  const techStack = {
    "Frontend": ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite", "Framer Motion"],
    "Backend": ["Node.js", "Express", "PostgreSQL", "Redis", "REST & GraphQL"],
    "Deployment": ["Vercel", "AWS", "Cloudflare", "Docker", "CI/CD Pipelines"],
  };

  const offerings = [
    {
      title: "Landing Pages",
      desc: "High-converting pages built to capture leads and drive sales from day one.",
      tags: ["CRO-Optimised", "A/B Ready", "Fast"],
      icon: <Globe className="w-7 h-7" />,
      bg: "bg-blue-50",
    },
    {
      title: "E-Commerce",
      desc: "Full-stack shopping experiences with secure payments and seamless UX.",
      tags: ["Stripe", "Headless", "Custom Cart"],
      icon: <Layers className="w-7 h-7" />,
      bg: "bg-brand-lime",
    },
    {
      title: "Web Applications",
      desc: "Complex SaaS dashboards and tools with full authentication, roles, and data.",
      tags: ["Auth", "Real-time", "Scalable"],
      icon: <Code2 className="w-7 h-7" />,
      bg: "bg-brand-cream",
    },
    {
      title: "Corporate & Portfolio",
      desc: "Polished brand websites that leave a lasting impression on every visitor.",
      tags: ["CMS", "Multilingual", "SEO-first"],
      icon: <ExternalLink className="w-7 h-7" />,
      bg: "bg-orange-50",
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Discovery",
      desc: "Deep-dive into your goals, audience, and competitors. We align on scope and set measurable success metrics.",
      deliverable: "Project Brief & Sitemap",
    },
    {
      step: "02",
      title: "Design",
      desc: "Wireframes to high-fidelity mockups. Brutalist aesthetics, branded to your identity, zero templates used.",
      deliverable: "Figma Design Files",
    },
    {
      step: "03",
      title: "Development",
      desc: "Clean, tested code. Component-driven architecture. Weekly build previews so you're never left wondering.",
      deliverable: "Staged Preview Links",
    },
    {
      step: "04",
      title: "Launch & Support",
      desc: "Deploy to production, set up analytics and monitoring, hand over everything. We stay available post-launch.",
      deliverable: "Live Site + Full Docs",
    },
  ];

  const stats = [
    { value: "< 1s", label: "Load Time" },
    { value: "100", label: "Lighthouse Score" },
    { value: "100%", label: "Mobile Responsive" },
    { value: "0", label: "Templates Used" },
  ];

  return (
    <div className="bg-brand-cream">

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center pt-28 pb-16 px-6 md:px-12 lg:px-16 overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ backgroundImage: 'radial-gradient(circle, #9ca3af 1px, transparent 1px)', backgroundSize: '22px 22px', opacity: 0.3 }}></div>
        <div className="max-w-[1600px] mx-auto w-full">
          <Link to="/#services" className="inline-flex items-center gap-2 text-gray-500 hover:text-brand-black font-display font-bold uppercase text-xs transition-colors mb-10">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to Services
          </Link>
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-8 lg:gap-6 items-center">
            {/* Left: Copy */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-brand-black rounded-full font-display font-bold text-[10px] uppercase mb-6 shadow-brutalist">
                <Code2 className="w-3 h-3" /> Web Development
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl mb-6 leading-[0.88] tracking-tighter">
                WEBSITES<br />
                THAT <span className="text-brand-lime" style={{ WebkitTextStroke: '2px #000', paintOrder: 'stroke fill' }}>WORK</span><br />
                AS HARD<br />
                AS YOU DO.
              </h1>
              <p className="text-base md:text-lg text-gray-600 font-medium max-w-lg mb-10 leading-snug">
                From blazing-fast landing pages to full SaaS platforms — we engineer every pixel for performance, conversion, and growth.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link to="/#contact" className="btn-brutalist px-8 py-4 text-base">Start Your Project</Link>
                <a href="#process" className="px-8 py-4 border-2 border-brand-black rounded-full font-display font-black uppercase text-base hover:bg-brand-black hover:text-white transition-all shadow-brutalist hover:shadow-brutalist-hover hover:translate-x-[2px] hover:translate-y-[2px]">See Our Process</a>
              </div>
            </motion.div>

            {/* Right: Illustration + floating badges */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center items-center"
            >
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="w-full"
              >
                <img
                  src="/web_development.png"
                  alt="Web Development"
                  className="w-full h-auto object-contain drop-shadow-[0_24px_64px_rgba(0,0,0,0.13)]"
                />
              </motion.div>
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="absolute top-6 left-0 bg-white border-2 border-brand-black rounded-2xl px-4 py-3 shadow-brutalist"
              >
                <p className="font-display font-black uppercase text-[10px] text-gray-400">Avg. Load Time</p>
                <p className="font-display font-black text-xl md:text-2xl">0.8s</p>
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute bottom-6 right-0 bg-brand-lime border-2 border-brand-black rounded-2xl px-4 py-3 shadow-brutalist"
              >
                <p className="font-display font-black uppercase text-[10px]">Lighthouse</p>
                <p className="font-display font-black text-xl md:text-2xl">100 / 100</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <div className="bg-brand-black text-white border-y-4 border-brand-black">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-10 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {stats.map((s, i) => (
            <div key={i} className="text-center px-6 py-2">
              <p className="font-display font-black text-4xl md:text-6xl text-brand-lime leading-none">{s.value}</p>
              <p className="font-display font-bold uppercase text-[10px] tracking-widest text-gray-400 mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── WHAT WE BUILD ── */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-16">
        <div className="max-w-[1600px] mx-auto">
          <div className="mb-12 md:mb-16">
            <p className="font-display font-black uppercase text-xs tracking-widest text-gray-400 mb-3">Our Expertise</p>
            <h2 className="text-4xl md:text-6xl">WHAT WE BUILD</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {offerings.map((o, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`group ${o.bg} border-2 border-brand-black rounded-3xl p-7 shadow-brutalist hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex flex-col gap-5`}
              >
                <div className="w-14 h-14 bg-white border-2 border-brand-black rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform shadow-brutalist">
                  {o.icon}
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl mb-2">{o.title}</h3>
                  <p className="text-gray-600 text-sm font-medium leading-snug">{o.desc}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {o.tags.map((tag, j) => (
                    <span key={j} className="text-[10px] font-display font-black uppercase tracking-widest px-3 py-1.5 bg-white border-2 border-brand-black rounded-full shadow-[2px_2px_0px_rgba(0,0,0,1)]">{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-16 bg-white border-y-2 border-brand-black">
        <div className="max-w-[1600px] mx-auto">
          <div className="mb-12 md:mb-16">
            <p className="font-display font-black uppercase text-xs tracking-widest text-gray-400 mb-3">Under The Hood</p>
            <h2 className="text-4xl md:text-6xl">OUR TECH STACK</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(techStack).map(([category, techs], i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`border-2 border-brand-black rounded-3xl p-8 md:p-10 shadow-brutalist ${i === 0 ? 'bg-brand-black text-white' : i === 1 ? 'bg-brand-lime' : 'bg-brand-cream'}`}
              >
                <p className={`font-display font-black uppercase text-[10px] tracking-widest mb-1 ${i === 0 ? 'text-brand-lime' : 'text-gray-500'}`}>Layer 0{i + 1}</p>
                <h3 className="text-2xl md:text-3xl mb-6">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech, j) => (
                    <span key={j} className={`px-4 py-2 rounded-xl text-xs font-display font-black uppercase tracking-wider border-2 ${i === 0 ? 'border-white/20 bg-white/10 text-white' : 'border-brand-black bg-white'}`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section id="process" className="py-20 md:py-28 px-6 md:px-12 lg:px-16">
        <div className="max-w-[1600px] mx-auto">
          <div className="mb-12 md:mb-16">
            <p className="font-display font-black uppercase text-xs tracking-widest text-gray-400 mb-3">How It Works</p>
            <h2 className="text-4xl md:text-6xl">OUR PROCESS</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="group bg-white border-2 border-brand-black rounded-3xl p-7 shadow-brutalist hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex flex-col gap-5"
              >
                <div className="w-14 h-14 bg-brand-black text-brand-lime border-2 border-brand-black rounded-2xl flex items-center justify-center font-display font-black text-2xl group-hover:bg-brand-lime group-hover:text-brand-black transition-colors shrink-0">
                  {p.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl mb-2">{p.title}</h3>
                  <p className="text-gray-500 text-sm font-medium leading-snug">{p.desc}</p>
                </div>
                <div className="pt-4 border-t-2 border-brand-black/10">
                  <p className="font-display font-black uppercase text-[10px] text-gray-400 tracking-widest mb-1">Deliverable</p>
                  <p className="font-display font-bold text-sm">{p.deliverable}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GUARANTEES STRIP ── */}
      <section className="py-16 md:py-20 px-6 md:px-12 lg:px-16 bg-brand-lime border-y-2 border-brand-black">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1">
              <h2 className="text-3xl md:text-5xl leading-tight">OUR PROMISES TO YOU.</h2>
            </div>
            <div className="md:col-span-2 grid sm:grid-cols-2 gap-4">
              {[
                { title: "Zero Template Policy", desc: "Every site is built from scratch, engineered for your brand alone." },
                { title: "Speed Guaranteed", desc: "Sub-second load times or we keep optimising until we hit the mark." },
                { title: "SEO From Day One", desc: "Semantic HTML, structured data, and Core Web Vitals baked in." },
                { title: "Post-Launch Support", desc: "30 days of free support after every launch. No questions asked." },
              ].map((g, i) => (
                <div key={i} className="bg-white border-2 border-brand-black rounded-2xl p-5 shadow-brutalist flex gap-4 items-start">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-display font-black uppercase text-xs tracking-wider mb-1">{g.title}</p>
                    <p className="text-sm font-medium text-gray-600 leading-snug">{g.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-16">
        <div className="max-w-[1600px] mx-auto">
          <div className="bg-brand-black text-white rounded-[2rem] md:rounded-[3rem] border-2 border-brand-black p-10 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-lime/10 rounded-full blur-[100px]"></div>
            <div className="relative z-10 text-center md:text-left">
              <h3 className="text-3xl md:text-6xl font-display font-black uppercase leading-none mb-4">
                READY TO BUILD<br /><span className="text-brand-lime italic">YOUR WEBSITE?</span>
              </h3>
              <p className="text-gray-400 font-medium text-base md:text-lg max-w-md">
                Let's turn your vision into a fast, beautiful, high-converting website.
              </p>
            </div>
            <Link to="/#contact" className="btn-brutalist text-lg md:text-2xl px-10 md:px-16 py-4 md:py-6 relative z-10 shrink-0">
              Start Building
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

/* ─────────────────────────────────────────────────────────── SEO PAGE ── */
const SEOPage = () => {
  const offerings = [
    {
      title: "Technical SEO",
      desc: "Full site crawl, Core Web Vitals fixes, structured data, and indexability audits that unblock your rankings.",
      tags: ["Site Audit", "Schema Markup", "CWV"],
      icon: <Search className="w-7 h-7" />,
      bg: "bg-orange-50",
    },
    {
      title: "Content Strategy",
      desc: "Keyword-first content plans that target buying intent — from pillar pages to long-tail clusters that convert.",
      tags: ["Keyword Research", "Topical Authority", "E-E-A-T"],
      icon: <Layers className="w-7 h-7" />,
      bg: "bg-brand-lime",
    },
    {
      title: "Link Building",
      desc: "White-hat authority backlinks through PR outreach, HARO, and digital partnerships — zero spam, all signal.",
      tags: ["Outreach", "HARO", "DA 50+"],
      icon: <ExternalLink className="w-7 h-7" />,
      bg: "bg-brand-cream",
    },
    {
      title: "Local & Maps SEO",
      desc: "Dominate Google Maps and local packs so nearby customers find you first, every single time.",
      tags: ["Google My Business", "NAP Consistency", "Reviews"],
      icon: <Globe className="w-7 h-7" />,
      bg: "bg-blue-50",
    },
  ];

  const tools = {
    "Audit & Research": ["Ahrefs", "Semrush", "Screaming Frog", "Google Search Console", "Moz"],
    "Analytics": ["Google Analytics 4", "Hotjar", "Clarity", "Looker Studio", "Tag Manager"],
    "Content": ["Surfer SEO", "Frase", "Clearscope", "ChatGPT", "MarketMuse"],
  };

  const steps = [
    { step: "01", title: "Full SEO Audit", desc: "We crawl every page, flag technical blockers, analyse your backlink profile, and benchmark against top-3 competitors.", deliverable: "200-Point Audit Report" },
    { step: "02", title: "Strategy & Roadmap", desc: "Keywords mapped to buyer intent. Content gaps identified. A 90-day prioritised roadmap with expected traffic impact.", deliverable: "90-Day SEO Roadmap" },
    { step: "03", title: "On-Page & Off-Page", desc: "Optimise existing pages, publish new content, build authority links, and fix every technical issue on the list.", deliverable: "Optimised Pages + Links" },
    { step: "04", title: "Track & Report", desc: "Monthly dashboards showing ranking movement, traffic growth, and ROI. We iterate based on data, not gut feelings.", deliverable: "Monthly SEO Dashboard" },
  ];

  const stats = [
    { value: "+200%", label: "Avg. Organic Growth" },
    { value: "Top 3", label: "Target Rankings" },
    { value: "50+", label: "Tools & Signals Used" },
    { value: "0", label: "Black-Hat Tactics" },
  ];

  return (
    <div className="bg-brand-cream">
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center pt-28 pb-16 px-6 md:px-12 lg:px-16 overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ backgroundImage: 'radial-gradient(circle, #9ca3af 1px, transparent 1px)', backgroundSize: '22px 22px', opacity: 0.3 }}></div>
        <div className="max-w-[1600px] mx-auto w-full">
          <Link to="/#services" className="inline-flex items-center gap-2 text-gray-500 hover:text-brand-black font-display font-bold uppercase text-xs transition-colors mb-10">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to Services
          </Link>
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-8 lg:gap-6 items-center">
            {/* Left */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-brand-black rounded-full font-display font-bold text-[10px] uppercase mb-6 shadow-brutalist">
                <Search className="w-3 h-3" /> SEO & Growth
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl mb-6 leading-[0.88] tracking-tighter">
                RANK #1.<br />
                DRIVE <span className="text-brand-lime" style={{ WebkitTextStroke: '2px #000', paintOrder: 'stroke fill' }}>REAL</span><br />
                GROWTH.<br />
                STAY ON TOP.
              </h1>
              <p className="text-base md:text-lg text-gray-600 font-medium max-w-lg mb-10 leading-snug">
                Data-driven SEO that compounds over time — technical excellence, content authority, and link power working together to own your niche.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link to="/#contact" className="btn-brutalist px-8 py-4 text-base">Get Your Free Audit</Link>
                <a href="#process" className="px-8 py-4 border-2 border-brand-black rounded-full font-display font-black uppercase text-base hover:bg-brand-black hover:text-white transition-all shadow-brutalist hover:shadow-brutalist-hover hover:translate-x-[2px] hover:translate-y-[2px]">Our Process</a>
              </div>
            </motion.div>
            {/* Right: illustration */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center items-center"
            >
              <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="w-full">
                <img src="/SEO.png" alt="SEO & Growth" className="w-full h-auto object-contain drop-shadow-[0_24px_64px_rgba(0,0,0,0.13)]" />
              </motion.div>
              <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 3.5, repeat: Infinity }}
                className="absolute top-6 left-0 bg-white border-2 border-brand-black rounded-2xl px-4 py-3 shadow-brutalist">
                <p className="font-display font-black uppercase text-[10px] text-gray-400">Avg. Traffic Lift</p>
                <p className="font-display font-black text-xl md:text-2xl">+200%</p>
              </motion.div>
              <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 4, repeat: Infinity }}
                className="absolute bottom-6 right-0 bg-brand-lime border-2 border-brand-black rounded-2xl px-4 py-3 shadow-brutalist">
                <p className="font-display font-black uppercase text-[10px]">Target Position</p>
                <p className="font-display font-black text-xl md:text-2xl">#1</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section className="py-10 md:py-14 px-6 md:px-12 lg:px-16 bg-brand-black border-y-2 border-brand-black">
        <div className="max-w-[1600px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl md:text-5xl font-display font-black text-brand-lime">{s.value}</p>
              <p className="text-white/60 font-display font-bold uppercase text-[10px] md:text-xs tracking-widest mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHAT WE DO ── */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-16">
        <div className="max-w-[1600px] mx-auto">
          <div className="mb-12 md:mb-16">
            <p className="font-display font-black uppercase text-xs tracking-widest text-gray-400 mb-3">What's Included</p>
            <h2 className="text-4xl md:text-6xl">WHAT WE DO</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {offerings.map((o, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className={`group ${o.bg} border-2 border-brand-black rounded-3xl p-7 shadow-brutalist hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex flex-col gap-5`}>
                <div className="w-14 h-14 bg-white border-2 border-brand-black rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform shadow-brutalist shrink-0">
                  {o.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl mb-2">{o.title}</h3>
                  <p className="text-gray-600 text-sm font-medium leading-snug">{o.desc}</p>
                </div>
                <div className="flex flex-wrap gap-2 pt-4 border-t-2 border-brand-black/10">
                  {o.tags.map((t, j) => (
                    <span key={j} className="px-3 py-1 bg-white border border-brand-black/20 rounded-full font-display font-bold text-[10px] uppercase">{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TOOL STACK ── */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-16 bg-white border-y-2 border-brand-black">
        <div className="max-w-[1600px] mx-auto">
          <div className="mb-12 md:mb-16">
            <p className="font-display font-black uppercase text-xs tracking-widest text-gray-400 mb-3">What We Use</p>
            <h2 className="text-4xl md:text-6xl">OUR TOOL STACK</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(tools).map(([category, items], i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className={`border-2 border-brand-black rounded-3xl p-8 shadow-brutalist ${i === 0 ? 'bg-brand-black text-white' : i === 1 ? 'bg-brand-lime' : 'bg-brand-cream'}`}>
                <h3 className={`font-display font-black uppercase text-xl mb-6 ${i === 0 ? 'text-brand-lime' : 'text-brand-black'}`}>{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item, j) => (
                    <span key={j} className={`px-3 py-1.5 rounded-lg font-bold text-xs uppercase border ${i === 0 ? 'border-white/20 bg-white/10 text-white' : 'border-brand-black/20 bg-white/60 text-brand-black'}`}>{item}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section id="process" className="py-20 md:py-28 px-6 md:px-12 lg:px-16">
        <div className="max-w-[1600px] mx-auto">
          <div className="mb-12 md:mb-16">
            <p className="font-display font-black uppercase text-xs tracking-widest text-gray-400 mb-3">How It Works</p>
            <h2 className="text-4xl md:text-6xl">OUR PROCESS</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                className="group bg-white border-2 border-brand-black rounded-3xl p-7 shadow-brutalist hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex flex-col gap-5">
                <div className="w-14 h-14 bg-brand-black text-brand-lime border-2 border-brand-black rounded-2xl flex items-center justify-center font-display font-black text-2xl group-hover:bg-brand-lime group-hover:text-brand-black transition-colors shrink-0">{p.step}</div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl mb-2">{p.title}</h3>
                  <p className="text-gray-500 text-sm font-medium leading-snug">{p.desc}</p>
                </div>
                <div className="pt-4 border-t-2 border-brand-black/10">
                  <p className="font-display font-black uppercase text-[10px] text-gray-400 tracking-widest mb-1">Deliverable</p>
                  <p className="font-display font-bold text-sm">{p.deliverable}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GUARANTEES STRIP ── */}
      <section className="py-16 md:py-20 px-6 md:px-12 lg:px-16 bg-brand-lime border-y-2 border-brand-black">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1">
              <h2 className="text-3xl md:text-5xl leading-tight">OUR PROMISES TO YOU.</h2>
            </div>
            <div className="md:col-span-2 grid sm:grid-cols-2 gap-4">
              {[
                { title: "No Fake Traffic", desc: "Every visitor is real and organic. We never inflate numbers with bots or paid tricks." },
                { title: "Transparent Reporting", desc: "Full monthly dashboards showing exactly where every ranking is and why." },
                { title: "Algorithm-Proof Strategy", desc: "White-hat only. Your rankings survive updates because they're earned, not gamed." },
                { title: "Long-Term Results", desc: "SEO compounds. The work we do today keeps paying you back for years." },
              ].map((g, i) => (
                <div key={i} className="bg-white border-2 border-brand-black rounded-2xl p-5 shadow-brutalist flex gap-4 items-start">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-display font-black uppercase text-xs tracking-wider mb-1">{g.title}</p>
                    <p className="text-sm font-medium text-gray-600 leading-snug">{g.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-16">
        <div className="max-w-[1600px] mx-auto">
          <div className="bg-brand-black text-white rounded-[2rem] md:rounded-[3rem] border-2 border-brand-black p-10 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-lime/10 rounded-full blur-[100px]"></div>
            <div className="relative z-10 text-center md:text-left">
              <h3 className="text-3xl md:text-6xl font-display font-black uppercase leading-none mb-4">
                READY TO OWN<br /><span className="text-brand-lime italic">PAGE ONE?</span>
              </h3>
              <p className="text-gray-400 font-medium text-base md:text-lg max-w-md">Start with a free 200-point SEO audit — no strings attached.</p>
            </div>
            <Link to="/#contact" className="btn-brutalist text-lg md:text-2xl px-10 md:px-16 py-4 md:py-6 relative z-10 shrink-0">Get Free Audit</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

/* ──────────────────────────────────────────── CUSTOM SOFTWARE PAGE ── */
const SoftwarePage = () => {
  const offerings = [
    {
      title: "SaaS Platforms",
      desc: "End-to-end product builds — multi-tenant architecture, subscription billing, role-based access, and scalable APIs.",
      tags: ["Multi-Tenant", "Stripe", "Role-Based Auth"],
      icon: <Layers className="w-7 h-7" />,
      bg: "bg-purple-50",
    },
    {
      title: "Internal Business Tools",
      desc: "Replace spreadsheets with purpose-built dashboards, approval flows, and automation that match your exact workflow.",
      tags: ["Dashboards", "Workflow Automation", "ERP-style"],
      icon: <Cpu className="w-7 h-7" />,
      bg: "bg-brand-lime",
    },
    {
      title: "API & Integrations",
      desc: "Connect your tools — CRMs, ERPs, payment gateways, or any third-party platform — with reliable, tested integrations.",
      tags: ["REST", "GraphQL", "Webhooks"],
      icon: <Code2 className="w-7 h-7" />,
      bg: "bg-brand-cream",
    },
    {
      title: "Admin Dashboards",
      desc: "Real-time data visualisation and management interfaces your team will actually want to use every day.",
      tags: ["Real-Time", "Data Viz", "Permissions"],
      icon: <Globe className="w-7 h-7" />,
      bg: "bg-blue-50",
    },
  ];

  const techStack = {
    "Backend": ["Python / Django", "Node.js / Express", "Go", "FastAPI", "REST & GraphQL"],
    "Infrastructure": ["Docker", "Kubernetes", "AWS / GCP", "CI/CD Pipelines", "Nginx"],
    "Database": ["PostgreSQL", "Redis", "MongoDB", "Prisma ORM", "Supabase"],
  };

  const steps = [
    { step: "01", title: "Requirements", desc: "We map every business rule, user role, and edge case before a single line of code is written. No surprises later.", deliverable: "Functional Spec Document" },
    { step: "02", title: "Architecture", desc: "Database schema, API contracts, and system design reviewed together so every piece fits perfectly from the start.", deliverable: "System Architecture Diagram" },
    { step: "03", title: "Agile Development", desc: "Two-week sprints with weekly build previews. You see real progress and retain full control throughout.", deliverable: "Staged Preview + Demo" },
    { step: "04", title: "Deploy & Support", desc: "Zero-downtime deployment to your cloud of choice. Monitoring, alerting, and 60-day post-launch support included.", deliverable: "Live App + Full Source Code" },
  ];

  const stats = [
    { value: "99.9%", label: "Uptime SLA" },
    { value: "API-First", label: "Architecture" },
    { value: "0", label: "Templates Used" },
    { value: ">1M", label: "Req / Day Capable" },
  ];

  return (
    <div className="bg-brand-cream">
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center pt-28 pb-16 px-6 md:px-12 lg:px-16 overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ backgroundImage: 'radial-gradient(circle, #9ca3af 1px, transparent 1px)', backgroundSize: '22px 22px', opacity: 0.3 }}></div>
        <div className="max-w-[1600px] mx-auto w-full">
          <Link to="/#services" className="inline-flex items-center gap-2 text-gray-500 hover:text-brand-black font-display font-bold uppercase text-xs transition-colors mb-10">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to Services
          </Link>
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-8 lg:gap-6 items-center">
            {/* Left */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-brand-black rounded-full font-display font-bold text-[10px] uppercase mb-6 shadow-brutalist">
                <Cpu className="w-3 h-3" /> Custom Software
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl mb-6 leading-[0.88] tracking-tighter">
                SOFTWARE<br />
                THAT <span className="text-brand-lime" style={{ WebkitTextStroke: '2px #000', paintOrder: 'stroke fill' }}>SCALES</span><br />
                WITH YOUR<br />
                AMBITION.
              </h1>
              <p className="text-base md:text-lg text-gray-600 font-medium max-w-lg mb-10 leading-snug">
                From internal tools to full SaaS platforms — we architect software around your business logic, not the other way around.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link to="/#contact" className="btn-brutalist px-8 py-4 text-base">Start Your Build</Link>
                <a href="#process" className="px-8 py-4 border-2 border-brand-black rounded-full font-display font-black uppercase text-base hover:bg-brand-black hover:text-white transition-all shadow-brutalist hover:shadow-brutalist-hover hover:translate-x-[2px] hover:translate-y-[2px]">Our Process</a>
              </div>
            </motion.div>
            {/* Right */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center items-center"
            >
              <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="w-full">
                <img src="/custom_application.png" alt="Custom Software" className="w-full h-auto object-contain drop-shadow-[0_24px_64px_rgba(0,0,0,0.13)]" />
              </motion.div>
              <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 3.5, repeat: Infinity }}
                className="absolute top-6 left-0 bg-white border-2 border-brand-black rounded-2xl px-4 py-3 shadow-brutalist">
                <p className="font-display font-black uppercase text-[10px] text-gray-400">Uptime SLA</p>
                <p className="font-display font-black text-xl md:text-2xl">99.9%</p>
              </motion.div>
              <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 4, repeat: Infinity }}
                className="absolute bottom-6 right-0 bg-brand-lime border-2 border-brand-black rounded-2xl px-4 py-3 shadow-brutalist">
                <p className="font-display font-black uppercase text-[10px]">Architecture</p>
                <p className="font-display font-black text-xl md:text-2xl">API-First</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section className="py-10 md:py-14 px-6 md:px-12 lg:px-16 bg-brand-black border-y-2 border-brand-black">
        <div className="max-w-[1600px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl md:text-5xl font-display font-black text-brand-lime">{s.value}</p>
              <p className="text-white/60 font-display font-bold uppercase text-[10px] md:text-xs tracking-widest mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHAT WE BUILD ── */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-16">
        <div className="max-w-[1600px] mx-auto">
          <div className="mb-12 md:mb-16">
            <p className="font-display font-black uppercase text-xs tracking-widest text-gray-400 mb-3">Our Expertise</p>
            <h2 className="text-4xl md:text-6xl">WHAT WE BUILD</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {offerings.map((o, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className={`group ${o.bg} border-2 border-brand-black rounded-3xl p-7 shadow-brutalist hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex flex-col gap-5`}>
                <div className="w-14 h-14 bg-white border-2 border-brand-black rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform shadow-brutalist shrink-0">
                  {o.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl mb-2">{o.title}</h3>
                  <p className="text-gray-600 text-sm font-medium leading-snug">{o.desc}</p>
                </div>
                <div className="flex flex-wrap gap-2 pt-4 border-t-2 border-brand-black/10">
                  {o.tags.map((t, j) => (
                    <span key={j} className="px-3 py-1 bg-white border border-brand-black/20 rounded-full font-display font-bold text-[10px] uppercase">{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-16 bg-white border-y-2 border-brand-black">
        <div className="max-w-[1600px] mx-auto">
          <div className="mb-12 md:mb-16">
            <p className="font-display font-black uppercase text-xs tracking-widest text-gray-400 mb-3">Under the Hood</p>
            <h2 className="text-4xl md:text-6xl">OUR TECH STACK</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(techStack).map(([category, items], i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className={`border-2 border-brand-black rounded-3xl p-8 shadow-brutalist ${i === 0 ? 'bg-brand-black text-white' : i === 1 ? 'bg-brand-lime' : 'bg-brand-cream'}`}>
                <h3 className={`font-display font-black uppercase text-xl mb-6 ${i === 0 ? 'text-brand-lime' : 'text-brand-black'}`}>{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item, j) => (
                    <span key={j} className={`px-3 py-1.5 rounded-lg font-bold text-xs uppercase border ${i === 0 ? 'border-white/20 bg-white/10 text-white' : 'border-brand-black/20 bg-white/60 text-brand-black'}`}>{item}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section id="process" className="py-20 md:py-28 px-6 md:px-12 lg:px-16">
        <div className="max-w-[1600px] mx-auto">
          <div className="mb-12 md:mb-16">
            <p className="font-display font-black uppercase text-xs tracking-widest text-gray-400 mb-3">How It Works</p>
            <h2 className="text-4xl md:text-6xl">OUR PROCESS</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                className="group bg-white border-2 border-brand-black rounded-3xl p-7 shadow-brutalist hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex flex-col gap-5">
                <div className="w-14 h-14 bg-brand-black text-brand-lime border-2 border-brand-black rounded-2xl flex items-center justify-center font-display font-black text-2xl group-hover:bg-brand-lime group-hover:text-brand-black transition-colors shrink-0">{p.step}</div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl mb-2">{p.title}</h3>
                  <p className="text-gray-500 text-sm font-medium leading-snug">{p.desc}</p>
                </div>
                <div className="pt-4 border-t-2 border-brand-black/10">
                  <p className="font-display font-black uppercase text-[10px] text-gray-400 tracking-widest mb-1">Deliverable</p>
                  <p className="font-display font-bold text-sm">{p.deliverable}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GUARANTEES STRIP ── */}
      <section className="py-16 md:py-20 px-6 md:px-12 lg:px-16 bg-brand-lime border-y-2 border-brand-black">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1">
              <h2 className="text-3xl md:text-5xl leading-tight">OUR PROMISES TO YOU.</h2>
            </div>
            <div className="md:col-span-2 grid sm:grid-cols-2 gap-4">
              {[
                { title: "Documented Code", desc: "Full inline docs, README, and handover notes. You own the code and can maintain it yourself." },
                { title: "Secure by Design", desc: "OWASP Top 10 covered, input validation, encrypted secrets, and security headers from day one." },
                { title: "Scalable Architecture", desc: "Horizontal scaling built in from the start. Your app won't crumble when traffic spikes." },
                { title: "60-Day Support", desc: "Two months of post-launch support included. Bug? We fix it. No extra invoice." },
              ].map((g, i) => (
                <div key={i} className="bg-white border-2 border-brand-black rounded-2xl p-5 shadow-brutalist flex gap-4 items-start">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-display font-black uppercase text-xs tracking-wider mb-1">{g.title}</p>
                    <p className="text-sm font-medium text-gray-600 leading-snug">{g.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-16">
        <div className="max-w-[1600px] mx-auto">
          <div className="bg-brand-black text-white rounded-[2rem] md:rounded-[3rem] border-2 border-brand-black p-10 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-lime/10 rounded-full blur-[100px]"></div>
            <div className="relative z-10 text-center md:text-left">
              <h3 className="text-3xl md:text-6xl font-display font-black uppercase leading-none mb-4">
                READY TO BUILD<br /><span className="text-brand-lime italic">YOUR SOFTWARE?</span>
              </h3>
              <p className="text-gray-400 font-medium text-base md:text-lg max-w-md">Tell us what you need. We'll architect and build it right the first time.</p>
            </div>
            <Link to="/#contact" className="btn-brutalist text-lg md:text-2xl px-10 md:px-16 py-4 md:py-6 relative z-10 shrink-0">Start Building</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

/* ───────────────────────────────────────────────── AI SOLUTIONS PAGE ── */
const AIPage = () => {
  const offerings = [
    {
      title: "Custom AI Agents",
      desc: "Autonomous agents that research, reason, and act — handling complex multi-step tasks end-to-end without human intervention.",
      tags: ["LLM-Powered", "Tool Use", "Memory"],
      icon: <Bot className="w-7 h-7" />,
      bg: "bg-brand-cream",
    },
    {
      title: "Voice & Phone Agents",
      desc: "AI phone systems that qualify leads, answer FAQs, and book appointments — live 24/7 with human-quality conversation.",
      tags: ["Twilio", "Real-Time STT/TTS", "Call Routing"],
      icon: <Zap className="w-7 h-7" />,
      bg: "bg-brand-lime",
    },
    {
      title: "WhatsApp & Social Bots",
      desc: "Deploy intelligent chatbots across WhatsApp, Facebook, Instagram, and Telegram to engage customers at scale.",
      tags: ["WhatsApp API", "Meta Graph", "Omni-Channel"],
      icon: <Globe className="w-7 h-7" />,
      bg: "bg-purple-50",
    },
    {
      title: "Workflow Automation",
      desc: "Connect your tools and automate repetitive operations — from CRM updates to document processing and report generation.",
      tags: ["n8n / Zapier", "Webhooks", "RPA"],
      icon: <Cpu className="w-7 h-7" />,
      bg: "bg-blue-50",
    },
  ];

  const techStack = {
    "AI Models": ["OpenAI GPT-4o", "Google Gemini", "Anthropic Claude", "Llama 3", "Mistral"],
    "Frameworks": ["LangChain", "LlamaIndex", "CrewAI", "AutoGen", "Pinecone", "FastAPI"],
    "Platforms": ["WhatsApp Business API", "Twilio", "Slack", "Instagram Graph", "Telegram Bot API"],
  };

  const steps = [
    { step: "01", title: "Automation Audit", desc: "We map every manual, repetitive process in your business and identify the highest-value automation opportunities.", deliverable: "Automation Opportunity Map" },
    { step: "02", title: "Agent Design", desc: "Define the agent's capabilities, memory, tools, and guardrails. Every prompt engineered for accuracy and reliability.", deliverable: "Agent Blueprint + Spec" },
    { step: "03", title: "Platform Integration", desc: "Connect the agent to your existing channels — CRM, WhatsApp, voice, email — tested rigorously before go-live.", deliverable: "Integrated & Tested Agent" },
    { step: "04", title: "Monitor & Improve", desc: "Live dashboards track agent success rates. We continuously fine-tune based on real conversation data.", deliverable: "Monitoring Dashboard" },
  ];

  const stats = [
    { value: "80%", label: "Tasks Automated" },
    { value: "24/7", label: "Always Available" },
    { value: "5+", label: "Platforms Supported" },
    { value: "<200ms", label: "Response Time" },
  ];

  return (
    <div className="bg-brand-cream">
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center pt-28 pb-16 px-6 md:px-12 lg:px-16 overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ backgroundImage: 'radial-gradient(circle, #9ca3af 1px, transparent 1px)', backgroundSize: '22px 22px', opacity: 0.3 }}></div>
        <div className="max-w-[1600px] mx-auto w-full">
          <Link to="/#services" className="inline-flex items-center gap-2 text-gray-500 hover:text-brand-black font-display font-bold uppercase text-xs transition-colors mb-10">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to Services
          </Link>
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-8 lg:gap-6 items-center">
            {/* Left */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-brand-black rounded-full font-display font-bold text-[10px] uppercase mb-6 shadow-brutalist">
                <Bot className="w-3 h-3" /> AI Solutions
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl mb-6 leading-[0.88] tracking-tighter">
                AUTOMATE.<br />
                <span className="text-brand-lime" style={{ WebkitTextStroke: '2px #000', paintOrder: 'stroke fill' }}>SCALE.</span><br />
                DOMINATE.<br />
              </h1>
              <p className="text-base md:text-lg text-gray-600 font-medium max-w-lg mb-10 leading-snug">
                Custom AI agents, voice bots, and social automation that work around the clock — so your team can focus on what humans do best.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link to="/#contact" className="btn-brutalist px-8 py-4 text-base">Automate My Business</Link>
                <a href="#process" className="px-8 py-4 border-2 border-brand-black rounded-full font-display font-black uppercase text-base hover:bg-brand-black hover:text-white transition-all shadow-brutalist hover:shadow-brutalist-hover hover:translate-x-[2px] hover:translate-y-[2px]">Our Process</a>
              </div>
            </motion.div>
            {/* Right */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center items-center"
            >
              <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="w-full">
                <img src="/AI_solution.png" alt="AI Solutions" className="w-full h-auto object-contain drop-shadow-[0_24px_64px_rgba(0,0,0,0.13)]" />
              </motion.div>
              <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 3.5, repeat: Infinity }}
                className="absolute top-6 left-0 bg-white border-2 border-brand-black rounded-2xl px-4 py-3 shadow-brutalist">
                <p className="font-display font-black uppercase text-[10px] text-gray-400">Tasks Automated</p>
                <p className="font-display font-black text-xl md:text-2xl">80%</p>
              </motion.div>
              <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 4, repeat: Infinity }}
                className="absolute bottom-6 right-0 bg-brand-lime border-2 border-brand-black rounded-2xl px-4 py-3 shadow-brutalist">
                <p className="font-display font-black uppercase text-[10px]">Availability</p>
                <p className="font-display font-black text-xl md:text-2xl">24/7</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section className="py-10 md:py-14 px-6 md:px-12 lg:px-16 bg-brand-black border-y-2 border-brand-black">
        <div className="max-w-[1600px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl md:text-5xl font-display font-black text-brand-lime">{s.value}</p>
              <p className="text-white/60 font-display font-bold uppercase text-[10px] md:text-xs tracking-widest mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHAT WE BUILD ── */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-16">
        <div className="max-w-[1600px] mx-auto">
          <div className="mb-12 md:mb-16">
            <p className="font-display font-black uppercase text-xs tracking-widest text-gray-400 mb-3">Our Capabilities</p>
            <h2 className="text-4xl md:text-6xl">WHAT WE BUILD</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {offerings.map((o, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className={`group ${o.bg} border-2 border-brand-black rounded-3xl p-7 shadow-brutalist hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex flex-col gap-5`}>
                <div className="w-14 h-14 bg-white border-2 border-brand-black rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform shadow-brutalist shrink-0">
                  {o.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl mb-2">{o.title}</h3>
                  <p className="text-gray-600 text-sm font-medium leading-snug">{o.desc}</p>
                </div>
                <div className="flex flex-wrap gap-2 pt-4 border-t-2 border-brand-black/10">
                  {o.tags.map((t, j) => (
                    <span key={j} className="px-3 py-1 bg-white border border-brand-black/20 rounded-full font-display font-bold text-[10px] uppercase">{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-16 bg-white border-y-2 border-brand-black">
        <div className="max-w-[1600px] mx-auto">
          <div className="mb-12 md:mb-16">
            <p className="font-display font-black uppercase text-xs tracking-widest text-gray-400 mb-3">Powered By</p>
            <h2 className="text-4xl md:text-6xl">OUR AI STACK</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(techStack).map(([category, items], i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className={`border-2 border-brand-black rounded-3xl p-8 shadow-brutalist ${i === 0 ? 'bg-brand-black text-white' : i === 1 ? 'bg-brand-lime' : 'bg-brand-cream'}`}>
                <h3 className={`font-display font-black uppercase text-xl mb-6 ${i === 0 ? 'text-brand-lime' : 'text-brand-black'}`}>{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item, j) => (
                    <span key={j} className={`px-3 py-1.5 rounded-lg font-bold text-xs uppercase border ${i === 0 ? 'border-white/20 bg-white/10 text-white' : 'border-brand-black/20 bg-white/60 text-brand-black'}`}>{item}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section id="process" className="py-20 md:py-28 px-6 md:px-12 lg:px-16">
        <div className="max-w-[1600px] mx-auto">
          <div className="mb-12 md:mb-16">
            <p className="font-display font-black uppercase text-xs tracking-widest text-gray-400 mb-3">How It Works</p>
            <h2 className="text-4xl md:text-6xl">OUR PROCESS</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                className="group bg-white border-2 border-brand-black rounded-3xl p-7 shadow-brutalist hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex flex-col gap-5">
                <div className="w-14 h-14 bg-brand-black text-brand-lime border-2 border-brand-black rounded-2xl flex items-center justify-center font-display font-black text-2xl group-hover:bg-brand-lime group-hover:text-brand-black transition-colors shrink-0">{p.step}</div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl mb-2">{p.title}</h3>
                  <p className="text-gray-500 text-sm font-medium leading-snug">{p.desc}</p>
                </div>
                <div className="pt-4 border-t-2 border-brand-black/10">
                  <p className="font-display font-black uppercase text-[10px] text-gray-400 tracking-widest mb-1">Deliverable</p>
                  <p className="font-display font-bold text-sm">{p.deliverable}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GUARANTEES STRIP ── */}
      <section className="py-16 md:py-20 px-6 md:px-12 lg:px-16 bg-brand-lime border-y-2 border-brand-black">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1">
              <h2 className="text-3xl md:text-5xl leading-tight">OUR PROMISES TO YOU.</h2>
            </div>
            <div className="md:col-span-2 grid sm:grid-cols-2 gap-4">
              {[
                { title: "No Hallucinations", desc: "Guardrails, validation layers, and retrieval-augmented generation keep every AI response accurate." },
                { title: "Cross-Platform", desc: "One AI brain, deployed everywhere — WhatsApp, voice, web chat, email. Consistent experience always." },
                { title: "Human Handoff", desc: "Smart escalation built in. The agent knows when to loop in a human and does it seamlessly." },
                { title: "GDPR-Safe", desc: "Data minimisation, user consent flows, and no third-party training on your customer data." },
              ].map((g, i) => (
                <div key={i} className="bg-white border-2 border-brand-black rounded-2xl p-5 shadow-brutalist flex gap-4 items-start">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-display font-black uppercase text-xs tracking-wider mb-1">{g.title}</p>
                    <p className="text-sm font-medium text-gray-600 leading-snug">{g.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-16">
        <div className="max-w-[1600px] mx-auto">
          <div className="bg-brand-black text-white rounded-[2rem] md:rounded-[3rem] border-2 border-brand-black p-10 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-lime/10 rounded-full blur-[100px]"></div>
            <div className="relative z-10 text-center md:text-left">
              <h3 className="text-3xl md:text-6xl font-display font-black uppercase leading-none mb-4">
                READY TO LET<br /><span className="text-brand-lime italic">AI WORK FOR YOU?</span>
              </h3>
              <p className="text-gray-400 font-medium text-base md:text-lg max-w-md">Tell us your biggest bottleneck — we'll automate it.</p>
            </div>
            <Link to="/#contact" className="btn-brutalist text-lg md:text-2xl px-10 md:px-16 py-4 md:py-6 relative z-10 shrink-0">Start Automating</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const ServicePage = () => {
  const { id } = useParams();
  
  const serviceData: Record<string, any> = {
    "web-dev": {
      title: "Website Development",
      icon: <Code2 className="w-12 h-12" />,
      heroText: "High-performance websites that convert.",
      details: "We don't just build websites; we build digital experiences. Our stack is optimized for speed, SEO, and scalability. We focus on the intersection of brutalist design and modern performance.",
      features: ["Custom React/Vite Apps", "E-commerce Solutions", "Headless CMS Integration", "Performance Optimization"],
      process: ["Discovery & Wireframing", "Brutalist UI/UX Design", "Clean Code Development", "Launch & Support"],
      color: "bg-blue-50",
      accent: "text-blue-600",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Vite", "Node.js", "PostgreSQL"],
      metrics: ["< 1s Load Time", "100 Lighthouse Score", "SEO Optimized", "Mobile First"]
    },
    "seo": {
      title: "SEO & Growth",
      icon: <Search className="w-12 h-12" />,
      heroText: "Dominate search results and drive organic traffic.",
      details: "Our data-driven approach ensures your brand is seen by the right people at the right time. We focus on technical excellence and content strategy that actually moves the needle.",
      features: ["Technical SEO Audits", "Content Strategy", "Backlink Building", "Conversion Rate Optimization"],
      process: ["Market Analysis", "Keyword Strategy", "On-Page Optimization", "Monthly Reporting"],
      color: "bg-orange-50",
      accent: "text-orange-600",
      techStack: ["Google Analytics 4", "Search Console", "Ahrefs", "Semrush", "Screaming Frog"],
      metrics: ["+200% Organic Traffic", "Top 3 Rankings", "Lower CAC", "Higher LTV"]
    },
    "software": {
      title: "Custom Software",
      icon: <Cpu className="w-12 h-12" />,
      heroText: "Scalable software tailored to your business logic.",
      details: "From internal dashboards to complex SaaS platforms, we build software that solves real problems. Our architecture is designed for long-term stability and rapid scaling.",
      features: ["SaaS Development", "Internal Business Tools", "API Integrations", "Database Architecture"],
      process: ["Requirements Gathering", "System Architecture", "Agile Development", "Deployment & Maintenance"],
      color: "bg-purple-50",
      accent: "text-purple-600",
      techStack: ["Python/Django", "Go", "Docker", "Kubernetes", "AWS/GCP", "Redis"],
      metrics: ["99.9% Uptime", "Scalable Architecture", "Secure by Design", "API-First"]
    },
    "ai": {
      title: "AI Solutions",
      icon: <Bot className="w-12 h-12" />,
      heroText: "The future of automation is here.",
      details: "We specialize in building custom AI agents, phone agents, and automation workflows. Our bots integrate seamlessly into platforms like WhatsApp, Facebook, Instagram, and more to streamline your business operations.",
      features: ["Custom AI Agents", "Phone Agent Systems", "WhatsApp/FB/IG Bots", "Workflow Automation", "LLM Fine-tuning", "Cross-platform Integration"],
      process: ["Automation Audit", "Agent Design", "Platform Integration", "Continuous Learning"],
      color: "bg-brand-cream",
      accent: "text-brand-lime",
      techStack: ["OpenAI/Gemini", "LangChain", "Pinecone", "Python", "FastAPI", "Twilio"],
      metrics: ["80% Task Automation", "24/7 Availability", "Instant Response", "Multilingual Support"]
    }
  };

  const service = serviceData[id || "web-dev"];
  const otherServices = Object.keys(serviceData)
    .filter(key => key !== id)
    .map(key => ({ id: key, ...serviceData[key] }));

  if (!service) return <div className="pt-32 text-center">Service not found.</div>;

  return (
    <div className={`pt-24 md:pt-32 pb-16 md:pb-24 px-4 md:px-6 transition-colors duration-500 ${service.color}`}>
      <div className="max-w-[1600px] mx-auto">
        <div className="mb-8 md:mb-12">
          <Link to="/#services" className="inline-flex items-center gap-2 text-gray-500 hover:text-brand-black font-display font-bold uppercase text-[10px] md:text-xs transition-colors">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to Services
          </Link>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 md:mb-20"
        >
          <div className="flex flex-col lg:flex-row gap-8 md:gap-16 items-center text-center lg:text-left">
            <div className="flex-1">
              <div className={`inline-block px-4 py-1 border-2 border-brand-black rounded-full font-display font-bold text-[10px] md:text-xs uppercase mb-6 ${service.accent} bg-white`}>
                Expert Solutions
              </div>
              <h1 className="text-4xl md:text-7xl mb-6 md:mb-8 leading-none">{service.title}</h1>
              <p className="text-lg md:text-2xl text-gray-600 max-w-2xl mx-auto lg:mx-0 font-medium leading-tight">{service.heroText}</p>
            </div>
            <div className="w-full max-w-sm lg:w-1/3 aspect-square bg-white border-4 border-brand-black rounded-[2rem] md:rounded-[3rem] shadow-brutalist overflow-hidden relative group">
              <div className="absolute inset-0 bg-brand-lime/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <ServiceIllustration id={id || "web-dev"} />
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 mb-20 md:mb-32">
          <div className="lg:col-span-2 space-y-12 md:space-y-20">
            {/* The Approach */}
            <section>
              <h2 className="text-3xl md:text-4xl mb-8 md:mb-10 flex items-center gap-4 justify-center lg:justify-start">
                <span className="w-10 h-10 md:w-12 md:h-12 bg-brand-black text-white rounded-2xl flex items-center justify-center text-lg md:text-xl font-display rotate-3">?</span>
                THE STRATEGY
              </h2>
              <p className="text-lg md:text-xl text-gray-600 mb-10 md:mb-12 leading-relaxed font-medium border-l-4 border-brand-lime pl-6 md:pl-8 py-2">
                {service.details}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {service.features.map((f: string, i: number) => (
                  <div key={i} className="group p-6 md:p-8 bg-white border-2 border-brand-black rounded-3xl hover:bg-brand-cream transition-all shadow-brutalist hover:shadow-none translate-y-0 hover:translate-x-1 hover:translate-y-1">
                    <div className="flex flex-col gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-lime border-2 border-brand-black rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform">
                        <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6" />
                      </div>
                      <span className="font-display font-bold uppercase text-xs md:text-sm leading-tight tracking-wide">{f}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Tech Stack & Metrics */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="card-brutalist bg-brand-black text-white p-8 md:p-10">
                <h3 className="text-xl md:text-2xl mb-6 md:mb-8 font-display font-black uppercase text-brand-lime">TECH STACK</h3>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {service.techStack.map((tech: string, i: number) => (
                    <span key={i} className="px-3 py-1.5 md:px-4 md:py-2 border border-white/20 rounded-lg text-[10px] md:text-sm font-bold uppercase tracking-wider bg-white/5">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="card-brutalist bg-white p-8 md:p-10">
                <h3 className="text-xl md:text-2xl mb-6 md:mb-8 font-display font-black uppercase">KEY METRICS</h3>
                <div className="space-y-4 md:space-y-6">
                  {service.metrics.map((metric: string, i: number) => (
                    <div key={i} className="flex items-center gap-4">
                      <Zap className="w-4 h-4 md:w-5 md:h-5 text-brand-lime fill-brand-black" />
                      <span className="font-display font-bold uppercase text-xs md:text-sm">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
          
          <aside className="space-y-8">
            <div className="card-brutalist bg-white p-8 md:p-10 sticky top-32">
              <h3 className="text-2xl md:text-3xl mb-8 md:mb-10 font-display font-black uppercase italic border-b-4 border-brand-lime pb-4">WORKFLOW</h3>
              <div className="space-y-10 md:space-y-12 relative">
                <div className="absolute left-5 md:left-6 top-0 bottom-0 w-1 bg-brand-black/5 -z-0"></div>
                {service.process.map((p: string, i: number) => (
                  <div key={i} className="flex gap-6 md:gap-8 group relative z-10">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-black text-white rounded-full flex items-center justify-center font-display font-black text-lg md:text-xl shrink-0 group-hover:bg-brand-lime group-hover:text-brand-black transition-colors">
                      {i+1}
                    </div>
                    <div className="pt-2">
                      <p className="font-display font-bold uppercase text-xs md:text-sm leading-tight tracking-widest">{p}</p>
                      <p className="text-[10px] text-gray-500 mt-2 font-medium">Phase 0{i+1} of Project Lifecycle</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10 md:mt-12 pt-10 md:pt-12 border-t-2 border-brand-black/5">
                <Link to="/#contact" className="btn-brutalist w-full block text-center py-3">
                  Start Project
                </Link>
              </div>
            </div>
          </aside>
        </div>

        {/* Explore More Navigation */}
        <section className="mb-20 md:mb-32">
          <div className="flex items-center gap-6 md:gap-8 mb-10 md:mb-12">
            <h2 className="text-2xl md:text-4xl whitespace-nowrap">EXPLORE MORE</h2>
            <div className="h-1 w-full bg-brand-black/5"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {otherServices.map((s, i) => (
              <Link to={`/service/${s.id}`} key={i} className="group">
                <div className={`card-brutalist ${s.color} p-6 md:p-8 hover:bg-white transition-all flex flex-col items-center text-center h-full`}>
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white border-2 border-brand-black rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform shadow-brutalist">
                    {s.icon}
                  </div>
                  <h4 className="text-xl md:text-2xl mb-2">{s.title}</h4>
                  <p className="text-gray-500 text-xs md:text-sm font-medium mb-8 flex-grow">{s.heroText}</p>
                  <div className="text-brand-black font-display font-bold text-[10px] md:text-xs uppercase flex items-center gap-2 group-hover:text-brand-lime transition-colors">
                    View Service <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <div className="bg-brand-black text-white p-8 md:p-16 rounded-[2rem] md:rounded-[4rem] border-4 border-brand-black shadow-brutalist flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden group">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-lime/10 rounded-full blur-[100px] group-hover:bg-brand-lime/20 transition-colors"></div>
          <div className="relative z-10 text-center md:text-left">
            <h3 className="text-3xl md:text-6xl mb-6 leading-none uppercase font-display font-black italic">LET'S BUILD<br /><span className="text-brand-lime">THE FUTURE.</span></h3>
            <p className="text-lg font-medium max-w-md text-gray-400">Ready to transform your business with expert {service.title.toLowerCase()}?</p>
          </div>
          <Link to="/#contact" className="btn-brutalist text-xl md:text-2xl px-10 md:px-16 py-4 md:py-8 relative z-10 bg-brand-lime text-brand-black border-brand-black hover:bg-white hover:scale-105 transition-all">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

/* ──────────────────────────────────────────────────── PORTFOLIO PAGE ── */
const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const categories = ["All", ...Array.from(new Set(ALL_PROJECTS.map(p => p.category)))];
  const filtered = activeFilter === "All" ? ALL_PROJECTS : ALL_PROJECTS.filter(p => p.category === activeFilter);

  return (
    <div className="bg-brand-cream min-h-screen">
      {/* ── HERO ── */}
      <section className="relative pt-36 pb-16 px-6 md:px-12 lg:px-16 overflow-hidden border-b-2 border-brand-black">
        <div className="absolute inset-0 -z-10" style={{ backgroundImage: 'radial-gradient(circle, #9ca3af 1px, transparent 1px)', backgroundSize: '22px 22px', opacity: 0.3 }}></div>
        <div className="max-w-[1600px] mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-brand-black font-display font-bold uppercase text-xs transition-colors mb-10">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to Home
          </Link>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <p className="font-display font-black uppercase text-xs tracking-widest text-gray-400 mb-4">Our Work</p>
              <h1 className="text-5xl md:text-7xl xl:text-8xl leading-[0.88] tracking-tighter">ALL<br />PROJECTS.</h1>
            </div>
            <div className="max-w-md">
              <p className="text-base md:text-lg text-gray-600 font-medium leading-snug">
                10 live products across AI, SaaS, EdTech, healthcare, and beyond — each built from scratch, zero templates.
              </p>
            </div>
          </div>

          {/* Stats row */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "10+", label: "Projects Launched" },
              { value: "100%", label: "Custom Built" },
              { value: "6+", label: "Industries" },
              { value: "0", label: "Templates Used" },
            ].map((s, i) => (
              <div key={i} className="bg-white border-2 border-brand-black rounded-2xl px-6 py-5 shadow-brutalist">
                <p className="text-3xl md:text-4xl font-display font-black text-brand-black">{s.value}</p>
                <p className="font-display font-bold uppercase text-[10px] tracking-widest text-gray-400 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FILTER + GRID ── */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-16">
        <div className="max-w-[1600px] mx-auto">
          {/* Filter pills */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 border-2 border-brand-black rounded-full font-display font-bold uppercase text-xs tracking-wider transition-all ${
                  activeFilter === cat
                    ? "bg-brand-black text-white shadow-brutalist"
                    : "bg-white hover:bg-brand-lime"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filtered.map((p, i) => (
              <motion.a
                key={`${p.title}-${activeFilter}`}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className="group flex flex-col"
              >
                {/* Screenshot */}
                <div className="card-brutalist bg-white p-0 overflow-hidden mb-5 flex-shrink-0">
                  <div className="relative overflow-hidden">
                    <SitePreview url={p.url} title={p.title} />
                    <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/10 transition-colors flex items-center justify-center">
                      <div className="w-12 h-12 bg-brand-lime border-2 border-brand-black rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100 shadow-brutalist">
                        <ExternalLink className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1 flex flex-col">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-2xl md:text-3xl group-hover:text-brand-lime transition-colors leading-tight">{p.title}</h3>
                    <span className="shrink-0 px-3 py-1 bg-brand-black text-white rounded-full font-display font-bold text-[10px] uppercase mt-1.5 tracking-wider">{p.category}</span>
                  </div>
                  <p className="text-gray-500 text-sm font-medium leading-snug mb-4">{p.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {p.tags.map((t, j) => (
                      <span key={j} className="px-3 py-1 bg-brand-cream border border-brand-black/20 rounded-full font-display font-bold text-[10px] uppercase">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-16 bg-brand-black border-t-2 border-brand-black">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div>
            <h2 className="text-3xl md:text-5xl text-white mb-3">WANT YOUR PROJECT HERE?</h2>
            <p className="text-gray-400 font-medium text-base max-w-md">Let's build something remarkable together. Zero templates, all custom.</p>
          </div>
          <Link to="/#contact" className="btn-brutalist text-lg px-10 py-4 shrink-0">Start a Project</Link>
        </div>
      </section>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <div className="min-h-screen selection:bg-brand-lime selection:text-brand-black">
        <ScrollToTop />
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/service/web-dev" element={<WebDevPage />} />
            <Route path="/service/seo" element={<SEOPage />} />
            <Route path="/service/software" element={<SoftwarePage />} />
            <Route path="/service/ai" element={<AIPage />} />
            <Route path="/service/:id" element={<ServicePage />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}
