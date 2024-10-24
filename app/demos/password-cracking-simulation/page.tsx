// app/demos/password-cracking-simulation/page.tsx
"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function PasswordCrackingSimulation() {
  const [password, setPassword] = useState("");
  const [crackTime, setCrackTime] = useState<string | null>(null);
  const [isSimulating, setIsSimulating] = useState(false);

  const calculateCrackTime = (pwd: string) => {
    // Placeholder for actual crack time calculation
    let time = "Instantly";

    if (pwd.length >= 12) {
      time = "Centuries";
    } else if (pwd.length >= 10) {
      time = "Years";
    } else if (pwd.length >= 8) {
      time = "Days";
    } else if (pwd.length >= 6) {
      time = "Hours";
    }

    setTimeout(() => {
      setCrackTime(time);
      setIsSimulating(false);
    }, 2000); // Simulate cracking time
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSimulating(true);
    calculateCrackTime(password);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-5">Password Cracking Simulation</h1>
      <form onSubmit={handleSubmit}>
        <Input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setCrackTime(null);
          }}
          placeholder="Enter a password"
          required
        />
        <Button type="submit" disabled={isSimulating} className="mt-4">
          {isSimulating ? "Simulating..." : "Simulate Crack Time"}
        </Button>
      </form>
      {crackTime && (
        <p className="mt-4 text-lg">
          Estimated time to crack your password: <strong>{crackTime}</strong>
        </p>
      )}
    </div>
  );
}
