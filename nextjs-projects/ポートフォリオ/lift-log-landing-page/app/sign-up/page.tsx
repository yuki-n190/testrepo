"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SignUpPage() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="px-6 py-8">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/"
            className="inline-flex items-center gap-3 text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="text-center mb-12">
            <Link href="/" className="font-display text-3xl tracking-wider">
              LIFTLOG
            </Link>
          </div>

          {/* Heading */}
          <div className="text-center mb-10">
            <h1 className="font-display text-5xl md:text-6xl tracking-tight">
              START YOUR<br />JOURNEY.
            </h1>
            <p className="mt-4 text-muted-foreground">
              Every rep counts. Every day matters.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5">
            <div className="space-y-2">
              <Label
                htmlFor="username"
                className="text-xs uppercase tracking-widest text-muted-foreground"
              >
                Username
              </Label>
              <Input
                id="username"
                type="text"
                placeholder="ironwarrior"
                className="h-14 bg-input border-border text-base px-4 placeholder:text-muted-foreground/50"
                required
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="text-xs uppercase tracking-widest text-muted-foreground"
              >
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="h-14 bg-input border-border text-base px-4 placeholder:text-muted-foreground/50"
                required
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="password"
                className="text-xs uppercase tracking-widest text-muted-foreground"
              >
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="h-14 bg-input border-border text-base px-4 placeholder:text-muted-foreground/50"
                required
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="confirm-password"
                className="text-xs uppercase tracking-widest text-muted-foreground"
              >
                Confirm Password
              </Label>
              <Input
                id="confirm-password"
                type="password"
                placeholder="••••••••"
                className="h-14 bg-input border-border text-base px-4 placeholder:text-muted-foreground/50"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full h-16 text-sm uppercase tracking-widest font-medium mt-6"
            >
              Create Account
            </Button>
          </form>

          {/* Sign In Link */}
          <p className="mt-10 text-center text-sm text-muted-foreground">
            Already lifting?{" "}
            <Link
              href="/sign-in"
              className="uppercase tracking-widest text-foreground hover:underline underline-offset-4"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-border">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Built for lifters. By lifters.
          </p>
        </div>
      </footer>
    </main>
  )
}
