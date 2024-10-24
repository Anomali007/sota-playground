// app/demos/personal-info-protection-quiz/page.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

type QuizQuestion = {
  question: string;
  options: string[];
  answer: number;
};

const quizQuestions: QuizQuestion[] = [
  {
    question: "Which information should you avoid sharing online?",
    options: ["Your favorite color", "Your home address", "Your pet's name"],
    answer: 1,
  },
  // Add more questions
];

export default function PersonalInfoProtectionQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [feedback, setFeedback] = useState("");
  const [score, setScore] = useState<number>(0);

  const question = quizQuestions[currentQuestion];

  const handleOptionSelect = (index: number) => {
    setSelectedOption(index);
  };

  const submitAnswer = () => {
    if (selectedOption === question.answer) {
      setFeedback("Correct!");
      setScore(score + 1);
    } else {
      setFeedback("Incorrect.");
    }
  };

  const nextQuestion = () => {
    setFeedback("");
    setSelectedOption(null);
    if (currentQuestion + 1 < quizQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Quiz finished
      setCurrentQuestion(-1);
    }
  };

  return (
    <div className="p-6">
      {currentQuestion !== -1 ? (
        <>
          <h1 className="text-2xl font-bold mb-5">
            Personal Information Protection Quiz
          </h1>
          <p className="mb-4">{question.question}</p>
          <div className="mb-4">
            {question.options.map((option, index) => (
              <label key={index} className="block mb-2">
                <input
                  type="radio"
                  name="option"
                  checked={selectedOption === index}
                  onChange={() => handleOptionSelect(index)}
                  className="mr-2"
                />
                {option}
              </label>
            ))}
          </div>
          {!feedback ? (
            <Button onClick={submitAnswer} disabled={selectedOption === null}>
              Submit Answer
            </Button>
          ) : (
            <div>
              <p className="mb-4">{feedback}</p>
              <Button onClick={nextQuestion}>Next Question</Button>
            </div>
          )}
        </>
      ) : (
        <div>
          <h1 className="text-2xl font-bold mb-5">Quiz Completed!</h1>
          <p>
            Your score: {score} / {quizQuestions.length}
          </p>
        </div>
      )}
    </div>
  );
}
