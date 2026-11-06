import type { Metadata, Viewport } from "next";
import Image from "next/image";
import Link from "next/link";
import { Plus_Jakarta_Sans } from "next/font/google";

import s from "@/components/prayerstop/prayerstop.module.css";
import PsNav from "@/components/prayerstop/PsNav";
import PsFaq from "@/components/prayerstop/PsFaq";
import RevealObserver from "@/components/prayerstop/RevealObserver";
import { PsAppIcon, PsMark } from "@/components/prayerstop/PsLogo";
import {
  ArrowIcon,
  CheckIcon,
  DownloadIcon,
  FeatureGlyph,
  InfoIcon,
  WhatsAppIcon,
} from "@/components/prayerstop/icons";
import {
  APK_URL,
  APP_VERSION,
  FAQS,
  FEATURES,
  FEEDBACK_LINK,
  INSTALL_STEPS,
  LIMITATIONS,
  MIN_ANDROID,
  PAGE_URL,
  SCREENSHOTS,
  STEPS,
  WORKS_TODAY,
} from "@/components/prayerstop/data";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--ps-font",
  display: "swap",
});

const TITLE = "PrayerStop: Find a mosque you can reach in time";
const DESCRIPTION =
  "PrayerStop combines ACJU prayer times, your location and live traffic to show the mosque you can actually reach before the prayer ends. Free Android beta for Sri Lanka.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  applicationName: "PrayerStop",
  // Replaces the studio icons from the root layout, so the tab shows PrayerStop.
  icons: {
    icon: [{ url: "/prayerstop/icon.png", type: "image/png", sizes: "192x192" }],
    apple: [{ url: "/prayerstop/apple-icon.png", sizes: "180x180" }],
  },
  keywords: [
    "PrayerStop",
    "prayer times sri lanka",
    "ACJU prayer times",
    "nearby mosque",
    "mosque finder sri lanka",
    "masjid near me",
    "namaz times colombo",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: "PrayerStop",
    locale: "en_LK",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#F5F8F5",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MobileApplication",
      name: "PrayerStop",
      operatingSystem: `Android (${MIN_ANDROID})`,
      applicationCategory: "LifestyleApplication",
      softwareVersion: APP_VERSION,
      description: DESCRIPTION,
      url: PAGE_URL,
      downloadUrl: APK_URL,
      offers: { "@type": "Offer", price: "0", priceCurrency: "LKR" },
      author: {
        "@type": "Organization",
        name: "Ahamed Web Studio",
        url: "https://www.ahamedwebstudio.lk",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

function DownloadButton({ large = false, light = false }: { large?: boolean; light?: boolean }) {
  return (
    <a
      href={APK_URL}
      target="_blank"
      rel="noopener"
      className={`${s.btn} ${light ? s.btnLight : s.btnPrimary} ${large ? s.btnLg : ""}`}
    >
      <DownloadIcon size={large ? 20 : 18} />
      Download for Android
    </a>
  );
}

function Phone({
  src,
  alt,
  priority = false,
  className = "",
  sizes = "(max-width: 760px) 70vw, 300px",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
}) {
  return (
    <div className={`${s.phone} ${className}`}>
      <Image src={src} alt={alt} width={576} height={1280} priority={priority} sizes={sizes} className={s.phoneImg} />
    </div>
  );
}

function SectionHead({
  id,
  eyebrow,
  title,
  lead,
  center = false,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  lead?: string;
  center?: boolean;
}) {
  return (
    <div className={`${s.sectionHead} ${center ? s.center : ""}`} data-reveal>
      <p className={s.eyebrow}>{eyebrow}</p>
      <h2 id={id} className={s.h2}>
        {title}
      </h2>
      {lead && <p className={s.lead}>{lead}</p>}
    </div>
  );
}

export default function PrayerStopPage() {
  return (
    <div className={`${jakarta.variable} ${s.page}`} id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <RevealObserver />
      <PsNav />

      <main>
        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <section className={s.hero} aria-labelledby="ps-hero-title">
          <div className={`${s.container} ${s.heroGrid}`}>
            <div className={s.heroCopy}>
              <p className={s.heroBadge}>
                <span className={s.liveDot} aria-hidden="true" />
                Android beta · v{APP_VERSION}
              </p>
              <h1 id="ps-hero-title" className={s.h1}>
                Find a mosque you can reach in time.
              </h1>
              <p className={s.heroLead}>
                PrayerStop combines ACJU prayer times, your location and live traffic to show
                you the mosque you can actually get to before the prayer ends.
              </p>
              <div className={s.heroActions}>
                <DownloadButton large />
                <a href="#how-it-works" className={`${s.btn} ${s.btnGhost} ${s.btnLg}`}>
                  How it works
                  <ArrowIcon />
                </a>
              </div>
              <ul className={s.heroMeta}>
                <li>Free</li>
                <li>No account needed</li>
                <li>Made for Sri Lanka</li>
              </ul>
            </div>

            <div className={s.heroVisual}>
              <Phone
                src="/prayerstop/screenshots/nearby.webp"
                alt="PrayerStop Nearby screen: a map of 20 mosques within 5 km, with the three fastest to reach listed below"
                className={s.heroPhoneBack}
                sizes="(max-width: 760px) 0px, 260px"
              />
              <Phone
                src="/prayerstop/screenshots/home.webp"
                alt="PrayerStop Home screen: Maghrib with 58 minutes remaining, today's prayer times, and Masjidul Jennah recommended as reachable in 4 minutes"
                priority
                className={s.heroPhoneFront}
                sizes="(max-width: 760px) 68vw, 300px"
              />
            </div>
          </div>
        </section>

        {/* ── PROBLEM ──────────────────────────────────────────────────── */}
        <section className={`${s.section} ${s.problem}`} aria-labelledby="ps-problem-title">
          <div className={s.container}>
            <div className={s.problemGrid}>
              <div data-reveal>
                <p className={s.eyebrow}>The problem</p>
                <h2 id="ps-problem-title" className={s.h2}>
                  The nearest mosque isn&apos;t always the one you&apos;ll make.
                </h2>
                <p className={s.lead}>
                  When you&apos;re out and a prayer is due, you check the time, search the map,
                  then guess how bad the traffic is. By the time you&apos;ve worked it out,
                  the window is shorter. PrayerStop puts the answer on one screen.
                </p>
              </div>
              <div className={s.compare} data-reveal>
                <div className={s.compareCol}>
                  <p className={s.compareLabel}>Usually</p>
                  <ol className={s.compareList}>
                    <li>Look up today&apos;s prayer times</li>
                    <li>Search the map for nearby mosques</li>
                    <li>Guess which one you can reach in traffic</li>
                    <li>Hope you got it right</li>
                  </ol>
                </div>
                <div className={`${s.compareCol} ${s.compareColGood}`}>
                  <p className={s.compareLabel}>With PrayerStop</p>
                  <div className={s.answerCard}>
                    <span className={s.answerCheck}>
                      <CheckIcon size={18} />
                    </span>
                    <div>
                      <p className={s.answerTitle}>You can make it in time</p>
                      <p className={s.answerSub}>Maghrib ends in 58 min · 4 min away</p>
                    </div>
                  </div>
                  <p className={s.compareNote}>One answer: where to go, and whether you&apos;ll get there.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FEATURES ─────────────────────────────────────────────────── */}
        <section id="features" className={s.section} aria-labelledby="ps-features-title">
          <div className={s.container}>
            <SectionHead
              id="ps-features-title"
              eyebrow="Features"
              title="Everything you need to get to prayer on time"
              lead="PrayerStop does one job: getting you to a place to pray before the prayer ends. Every feature serves that."
              center
            />

            <div className={s.spotlight} data-reveal>
              <div className={s.spotlightCopy}>
                <span className={s.featureIcon}>
                  <FeatureGlyph name="target" />
                </span>
                <h3 className={s.h3}>A recommendation, not a list</h3>
                <p>
                  PrayerStop weighs distance against live drive time and the time left in the
                  prayer window, then picks the most practical mosque. If a slightly farther
                  mosque is quicker to reach in traffic, that&apos;s the one it suggests.
                </p>
                <ul className={s.checkList}>
                  <li><CheckIcon size={16} /> Says if it&apos;s tight, just in time or too late</li>
                  <li><CheckIcon size={16} /> Shows two alternatives nearby</li>
                  <li><CheckIcon size={16} /> Gives a leave-by time when planning for Next</li>
                </ul>
              </div>
              <div className={s.spotlightVisual}>
                <Phone
                  src="/prayerstop/screenshots/best-place.webp"
                  alt="PrayerStop recommendation: Best for Maghrib is Masjidul Jennah, 4 minutes away, marked It's tight, but you can make it. Other nearby mosques are marked Just in time and Too late to reach."
                  sizes="(max-width: 760px) 64vw, 280px"
                />
              </div>
            </div>

            <ul className={s.featureGrid}>
              {FEATURES.map((f) => (
                <li key={f.title} className={s.featureCard} data-reveal>
                  <span className={s.featureIcon}>
                    <FeatureGlyph name={f.icon} />
                  </span>
                  <h3 className={s.h4}>{f.title}</h3>
                  <p>{f.body}</p>
                </li>
              ))}
            </ul>

            <div className={s.privacyNote} data-reveal>
              <span className={s.featureIcon}>
                <FeatureGlyph name="shield" />
              </span>
              <p>
                <strong>No account. No prayer tracking.</strong> PrayerStop doesn&apos;t ask you to
                sign up, and it never tracks whether you&apos;ve prayed.
              </p>
            </div>
          </div>
        </section>

        {/* ── SCREENSHOTS ──────────────────────────────────────────────── */}
        <section id="screenshots" className={`${s.section} ${s.shots}`} aria-labelledby="ps-shots-title">
          <div className={s.container}>
            <SectionHead
              id="ps-shots-title"
              eyebrow="Screenshots"
              title="See it in action"
              lead="Real screens from the current beta, taken in Colombo district."
              center
            />
          </div>
          <div className={s.shotsRail} role="list">
            {SCREENSHOTS.map((sh) => (
              <figure key={sh.src} className={s.shot} role="listitem" data-reveal>
                <Phone src={sh.src} alt={`PrayerStop ${sh.title} screen. ${sh.caption}`} sizes="(max-width: 760px) 66vw, 260px" />
                <figcaption>
                  <strong>{sh.title}</strong>
                  <span>{sh.caption}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ── HOW IT WORKS ─────────────────────────────────────────────── */}
        <section id="how-it-works" className={s.section} aria-labelledby="ps-how-title">
          <div className={s.container}>
            <SectionHead
              id="ps-how-title"
              eyebrow="How it works"
              title="From opening the app to on your way"
              lead="No setup and no searching. Open it when a prayer is due."
              center
            />
            <ol className={s.steps}>
              {STEPS.map((st, i) => (
                <li key={st.title} className={s.step} data-reveal>
                  <span className={s.stepNum}>{String(i + 1).padStart(2, "0")}</span>
                  <h3 className={s.h4}>{st.title}</h3>
                  <p>{st.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── DOWNLOAD & INSTALL ───────────────────────────────────────── */}
        <section id="download" className={`${s.section} ${s.download}`} aria-labelledby="ps-download-title">
          <div className={s.container}>
            <div className={s.downloadGrid}>
              <div className={s.downloadCard} data-reveal>
                <PsAppIcon size={64} className={s.downloadIcon} />
                <p className={s.eyebrowLight}>Download</p>
                <h2 id="ps-download-title" className={`${s.h2} ${s.onDark}`}>
                  Get the PrayerStop beta
                </h2>
                <p className={s.downloadLead}>
                  Free for Android. Install it, use it for a few days, and tell us what you think.
                </p>
                <DownloadButton large light />
                <dl className={s.specs}>
                  <div>
                    <dt>Version</dt>
                    <dd>{APP_VERSION} beta</dd>
                  </div>
                  <div>
                    <dt>Requires</dt>
                    <dd>{MIN_ANDROID}</dd>
                  </div>
                  <div>
                    <dt>Price</dt>
                    <dd>Free</dd>
                  </div>
                  <div>
                    <dt>Coverage</dt>
                    <dd>Sri Lanka</dd>
                  </div>
                </dl>
              </div>

              <div className={s.install} data-reveal>
                <h3 className={s.h3}>How to install</h3>
                <p className={s.installLead}>
                  PrayerStop isn&apos;t on the Play Store yet, so you install it from a file
                  (an APK). It takes about a minute.
                </p>
                <ol className={s.installSteps}>
                  {INSTALL_STEPS.map((st, i) => (
                    <li key={st.title}>
                      <span className={s.installNum}>{i + 1}</span>
                      <div>
                        <p className={s.installTitle}>{st.title}</p>
                        <p className={s.installBody}>{st.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                <p className={s.callout}>
                  <InfoIcon size={18} />
                  <span>
                    <strong>Updating later?</strong> Download the new version from this page and
                    install it over the current one. You don&apos;t need to uninstall first.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── BETA STATUS ──────────────────────────────────────────────── */}
        <section id="beta" className={s.section} aria-labelledby="ps-beta-title">
          <div className={s.container}>
            <SectionHead
              id="ps-beta-title"
              eyebrow="Beta"
              title="What to expect from the beta"
              lead="The core of PrayerStop works today. Some things are still limited, and it's better you know them up front."
            />
            <div className={s.betaGrid}>
              <div className={s.betaCol} data-reveal>
                <h3 className={s.h4}>Works today</h3>
                <ul className={s.worksList}>
                  {WORKS_TODAY.map((w) => (
                    <li key={w}>
                      <CheckIcon size={16} />
                      {w}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={s.betaCol} data-reveal>
                <h3 className={s.h4}>Current limitations</h3>
                <dl className={s.limits}>
                  {LIMITATIONS.map((l) => (
                    <div key={l.title}>
                      <dt>{l.title}</dt>
                      <dd>{l.body}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* ── FEEDBACK ─────────────────────────────────────────────────── */}
        <section className={s.feedbackWrap} aria-labelledby="ps-feedback-title">
          <div className={s.container}>
            <div className={s.feedback} data-reveal>
              <div>
                <p className={s.eyebrowLight}>Feedback</p>
                <h2 id="ps-feedback-title" className={`${s.h2} ${s.onDark}`}>
                  Help shape PrayerStop
                </h2>
                <p className={s.feedbackLead}>
                  Every report from the beta goes straight to the developer. Tell us about:
                </p>
                <ul className={s.feedbackList}>
                  <li>A mosque that&apos;s missing or in the wrong place</li>
                  <li>A prayer time or zone that looks wrong</li>
                  <li>Anything that crashed, froze or confused you</li>
                  <li>What would make it more useful for you</li>
                </ul>
              </div>
              <div className={s.feedbackAction}>
                <a href={FEEDBACK_LINK} target="_blank" rel="noopener noreferrer" className={`${s.btn} ${s.btnLight} ${s.btnLg}`}>
                  <WhatsAppIcon size={20} />
                  Send feedback on WhatsApp
                </a>
                <p className={s.feedbackHint}>Also inside the app: Settings, then Feedback &amp; support.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────── */}
        <section id="faq" className={s.section} aria-labelledby="ps-faq-title">
          <div className={`${s.container} ${s.faqGrid}`}>
            <SectionHead
              id="ps-faq-title"
              eyebrow="FAQ"
              title="Questions, answered"
              lead="Can't find what you need? Ask on WhatsApp."
            />
            <PsFaq />
          </div>
        </section>

        {/* ── FINAL CTA ────────────────────────────────────────────────── */}
        <section className={s.finalCta} aria-labelledby="ps-final-title">
          <div className={`${s.container} ${s.center}`} data-reveal>
            <PsMark size={44} color="#126B46" />
            <h2 id="ps-final-title" className={s.h2}>
              Next time a prayer is due, you&apos;ll know where to go.
            </h2>
            <DownloadButton large />
          </div>
        </section>
      </main>

      <footer className={s.footer}>
        <div className={`${s.container} ${s.footerInner}`}>
          <div className={s.footerBrand}>
            <PsAppIcon size={30} />
            <span className={s.brandName}>PrayerStop</span>
          </div>
          <p className={s.footerText}>
            Developed by{" "}
            <Link href="/" className={s.footerLink}>
              Ahamed Web Studio
            </Link>
          </p>
          <p className={s.footerText}>© {new Date().getFullYear()} Ahamed Web Studio</p>
        </div>
      </footer>
    </div>
  );
}
