import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export const alt =
  "Reciproque — Assistance informatique, réseaux professionnels, logiciels et automatisation";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "65px 75px",
        backgroundColor: "#f8f9f7",
        color: "#172d29",
        fontFamily: "sans-serif",
      }}
    >
      {/* HEADER */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 42,
            fontWeight: 700,
            letterSpacing: -2,
            color: "#115e59",
          }}
        >
          reciproque
          <span style={{ color: "#0d9488" }}>.</span>
        </div>

        <div
          style={{
            fontSize: 21,
            color: "#64748b",
          }}
        >
          Bertrix et environs
        </div>
      </div>

      {/* MAIN MESSAGE */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 25,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 64,
            fontWeight: 700,
            letterSpacing: -2,
            lineHeight: 1.12,
          }}
        >
          <div>L&apos;informatique, du quotidien</div>
          <div>aux projets les plus ambitieux.</div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 27,
            color: "#475569",
          }}
        >
          Assistance · Réseaux · Logiciels & automatisation
        </div>
      </div>

      {/* FOOTER */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "2px solid #dce7e1",
          paddingTop: 23,
          fontSize: 21,
          color: "#52625d",
        }}
      >
        <span>Particuliers · Indépendants · Entreprises</span>
        <span>reciproque.eu</span>
      </div>
    </div>,
    size,
  );
}
