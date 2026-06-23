import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#09090b",
        color: "white",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 80,
      }}
    >
      <div style={{ fontSize: 80, fontWeight: 700 }}>RECIPROQUE</div>

      <div style={{ fontSize: 40, marginTop: 20 }}>
        Real-Time Web Applications
      </div>

      <div style={{ fontSize: 40 }}>& Automated Data Pipelines</div>
    </div>,
    size,
  );
}
