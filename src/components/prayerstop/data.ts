// ── PrayerStop landing page: content & config ────────────────────────────────
// Everything a release changes (download link, version) lives at the top.

/**
 * Where the "Download" buttons point.
 *
 * Currently the EAS build page for the Android beta. On an Android phone that
 * page offers an "Install" button that downloads the APK. To serve the APK
 * directly instead, drop it in /public/prayerstop/ and change this to e.g.
 * "/prayerstop/PrayerStop-1.0.0.apk".
 */
export const APK_URL =
  "https://expo.dev/accounts/najmanaws/projects/PrayerStop/builds/cde3f430-7b37-479e-8fff-5509b86e5f63";

export const APP_VERSION = "1.0.0";
export const MIN_ANDROID = "Android 7.0 or newer";

export const PAGE_URL = "https://www.ahamedwebstudio.lk/prayerstop";

/** Same number the app's Settings → Feedback & support opens. */
const WA_NUMBER = "94717411188";

export function waLink(text: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}

export const FEEDBACK_LINK = waLink(
  "Assalamu Alaikum, I'm testing the PrayerStop beta and have some feedback:\n\n"
);

export const NAV_LINKS = [
  { href: "#features", label: "Features" },
  { href: "#screenshots", label: "Screenshots" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#faq", label: "FAQ" },
] as const;

export type FeatureIcon =
  | "clock"
  | "target"
  | "car"
  | "calendar"
  | "map"
  | "bell"
  | "navigate"
  | "shield";

export const FEATURES: { icon: FeatureIcon; title: string; body: string }[] = [
  {
    icon: "clock",
    title: "Now or Next",
    body: "Plan for the prayer that's on right now, or switch to the next one and get a time to leave by.",
  },
  {
    icon: "car",
    title: "Live drive times",
    body: "Travel times from Google that account for current traffic, not just distance on a map.",
  },
  {
    icon: "calendar",
    title: "ACJU prayer times",
    body: "Official ACJU timetables for all 13 zones. Your zone is chosen from your location.",
  },
  {
    icon: "map",
    title: "Nearby on a map",
    body: "Mosques within 5 km on one map, with the fastest to reach listed first.",
  },
  {
    icon: "bell",
    title: "Prayer reminders",
    body: "A reminder 10 minutes before each prayer and another when it starts. Turn either off.",
  },
  {
    icon: "navigate",
    title: "One-tap directions",
    body: "Tap Get directions and Google Maps starts navigating to the mosque.",
  },
];

export const SCREENSHOTS = [
  {
    src: "/prayerstop/screenshots/home.webp",
    title: "Home",
    caption: "The current prayer, time left, and today's full timetable.",
  },
  {
    src: "/prayerstop/screenshots/recommendation.webp",
    title: "Best place to pray",
    caption: "The mosque to head to, and whether you'll get there in time.",
  },
  {
    src: "/prayerstop/screenshots/nearby.webp",
    title: "Nearby mosques",
    caption: "Every mosque around you, with live drive times for the closest.",
  },
  {
    src: "/prayerstop/screenshots/settings.webp",
    title: "Settings",
    caption: "Your ACJU zone, reminders, and a direct line for feedback.",
  },
] as const;

export const STEPS = [
  {
    title: "Open PrayerStop",
    body: "It finds where you are and picks the right ACJU prayer zone for you.",
  },
  {
    title: "Choose Now or Next",
    body: "Now plans for the current prayer. Next plans ahead for the one after it.",
  },
  {
    title: "See where to go",
    body: "PrayerStop recommends a mosque and tells you whether you'll make it before the prayer ends.",
  },
  {
    title: "Get directions",
    body: "One tap opens Google Maps with turn-by-turn directions to the mosque.",
  },
];

export const INSTALL_STEPS: { title: string; body: string }[] = [
  {
    title: "Open this page on your Android phone",
    body: "The app installs on the phone itself, so start there rather than on a computer.",
  },
  {
    title: "Tap Download for Android",
    body: "The download page opens. Tap Install there to download the PrayerStop APK file.",
  },
  {
    title: "Open the downloaded file",
    body: "Tap the download notification, or find the file in your Files or Downloads app.",
  },
  {
    title: "Allow installs from your browser",
    body: "If Android asks, tap Settings, turn on Allow from this source, then go back. You only need to do this once.",
  },
  {
    title: "Tap Install",
    body: "If Google Play Protect warns that it doesn't recognise the app, tap More details, then Install anyway. This happens with any app that isn't on the Play Store yet.",
  },
  {
    title: "Open PrayerStop and allow location",
    body: "Location is how it finds your zone and nearby mosques. Allow notifications too if you want prayer reminders.",
  },
];

export const WORKS_TODAY = [
  "Live prayer times for all 13 ACJU zones",
  "Now and Next planning with a live countdown",
  "Recommended mosque with an in-time check",
  "Traffic-aware drive times",
  "Nearby mosques on a map",
  "Prayer reminders",
  "Directions through Google Maps",
];

export const LIMITATIONS = [
  {
    title: "Android only",
    body: "There's no iPhone version yet.",
  },
  {
    title: "Sri Lanka only",
    body: "Prayer times come from ACJU, so the app doesn't show them outside Sri Lanka.",
  },
  {
    title: "Drive times for the closest three",
    body: "Live travel times are checked for the three nearest mosques. Others show straight-line distance.",
  },
  {
    title: "Mosques listed on Google Maps",
    body: "Places come from Google Maps, so some smaller musallahs and prayer rooms may be missing.",
  },
  {
    title: "Prayer start times, not jama'ah times",
    body: "Times follow the ACJU timetable. Each mosque's own jama'ah time isn't shown.",
  },
  {
    title: "Manual updates",
    body: "It isn't on Google Play yet, so new versions are installed from this page.",
  },
];

export const FAQS: { q: string; a: string }[] = [
  {
    q: "Is PrayerStop free?",
    a: "Yes. It's free to download and use, and you don't need to create an account.",
  },
  {
    q: "Where do the prayer times come from?",
    a: "From the official ACJU (All Ceylon Jamiyyathul Ulama) timetables. Sri Lanka is divided into 13 ACJU zones, and PrayerStop picks yours from your location. You can see which zone it's using in Settings.",
  },
  {
    q: "Is it safe to install an APK from outside the Play Store?",
    a: "PrayerStop is built and published by Ahamed Web Studio, and this page is its official download. Only install it from here. Android shows a warning for any app installed outside the Play Store. That's expected, and it's why the install steps above include it.",
  },
  {
    q: "Why does it need my location?",
    a: "To work out your ACJU prayer zone, find mosques near you, and calculate how long it takes to reach them. Without location, it can't recommend a place to pray.",
  },
  {
    q: "Does it show jama'ah times for each mosque?",
    a: "Not yet. PrayerStop uses ACJU prayer start times and the end of each prayer's window. Individual mosques set their own jama'ah times, and those aren't in the app.",
  },
  {
    q: "Is there an iPhone version?",
    a: "Not yet. The beta is Android only.",
  },
  {
    q: "My reminders aren't arriving. What should I check?",
    a: "Make sure notifications are allowed for PrayerStop. Some phones also need Alarms & reminders turned on for the app, and battery optimisation turned off, so reminders can arrive on time.",
  },
  {
    q: "How do I update to a new version?",
    a: "Come back to this page, download the latest version, and install it over the one you have. You don't need to uninstall first.",
  },
  {
    q: "A mosque is missing, or something looks wrong. What do I do?",
    a: "Send it on WhatsApp. Tell us the mosque name or what you saw, and where you were. Reports like these are what the beta is for.",
  },
];
