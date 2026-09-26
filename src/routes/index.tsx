import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { GiftHome } from "@/components/gift-home";
import { LockScreen } from "@/components/lock-screen";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const [unlocked, setUnlocked] = useState(false);

  if (!unlocked) {
    return <LockScreen onUnlock={() => setUnlocked(true)} />;
  }

  return <GiftHome />;
}
