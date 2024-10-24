// app/demos/social-media-privacy/page.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const platforms: string[] = ["Facebook", "Twitter", "Instagram"];

export default function SocialMediaPrivacy() {
  const [platform, setPlatform] = useState<string | null>(null);
  const [stepsCompleted, setStepsCompleted] = useState<number>(0);

  const selectPlatform = (name: string) => {
    setPlatform(name);
    setStepsCompleted(0);
  };

  const nextStep = () => {
    setStepsCompleted((prev) => prev + 1);
  };

  const steps = [
    `Go to ${platform} Settings.`,
    "Navigate to Privacy Settings.",
    "Adjust who can see your posts.",
    "Review tagged photos settings.",
    "Save your changes.",
  ];

  return (
    <div className="p-6">
      {!platform ? (
        <>
          <h1 className="text-2xl font-bold mb-5">
            Social Media Privacy Settings Workshop
          </h1>
          <p className="mb-4">Select a platform to begin:</p>
          <div className="flex space-x-4">
            {platforms.map((name) => (
              <Button key={name} onClick={() => selectPlatform(name)}>
                {name}
              </Button>
            ))}
          </div>
        </>
      ) : stepsCompleted < steps.length ? (
        <>
          <h1 className="text-2xl font-bold mb-5">
            {platform} Privacy Settings
          </h1>
          <p className="mb-4">{steps[stepsCompleted]}</p>
          <Button onClick={nextStep}>Next Step</Button>
        </>
      ) : (
        <>
          <h1 className="text-2xl font-bold mb-5">Settings Updated!</h1>
          <p className="mb-4">
            You have successfully updated your privacy settings on {platform}.
          </p>
          <Button variant="secondary" onClick={() => setPlatform(null)}>
            Start Over
          </Button>
        </>
      )}
    </div>
  );
}
