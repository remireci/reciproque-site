/**
 * Media used on both software-development pages.
 *
 * Put approved files in the Next.js public/projects/ directory, then
 * replace undefined with the public URL (which starts with /projects/).
 *
 * Examples:
 *   breeze: { kind: "video", src: "/projects/breeze-demo.mp4", poster: "/projects/breeze-poster.webp" },
 *   artNow: { kind: "image", src: "/projects/artnow-map.webp" },
 *
 * Either project can use kind: "video" or kind: "image".
 * If src is absent, only local development shows a placement guide;
 * the production site displays no empty media box.
 */
type MediaSettings = {
  kind: "video" | "image";
  src?: string;
  poster?: string;
};

export const projectMedia: {
  breeze: MediaSettings;
  artNow: MediaSettings;
} = {
  breeze: { kind: "video" },
  artNow: { kind: "image" },
};
