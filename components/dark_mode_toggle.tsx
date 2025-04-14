"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <Button
      onClick={() => setIsDark((prev) => !prev)}
      variant={"secondary"}
      className="sticky bottom-4 left-4 z-50 h-10 w-10 border-2 rounded-[50%]"
    >
      {isDark ? <Sun color="#fbbc04" /> : <Moon color="#003afc" />}
    </Button>
  );
}
