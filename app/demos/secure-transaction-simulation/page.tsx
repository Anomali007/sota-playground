// app/demos/secure-transaction-simulation/page.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function SecureTransactionSimulation() {
  const [step, setStep] = useState<number>(0);
  const [isSecureSite, setIsSecureSite] = useState<boolean | null>(null);

  const handleSiteChoice = (secure: boolean) => {
    setIsSecureSite(secure);
    setStep(1);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-5">Secure Transaction Simulation</h1>
      {step === 0 && (
        <>
          <p className="mb-4">
            Choose a website to proceed with the transaction:
          </p>
          <div className="flex flex-col space-y-2">
            <Button onClick={() => handleSiteChoice(true)}>
              https://www.secure-shop.com
            </Button>
            <Button onClick={() => handleSiteChoice(false)}>
              http://www.discount-deals.com
            </Button>
          </div>
        </>
      )}
      {step === 1 && (
        <>
          {isSecureSite ? (
            <p className="mb-4">
              You have chosen a secure website with HTTPS encryption.
            </p>
          ) : (
            <p className="mb-4">
              Warning: The site you chose is not secure. Transactions may be
              unsafe.
            </p>
          )}
          <Button onClick={() => setStep(2)}>Proceed to Payment</Button>
        </>
      )}
      {step === 2 && (
        <>
          {isSecureSite ? (
            <p className="mb-4">
              Transaction completed safely. Your payment information is secure.
            </p>
          ) : (
            <p className="mb-4">
              Transaction failed. Your payment information may be at risk.
            </p>
          )}
        </>
      )}
    </div>
  );
}
