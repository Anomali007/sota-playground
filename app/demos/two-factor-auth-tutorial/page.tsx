// app/demos/two-factor-auth-tutorial/page.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { AlertCircle } from "lucide-react";

const steps = [
  {
    title: "Login to Your Account",
    description: "Enter your username and password to login to your account.",
  },
  {
    title: "Navigate to Security Settings",
    description:
      "Go to your account settings and select 'Security' or 'Privacy' settings.",
  },
  {
    title: "Enable Two-Factor Authentication",
    description:
      "Find the option to enable 2FA and click on 'Enable' or 'Turn On'.",
  },
  {
    title: "Choose Authentication Method",
    description:
      "Select your preferred method: Authenticator App, SMS, or Email.",
  },
  {
    title: "Verify and Confirm",
    description:
      "Follow the on-screen instructions to verify your choice and confirm setup.",
  },
];

export default function TwoFactorAuthTutorial() {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-5">
        Two-Factor Authentication Setup Tutorial
      </h1>
      {currentStep < steps.length ? (
        <>
          <div className="mb-4">
            <h2 className="text-xl font-semibold">
              Step {currentStep + 1}: {steps[currentStep].title}
            </h2>
            <p className="mt-2">{steps[currentStep].description}</p>
          </div>
          <div className="flex space-x-4">
            <Button onClick={prevStep} disabled={currentStep === 0}>
              Previous
            </Button>
            <Button onClick={nextStep}>
              {currentStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </div>
        </>
      ) : (
        <div>
          <h2 className="text-xl font-semibold mb-4">
            {`Congratulations! You've completed the 2FA setup tutorial.`}
          </h2>
          <Button onClick={() => setCurrentStep(0)}>Restart Tutorial</Button>
        </div>
      )}
    </div>
  );
}
