import { ImageResponse } from "next/og";

export const alt =
  "OTTv — Premium IPTV. 24,000+ channels, 120,000+ movies & series, HD & 4K. From $7.50/mo.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background:
            "linear-gradient(135deg, #0b0e11 0%, #181a20 60%, #1e2329 100%)",
          padding: "72px 80px",
          fontFamily: "system-ui, sans-serif",
          color: "#eaecef",
          position: "relative",
        }}
      >
        {/* Top brand row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              fontSize: 56,
              fontWeight: 800,
              color: "#fcd535",
              letterSpacing: "-0.02em",
            }}
          >
            OTTv
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "10px 18px",
              borderRadius: 999,
              background: "rgba(14, 203, 129, 0.12)",
              border: "1px solid rgba(14, 203, 129, 0.4)",
              color: "#0ecb81",
              fontSize: 22,
              fontWeight: 600,
            }}
          >
            <div
              style={{
                width: 14,
                height: 14,
                borderRadius: 999,
                background: "#0ecb81",
              }}
            />
            <span>4.8/5 · 12,400 reviews</span>
          </div>
        </div>

        {/* Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 60,
            flex: 1,
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: 86,
              fontWeight: 800,
              lineHeight: 1.05,
              color: "#ffffff",
              letterSpacing: "-0.025em",
              maxWidth: 1040,
            }}
          >
            <span>Premium IPTV.&nbsp;</span>
            <span style={{ color: "#fcd535" }}>24,000+ channels&nbsp;</span>
            <span>in HD & 4K.</span>
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 32,
              color: "#929aa5",
              lineHeight: 1.35,
              maxWidth: 980,
            }}
          >
            One subscription, every device, 50+ countries. From $7.50/mo. 7-day
            money-back guarantee.
          </div>
        </div>

        {/* Bottom strip */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: 28,
            borderTop: "1px solid #2b3139",
            fontSize: 24,
            color: "#eaecef",
          }}
        >
          <div style={{ display: "flex", gap: 36 }}>
            <span>120,000+ movies & series</span>
            <span style={{ color: "#2b3139" }}>•</span>
            <span>Activated in 5 min</span>
            <span style={{ color: "#2b3139" }}>•</span>
            <span>No auto-renewal</span>
          </div>
          <div style={{ color: "#fcd535", fontWeight: 700 }}>ottv.org</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
