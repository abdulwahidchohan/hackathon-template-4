"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button"; // Adjust the import based on your button component's path

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      onClick={() => setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"))}
    >
      Toggle Theme
    </Button>
  );
}
