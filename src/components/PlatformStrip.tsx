import Image from "next/image";

const platforms = [
  { src: "/platform-logo-tizen.png",     alt: "Samsung Smart TV — Tizen",        w: 80,  h: 20 },
  { src: "/platform-logo-webos.png",     alt: "LG Smart TV — webOS",             w: 84,  h: 22 },
  { src: "/platform-logo-androidtv.png", alt: "Android TV & Google TV",          w: 108, h: 34 },
  { src: "/platform-logo-tvos.png",      alt: "Apple TV — tvOS",                 w: 62,  h: 34 },
  { src: "/platform-logo-firetv.png",    alt: "Amazon Fire TV & Firestick",      w: 64,  h: 34 },
  { src: "/platform-logo-ios.png",       alt: "iPhone & iPad — iOS",             w: 74,  h: 34 },
  { src: "/platform-logo-android.png",   alt: "Android phone & tablet",          w: 32,  h: 34 },
  { src: "/platform-logo-settopbox.png", alt: "IPTV set-top box — MAG, Enigma2", w: 99,  h: 34 },
  { src: "/platform-logo-html5.png",     alt: "Any web browser — HTML5",         w: 29,  h: 34 },
  { src: "/platform-logo-more.png",      alt: "And more IPTV-capable devices",   w: 84,  h: 34 },
];

export default function PlatformStrip() {
  return (
    <section
      aria-label="Compatible IPTV devices and platforms"
      className="border-b border-[#2b3139]"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-10 md:py-14">
        <p className="eyebrow text-center mb-7 md:mb-9">
          Works on every IPTV-capable device — no extra hardware
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 md:gap-x-12 lg:gap-x-14">
          {platforms.map((p) => (
            <li
              key={p.src}
              className="opacity-55 hover:opacity-100 transition-opacity duration-200"
            >
              <Image
                src={p.src}
                alt={p.alt}
                width={p.w}
                height={p.h}
                unoptimized
                className="h-6 md:h-8 w-auto select-none"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
