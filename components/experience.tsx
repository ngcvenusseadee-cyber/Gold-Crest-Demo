"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const advisoryServices = [
  {
    icon: "01",
    title: "Design Consultation",
    copy:
      "We work with your architect and interior designer to bring your vision to life. We help define the desired style, from floor plan to finishes, ensuring your home reflects your lifestyle.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80"
  },
  {
    icon: "02",
    title: "Budget Planning",
    copy:
      "We build a clear and realistic budget aligned with your objectives. No surprises. We help prioritize smart investments and identify savings opportunities without compromising quality.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80"
  },
  {
    icon: "03",
    title: "Builder Selection",
    copy:
      "Access to our curated network of trusted builders. We evaluate experience, references, and compatibility with your project to ensure you work with the right professionals from day one.",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1600&q=80"
  },
  {
    icon: "04",
    title: "Permits and Legal",
    copy:
      "We navigate local permits and compliance for you. We coordinate approvals, regulatory requirements, and HOA processes so your project can move forward without unnecessary delays.",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=80"
  },
  {
    icon: "05",
    title: "Construction Oversight",
    copy:
      "Our ongoing supervision gives you peace of mind throughout the build. We monitor quality milestones, keep communication clear, and help ensure the project stays aligned with scope and timing.",
    image:
      "https://images.unsplash.com/photo-1519643381401-22c77e60520e?auto=format&fit=crop&w=1600&q=80"
  },
  {
    icon: "06",
    title: "Final Inspection",
    copy:
      "Before you receive the keys, we complete a detailed walkthrough to verify every finish and final punch item so your home is delivered to the standard you expect.",
    image:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1600&q=80"
  }
];

const serviceShowcaseImages = [
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
    alt: "Luxury modern residence exterior"
  },
  {
    src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1600&q=80",
    alt: "Contemporary luxury home with glass facade"
  },
  {
    src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80",
    alt: "Luxury living room interior"
  },
  {
    src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1600&q=80",
    alt: "Elegant modern residence at dusk"
  }
];

const processStages = [
  {
    step: "01",
    title: "Vision and Planning",
    text:
      "We begin by understanding your goals, lifestyle, and priorities for the home. From there, we help shape a clear project plan, timeline, and strategic recommendations.",
    bullets: [
      "Concept review and feasibility",
      "Budget and timeline guidance",
      "Creation of a personalized project roadmap"
    ],
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80"
  },
  {
    step: "02",
    title: "Design and Approvals",
    text:
      "We review plans developed by your architect and coordinate the early-stage approvals required to keep everything moving with confidence.",
    bullets: [
      "Architectural review and coordination",
      "Permit and approval guidance",
      "HOA and municipality support"
    ],
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1400&q=80"
  },
  {
    step: "03",
    title: "Construction",
    text:
      "Construction moves forward with structured oversight and visible accountability. We provide regular updates, key checks, and support through each major stage.",
    bullets: [
      "Weekly or recurring progress updates",
      "Critical milestone inspections",
      "Quality control guidance at each phase"
    ],
    image:
      "https://images.unsplash.com/photo-1519643381401-22c77e60520e?auto=format&fit=crop&w=1400&q=80"
  },
  {
    step: "04",
    title: "Delivery and Move-In",
    text:
      "We support the final handover process, punch-list follow-ups, and the transition into your completed home with clarity and care.",
    bullets: [
      "Final walkthrough and corrections",
      "Post-delivery coordination",
      "Warranty orientation and next steps"
    ],
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=80"
  }
];

const portfolioHomes = [
  {
    title: "The Pacific Residence",
    location: "Punta Mita, MX",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Lakeside Modern Retreat",
    location: "Valle de Bravo, MX",
    image:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Hillside Quiet Estate",
    location: "Austin, TX",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "The Grand Interior",
    location: "Miami, FL",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Crestline Modern Home",
    location: "Dallas, TX",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "The Vineyard Family Home",
    location: "Sonoma, CA",
    image:
      "https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=1200&q=80"
  }
];

const faqs = [
  {
    question: "What does GOLD CREST DEVELOPED actually help with?",
    answer:
      "We provide residential advisory across planning, budgeting, builder selection, approvals, construction oversight, and final delivery support so clients can move through the process with more confidence and clarity."
  },
  {
    question: "Do you replace the architect or the builder?",
    answer:
      "No. We work alongside your architect, interior designer, and builder as an experienced advisory partner, helping align decisions, protect quality, and keep the project moving smoothly."
  },
  {
    question: "When should a client bring you into the project?",
    answer:
      "Ideally at the earliest planning stage. That is when we can help shape vision, budget expectations, consultant selection, and the roadmap that will guide the entire build."
  },
  {
    question: "Can you help if construction has already started?",
    answer:
      "Yes. We can step in during active construction to support oversight, communication, milestone reviews, and final-stage quality control, depending on the project needs."
  }
];

const metrics = [
  { value: "25+", label: "homes delivered" },
  { value: "5+", label: "years of experience" },
  { value: "95%", label: "client satisfaction" }
];

export default function Experience() {
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = window.setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "auto";
    }, 1900);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    if (!elements.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -8% 0px"
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const currentService = advisoryServices[activeService];

  const goToPrevService = () => {
    setActiveService((current) =>
      current === 0 ? advisoryServices.length - 1 : current - 1
    );
  };

  const goToNextService = () => {
    setActiveService((current) => (current + 1) % advisoryServices.length);
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveService((current) => (current + 1) % advisoryServices.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className={`preloader ${loading ? "preloader--visible" : "preloader--hidden"}`}>
        <video className="preloader__video" autoPlay muted loop playsInline>
          <source src="/videos/loader-luxury.mp4" type="video/mp4" />
        </video>
        <div className="preloader__overlay" />
        <div className="preloader__grain" />
        <div className="preloader__content">
          <div className="preloader__crest" />
          <p className="preloader__eyebrow">Premium Real Estate Experience</p>
          <h1 className="preloader__brand">
            <span>GOLD CREST</span>
            <span>DEVELOPED</span>
          </h1>
          <div className="preloader__line" />
        </div>
      </div>

      <main id="top" className="min-h-screen bg-ink text-white">
        <header
          className={`site-header fixed left-0 right-0 top-0 z-30 transition-all duration-500 ${
            scrolled ? "site-header--scrolled" : "site-header--top"
          }`}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-8 lg:px-10">
            <div className="leading-tight uppercase tracking-[0.34em] text-white/72">
              <span className="block bg-[linear-gradient(180deg,#f3e2bf_0%,#d5b06f_48%,#b88b46_100%)] bg-clip-text font-serif text-lg tracking-[0.42em] text-transparent drop-shadow-[0_0_18px_rgba(198,165,106,0.12)] sm:text-[1.15rem]">
                GOLD CREST
              </span>
              <span className="block text-[11px] tracking-[0.42em] text-[#d9bc88]/82">DEVELOPED</span>
            </div>
            <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.24em] text-white/62 md:flex">
              <a href="#servicios" className="transition hover:text-sand">Services</a>
              <a href="#proceso" className="transition hover:text-sand">Process</a>
              <a href="#proyectos" className="transition hover:text-sand">Portfolio</a>
              <a href="#contacto" className="transition hover:text-sand">Contact</a>
              <a href="#contacto" className="header-consultation-btn rounded-full border border-gold/30 bg-gold/12 px-5 py-3 text-[11px] tracking-[0.28em] text-sand transition hover:bg-gold hover:text-ink">
                Free Consultation
              </a>
            </nav>
            <a href="#contacto" className="header-consultation-btn header-mobile-cta md:hidden rounded-full border border-gold/30 bg-gold/12 px-4 py-2 text-[10px] uppercase tracking-[0.22em] text-sand transition hover:bg-gold hover:text-ink">
              Free Consultation
            </a>
          </div>
        </header>

        <section className="relative isolate overflow-hidden border-b border-white/10">
          <video
            className="hero-background-video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=80"
          >
            <source src="/videos/hero-luxury.mp4" type="video/mp4" />
          </video>
          <div className="hero-background-video-overlay" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(198,165,106,0.18),_transparent_24%),radial-gradient(circle_at_82%_14%,_rgba(255,255,255,0.08),_transparent_18%)]" />
          <div className="absolute inset-0 bg-grid bg-[size:70px_70px] opacity-[0.05]" />
          <div className="gold-orb absolute left-[-8rem] top-10 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
          <div className="gold-orb-delayed absolute right-[-6rem] top-16 h-80 w-80 rounded-full bg-[#f0d2a0]/10 blur-3xl" />

          <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-center px-6 pb-20 pt-28 text-center sm:px-8 lg:min-h-[78vh] lg:px-10 lg:pb-28 lg:pt-32">
            <div className="hero-centered max-w-5xl">
              <p className="text-xs uppercase tracking-[0.36em] text-gold">Premium Residential Advisory</p>
              <h2 className="mt-8 font-serif text-5xl leading-[0.9] text-sand sm:text-6xl lg:text-[6.4rem]">
                Build the home
                <span className="hero-title-gold block">you have always dreamed of.</span>
              </h2>
              <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-white/66 sm:text-lg">
                Comprehensive expert guidance for clients who want confidence, transparency, and refined support from the first idea to final delivery.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a href="#contacto" className="hero-primary-btn inline-flex min-w-[220px] items-center justify-center rounded-full bg-gold px-8 py-4 text-xs font-medium uppercase tracking-[0.28em] text-ink transition hover:scale-[1.02] hover:bg-[#d8b67d]">
                  Start Your Project
                </a>
                <a href="#proyectos" className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-4 text-xs uppercase tracking-[0.28em] text-white/84 backdrop-blur transition hover:border-gold/35 hover:bg-white/10">
                  View Signature Projects
                </a>
              </div>

              <div className="mx-auto mt-10 max-w-md rounded-full border border-white/10 bg-black/25 px-5 py-3 text-sm text-white/62 backdrop-blur-sm">
                Private consultation available for clients seeking premium residential planning and advisory.
              </div>
            </div>
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-6 pb-12 sm:px-8 lg:px-10">
            <div className="metrics-strip grid gap-px overflow-hidden rounded-[2rem] border border-gold/15 bg-white/10 md:grid-cols-3">
              {metrics.map((metric) => (
                <div key={metric.label} className="bg-[#0f1318]/78 px-8 py-8 text-center backdrop-blur-sm sm:px-10">
                  <div className="font-serif text-5xl text-[#dfbf82] sm:text-6xl">{metric.value}</div>
                  <div className="mt-3 text-[11px] uppercase tracking-[0.32em] text-white/68">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="servicios" className="section-services relative overflow-hidden py-24 lg:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(198,165,106,0.08),transparent_24%),linear-gradient(180deg,#0c1014_0%,#0a0d11_100%)]" />
          <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
            <div className="mx-auto max-w-4xl text-center" data-reveal>
              <p className="text-xs uppercase tracking-[0.34em] text-gold">Advisory Services</p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-sand sm:text-5xl">Expert, Personalized Guidance for You</h2>
              <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-white/66">
                We offer comprehensive advisory services so you can build your dream home with confidence and clarity.
              </p>
            </div>

            <div data-reveal className="reveal-scale mt-12">
              <div className="service-spotlight relative overflow-hidden rounded-[2.6rem] border border-gold/20 shadow-ambient">
                <div className="service-spotlight__frame" />
                <div className="absolute inset-0">
                  {advisoryServices.map((service, index) => (
                    <Image
                      key={service.title}
                      src={service.image}
                      alt={service.title}
                      fill
                      className={`object-cover transition-all duration-1000 ${
                        index === activeService ? "opacity-100 scale-100" : "opacity-0 scale-105"
                      }`}
                    />
                  ))}
                </div>
                <div className="service-spotlight__overlay" />

                <div className="relative z-10 flex min-h-[34rem] flex-col justify-between p-6 sm:p-8 lg:min-h-[40rem] lg:p-12">
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.32em] text-gold">Guided Service Path</p>
                      <div className="mt-6 flex items-end gap-4">
                        <span className="service-step-number font-serif text-7xl leading-none sm:text-8xl lg:text-[6.5rem]">
                          {currentService.icon}
                        </span>
                        <div className="pb-3 text-sm uppercase tracking-[0.28em] text-white/55">
                          of {advisoryServices.length.toString().padStart(2, "0")}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 self-start">
                      <button
                        type="button"
                        onClick={goToPrevService}
                        aria-label="Previous service"
                        className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-black/25 text-xl text-sand backdrop-blur transition hover:border-gold/35 hover:bg-black/40"
                      >
                        &#8249;
                      </button>
                      <button
                        type="button"
                        onClick={goToNextService}
                        aria-label="Next service"
                        className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-black/25 text-xl text-sand backdrop-blur transition hover:border-gold/35 hover:bg-black/40"
                      >
                        &#8250;
                      </button>
                    </div>
                  </div>

                  <div className="max-w-4xl">
                    <h3 className="font-serif text-4xl leading-tight text-sand sm:text-5xl lg:text-[4.4rem]">
                      {currentService.title}
                    </h3>
                    <p className="mt-6 max-w-3xl text-lg leading-9 text-white/82 sm:text-xl">
                      {currentService.copy}
                    </p>

                    <div className="mt-8 flex flex-wrap items-center gap-3">
                      {advisoryServices.map((service, index) => (
                        <button
                          key={service.title}
                          type="button"
                          onClick={() => setActiveService(index)}
                          aria-label={`Go to ${service.title}`}
                          className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.24em] backdrop-blur transition ${
                            index === activeService
                              ? "border-gold/45 bg-gold/12 text-sand"
                              : "border-white/15 bg-black/20 text-white/58 hover:border-white/28 hover:text-white/78"
                          }`}
                        >
                          {service.icon}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="proceso" className="section-process py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
            <div className="mx-auto max-w-4xl text-center" data-reveal>
              <p className="text-xs uppercase tracking-[0.34em] text-gold">How It Works</p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-sand sm:text-5xl">From Vision to Keys in Hand</h2>
              <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-white/66">
                Our proven 4-stage process brings transparency and oversight to every phase of the homebuilding journey.
              </p>
            </div>

            <div className="mt-14 grid gap-8">
              {processStages.map((item, index) => (
                <div key={item.title} data-reveal className="reveal-up grid gap-8 rounded-[2.4rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6 sm:p-8 lg:grid-cols-[0.95fr_1.05fr]">
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="relative aspect-[16/10] overflow-hidden rounded-[1.8rem]">
                      <Image src={item.image} alt={item.title} fill className="object-cover" />
                    </div>
                  </div>
                  <div className={`flex flex-col justify-center ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <p className="text-4xl font-serif text-gold">{item.step}</p>
                    <h3 className="mt-4 font-serif text-3xl text-sand sm:text-4xl">{item.title}</h3>
                    <p className="mt-4 max-w-2xl leading-8 text-white/64">{item.text}</p>
                    <div className="mt-5 space-y-2">
                      {item.bullets.map((bullet) => (
                        <div key={bullet} className="flex items-start gap-3 text-sm leading-7 text-white/66">
                          <span className="mt-2 h-2 w-2 rounded-full bg-gold" />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="proyectos" className="section-projects border-y border-white/10 bg-[#0e1217] py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
            <div className="mx-auto max-w-4xl text-center" data-reveal>
              <p className="text-xs uppercase tracking-[0.34em] text-gold">Portfolio</p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-sand sm:text-5xl">Homes We Have Helped Bring to Life</h2>
              <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-white/66">
                A curated selection of luxury residences that reflect the level of care, planning, and architectural quality behind our advisory work.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {portfolioHomes.map((home) => (
                <article key={home.title} data-reveal className="reveal-scale group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <Image src={home.image} alt={home.title} fill className="object-cover transition duration-1000 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05)_0%,rgba(0,0,0,0.74)_100%)]" />
                    <div className="absolute left-4 top-4 rounded-full border border-gold/20 bg-black/30 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-gold backdrop-blur-sm">Featured</div>
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <h3 className="font-serif text-2xl text-sand">{home.title}</h3>
                      <p className="mt-2 text-sm uppercase tracking-[0.22em] text-white/68">{home.location}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-trust border-y border-white/10 bg-[linear-gradient(135deg,#12161b_0%,#0b0d10_100%)] py-24 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
            <div data-reveal className="reveal-left rounded-[2.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(198,165,106,0.14),rgba(255,255,255,0.03))] p-8 sm:p-10 lg:p-12">
              <p className="text-xs uppercase tracking-[0.34em] text-gold">Why Clients Trust Us</p>
              <h2 className="mt-5 max-w-2xl font-serif text-4xl leading-tight text-sand sm:text-5xl">
                Clear advisory, refined execution support, and steady communication from start to finish.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68">
                Our role is to bring confidence to a complex process. We help align design, budget, approvals, construction oversight, and delivery so the client can move forward with greater peace of mind.
              </p>
            </div>

            <div data-reveal className="reveal-right rounded-[2.2rem] border border-white/10 bg-white/5 p-8 sm:p-10 lg:p-12 shadow-ambient">
              <p className="text-[11px] uppercase tracking-[0.28em] text-white/46">Client Perspective</p>
              <blockquote className="mt-6 font-serif text-3xl leading-[1.5] text-sand">
                “What stood out was the clarity. Every stage felt guided, every decision felt supported, and the final result matched the level of care promised from the beginning.”
              </blockquote>
              <p className="mt-8 text-xs uppercase tracking-[0.28em] text-white/44">Private residential client · custom home project</p>
            </div>
          </div>
        </section>

        <section className="section-faq border-b border-white/10 py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
            <div className="mx-auto max-w-4xl text-center" data-reveal>
              <p className="text-xs uppercase tracking-[0.34em] text-gold">Frequently Asked Questions</p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-sand sm:text-5xl">
                Clear answers for clients who want certainty before they move forward.
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-white/66">
                The goal is simple: reduce uncertainty, explain the advisory role clearly, and help clients understand what support looks like from start to finish.
              </p>
            </div>

            <div className="mt-14 grid gap-6 lg:grid-cols-2">
              {faqs.map((faq, index) => (
                <article
                  key={faq.question}
                  data-reveal
                  className={`reveal-up faq-card overflow-hidden rounded-[2rem] border border-white/10 p-7 sm:p-8 ${
                    index === 0
                      ? "bg-[linear-gradient(180deg,rgba(198,165,106,0.14),rgba(255,255,255,0.03))]"
                      : "bg-[linear-gradient(135deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))]"
                  }`}
                >
                  <div className="mb-5 flex items-start justify-between gap-5">
                    <h3 className="max-w-xl font-serif text-3xl leading-tight text-sand">
                      {faq.question}
                    </h3>
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/20 bg-black/20 text-sm uppercase tracking-[0.18em] text-gold">
                      0{index + 1}
                    </div>
                  </div>
                  <div className="mb-5 h-px w-full bg-[linear-gradient(90deg,rgba(198,165,106,0.6),transparent)]" />
                  <p className="max-w-2xl text-lg leading-8 text-white/66">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="section-contact py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
            <div className="mx-auto max-w-4xl text-center" data-reveal>
              <p className="text-xs uppercase tracking-[0.34em] text-gold">Contact Us</p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-sand sm:text-5xl">
                Let&apos;s Begin Your Project
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-white/66">
                Our advisory team is ready to answer your questions and guide you toward the right next step. Your first consultation is always complimentary.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a href="#contact-form" className="hero-primary-btn inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-xs font-medium uppercase tracking-[0.28em] text-ink transition hover:scale-[1.02] hover:bg-[#d8b67d]">
                  Schedule Free Consultation
                </a>
                <a href="tel:+18005550100" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-4 text-xs uppercase tracking-[0.28em] text-white/84 backdrop-blur transition hover:border-gold/35 hover:bg-white/10">
                  Call Us Now
                </a>
              </div>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-3">
              <a data-reveal href="tel:+18005550100" className="reveal-up rounded-[1.6rem] border border-gold/20 bg-[linear-gradient(180deg,rgba(198,165,106,0.12),rgba(255,255,255,0.03))] px-6 py-5 transition hover:-translate-y-1 hover:border-gold/35">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/20 bg-black/20 text-gold">&#9742;</div>
                  <p className="text-[11px] uppercase tracking-[0.26em] text-gold">Phone</p>
                </div>
                <p className="mt-3 text-xl text-sand">+1 (800) 555-0100</p>
              </a>
              <a data-reveal href="mailto:hello@goldcrestdeveloped.com" className="reveal-up rounded-[1.6rem] border border-white/10 bg-white/5 px-6 py-5 transition hover:-translate-y-1 hover:border-gold/30">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/20 bg-black/20 text-gold">&#9993;</div>
                  <p className="text-[11px] uppercase tracking-[0.26em] text-gold">Email</p>
                </div>
                <p className="mt-3 text-xl text-sand break-all">hello@goldcrestdeveloped.com</p>
              </a>
              <div data-reveal className="reveal-up rounded-[1.6rem] border border-white/10 bg-white/5 px-6 py-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/20 bg-black/20 text-gold">&#9716;</div>
                  <p className="text-[11px] uppercase tracking-[0.26em] text-gold">Hours</p>
                </div>
                <p className="mt-3 text-xl text-sand">Mon - Fri, 9am - 6pm EST</p>
              </div>
            </div>

            <div className="mt-8 grid gap-8 lg:grid-cols-[0.86fr_1.14fr]">
              <div data-reveal className="reveal-left flex flex-col justify-between rounded-[2.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(198,165,106,0.12),rgba(255,255,255,0.03))] p-8 sm:p-10 lg:p-12">
                <div>
                  <p className="text-xs uppercase tracking-[0.34em] text-gold">Send Us a Message</p>
                  <div className="mt-5 h-px w-20 bg-[linear-gradient(90deg,rgba(198,165,106,0.92),transparent)]" />
                  <h3 className="mt-6 font-serif text-4xl leading-tight text-sand sm:text-5xl">Private advisory, direct communication, and premium support.</h3>
                  <p className="mt-6 max-w-xl text-lg leading-8 text-white/66">
                    Complete the form and one of our advisors will get back to you within the next 24 hours.
                  </p>
                  <div className="mt-6 inline-flex rounded-full border border-gold/20 bg-black/20 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-gold">
                    Luxury Residential Concierge
                  </div>
                </div>

                <div className="mt-10 space-y-4 text-base leading-7 text-white/62">
                  <div className="flex items-center gap-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-gold" />
                    Complimentary first consultation
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-gold" />
                    Response guaranteed within 24 hours
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-gold" />
                    No pressure, no obligation
                  </div>
                </div>

                <a href="https://wa.me/18005550100" className="contact-whatsapp-btn mt-10 inline-flex items-center justify-center rounded-full px-8 py-4 text-xs font-medium uppercase tracking-[0.28em] text-white transition hover:scale-[1.02]">
                  Chat on WhatsApp
                </a>
              </div>

              <form id="contact-form" data-reveal className="reveal-right rounded-[2.2rem] border border-white/10 bg-[#101419] p-8 shadow-ambient sm:p-10 lg:p-12">
                <div className="mb-8 flex items-center justify-between gap-4 border-b border-white/10 pb-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.34em] text-gold">Private Inquiry Form</p>
                    <p className="mt-3 text-sm leading-7 text-white/52">Tell us about your project and we will guide you to the right next step.</p>
                  </div>
                  <div className="hidden rounded-full border border-gold/20 bg-gold/10 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-sand sm:block">
                    24h response
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <label className="block text-sm text-white/68">
                    Name
                    <input type="text" placeholder="Your name or company" className="contact-input mt-2 w-full rounded-[1.2rem] border border-white/10 bg-black/20 px-4 py-4 text-white outline-none placeholder:text-white/24 focus:border-gold" />
                  </label>
                  <label className="block text-sm text-white/68">
                    Email
                    <input type="email" placeholder="Email address" className="contact-input mt-2 w-full rounded-[1.2rem] border border-white/10 bg-black/20 px-4 py-4 text-white outline-none placeholder:text-white/24 focus:border-gold" />
                  </label>
                  <label className="block text-sm text-white/68">
                    Phone
                    <input type="tel" placeholder="Phone number" className="contact-input mt-2 w-full rounded-[1.2rem] border border-white/10 bg-black/20 px-4 py-4 text-white outline-none placeholder:text-white/24 focus:border-gold" />
                  </label>
                  <label className="block text-sm text-white/68 md:col-span-2">
                    Service of interest
                    <select className="contact-input mt-2 w-full rounded-[1.2rem] border border-white/10 bg-black/20 px-4 py-4 text-white outline-none focus:border-gold">
                      <option>Choose a service</option>
                      <option>Design Consultation</option>
                      <option>Budget Planning</option>
                      <option>Builder Selection</option>
                      <option>Construction Oversight</option>
                      <option>Full Advisory</option>
                    </select>
                  </label>
                  <label className="block text-sm text-white/68 md:col-span-2">
                    Project details
                    <textarea rows={6} placeholder="Tell us about your project, timeline, and what kind of support you need." className="contact-input mt-2 w-full rounded-[1.4rem] border border-white/10 bg-black/20 px-4 py-4 text-white outline-none placeholder:text-white/24 focus:border-gold" />
                  </label>
                </div>

                <div className="mt-7 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <p className="max-w-md text-sm leading-7 text-white/44">
                    Premium residential advisory with transparent communication, structured support, and a clear next step.
                  </p>
                  <button type="button" className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-xs font-medium uppercase tracking-[0.28em] text-ink transition hover:scale-[1.02] hover:bg-[#d8b67d]">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/10 bg-[#0a0d10] px-6 py-14 sm:px-8 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.7fr_0.7fr_0.5fr]">
            <div className="space-y-5">
              <div className="leading-tight uppercase tracking-[0.34em] text-white/72">
                <span className="block bg-[linear-gradient(180deg,#f3e2bf_0%,#d5b06f_48%,#b88b46_100%)] bg-clip-text font-serif text-xl tracking-[0.42em] text-transparent">
                  GOLD CREST
                </span>
                <span className="block text-[11px] tracking-[0.42em] text-[#d9bc88]/82">DEVELOPED</span>
              </div>
              <p className="max-w-md text-base leading-8 text-white/56">
                Premium residential advisory for clients who want to build with more confidence,
                clarity, and refined support from vision through delivery.
              </p>
              <div className="flex items-center gap-3">
                <a href="https://wa.me/18005550100" className="footer-icon">WA</a>
                <a href="mailto:hello@goldcrestdeveloped.com" className="footer-icon">@</a>
                <a href="tel:+18005550100" className="footer-icon">PH</a>
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gold">Services</p>
              <div className="mt-5 space-y-4 text-white/58">
                <a href="#servicios" className="block transition hover:text-sand">Advisory Services</a>
                <a href="#proceso" className="block transition hover:text-sand">Our Process</a>
                <a href="#proyectos" className="block transition hover:text-sand">Portfolio</a>
                <a href="#contacto" className="block transition hover:text-sand">Contact</a>
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gold">Company</p>
              <div className="mt-5 space-y-4 text-white/58">
                <a href="#" className="block transition hover:text-sand">About Us</a>
                <a href="#" className="block transition hover:text-sand">Careers</a>
                <a href="#" className="block transition hover:text-sand">Privacy Policy</a>
                <a href="#" className="block transition hover:text-sand">Terms of Service</a>
              </div>
            </div>

            <div className="flex items-start justify-between gap-6 lg:flex-col lg:items-end">
              <a href="#contacto" className="rounded-full border border-gold/30 bg-gold/10 px-5 py-3 text-[11px] uppercase tracking-[0.28em] text-sand transition hover:bg-gold hover:text-ink">
                Free Consultation
              </a>
              <a href="#top" className="footer-backtop" aria-label="Back to top">
                ↑
              </a>
            </div>
          </div>

          <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-[11px] uppercase tracking-[0.28em] text-white/32 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 GOLD CREST DEVELOPED. All rights reserved.</p>
            <p>Premium Residential Advisory · USA</p>
          </div>
        </footer>
      </main>
    </>
  );
}
