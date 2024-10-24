// components/password-strength-progress.tsx
"use client";

import * as React from "react";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface PasswordStrengthProgressProps {
  value: number;
}

export function PasswordStrengthProgress({
  value,
}: PasswordStrengthProgressProps) {
  const getColor = () => {
    if (value < 40) return "bg-red-500";
    if (value < 70) return "bg-yellow-500";
    return "bg-green-500";
  };

  return (
    <Progress
      value={value}
      className={cn("w-full h-4 rounded transition-all", getColor())}
    />
  );
}
