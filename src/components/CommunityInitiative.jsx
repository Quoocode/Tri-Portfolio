import FrameImage from './FrameImage';

const COMMUNITY_ITEMS = [
  {
    id: 1,
    image: 'images/community-1.webp',
    alt: 'biology guest',
    caption: 'biology',
    note: 'biology',
    noteClass: 'community-note-top'
  },
  {
    id: 2,
    image: 'images/community-2.webp',
    alt: 'english guest',
    caption: 'english',
    note: 'english',
    noteClass: 'community-note-bottom'
  },
  {
    id: 3,
    image: 'images/community-3.webp',
    alt: 'literature guest',
    caption: 'literature',
    note: 'literature',
    noteClass: 'community-note-top'
  },
  {
    id: 4,
    image: 'images/community-4.webp',
    alt: 'math guest',
    caption: 'math',
    note: 'math',
    noteClass: 'community-note-bottom'
  },
  {
    id: 5,
    image: 'images/community-5.webp',
    alt: 'alumni guest',
    caption: 'alumni',
    note: 'alumni',
    noteClass: 'community-note-top'
  },
  {
    id: 6,
    image: 'images/community-6.webp',
    alt: 'chemistry guest',
    caption: 'chemistry',
    note: 'chemistry',
    noteClass: 'community-note-bottom'
  }
];

export default function CommunityInitiative({ onImageClick }) {
  return (
    <section className="band community-band" id="community">
      <div className="wrap">
        <p className="kicker reveal">
          <span className="idx">04</span>the community initiative
        </p>

        <h2 className="title reveal">
          The Real Gifted<span className="sub">Experience</span>
        </h2>

        <p className="lead reveal community-lead">
          Before the high-stakes PTNK entrance exam, I hosted a series of live-streamed
          talks with guests from different specialized classes (Math, Literature,
          Biology, English,...). Instead of heavy academic stress, we gave future
          students a real, transparent look into life at a gifted school. It’s proof
          of my ability to build community and spark engagement: turning an exclusive
          world into relatable content that people care about.
        </p>

        <div className="community-highlight reveal">
          averaging <b>500+ concurrent viewers</b> and <b>10+ guest speakers</b>
        </div>

        <div className="community-strip reveal-stagger reveal">
          {COMMUNITY_ITEMS.map((item, index) => {
            const frameColors = [
              'green r-2',
              'blue r2',
              'pink r-2',
              'yellow r2',
              'blue r-2',
              'green r2'
            ];

            return (
              <div className="community-tile" key={item.id}>
                <div className={`frame community-frame ${frameColors[index]}`}>
                  <FrameImage
                    src={item.image}
                    alt={item.alt}
                    caption={item.caption}
                    onImageClick={onImageClick}
                  />
                </div>

                <div className={`community-note ${item.noteClass}`}>
                  <span>{item.note}</span>
                  <svg className="community-note-arrow" viewBox="0 0 70 50" aria-hidden="true">
                    <path d="M7 8 C 28 4, 48 15, 57 34 M57 34 L 47 30 M57 34 L 53 24" />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}