import { useMemo, useState } from "react";
import { Delete, Heart, Lock } from "lucide-react";
import { PASSCODE } from "@/lib/gift";

const KEYS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "0", "del"] as const;

export function LockScreen({ onUnlock }: { onUnlock: () => void }) {
  const [digits, setDigits] = useState("");
  const [error, setError] = useState(false);

  const dots = useMemo(() => Array.from({ length: 4 }, (_, i) => i < digits.length), [digits]);

  function press(key: string) {
    if (key === "") return;
    if (key === "del") {
      setDigits((d) => d.slice(0, -1));
      setError(false);
      return;
    }
    if (digits.length >= 4) return;
    const next = digits + key;
    setDigits(next);
    if (next.length === 4) {
      if (next === PASSCODE) {
        window.setTimeout(onUnlock, 180);
      } else {
        setError(true);
        window.setTimeout(() => {
          setDigits("");
          setError(false);
        }, 520);
      }
    }
  }

  return (
    <main className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden bg-wine-deep px-5 py-10 text-paper">
      <img
        src="/photos/velvet.jpg"
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-55"
      />
      <div className="vignette pointer-events-none absolute inset-0" />
      <Petals />

      <section
        className={`relative z-10 flex w-full max-w-sm flex-col items-center text-center ${error ? "animate-shake" : "animate-rise"}`}
      >
        <span className="mb-6 flex size-16 items-center justify-center rounded-full border border-gold/40 bg-wine/70 text-gold animate-glow">
          <Lock className="size-6" strokeWidth={1.5} />
        </span>
        <p className="font-sans text-xs uppercase tracking-[0.34em] text-gold-soft">A private gift</p>
        <h1 className="mt-3 font-display text-5xl font-medium tracking-tight text-paper">For Eshu</h1>
        <p className="mt-3 max-w-xs font-display text-lg italic text-gold-soft">
          Enter the year that opened this door.
        </p>

        <div className="mt-8 flex gap-3" aria-hidden>
          {dots.map((on, i) => (
            <span
              key={i}
              className={`size-3.5 rounded-full border border-gold/70 transition-colors ${on ? "bg-gold" : "bg-transparent"}`}
            />
          ))}
        </div>
        {error ? (
          <p className="mt-3 font-sans text-sm text-rose">Not that year. Try again.</p>
        ) : (
          <p className="mt-3 h-5 font-sans text-sm text-muted">Four numbers. Yours.</p>
        )}

        <div className="mt-8 grid w-full grid-cols-3 gap-3">
          {KEYS.map((key, i) =>
            key === "" ? (
              <span key={`pad-${i}`} />
            ) : (
              <button
                key={`pad-${i}`}
                type="button"
                onClick={() => press(key)}
                className="flex h-14 items-center justify-center rounded-full border border-gold/25 bg-wine/50 font-sans text-xl text-paper backdrop-blur-sm transition hover:border-gold/70 hover:bg-wine"
                aria-label={key === "del" ? "Delete" : key}
              >
                {key === "del" ? <Delete className="size-5 text-gold-soft" /> : key}
              </button>
            ),
          )}
        </div>

        <p className="mt-10 flex items-center gap-2 font-display text-base italic text-gold-soft">
          <Heart className="size-3.5 fill-rose text-rose" />
          from Keemi
        </p>
      </section>
    </main>
  );
}

function Petals() {
  const petals = [
    { left: "8%", delay: "0s", duration: "11s", drift: "18px", gold: false },
    { left: "22%", delay: "2s", duration: "13s", drift: "-24px", gold: true },
    { left: "41%", delay: "0.8s", duration: "12s", drift: "30px", gold: false },
    { left: "58%", delay: "3.4s", duration: "14s", drift: "-12px", gold: true },
    { left: "73%", delay: "1.6s", duration: "11.5s", drift: "22px", gold: false },
    { left: "88%", delay: "4s", duration: "15s", drift: "-28px", gold: true },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {petals.map((p) => (
        <span
          key={p.left}
          className={`petal ${p.gold ? "gold" : ""}`}
          style={{
            left: p.left,
            animationDelay: p.delay,
            animationDuration: p.duration,
            ["--drift" as string]: p.drift,
          }}
        />
      ))}
    </div>
  );
}
