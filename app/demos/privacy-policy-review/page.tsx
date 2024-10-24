// app/demos/privacy-policy-review/page.tsx
"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

type PrivacyPolicy = {
  content: string;
  highlights: string[];
  redFlags: string[];
};

const dummyPolicy: PrivacyPolicy = {
  content:
    "This is a sample privacy policy. We collect user data and may share it with third parties. We use cookies to track user behavior.",
  highlights: ["We collect user data", "We use cookies"],
  redFlags: ["may share it with third parties"],
};

export default function PrivacyPolicyReview() {
  const [url, setUrl] = useState<string>("");
  const [policy, setPolicy] = useState<PrivacyPolicy | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const analyzePolicy = () => {
    setIsLoading(true);
    // Simulate fetching and analyzing the privacy policy
    setTimeout(() => {
      setPolicy(dummyPolicy);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-5">Privacy Policy Review Tool</h1>
      <div className="mb-4">
        <Input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter website URL"
        />
      </div>
      <Button onClick={analyzePolicy} disabled={isLoading || !url}>
        {isLoading ? "Analyzing..." : "Analyze Privacy Policy"}
      </Button>
      {policy && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Policy Highlights</h2>
          <p className="mb-4">{policy.content}</p>
          <div className="mb-4">
            <h3 className="font-semibold">Key Points:</h3>
            <ul className="list-disc list-inside">
              {policy.highlights.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-red-500 flex items-center">
              <AlertCircle className="mr-2" /> Potential Red Flags:
            </h3>
            <ul className="list-disc list-inside text-red-500">
              {policy.redFlags.map((flag, index) => (
                <li key={index}>{flag}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
