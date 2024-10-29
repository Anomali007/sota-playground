// components/pagination-controls.tsx
"use client";

import { usePathname } from "next/navigation";
import { demos } from "@/lib/demos";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function PaginationControls() {
  const pathname = usePathname();

  // Find the index of the current demo
  const currentIndex = demos.findIndex((demo) => demo.url === pathname);

  const prevDemo = currentIndex > 0 ? demos[currentIndex - 1] : null;
  const nextDemo =
    currentIndex >= 0 && currentIndex < demos.length - 1
      ? demos[currentIndex + 1]
      : null;

  // Only render if we're on a demo page
  if (currentIndex === -1) return null;

  return (
    <div className="p-4 flex justify-between">
      {prevDemo ? (
        <Link href={prevDemo.url}>
          <Button variant="outline">
            <ChevronLeft className="mr-2" />
            {prevDemo.title}
          </Button>
        </Link>
      ) : (
        <div />
      )}
      {nextDemo ? (
        <Link href={nextDemo.url}>
          <Button variant="outline">
            {nextDemo.title}
            <ChevronRight className="ml-2" />
          </Button>
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}
