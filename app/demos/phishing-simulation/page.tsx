// app/demos/phishing-simulation/page.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

type Email = {
  sender: string;
  subject: string;
  body: string;
  isPhishing: boolean;
};

const emails: Email[] = [
  {
    sender: "security@paypal.com",
    subject: "Your Account is Limited",
    body: "We noticed unusual activity. Please verify your account.",
    isPhishing: true,
  },
  {
    sender: "friend@example.com",
    subject: "Check out these photos!",
    body: "Had a great time at the party. Photos attached.",
    isPhishing: false,
  },
];

export default function PhishingSimulation() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [feedback, setFeedback] = useState("");

  const currentEmail = emails[currentIndex];

  const handleAnswer = (answer: boolean) => {
    if (answer === currentEmail.isPhishing) {
      setFeedback(
        "Correct! " +
          (answer ? "This is a phishing email." : "This email is legitimate.")
      );
    } else {
      setFeedback(
        "Incorrect. " +
          (currentEmail.isPhishing
            ? "This is a phishing email."
            : "This email is legitimate.")
      );
    }
  };

  const nextEmail = () => {
    setFeedback("");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % emails.length);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-5">Phishing Simulation</h1>
      <div className="border p-4 rounded mb-4">
        <p>
          <strong>From:</strong> {currentEmail.sender}
        </p>
        <p>
          <strong>Subject:</strong> {currentEmail.subject}
        </p>
        <p className="mt-2">{currentEmail.body}</p>
      </div>
      <div className="flex space-x-4 mb-4">
        <Button onClick={() => handleAnswer(true)}>Phishing</Button>
        <Button onClick={() => handleAnswer(false)}>Legitimate</Button>
      </div>
      {feedback && (
        <div className="mb-4">
          <p>{feedback}</p>
        </div>
      )}
      <Button variant="secondary" onClick={nextEmail}>
        Next Email
      </Button>
    </div>
  );
}
