// app/demos/incident-response-scenario/page.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
// import { AlertCircle } from "lucide-react";

type Incident = {
  description: string;
  options: string[];
  correctActions: number[];
};

const incidents: Incident[] = [
  {
    description:
      "You receive an email from your bank stating there's been unauthorized access to your account.",
    options: [
      "Click the link in the email to secure your account.",
      "Call the bank using the number on your bank statement.",
      "Ignore the email; it's probably spam.",
      "Check the email sender's address for legitimacy.",
    ],
    correctActions: [1, 3],
  },
  // Add more incidents as needed
];

export default function IncidentResponseScenario() {
  const [currentIncident, setCurrentIncident] = useState<number>(0);
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
  const [feedback, setFeedback] = useState("");
  const [score, setScore] = useState<number>(0);

  const incident = incidents[currentIncident];

  const handleOptionToggle = (index: number) => {
    setSelectedOptions((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const submitResponse = () => {
    const isCorrect =
      selectedOptions.sort().toString() ===
      incident.correctActions.sort().toString();
    if (isCorrect) {
      setFeedback("Correct actions taken!");
      setScore(score + 1);
    } else {
      setFeedback("Incorrect actions.");
    }
  };

  const nextIncident = () => {
    setFeedback("");
    setSelectedOptions([]);
    if (currentIncident + 1 < incidents.length) {
      setCurrentIncident(currentIncident + 1);
    } else {
      // Scenario finished
      setCurrentIncident(-1);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      {currentIncident !== -1 ? (
        <>
          <h1 className="text-2xl font-bold mb-5">
            Incident Response Scenario
          </h1>
          <p className="mb-4">{incident.description}</p>
          <div className="mb-4">
            {incident.options.map((option, index) => (
              <label key={index} className="block mb-2">
                <input
                  type="checkbox"
                  checked={selectedOptions.includes(index)}
                  onChange={() => handleOptionToggle(index)}
                  className="mr-2"
                />
                {option}
              </label>
            ))}
          </div>
          {!feedback ? (
            <Button onClick={submitResponse}>Submit Response</Button>
          ) : (
            <div>
              <p className="mb-4">{feedback}</p>
              <Button onClick={nextIncident}>Next Scenario</Button>
            </div>
          )}
        </>
      ) : (
        <div>
          <h1 className="text-2xl font-bold mb-5">Scenario Completed!</h1>
          <p>
            Your score: {score} / {incidents.length}
          </p>
        </div>
      )}
    </div>
  );
}
