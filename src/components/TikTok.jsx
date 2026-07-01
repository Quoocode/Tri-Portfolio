import { useState } from 'react';
import CountUp from './CountUp';
import TikTokDataMap from './TikTokDataMap';

const TIKTOK_ITEMS = [
  {
    id: 1,
    image: 'images/tiktok-1.webp',
    label: 'tiktok 1',
    note: 'Anh Lon Tri Vo',
    noteClass: 'note-top-left',
    href: 'https://www.tiktok.com/@anhlontrivo'
  },
  {
    id: 2,
    image: 'images/tiktok-2.webp',
    label: 'tiktok 2',
    note: "School's official TikTok",
    noteClass: 'note-top-right',
    href: 'https://www.tiktok.com/@ptnk.vnuhcm'
  },
  {
    id: 3,
    image: 'images/tiktok-3.webp',
    label: 'tiktok 3',
    note: 'Class Chaos',
    noteClass: 'note-right',
    href: 'https://www.tiktok.com/@telono2326'
  },
  {
    id: 4,
    image: 'images/tiktok-4.webp',
    label: 'tiktok 4',
    note: 'My persona at school',
    noteClass: 'note-left',
    href: 'https://www.tiktok.com/@anhlontaikhieu'
  },
  {
    id: 5,
    image: 'images/tiktok-5.webp',
    label: 'tiktok 5',
    note: 'Ocean Education',
    noteClass: 'note-bottom-left',
    href: 'https://www.tiktok.com/@oceaneducationgovap'
  },
  {
    id: 6,
    image: 'images/tiktok-6.webp',
    label: 'tiktok 6',
    note: 'my professional career',
    noteClass: 'note-bottom-right',
    href: 'https://www.tiktok.com/@trivooed'
  }
];

export default function TikTok() {
  const [showDataMap, setShowDataMap] = useState(false);

  const handleLinkClick = (url) => {
    if (!url) return;
    window.open(url, '_blank', 'noopener noreferrer');
  };

  return (
    <section className="band tiktok-band" id="tiktok">
      <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>
        <p className="kicker reveal">
          <span className="idx">03</span>My Tiktok
        </p>

        <h2 className="title reveal">
          Making Math<span className="sub">Go Viral.</span>
        </h2>

        <p className="lead reveal">
          My educational math channel - where I take topics most people scroll past and turn them
          into long-form videos that are genuinely fun to watch. It's the clearest proof of the one thing I'm good at:
          making people care, fast.
        </p>

        <div className="tiktok-proof reveal">
          <div className="tiktok-proof__head">
            <div>
              <h3>
                {showDataMap ? 'the data behind the growth' : 'the headline numbers'}
              </h3>

              <p>
                {showDataMap
                  ? 'A handmade map built from the TikTok overview data.'
                  : 'The fast-read version of the channel.'}
              </p>
            </div>

            <button
              type="button"
              className="tiktok-switch-btn"
              onClick={() => setShowDataMap((prev) => !prev)}
            >
              {showDataMap ? '← back to stats' : 'view data map →'}
            </button>
          </div>

          {showDataMap ? (
            <TikTokDataMap />
          ) : (
            <div className="tiktok-stats" data-countgroup="true">
              <div className="tstat">
                <CountUp target={13.5} suffix="M+" />
                <span className="lbl">video views</span>
              </div>

              <div className="tstat">
                <CountUp target={17} suffix="K+" />
                <span className="lbl">followers</span>
              </div>

              <div className="tstat">
                <CountUp target={800} suffix="K+" />
                <span className="lbl">likes</span>
              </div>

              <div className="tstat">
                <CountUp target={20} suffix="K+" />
                <span className="lbl">hrs watched</span>
              </div>
            </div>
          )}
        </div>

        <div className="tiktok-frames tiktok-frames--six reveal-stagger reveal">
          {TIKTOK_ITEMS.map((item, index) => {
            const frameColors = [
              'pink r-2',
              'blue r2',
              'green r-3',
              'yellow r2',
              'pink r-2',
              'blue r2'
            ];

            const fpClasses = [
              'fp1',
              'fp3',
              'fp2',
              'fp4',
              'fp1',
              'fp3'
            ];

            return (
              <div className="tiktok-tile" key={item.id}>
                <div
                  className={`frame ${frameColors[index]}`}
                  onClick={() => handleLinkClick(item.href)}
                  style={{
                    cursor: item.href ? 'pointer' : 'default',
                    width: '100%',
                    aspectRatio: '1 / 1'
                  }}
                >
                  <div className={`ph ${fpClasses[index]}`}>
                    <img
                      src={item.image}
                      alt={item.label}
                      loading="lazy"
                      onError={(e) => e.target.remove()}
                      style={{
                        objectFit: 'cover',
                        objectPosition: 'center'
                      }}
                    />

                    <span>{item.label}</span>

                    {item.href && (
                      <div className="ext-badge" aria-hidden="true">
                        ↗
                      </div>
                    )}
                  </div>
                </div>

                <div className={`tiktok-img-note ${item.noteClass}`}>
                  <span>{item.note}</span>

                  <svg className="note-arrow" viewBox="0 0 70 50" aria-hidden="true">
                    <path d="M7 8 C 28 4, 48 15, 57 34 M57 34 L 47 30 M57 34 L 53 24" />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>

        <a
          href="https://www.tiktok.com/@anhlontrivo"
          target="_blank"
          rel="noopener noreferrer"
          className="tiktok-cta reveal"
        >
          CHECK OUT MY TIKTOK → @anhlontrivo
        </a>

        <p className="tiktok-lesson reveal">
          "attention is engineered, never luck - hook, buildup, post."
        </p>
      </div>
    </section>
  );
}