"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <span className="font-display text-2xl tracking-wider">LIFTLOG</span>
        <div className="flex items-center gap-6">
          <Link
            href="/sign-in"
            className="text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
          >
            Sign In
          </Link>
          <Button asChild className="h-12 px-8 text-sm uppercase tracking-widest font-medium">
            <Link href="/sign-up">Get Started</Link>
          </Button>
        </div>
      </nav>
    </header>
  )
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-athlete.png"
          alt="Athlete preparing to lift"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-20">
        <div className="max-w-3xl">
          <h1 className="font-display text-7xl leading-[0.9] tracking-tight md:text-[10rem] lg:text-[12rem]">
            EARN<br />IT.
          </h1>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground md:text-xl">
            No shortcuts. No excuses.<br />
            Just you and the iron.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <Button size="lg" className="h-16 px-12 text-sm uppercase tracking-widest font-medium">
              Start Training
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-4">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">Scroll</span>
          <div className="h-16 w-px bg-gradient-to-b from-muted-foreground to-transparent" />
        </div>
      </div>
    </section>
  )
}

function ManifestoSection() {
  return (
    <section className="relative py-32 md:py-48 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8">The Philosophy</p>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight">
              DISCIPLINE<br />
              OVER<br />
              MOTIVATION.
            </h2>
          </div>
          <div className="lg:pl-12">
            <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground">
              Motivation fades. Discipline remains. LiftLog is built for those who show up 
              every single day, whether they feel like it or not.
            </p>
            <p className="mt-8 text-xl md:text-2xl leading-relaxed text-muted-foreground">
              Track every rep. Measure every gain. Become undeniable.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function StatsSection() {
  const stats = [
    { value: "47", label: "WORKOUTS LOGGED" },
    { value: "12", label: "DAY STREAK" },
    { value: "24.5K", label: "LBS MOVED" },
  ]

  return (
    <section className="py-24 px-6 border-t border-border">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-16 text-center">Your Progress</p>
        <div className="grid md:grid-cols-3 gap-12 md:gap-0 md:divide-x divide-border">
          {stats.map((stat, i) => (
            <div key={i} className="text-center px-8">
              <span className="font-display text-7xl md:text-8xl lg:text-9xl tracking-tight">{stat.value}</span>
              <p className="mt-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ImageSection() {
  return (
    <section className="relative h-screen">
      <Image
        src="/images/athlete-training.png"
        alt="Athlete training intensely"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-16">
        <div className="mx-auto max-w-7xl">
          <blockquote className="max-w-2xl">
            <p className="font-display text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight">
              &quot;THE IRON NEVER LIES. IT WILL ALWAYS TELL YOU WHERE YOU STAND.&quot;
            </p>
            <footer className="mt-8 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              — Every lifter who earned it
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}

function FeaturesSection() {
  const features = [
    {
      number: "01",
      title: "TRACK",
      description: "Log every set, rep, and pound. Fast. Frictionless. Built for the gym floor.",
    },
    {
      number: "02",
      title: "ANALYZE",
      description: "See exactly where you&apos;re improving. Identify weaknesses. Eliminate guesswork.",
    },
    {
      number: "03",
      title: "PROGRESS",
      description: "Watch your numbers climb. Celebrate PRs. Become the strongest version of yourself.",
    },
  ]

  return (
    <section className="py-32 md:py-48 px-6 border-t border-border">
      <div className="mx-auto max-w-7xl">
        <div className="mb-24">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8">The System</p>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight max-w-4xl">
            SIMPLE.<br />
            EFFECTIVE.<br />
            RELENTLESS.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-16">
          {features.map((feature, i) => (
            <div key={i} className="group">
              <span className="font-display text-6xl md:text-7xl text-muted-foreground/30 group-hover:text-foreground transition-colors">
                {feature.number}
              </span>
              <h3 className="mt-6 font-display text-3xl md:text-4xl tracking-tight">{feature.title}</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="py-32 md:py-48 px-6 border-t border-border">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="font-display text-6xl md:text-8xl lg:text-[10rem] leading-[0.85] tracking-tight">
          STOP<br />
          THINKING.<br />
          START<br />
          LIFTING.
        </h2>
        <div className="mt-16">
          <Button size="lg" className="h-20 px-16 text-base uppercase tracking-widest font-medium">
            Begin Now
            <ArrowRight className="ml-4 h-6 w-6" />
          </Button>
        </div>
        <p className="mt-8 text-sm text-muted-foreground uppercase tracking-widest">
          Free forever. No credit card.
        </p>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-border px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <span className="font-display text-2xl tracking-wider">LIFTLOG</span>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Built for lifters. By lifters.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default function LiftLogLanding() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ManifestoSection />
      <StatsSection />
      <ImageSection />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </main>
  )
}
