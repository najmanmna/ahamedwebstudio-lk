import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "PrayerStop: Find a mosque you can reach in time. Free Android beta for Sri Lanka.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const pub = join(process.cwd(), "public", "prayerstop");
  const [icon, home] = await Promise.all([
    readFile(join(pub, "app-icon-512.png")),
    readFile(join(pub, "og-home.png")),
  ]);
  const iconSrc = `data:image/png;base64,${icon.toString("base64")}`;
  const homeSrc = `data:image/png;base64,${home.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#F5F8F5",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 0 0 80px", width: 720 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <img src={iconSrc} width={84} height={84} style={{ borderRadius: 20 }} alt="" />
            <div style={{ fontSize: 46, fontWeight: 800, color: "#17231E", letterSpacing: -1 }}>PrayerStop</div>
          </div>
          <div style={{ marginTop: 44, fontSize: 64, fontWeight: 800, color: "#17231E", lineHeight: 1.05, letterSpacing: -2 }}>
            Find a mosque you can reach in time.
          </div>
          <div style={{ marginTop: 28, fontSize: 28, color: "#66736C", lineHeight: 1.4 }}>
            ACJU prayer times, nearby mosques and live drive times in one app.
          </div>
          <div style={{ marginTop: 40, display: "flex" }}>
            <div
              style={{
                display: "flex",
                background: "#126B46",
                color: "#fff",
                fontSize: 26,
                fontWeight: 700,
                padding: "14px 28px",
                borderRadius: 999,
              }}
            >
              Free Android beta · Sri Lanka
            </div>
          </div>
        </div>
        <div style={{ display: "flex", flex: 1, justifyContent: "center", paddingTop: 70, background: "#E3F2EB" }}>
          <div style={{ display: "flex", padding: 9, background: "#0F1A15", borderRadius: 44, height: 640 }}>
            <img src={homeSrc} width={288} height={640} style={{ borderRadius: 36 }} alt="" />
          </div>
        </div>
      </div>
    ),
    size
  );
}
