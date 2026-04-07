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
import { useState, useEffect } from "react";
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

const ServiceIllustration = ({ id }: { id: string }) => {
  switch (id) {
    case "web-dev":
      return (
        <div className="relative w-full h-full flex items-center justify-center">
          <motion.div 
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 2, 0]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-32 h-24 bg-white border-2 border-brand-black rounded-lg shadow-brutalist relative overflow-hidden"
          >
            <div className="h-4 bg-brand-black w-full flex items-center px-2 gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
            </div>
            <div className="p-3 space-y-2">
              <motion.div 
                animate={{ width: ["40%", "80%", "40%"] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="h-2 bg-brand-lime/30 rounded-full"
              ></motion.div>
              <motion.div 
                animate={{ width: ["60%", "30%", "60%"] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="h-2 bg-brand-black/10 rounded-full"
              ></motion.div>
              <div className="h-2 bg-brand-black/10 rounded-full w-full"></div>
            </div>
          </motion.div>
          <motion.div 
            animate={{ x: [0, 20, 0], y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute bottom-4 right-4 w-12 h-12 bg-brand-lime border-2 border-brand-black rounded-lg flex items-center justify-center shadow-brutalist"
          >
            <Code2 className="w-6 h-6" />
          </motion.div>
        </div>
      );
    case "seo":
      return (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="flex items-end gap-2 h-24">
            {[0.4, 0.7, 0.5, 0.9, 0.6].map((h, i) => (
              <motion.div 
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h * 100}%` }}
                transition={{ duration: 1, delay: i * 0.1, repeat: Infinity, repeatType: "reverse" }}
                className="w-4 bg-brand-lime border-2 border-brand-black rounded-t-md"
              ></motion.div>
            ))}
          </div>
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 10, 0]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute top-4 right-8 w-14 h-14 bg-white border-2 border-brand-black rounded-full flex items-center justify-center shadow-brutalist"
          >
            <Search className="w-8 h-8 text-brand-black" />
          </motion.div>
        </div>
      );
    case "software":
      return (
        <div className="relative w-full h-full flex items-center justify-center">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-32 h-32 border-4 border-dashed border-brand-black/20 rounded-full flex items-center justify-center"
          >
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 bg-brand-lime border-2 border-brand-black rounded-xl flex items-center justify-center shadow-brutalist"
            >
              <Cpu className="w-8 h-8" />
            </motion.div>
          </motion.div>
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute top-0 left-8 w-10 h-10 bg-white border-2 border-brand-black rounded-lg flex items-center justify-center shadow-brutalist"
          >
            <Layers className="w-5 h-5" />
          </motion.div>
        </div>
      );
    case "ai":
      return (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="relative">
            <motion.div 
              animate={{ 
                scale: [1, 1.05, 1],
                filter: ["drop-shadow(0 0 0px #C1FF00)", "drop-shadow(0 0 20px #C1FF00)", "drop-shadow(0 0 0px #C1FF00)"]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-24 h-24 bg-brand-black border-2 border-brand-lime rounded-[2rem] flex items-center justify-center text-brand-lime"
            >
              <Bot className="w-12 h-12" />
            </motion.div>
            {[...Array(4)].map((_, i) => (
              <motion.div 
                key={i}
                animate={{ 
                  scale: [0, 1, 0],
                  x: [0, (i % 2 === 0 ? 40 : -40)],
                  y: [0, (i < 2 ? 40 : -40)]
                }}
                transition={{ duration: 2, delay: i * 0.5, repeat: Infinity }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-brand-lime rounded-full border border-brand-black"
              ></motion.div>
            ))}
          </div>
        </div>
      );
    default:
      return null;
  }
};

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

  const portfolio = [
    { title: "Nexus AI Platform", category: "AI Solution", image: "https://picsum.photos/seed/nexus/800/600" },
    { title: "EcoStream Web", category: "Web Development", image: "https://picsum.photos/seed/eco/800/600" },
    { title: "GrowthEngine", category: "SEO & Marketing", image: "https://picsum.photos/seed/growth/800/600" },
    { title: "SecureVault", category: "Custom Software", image: "https://picsum.photos/seed/vault/800/600" }
  ];

  return (
    <div className="">
      {/* 1. HERO: The High-Level Promise */}
      <section className="relative min-h-screen flex items-center px-6 overflow-hidden py-24 lg:py-0">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 -z-10 opacity-20" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        <div className="absolute top-20 left-10 w-48 md:w-64 h-48 md:h-64 bg-brand-lime/10 rounded-full blur-[80px] md:blur-[100px] -z-10"></div>
        <div className="absolute bottom-20 right-10 w-64 md:w-96 h-64 md:h-96 bg-brand-lime/5 rounded-full blur-[100px] md:blur-[120px] -z-10"></div>

        <div className="max-w-[1600px] mx-auto w-full">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-brand-black rounded-full font-display font-bold text-[10px] uppercase mb-6 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                <span className="w-2 h-2 bg-brand-lime rounded-full animate-pulse"></span>
                EST. 2024 / NEXT-GEN DIGITAL AGENCY
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl mb-6 leading-[0.9] tracking-tighter">
                WE BUILD THE<br />
                <span className="relative inline-block">
                  <span className="relative z-10">FUTURE</span>
                  <motion.span 
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="absolute bottom-1 md:bottom-2 left-0 h-3 md:h-6 bg-brand-lime -z-0"
                  ></motion.span>
                </span> OF<br />
                <span className="text-brand-lime drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">DIGITAL.</span>
              </h1>

              <p className="text-base md:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0 mb-10 font-medium leading-tight">
                From custom AI agents to high-performance web apps. We don't just build; we <span className="text-brand-black underline decoration-brand-lime decoration-4 underline-offset-4">innovate</span>.
              </p>

              <div className="flex flex-wrap gap-6 items-center justify-center lg:justify-start">
                <a href="#contact" className="btn-brutalist text-base md:text-lg px-6 md:px-8 py-3 md:py-4">
                  Start Your Journey
                </a>
                <div className="flex flex-col items-center lg:items-start">
                  <span className="text-[10px] md:text-sm font-display font-black uppercase tracking-widest text-gray-400">Trusted by</span>
                  <div className="flex gap-4 mt-1 grayscale opacity-50">
                    <Globe className="w-5 h-5 md:w-6 md:h-6" />
                    <Zap className="w-5 h-5 md:w-6 md:h-6" />
                    <Cpu className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 relative"
            >
              {/* Floating Elements */}
              <motion.div 
                animate={{ y: [0, -20, 0], rotate: [5, -5, 5] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-12 -left-12 z-20"
              >
                <div className="bg-white border-2 border-brand-black p-4 rounded-2xl shadow-brutalist rotate-[-10deg]">
                  <Bot className="w-10 h-10 text-brand-lime fill-brand-black" />
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 20, 0], rotate: [-5, 5, -5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -right-10 z-20"
              >
                <div className="bg-brand-lime border-2 border-brand-black px-6 py-3 rounded-full shadow-brutalist font-display font-black italic text-sm">
                  100% CUSTOM
                </div>
              </motion.div>

              <div className="relative z-10">
                <div className="card-brutalist bg-white p-2 rotate-3 hover:rotate-0 transition-transform duration-700 group cursor-none">
                  <div className="relative overflow-hidden rounded-2xl border-2 border-brand-black">
                    <img 
                      src="https://picsum.photos/seed/future/1000/1200" 
                      alt="Future" 
                      className="w-full aspect-[4/5] object-cover group-hover:scale-110 transition-transform duration-1000" 
                      referrerPolicy="no-referrer" 
                    />
                    <div className="absolute inset-0 bg-brand-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="w-20 h-20 bg-brand-lime border-2 border-brand-black rounded-full flex items-center justify-center animate-spin-slow">
                        <ArrowRight className="w-10 h-10 -rotate-45" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Decorative Stack */}
                <div className="absolute inset-0 translate-x-4 translate-y-4 border-2 border-brand-black rounded-[2.5rem] -z-10"></div>
                <div className="absolute inset-0 translate-x-8 translate-y-8 border-2 border-brand-black/20 rounded-[2.5rem] -z-20"></div>
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
                      <div className="order-1 md:order-2 h-40 md:h-64 bg-brand-cream/50 rounded-3xl border-2 border-brand-black/5 overflow-hidden group-hover:border-brand-lime transition-colors">
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
            <button className="btn-brutalist text-sm px-6 py-3">View All Projects</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolio.map((p, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="card-brutalist bg-white p-0 overflow-hidden mb-6">
                  <img src={p.image} alt={p.title} className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
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
              </motion.div>
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
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <h2 className="text-4xl md:text-7xl lg:text-8xl mb-8">LET'S CREATE SOMETHING UNFORGETTABLE.</h2>
              <div className="space-y-6 md:space-y-8 mb-12">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-lime border-2 border-brand-black rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <p className="font-display font-bold uppercase text-[10px] text-gray-500">Email Us</p>
                    <p className="font-display font-bold text-base md:text-lg">hello@holoncode.com</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="card-brutalist p-4 bg-white">
                    <div className="aspect-square bg-brand-cream border-2 border-brand-black rounded-xl mb-3 overflow-hidden relative">
                      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <MapPin className="w-6 h-6 md:w-8 md:h-8 text-brand-lime fill-brand-black" />
                      </div>
                    </div>
                    <p className="font-display font-bold text-xs md:text-sm uppercase">New York Office</p>
                    <p className="text-[10px] md:text-xs text-gray-500">1980 Haerlom Street, NY 82130</p>
                  </div>
                  <div className="card-brutalist p-4 bg-white">
                    <div className="aspect-square bg-brand-cream border-2 border-brand-black rounded-xl mb-3 overflow-hidden relative">
                      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <MapPin className="w-6 h-6 md:w-8 md:h-8 text-brand-lime fill-brand-black" />
                      </div>
                    </div>
                    <p className="font-display font-bold text-xs md:text-sm uppercase">London Office</p>
                    <p className="text-[10px] md:text-xs text-gray-500">332 3rd London Street, MI 87421</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-brutalist p-6 md:p-8 bg-white">
              <form className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-2">
                    <label className="font-display font-bold uppercase text-[10px]">Your Name</label>
                    <input type="text" placeholder="John Doe" className="w-full px-4 py-2 md:py-3 bg-brand-cream border-2 border-brand-black rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-lime text-sm" />
                  </div>
                  <div className="space-y-2">
                    <label className="font-display font-bold uppercase text-[10px]">Your Email</label>
                    <input type="email" placeholder="john@example.com" className="w-full px-4 py-2 md:py-3 bg-brand-cream border-2 border-brand-black rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-lime text-sm" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="font-display font-bold uppercase text-[10px]">Subject</label>
                  <input type="text" placeholder="Project Inquiry" className="w-full px-4 py-2 md:py-3 bg-brand-cream border-2 border-brand-black rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-lime text-sm" />
                </div>
                <div className="space-y-2">
                  <label className="font-display font-bold uppercase text-[10px]">Message</label>
                  <textarea rows={4} placeholder="Tell us about your vision..." className="w-full px-4 py-2 md:py-3 bg-brand-cream border-2 border-brand-black rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-lime resize-none text-sm"></textarea>
                </div>
                <button type="submit" className="btn-brutalist w-full flex items-center justify-center gap-2 py-3 md:py-4">
                  Send Message <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
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

export default function App() {
  return (
    <Router>
      <div className="min-h-screen selection:bg-brand-lime selection:text-brand-black">
        <ScrollToTop />
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service/:id" element={<ServicePage />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}
