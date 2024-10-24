// app/demos/device-update-simulator/page.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const steps: string[] = [
  "Open Settings on your device.",
  'Navigate to "Software Update".',
  "Check for updates.",
  "Download and install the update.",
  "Restart your device to complete the update.",
];

export default function DeviceUpdateSimulator() {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length));
  };

  const progressPercentage = (currentStep / steps.length) * 100;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-5">Device Update Simulator</h1>
      <Progress value={progressPercentage} />
      {currentStep < steps.length ? (
        <>
          <p className="mt-4 mb-4">{steps[currentStep]}</p>
          <Button onClick={nextStep}>Next Step</Button>
        </>
      ) : (
        <p className="mt-4 font-semibold">Update Completed Successfully!</p>
      )}
    </div>
  );
}
