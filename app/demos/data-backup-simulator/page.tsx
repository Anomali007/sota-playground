// app/demos/data-backup-simulator/page.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const steps: string[] = [
  "Connect an external hard drive or open cloud backup software.",
  "Select files and folders you want to back up.",
  "Choose the backup destination.",
  "Start the backup process.",
  "Verify that your data has been backed up successfully.",
];

export default function DataBackupSimulator() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isBackingUp, setIsBackingUp] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);

  const nextStep = () => {
    if (currentStep === steps.length - 2) {
      // Start backup process
      setIsBackingUp(true);
      simulateBackup();
    } else {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
    }
  };

  const simulateBackup = () => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setIsBackingUp(false);
          setCurrentStep((prevStep) => prevStep + 1);
          return 100;
        }
        return prev + 10;
      });
    }, 500);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-5">Data Backup Simulator</h1>
      {currentStep < steps.length ? (
        <>
          <p className="mb-4">{steps[currentStep]}</p>
          {isBackingUp ? (
            <div className="mb-4">
              <Progress value={progress} />
              <p className="mt-2">Backing up... {progress}%</p>
            </div>
          ) : (
            <Button onClick={nextStep}>Next Step</Button>
          )}
        </>
      ) : (
        <div>
          <p className="font-semibold">Data backup completed successfully!</p>
          <Button onClick={() => setCurrentStep(0)} className="mt-4">
            Restart Simulator
          </Button>
        </div>
      )}
    </div>
  );
}
