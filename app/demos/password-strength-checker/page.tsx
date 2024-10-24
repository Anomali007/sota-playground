// app/demos/password-strength-checker/page.tsx
"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";

export default function PasswordStrengthChecker() {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState(0);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const evaluatePassword = (pwd: string) => {
    let score = 0;
    const suggestionsArray = [];

    if (pwd.length >= 8) {
      score += 20;
    } else {
      suggestionsArray.push("Use at least 8 characters.");
    }

    if (/[A-Z]/.test(pwd)) {
      score += 20;
    } else {
      suggestionsArray.push("Include uppercase letters.");
    }

    if (/[a-z]/.test(pwd)) {
      score += 20;
    } else {
      suggestionsArray.push("Include lowercase letters.");
    }

    if (/[0-9]/.test(pwd)) {
      score += 20;
    } else {
      suggestionsArray.push("Include numbers.");
    }

    if (/[^A-Za-z0-9]/.test(pwd)) {
      score += 20;
    } else {
      suggestionsArray.push("Include special characters.");
    }

    setStrength(score);
    setSuggestions(suggestionsArray);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const pwd = e.target.value;
    setPassword(pwd);
    evaluatePassword(pwd);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-5">Password Strength Checker</h1>
      <Input
        type="password"
        value={password}
        onChange={handleChange}
        placeholder="Enter your password"
      />
      <div className="mt-4">
        <Progress value={strength} />
        <p className="mt-2 font-semibold">Strength: {strength}%</p>
      </div>
      {suggestions.length > 0 && (
        <div className="mt-4">
          <p className="font-semibold">Suggestions:</p>
          <ul className="list-disc list-inside">
            {suggestions.map((sugg, index) => (
              <li key={index}>{sugg}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
