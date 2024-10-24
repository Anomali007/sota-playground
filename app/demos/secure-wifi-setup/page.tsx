// app/demos/secure-wifi-setup/page.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const steps = [
  "Access your router's settings by entering its IP address into your web browser.",
  "Login with your router's username and password.",
  "Change the default network name (SSID) to something unique.",
  "Set a strong Wi-Fi password using WPA3 or WPA2 encryption.",
  "Disable WPS and remote management features if not needed.",
  "Save your settings and reconnect your devices using the new credentials.",
];

export default function SecureWifiSetup() {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-5">Secure Wi-Fi Setup Tutorial</h1>
      {currentStep < steps.length ? (
        <>
          <div className="mb-4">
            <h2 className="text-xl font-semibold">
              Step {currentStep + 1}: {steps[currentStep]}
            </h2>
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
            Your Wi-Fi network is now secured!
          </h2>
          <Button onClick={() => setCurrentStep(0)}>Restart Tutorial</Button>
        </div>
      )}
    </div>
  );
}
