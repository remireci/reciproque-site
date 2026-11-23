import Image from "next/image";

type Props = {
  /** Public URL, for example /projects/breeze-demo.mp4 or /projects/artnow-map.webp. */
  src?: string;
  /** "video" for MP4/WebM, "image" for a screenshot. */
  kind: "video" | "image";
  /** Alt text for screenshots, or description of the video placeholder. */
  alt: string;
  /** Optional preview frame, e.g. /projects/breeze-poster.webp. */
  poster?: string;
  /** Short explanatory text shown beneath an added image or video. */
  caption?: string;
  language?: "en" | "fr";
};

/**
 * A portfolio media slot shared by the English and French software pages.
 *
 * To publish a video or image:
 * 1. Put the file under public/projects/ in your Next.js app.
 * 2. Set the appropriate src in the corresponding software page.
 * 3. For videos, you can also provide a poster image.
 *
 * With no src: a placement guide appears in development, while nothing
 * is rendered in production. This avoids broken or unfinished portfolio
 * blocks on the live website before your actual footage is available.
 */
export default function ProjectMedia({
  src,
  kind,
  alt,
  poster,
  caption,
  language = "en",
}: Props) {
  if (!src && process.env.NODE_ENV === "production") return null;

  return (
    <figure className="mt-8 max-w-4xl overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50">
      <div className="relative aspect-video bg-zinc-950">
        {src ? (
          kind === "video" ? (
            <video
              controls
              playsInline
              preload="metadata"
              poster={poster}
              className="h-full w-full object-contain"
              aria-label={alt}
            >
              <source src={src} />
              {language === "fr"
                ? "Votre navigateur ne prend pas en charge cette vidéo."
                : "Your browser does not support this video."}
            </video>
          ) : (
            <Image
              src={src}
              fill
              sizes="(max-width: 768px) 100vw, 896px"
              alt={alt}
              className="object-contain"
            />
          )
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-3 px-6 text-center">
            <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs uppercase tracking-widest text-teal-400">
              {language === "fr" ? "Emplacement média" : "Media slot"}
            </span>
            <p className="max-w-md text-base font-medium text-zinc-300">
              {alt}
            </p>
            <p className="text-xs text-zinc-500">
              {language === "fr"
                ? "Ajoutez une vidéo ou une capture d’écran dans public/projects/."
                : "Add a video or screenshot to public/projects/."}
            </p>
          </div>
        )}
      </div>
      {src && caption && (
        <figcaption className="border-t border-zinc-800 px-5 py-3 text-xs text-zinc-400">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
