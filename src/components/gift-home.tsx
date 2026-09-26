import { useState } from "react";
import { Heart, Mail, Sparkles, X } from "lucide-react";
import { LETTER, MEMORIES, SURPRISE } from "@/lib/gift";

export function GiftHome() {
  const [openPhoto, setOpenPhoto] = useState<number | null>(null);
  const [opened, setOpened] = useState(false);

  return (
    <main className="relative min-h-dvh overflow-x-hidden bg-wine-deep text-paper">
      <img
        src="/photos/velvet.jpg"
        alt=""
        className="pointer-events-none absolute inset-x-0 top-0 h-[70vh] w-full object-cover opacity-40"
      />
      <div className="vignette pointer-events-none absolute inset-x-0 top-0 h-[70vh]" />

      <Hero />
      <Gallery onOpen={setOpenPhoto} />
      <Letter />
      <PrivateSurprise opened={opened} onOpen={() => setOpened(true)} />
      <Closing />

      {openPhoto !== null ? (
        <Lightbox index={openPhoto} onClose={() => setOpenPhoto(null)} />
      ) : null}
    </main>
  );
}

function Hero() {
  return (
    <header className="relative z-10 mx-auto flex min-h-[88dvh] max-w-3xl flex-col items-center justify-center px-6 py-16 text-center">
      <p className="animate-rise font-sans text-xs uppercase tracking-[0.38em] text-gold">
        January 3 · until now
      </p>
      <h1 className="animate-rise mt-5 font-display text-5xl font-medium leading-[1.05] text-paper sm:text-7xl">
        Happy Birthday
        <span className="mt-2 block italic text-gold-soft">Eshu</span>
      </h1>
      <div className="rule-fade mt-8 h-px w-40" />
      <p className="animate-rise mt-6 max-w-md font-display text-xl italic leading-relaxed text-gold-soft">
        You are one of the most special people in my life. This whole page is for you.
      </p>
      <p className="mt-8 flex items-center gap-2 font-sans text-sm tracking-wide text-muted">
        <Heart className="size-3.5 fill-rose text-rose" />
        a letter from Keemi
      </p>
    </header>
  );
}

function Gallery({ onOpen }: { onOpen: (i: number) => void }) {
  return (
    <section className="relative z-10 mx-auto max-w-5xl px-5 pb-20">
      <div className="mb-8 text-center">
        <p className="font-sans text-xs uppercase tracking-[0.3em] text-gold">Our memories</p>
        <h2 className="mt-2 font-display text-3xl text-paper sm:text-4xl">Four little rooms of us</h2>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:gap-8 lg:grid-cols-4">
        {MEMORIES.map((m, i) => (
          <button
            key={m.src}
            type="button"
            onClick={() => onOpen(i)}
            className={`polaroid ${m.tilt} text-left transition duration-300 hover:z-10 hover:rotate-0 hover:scale-105`}
          >
            <img
              src={m.src}
              alt=""
              className="aspect-3/4 w-full object-cover"
            />
            <p className="mt-3 px-1 font-display text-base italic leading-tight text-ink">{m.title}</p>
            <p className="mt-1 hidden px-1 font-sans text-xs text-muted sm:block">{m.caption}</p>
          </button>
        ))}
      </div>
    </section>
  );
}

function Letter() {
  return (
    <section className="relative z-10 mx-auto max-w-2xl px-5 pb-20">
      <article className="letter-sheet rounded-lg px-6 py-10 sm:px-12 sm:py-14">
        <p className="text-center font-sans text-xs uppercase tracking-[0.32em] text-muted">
          A letter for your day
        </p>
        <h2 className="mt-4 text-center font-display text-3xl font-medium italic leading-snug text-wine sm:text-4xl">
          {LETTER.heading}
        </h2>
        <div className="rule-fade mx-auto mt-6 h-px w-24" />
        <div className="mt-8 space-y-5 font-display text-lg leading-[1.7] text-ink sm:text-xl">
          {LETTER.body.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
          <p className="pt-2 text-center font-medium italic text-wine">{LETTER.amen}</p>
        </div>
        <div className="mt-10 text-right">
          <p className="font-display text-base italic text-muted">{LETTER.signOff}</p>
          <p className="font-display text-3xl italic text-wine">{LETTER.from}</p>
        </div>
      </article>
    </section>
  );
}

function PrivateSurprise({
  opened,
  onOpen,
}: {
  opened: boolean;
  onOpen: () => void;
}) {
  return (
    <section className="relative z-10 mx-auto max-w-2xl px-5 pb-20">
      <div className="mb-6 text-center">
        <p className="flex items-center justify-center gap-2 font-sans text-xs uppercase tracking-[0.3em] text-gold">
          <Mail className="size-3.5" />
          {SURPRISE.kicker}
        </p>
        <h2 className="mt-2 font-display text-3xl text-paper">{SURPRISE.by}</h2>
      </div>

      {!opened ? (
        <button
          type="button"
          onClick={onOpen}
          className="group relative w-full overflow-hidden rounded-lg border border-gold/30 bg-wine text-left shadow-polaroid"
        >
          <img src="/photos/seal.jpg" alt="A sealed envelope from Keemi" className="h-64 w-full object-cover sm:h-80" />
          <span className="absolute inset-0 bg-gradient-to-t from-wine-deep/80 to-transparent" />
          <span className="absolute inset-x-0 bottom-0 p-6 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-wine/70 px-5 py-2.5 font-sans text-sm tracking-wide text-gold-soft backdrop-blur-sm">
              <Sparkles className="size-4 text-gold" />
              Break the seal
            </span>
          </span>
        </button>
      ) : (
        <article className="letter-sheet animate-rise rounded-lg px-6 py-10 sm:px-12 sm:py-12">
          <p className="font-sans text-xs uppercase tracking-[0.28em] text-muted">{SURPRISE.title}</p>
          <div className="mt-6 space-y-5 font-display text-lg leading-[1.7] text-ink">
            {SURPRISE.body.map((p) => (
              <p key={p.slice(0, 28)}>{p}</p>
            ))}
          </div>
          <div className="mt-10">
            <p className="font-display text-base italic text-muted">{SURPRISE.signOff}</p>
            <p className="font-display text-3xl italic text-wine">{SURPRISE.from}</p>
          </div>
        </article>
      )}
    </section>
  );
}

function Closing() {
  return (
    <footer className="relative z-10 px-6 pb-28 pt-4 text-center">
      <Heart className="mx-auto size-5 fill-rose text-rose" />
      <p className="mt-4 font-display text-2xl italic text-gold-soft">
        May you always be surrounded by people who care about you.
      </p>
      <p className="mt-3 font-sans text-sm tracking-[0.2em] uppercase text-muted">Ameen · Keemi · 2009</p>
    </footer>
  );
}

function Lightbox({ index, onClose }: { index: number; onClose: () => void }) {
  const photo = MEMORIES[index];
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={photo.title}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 flex size-11 items-center justify-center rounded-full border border-gold/40 text-paper"
        aria-label="Close photo"
      >
        <X className="size-5" />
      </button>
      <figure className="polaroid max-w-md" onClick={(e) => e.stopPropagation()}>
        <img src={photo.src} alt={photo.title} className="aspect-3/4 w-full object-cover" />
        <figcaption className="mt-3 px-1">
          <p className="font-display text-xl italic text-ink">{photo.title}</p>
          <p className="mt-1 font-sans text-sm text-muted">{photo.caption}</p>
        </figcaption>
      </figure>
    </div>
  );
}
