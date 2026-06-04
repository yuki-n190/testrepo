"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SignInPage() {
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
          <div className="text-center mb-16">
            <Link href="/" className="font-display text-3xl tracking-wider">
              LIFTLOG
            </Link>
          </div>

          {/* Heading */}
          <div className="text-center mb-12">
            <h1 className="font-display text-5xl md:text-6xl tracking-tight">
              WELCOME<br />BACK.
            </h1>
            <p className="mt-4 text-muted-foreground">
              The iron is waiting.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6">
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
              <div className="flex items-center justify-between">
                <Label
                  htmlFor="password"
                  className="text-xs uppercase tracking-widest text-muted-foreground"
                >
                  Password
                </Label>
                <Link
                  href="/forgot-password"
                  className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
                >
                  Forgot?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="h-14 bg-input border-border text-base px-4 placeholder:text-muted-foreground/50"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full h-16 text-sm uppercase tracking-widest font-medium mt-8"
            >
              Sign In
            </Button>
          </form>

          {/* Sign Up Link */}
          <p className="mt-12 text-center text-sm text-muted-foreground">
            New to LiftLog?{" "}
            <Link
              href="/sign-up"
              className="uppercase tracking-widest text-foreground hover:underline underline-offset-4"
            >
              Create Account
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
