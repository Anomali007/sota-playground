// app/demos/page.tsx
"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  MailIcon,
  UserIcon,
  InfoIcon,
  KeyIcon,
  WifiOffIcon,
  ShieldIcon,
  LockIcon,
  EyeOffIcon,
  MailCheckIcon,
  RefreshCwIcon,
  ShoppingCartIcon,
  AlertTriangleIcon,
  ShieldAlertIcon,
  FileTextIcon,
} from "lucide-react";

export default function DemosPage() {
  const demos = [
    {
      title: "Password Strength Checker",
      description: "Test your passwords and get suggestions for improvement.",
      icon: <ShieldIcon size={32} />,
      url: "/demos/password-strength-checker",
    },
    {
      title: "Password Cracking Simulation",
      description: "Understand how passwords can be cracked.",
      icon: <LockIcon size={32} />,
      url: "/demos/password-cracking-simulation",
    },
    {
      title: "Spot the Secure Website",
      description: "Learn to identify secure websites.",
      icon: <EyeOffIcon size={32} />,
      url: "/demos/spot-the-secure-website",
    },
    // Add the rest of your demos here...
    {
      title: "Phishing Simulation",
      description: "Recognize phishing attempts.",
      icon: <MailIcon size={32} />,
      url: "/demos/phishing-simulation",
    },
    {
      title: "Email Phishing Quiz",
      description: "Test your ability to spot phishing emails.",
      icon: <MailCheckIcon size={32} />,
      url: "/demos/email-phishing-quiz",
    },
    {
      title: "Device Update Simulator",
      description: "Learn how to keep your devices updated.",
      icon: <RefreshCwIcon size={32} />,
      url: "/demos/device-update-simulator",
    },
    {
      title: "Secure Transaction Simulation",
      description: "Understand secure online transactions.",
      icon: <ShoppingCartIcon size={32} />,
      url: "/demos/secure-transaction-simulation",
    },
    {
      title: "Social Media Privacy",
      description: "Manage your social media privacy settings.",
      icon: <UserIcon size={32} />,
      url: "/demos/social-media-privacy",
    },
    {
      title: "Personal Info Protection Quiz",
      description: "Test your knowledge on protecting personal info.",
      icon: <InfoIcon size={32} />,
      url: "/demos/personal-info-protection-quiz",
    },
    {
      title: "Two-Factor Auth Tutorial",
      description: "Set up two-factor authentication.",
      icon: <KeyIcon size={32} />,
      url: "/demos/two-factor-auth-tutorial",
    },
    {
      title: "Malware Identification",
      description: "Identify signs of malware infection.",
      icon: <AlertTriangleIcon size={32} />,
      url: "/demos/malware-identification",
    },
    {
      title: "Data Backup Simulator",
      description: "Learn how to back up your data.",
      icon: <RefreshCwIcon size={32} />,
      url: "/demos/data-backup-simulator",
    },
    {
      title: "Secure Wi-Fi Setup",
      description: "Secure your Wi-Fi network.",
      icon: <WifiOffIcon size={32} />,
      url: "/demos/secure-wifi-setup",
    },
    {
      title: "Incident Response Scenario",
      description: "Practice responding to security incidents.",
      icon: <ShieldAlertIcon size={32} />,
      url: "/demos/incident-response-scenario",
    },
    {
      title: "Privacy Policy Review",
      description: "Analyze privacy policies for red flags.",
      icon: <FileTextIcon size={32} />,
      url: "/demos/privacy-policy-review",
    },
  ];

  return (
    <div className="relative z-10 py-10 max-w-7xl mx-auto bg-red-300">
      <h1 className="text-3xl font-bold mb-8">Interactive Demos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {demos.map((demo, index) => (
          <DemoFeature key={demo.title} {...demo} index={index} />
        ))}
      </div>
    </div>
  );
}

interface DemoFeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  url: string;
  index: number;
}

function DemoFeature({
  title,
  description,
  icon,
  url,
  index,
}: DemoFeatureProps) {
  return (
    <Link
      href={url}
      className={cn(
        "flex flex-col border rounded-lg p-6 hover:shadow-md transition",
        "group"
      )}
      key={index}
    >
      <div className="mb-4 text-indigo-600">{icon}</div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 flex-1">{description}</p>
    </Link>
  );
}
