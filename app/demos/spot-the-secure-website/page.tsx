// app/demos/spot-the-secure-website/page.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

type Website = {
  url: string;
  isSecure: boolean;
};

const websites: Website[] = [
  { url: "https://www.bankofamerica.com", isSecure: true },
  { url: "http://www.paypa1.com", isSecure: false },
  { url: "https://accounts.google.com", isSecure: true },
  { url: "http://login.facebook.com", isSecure: false },
];

export default function SpotTheSecureWebsite() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [feedback, setFeedback] = useState("");

  const currentWebsite = websites[currentIndex];

  const handleAnswer = (answer: boolean) => {
    if (answer === currentWebsite.isSecure) {
      setFeedback(
        "Correct! " +
          (answer
            ? "This is a secure website."
            : "This is not a secure website.")
      );
    } else {
      setFeedback(
        "Incorrect. " +
          (currentWebsite.isSecure
            ? "This is a secure website."
            : "This is not a secure website.")
      );
    }
  };

  const nextWebsite = () => {
    setFeedback("");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % websites.length);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-5">Spot the Secure Website</h1>
      <div className="border p-4 rounded mb-4">
        <p className="text-lg">{currentWebsite.url}</p>
      </div>
      <div className="flex space-x-4 mb-4">
        <Button onClick={() => handleAnswer(true)}>Secure</Button>
        <Button onClick={() => handleAnswer(false)}>Not Secure</Button>
      </div>
      {feedback && (
        <div className="mb-4">
          <p>{feedback}</p>
        </div>
      )}
      <Button variant="secondary" onClick={nextWebsite}>
        Next Website
      </Button>
    </div>
  );
}
