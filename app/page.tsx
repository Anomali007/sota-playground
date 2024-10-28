// app/page.tsx
"use client";

// import { useState } from "react";
import Link from "next/link";
// import Image from "next/image";
import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
// import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { CheckIcon } from "lucide-react";
// import { cn } from "@/lib/utils";

export default function HomePage() {
  return (
    <div>
      {/* Header */}
      {/* <header className="bg-white">
        <nav className="container mx-auto flex items-center justify-between p-6">
          <Link href="/" className="flex items-center space-x-2 mx-4">
            <Logo />
            <span className="font-bold text-xl text-gray-900">
              {" "}
              The SOTA Lab{" "}
            </span>
          </Link>
          <div className="hidden lg:flex lg:gap-x-12">
            <Link
              href="/demos"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Demos
            </Link>
            <Link
              href="/features"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Pricing
            </Link>
            <Link
              href="/about"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              About
            </Link>
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              href="/login"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </Link>
          </div> */}
      {/* Mobile menu button */}
      {/* Implement mobile menu for small screens if needed */}
      {/* </nav>
      </header> */}

      {/* Hero Section */}
      <main>
        <section className="relative pt-14 bg-white">
          <div className="container mx-auto px-6 py-24 text-center">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl">
              Enhance Your Cybersecurity Skills
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Interactive demos and tools to help you learn and stay safe
              online.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/signup">
                <Button size="lg">Get Started</Button>
              </Link>
              <Link
                href="/demos"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">
                Interactive Demos
              </h2>
              <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Learn by Doing
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Explore a variety of interactive demos designed to enhance your
                cybersecurity awareness.
              </p>
            </div>
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <FeatureCard
                title="Password Strength Checker"
                description="Test your passwords and get suggestions for improvement."
              />
              <FeatureCard
                title="Phishing Simulation"
                description="Learn to identify phishing emails and websites."
              />
              <FeatureCard
                title="Secure Wi-Fi Setup"
                description="Step-by-step guides to secure your home network."
              />
              <FeatureCard
                title="Malware Identification"
                description="Recognize signs of malware and protect your devices."
              />
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">
                Pricing
              </h2>
              <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Flexible Plans for Everyone
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Choose a plan that fits your needs and start enhancing your
                cybersecurity skills today.
              </p>
            </div>
            <div className="mt-16 grid gap-8 lg:grid-cols-3">
              {pricingTiers.map((tier) => (
                <PricingCard key={tier.name} tier={tier} />
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="mt-10 max-w-2xl mx-auto">
              <Accordion type="single" collapsible>
                {faqs.map((faq) => (
                  <AccordionItem key={faq.id} value={`faq-${faq.id}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Start Your Cybersecurity Journey Today
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Join thousands of users in enhancing their cybersecurity
              awareness.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/signup">
                <Button size="lg">Get Started</Button>
              </Link>
              <Link
                href="/demos"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Explore Demos <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Logo variant="white" />
              <span className="font-bold text-xl text-white">The SOTA Lab</span>
            </Link>
            <div className="mt-6 md:mt-0 text-gray-400">
              &copy; {new Date().getFullYear()} The SOTA Lab. All rights
              reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Logo({ variant = "default" }) {
  // Replace with your actual logo component
  const textColor = variant === "white" ? "text-white" : "text-indigo-600";
  return (
    <div
      className={`w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center ${textColor}`}
    >
      <span className="font-bold">S</span>
    </div>
  );
}

function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Card className="p-6 text-center">
      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-600 mx-auto">
        <CheckIcon className="h-6 w-6 text-white" />
      </div>
      <h3 className="mt-4 text-xl font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-base text-gray-600">{description}</p>
    </Card>
  );
}

const pricingTiers = [
  {
    name: "Free",
    priceMonthly: "$0",
    description: "Access to basic demos and tools.",
    features: ["Limited demos", "Basic tutorials", "Community support"],
    href: "/signup",
  },
  {
    name: "Pro",
    priceMonthly: "$9",
    description: "Unlock all demos and premium features.",
    features: ["All demos", "Advanced tutorials", "Priority support"],
    href: "/signup",
    mostPopular: true,
  },
  {
    name: "Enterprise",
    priceMonthly: "$49",
    description: "Customized solutions for organizations.",
    features: ["Team access", "Custom training", "Dedicated support"],
    href: "/contact",
  },
];

interface Tier {
  name: string;
  priceMonthly: string;
  description: string;
  features: string[];
  href: string;
  mostPopular?: boolean;
}

function PricingCard({ tier }: { tier: Tier }) {
  return (
    <Card className="p-6 flex flex-col">
      <h3 className="text-lg font-semibold leading-8 text-gray-900">
        {tier.name}
      </h3>
      {tier.mostPopular && (
        <p className="mt-2 rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-indigo-600">
          Most popular
        </p>
      )}
      <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
      <p className="mt-6 flex items-baseline gap-x-1">
        <span className="text-4xl font-semibold tracking-tight text-gray-900">
          {tier.priceMonthly}
        </span>
        <span className="text-sm font-semibold leading-6 text-gray-600">
          /month
        </span>
      </p>
      <ul
        role="list"
        className="mt-6 space-y-3 text-sm leading-6 text-gray-600 flex-1"
      >
        {tier.features.map((feature) => (
          <li key={feature} className="flex gap-x-3">
            <CheckIcon className="h-6 w-5 flex-none text-indigo-600" />
            {feature}
          </li>
        ))}
      </ul>
      <Link href={tier.href}>
        <Button
          variant={tier.mostPopular ? "default" : "outline"}
          className="mt-6 w-full"
        >
          {tier.name === "Free" ? "Get Started" : "Buy Plan"}
        </Button>
      </Link>
    </Card>
  );
}

const faqs = [
  {
    id: 1,
    question: "What is The SOTA Lab?",
    answer:
      "The SOTA Lab provides interactive cybersecurity demos and tools to help you enhance your cybersecurity skills.",
  },
  {
    id: 2,
    question: "How can I access the demos?",
    answer: "You can access the demos by signing up for a free account.",
  },
  {
    id: 3,
    question: "Do you offer team accounts?",
    answer:
      "Yes, we offer enterprise solutions for organizations. Please contact us for more information.",
  },
  // Add more FAQs as needed
];
