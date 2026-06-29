import CountUp from './CountUp';

const TIKTOK_ITEMS = [
  {
    id: 1,
    image: 'images/tiktok-1.webp',
    label: 'tiktok 1',
    href: ''
  },
  {
    id: 2,
    image: 'images/tiktok-2.webp',
    label: 'tiktok 2',
    href: ''
  },
  {
    id: 3,
    image: 'images/tiktok-3.webp',
    label: 'tiktok 3',
    href: ''
  },
  {
    id: 4,
    image: 'images/tiktok-4.webp',
    label: 'tiktok 4',
    href: ''
  },
  {
    id: 5,
    image: 'images/tiktok-5.webp',
    label: 'tiktok 5',
    href: ''
  },
  {
    id: 6,
    image: 'images/tiktok-6.webp',
    label: 'tiktok 6',
    href: ''
  }
];

export default function TikTok() {
  const handleLinkClick = (url) => {
    if (!url) return;
    window.open(url, '_blank', 'noopener noreferrer');
  };

  return (
    <section className="band tiktok-band" id="tiktok">
      <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>
        <p className="kicker reveal"><span className="idx">01</span>the flagship</p>

        <h2 className="title reveal">
          Making Math<span className="sub">Go Viral.</span>
        </h2>

        <p className="lead reveal">
          My educational math channel - where I take topics most people scroll past and turn them
          into long-form videos that are genuinely fun to watch. It's the clearest proof of the one thing I'm good at:
          making people care, fast.
        </p>

        <div className="tiktok-stats reveal-stagger reveal" data-countgroup="true">
          <div className="tstat">
            <CountUp target={13.4} suffix="M+" />
            <span className="lbl">video views</span>
          </div>

          <div className="tstat">
            <CountUp target={15} suffix="K+" />
            <span className="lbl">followers</span>
          </div>

          <div className="tstat">
            <CountUp target={800} suffix="K+" />
            <span className="lbl">likes</span>
          </div>

          <div className="tstat">
            <CountUp target={100} suffix="K+" />
            <span className="lbl">hrs watched</span>
          </div>
        </div>

        <div
          className="tiktok-frames reveal-stagger reveal"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: '1.2rem',
            maxWidth: '720px',
            alignItems: 'start'
          }}
        >
          {TIKTOK_ITEMS.map((item, index) => {
            const frameColors = ['pink r-2', 'blue r2', 'green r-3', 'yellow r2', 'pink r-2', 'blue r2'];
            const fpClasses = ['fp1', 'fp3', 'fp2', 'fp4', 'fp1', 'fp3'];

            return (
              <div
                key={item.id}
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
            );
          })}

          <span
            className="anno purple tiktok-anno"
            style={{
              gridColumn: '1 / -1',
              justifySelf: 'end',
              marginTop: '0.4rem'
            }}
          >
            real videos{' '}
            <svg className="arrow" viewBox="0 0 40 40" aria-hidden="true">
              <path d="M6 6 C 20 8, 32 16, 30 32 M30 32 L 36 24 M30 32 L 22 28" />
            </svg>
          </span>
        </div>

        <a
          href="https://www.tiktok.com/@anhlontrivo"
          target="_blank"
          rel="noopener noreferrer"
          className="tiktok-cta reveal"
        >
          watch on TikTok → @anhlontrivo
        </a>

        <p className="tiktok-lesson reveal">
          "attention is engineered, never lucky - hook, tension, release."
        </p>
      </div>
    </section>
  );
}