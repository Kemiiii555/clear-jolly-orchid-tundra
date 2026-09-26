import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Lock, i as Mail, o as Heart, r as Sparkles, s as Delete, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-UfNUhRrj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var MEMORIES = [
	{
		src: "/photos/memory-1.jpg",
		title: "Late-night calls",
		caption: "The hours that belonged only to us.",
		tilt: "polaroid-tilt-a"
	},
	{
		src: "/photos/memory-2.jpg",
		title: "Everything we talked about",
		caption: "Tea, rain, and all the things we never ran out of.",
		tilt: "polaroid-tilt-b"
	},
	{
		src: "/photos/memory-3.jpg",
		title: "Making it easier",
		caption: "Problems split in half. Pages we wrote together.",
		tilt: "polaroid-tilt-c"
	},
	{
		src: "/photos/memory-4.jpg",
		title: "Your day",
		caption: "A small light, kept just for you.",
		tilt: "polaroid-tilt-d"
	}
];
var LETTER = {
	heading: "Happy Birthday to you, Eshu",
	body: [
		"You are one of the most special people in my life. Because of you there is so much happiness in my life. I feel really lucky to have someone like you in my life.",
		"Today is a very special day for you, and for me too.",
		"Since January 3 until now, we have made so many memories together, had so many late-night calls, talked about so many things, shared our problems, and always tried to make things easier for each other.",
		"Many many congratulations on this special day.",
		"May Allah make everything easier for you in the future, help you achieve every goal in your life, give you success in everything you do, bless you with happiness, peace and good health, and always keep you surrounded by people who care about you."
	],
	amen: "Ameen.",
	signOff: "With all my heart,",
	from: "Keemi"
};
var SURPRISE = {
	kicker: "A private surprise",
	by: "by Keemi",
	title: "Only for you.",
	body: [
		"Eshu, I hid this where only you would look.",
		"If I could fold every late-night call into one page, this would be the page I would press into your hands. January 3 was the quiet beginning of the best chapter of my life — and this birthday is my way of putting it into words you can keep.",
		"You make happiness look possible, even on the days it is not. You listen. You stay. You try to make things easier, and I need you to know I see all of it.",
		"Whenever the world gets heavy, come back here. I am always on the other side of the night with you. This is not only a birthday gift. It is a promise: I will keep making things easier for you, the way you do for me.",
		"Happy birthday, my person. Keep this between us."
	],
	signOff: "Yours, always",
	from: "Keemi"
};
function GiftHome() {
	const [openPhoto, setOpenPhoto] = (0, import_react.useState)(null);
	const [opened, setOpened] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative min-h-dvh overflow-x-hidden bg-wine-deep text-paper",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/photos/velvet.jpg",
				alt: "",
				className: "pointer-events-none absolute inset-x-0 top-0 h-[70vh] w-full object-cover opacity-40"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "vignette pointer-events-none absolute inset-x-0 top-0 h-[70vh]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, { onOpen: setOpenPhoto }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Letter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivateSurprise, {
				opened,
				onOpen: () => setOpened(true)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Closing, {}),
			openPhoto !== null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbox, {
				index: openPhoto,
				onClose: () => setOpenPhoto(null)
			}) : null
		]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "relative z-10 mx-auto flex min-h-[88dvh] max-w-3xl flex-col items-center justify-center px-6 py-16 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "animate-rise font-sans text-xs uppercase tracking-[0.38em] text-gold",
				children: "January 3 · until now"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "animate-rise mt-5 font-display text-5xl font-medium leading-[1.05] text-paper sm:text-7xl",
				children: ["Happy Birthday", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-2 block italic text-gold-soft",
					children: "Eshu"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "rule-fade mt-8 h-px w-40" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "animate-rise mt-6 max-w-md font-display text-xl italic leading-relaxed text-gold-soft",
				children: "You are one of the most special people in my life. This whole page is for you."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-8 flex items-center gap-2 font-sans text-sm tracking-wide text-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "size-3.5 fill-rose text-rose" }), "a letter from Keemi"]
			})
		]
	});
}
function Gallery({ onOpen }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative z-10 mx-auto max-w-5xl px-5 pb-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-8 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-sans text-xs uppercase tracking-[0.3em] text-gold",
				children: "Our memories"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 font-display text-3xl text-paper sm:text-4xl",
				children: "Four little rooms of us"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-2 gap-4 sm:gap-8 lg:grid-cols-4",
			children: MEMORIES.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => onOpen(i),
				className: `polaroid ${m.tilt} text-left transition duration-300 hover:z-10 hover:rotate-0 hover:scale-105`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: m.src,
						alt: "",
						className: "aspect-3/4 w-full object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 px-1 font-display text-base italic leading-tight text-ink",
						children: m.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 hidden px-1 font-sans text-xs text-muted sm:block",
						children: m.caption
					})
				]
			}, m.src))
		})]
	});
}
function Letter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative z-10 mx-auto max-w-2xl px-5 pb-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "letter-sheet rounded-lg px-6 py-10 sm:px-12 sm:py-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center font-sans text-xs uppercase tracking-[0.32em] text-muted",
					children: "A letter for your day"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-center font-display text-3xl font-medium italic leading-snug text-wine sm:text-4xl",
					children: LETTER.heading
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "rule-fade mx-auto mt-6 h-px w-24" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 space-y-5 font-display text-lg leading-[1.7] text-ink sm:text-xl",
					children: [LETTER.body.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: p }, p.slice(0, 24))), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "pt-2 text-center font-medium italic text-wine",
						children: LETTER.amen
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 text-right",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-base italic text-muted",
						children: LETTER.signOff
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-3xl italic text-wine",
						children: LETTER.from
					})]
				})
			]
		})
	});
}
function PrivateSurprise({ opened, onOpen }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative z-10 mx-auto max-w-2xl px-5 pb-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "flex items-center justify-center gap-2 font-sans text-xs uppercase tracking-[0.3em] text-gold",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-3.5" }), SURPRISE.kicker]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 font-display text-3xl text-paper",
				children: SURPRISE.by
			})]
		}), !opened ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: onOpen,
			className: "group relative w-full overflow-hidden rounded-lg border border-gold/30 bg-wine text-left shadow-polaroid",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/photos/seal.jpg",
					alt: "A sealed envelope from Keemi",
					className: "h-64 w-full object-cover sm:h-80"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 bg-gradient-to-t from-wine-deep/80 to-transparent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute inset-x-0 bottom-0 p-6 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-2 rounded-full border border-gold/50 bg-wine/70 px-5 py-2.5 font-sans text-sm tracking-wide text-gold-soft backdrop-blur-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4 text-gold" }), "Break the seal"]
					})
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "letter-sheet animate-rise rounded-lg px-6 py-10 sm:px-12 sm:py-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-sans text-xs uppercase tracking-[0.28em] text-muted",
					children: SURPRISE.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 space-y-5 font-display text-lg leading-[1.7] text-ink",
					children: SURPRISE.body.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: p }, p.slice(0, 28)))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-base italic text-muted",
						children: SURPRISE.signOff
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-3xl italic text-wine",
						children: SURPRISE.from
					})]
				})
			]
		})]
	});
}
function Closing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative z-10 px-6 pb-28 pt-4 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "mx-auto size-5 fill-rose text-rose" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 font-display text-2xl italic text-gold-soft",
				children: "May you always be surrounded by people who care about you."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 font-sans text-sm tracking-[0.2em] uppercase text-muted",
				children: "Ameen · Keemi · 2009"
			})
		]
	});
}
function Lightbox({ index, onClose }) {
	const photo = MEMORIES[index];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-50 flex items-center justify-center bg-ink/80 p-4",
		role: "dialog",
		"aria-modal": "true",
		"aria-label": photo.title,
		onClick: onClose,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: onClose,
			className: "absolute right-4 top-4 flex size-11 items-center justify-center rounded-full border border-gold/40 text-paper",
			"aria-label": "Close photo",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
			className: "polaroid max-w-md",
			onClick: (e) => e.stopPropagation(),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: photo.src,
				alt: photo.title,
				className: "aspect-3/4 w-full object-cover"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
				className: "mt-3 px-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-xl italic text-ink",
					children: photo.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 font-sans text-sm text-muted",
					children: photo.caption
				})]
			})]
		})]
	});
}
var KEYS = [
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"",
	"0",
	"del"
];
function LockScreen({ onUnlock }) {
	const [digits, setDigits] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)(false);
	const dots = (0, import_react.useMemo)(() => Array.from({ length: 4 }, (_, i) => i < digits.length), [digits]);
	function press(key) {
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
			if (next === "2009") window.setTimeout(onUnlock, 180);
			else {
				setError(true);
				window.setTimeout(() => {
					setDigits("");
					setError(false);
				}, 520);
			}
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative flex min-h-dvh flex-col items-center justify-center overflow-hidden bg-wine-deep px-5 py-10 text-paper",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/photos/velvet.jpg",
				alt: "",
				className: "pointer-events-none absolute inset-0 h-full w-full object-cover opacity-55"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "vignette pointer-events-none absolute inset-0" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Petals, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: `relative z-10 flex w-full max-w-sm flex-col items-center text-center ${error ? "animate-shake" : "animate-rise"}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mb-6 flex size-16 items-center justify-center rounded-full border border-gold/40 bg-wine/70 text-gold animate-glow",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, {
							className: "size-6",
							strokeWidth: 1.5
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-sans text-xs uppercase tracking-[0.34em] text-gold-soft",
						children: "A private gift"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 font-display text-5xl font-medium tracking-tight text-paper",
						children: "For Eshu"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-xs font-display text-lg italic text-gold-soft",
						children: "Enter the year that opened this door."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 flex gap-3",
						"aria-hidden": true,
						children: dots.map((on, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `size-3.5 rounded-full border border-gold/70 transition-colors ${on ? "bg-gold" : "bg-transparent"}` }, i))
					}),
					error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 font-sans text-sm text-rose",
						children: "Not that year. Try again."
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 h-5 font-sans text-sm text-muted",
						children: "Four numbers. Yours."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid w-full grid-cols-3 gap-3",
						children: KEYS.map((key, i) => key === "" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}, `pad-${i}`) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => press(key),
							className: "flex h-14 items-center justify-center rounded-full border border-gold/25 bg-wine/50 font-sans text-xl text-paper backdrop-blur-sm transition hover:border-gold/70 hover:bg-wine",
							"aria-label": key === "del" ? "Delete" : key,
							children: key === "del" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Delete, { className: "size-5 text-gold-soft" }) : key
						}, `pad-${i}`))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-10 flex items-center gap-2 font-display text-base italic text-gold-soft",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "size-3.5 fill-rose text-rose" }), "from Keemi"]
					})
				]
			})
		]
	});
}
function Petals() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none absolute inset-0 overflow-hidden",
		"aria-hidden": true,
		children: [
			{
				left: "8%",
				delay: "0s",
				duration: "11s",
				drift: "18px",
				gold: false
			},
			{
				left: "22%",
				delay: "2s",
				duration: "13s",
				drift: "-24px",
				gold: true
			},
			{
				left: "41%",
				delay: "0.8s",
				duration: "12s",
				drift: "30px",
				gold: false
			},
			{
				left: "58%",
				delay: "3.4s",
				duration: "14s",
				drift: "-12px",
				gold: true
			},
			{
				left: "73%",
				delay: "1.6s",
				duration: "11.5s",
				drift: "22px",
				gold: false
			},
			{
				left: "88%",
				delay: "4s",
				duration: "15s",
				drift: "-28px",
				gold: true
			}
		].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: `petal ${p.gold ? "gold" : ""}`,
			style: {
				left: p.left,
				animationDelay: p.delay,
				animationDuration: p.duration,
				["--drift"]: p.drift
			}
		}, p.left))
	});
}
function Home() {
	const [unlocked, setUnlocked] = (0, import_react.useState)(false);
	if (!unlocked) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LockScreen, { onUnlock: () => setUnlocked(true) });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GiftHome, {});
}
//#endregion
export { Home as component };
