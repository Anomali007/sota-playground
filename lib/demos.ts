// lib/demos.ts
import {
  Shield,
  Lock,
  Key,
  WifiOff,
  RefreshCw,
  Mail,
  EyeOff,
  User,
  Info,
  FileText,
  ShieldAlert,
  AlertCircle,
  ShoppingCart,
} from "lucide-react";

export type Demo = {
  title: string;
  url: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  category: string;
};

export const demos: Demo[] = [
  // Password Tools
  {
    title: "Password Strength Checker",
    url: "/demos/password-strength-checker",
    icon: Shield,
    category: "Password Tools",
  },
  {
    title: "Password Cracking Simulation",
    url: "/demos/password-cracking-simulation",
    icon: Lock,
    category: "Password Tools",
  },
  // Security Tutorials
  {
    title: "Two-Factor Auth Tutorial",
    url: "/demos/two-factor-auth-tutorial",
    icon: Key,
    category: "Security Tutorials",
  },
  {
    title: "Secure Wi-Fi Setup",
    url: "/demos/secure-wifi-setup",
    icon: WifiOff,
    category: "Security Tutorials",
  },
  {
    title: "Device Update Simulator",
    url: "/demos/device-update-simulator",
    icon: RefreshCw,
    category: "Security Tutorials",
  },
  {
    title: "Data Backup Simulator",
    url: "/demos/data-backup-simulator",
    icon: RefreshCw,
    category: "Security Tutorials",
  },
  // Phishing & Privacy
  {
    title: "Phishing Simulation",
    url: "/demos/phishing-simulation",
    icon: Mail,
    category: "Phishing & Privacy",
  },
  {
    title: "Email Phishing Quiz",
    url: "/demos/email-phishing-quiz",
    icon: Mail,
    category: "Phishing & Privacy",
  },
  {
    title: "Spot the Secure Website",
    url: "/demos/spot-the-secure-website",
    icon: EyeOff,
    category: "Phishing & Privacy",
  },
  {
    title: "Social Media Privacy",
    url: "/demos/social-media-privacy",
    icon: User,
    category: "Phishing & Privacy",
  },
  {
    title: "Personal Info Protection Quiz",
    url: "/demos/personal-info-protection-quiz",
    icon: Info,
    category: "Phishing & Privacy",
  },
  {
    title: "Privacy Policy Review",
    url: "/demos/privacy-policy-review",
    icon: FileText,
    category: "Phishing & Privacy",
  },
  // Incident Response
  {
    title: "Incident Response Scenario",
    url: "/demos/incident-response-scenario",
    icon: ShieldAlert,
    category: "Incident Response",
  },
  {
    title: "Malware Identification",
    url: "/demos/malware-identification",
    icon: AlertCircle,
    category: "Incident Response",
  },
  // Secure Transaction Simulation (Uncategorized)
  {
    title: "Secure Transaction Simulation",
    url: "/demos/secure-transaction-simulation",
    icon: ShoppingCart,
    category: "",
  },
];
