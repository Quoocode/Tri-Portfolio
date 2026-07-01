import { useState } from 'react';
import FrameImage from './FrameImage';

const PROJECTS = [
  {
    id: 1,
    title: '"Thước Phim Tuổi Học Trò"',
    badge: '★ 1st place',
    role: 'project manager · director of photography',
    image: '/images/film.webp',
    caption: 'the film',
    annotation: '1st place!',
    annotationColor: 'green',
    href: 'https://youtu.be/3KpxeV_SI2w',
    cta: '▶ Watch on YouTube',
    frameClass: 'blue r2',
    fpClass: 'fp3',
    prose: (
      <>
        <p>
          For Vietnamese Teachers' Day, I led our class's tribute film against entries
          from <b>30+ classes</b>. On set, I wore two hats: acting as the ultimate
          hype-man to keep everyone’s energy high, while stepping up as the DOP to
          capture the right shots. Once filming wrapped, I quietly handled the heavy
          lifting behind the scenes—taking care of the editing, color grading, and
          sound design myself to make sure our classmates' collective memories shined
          brightest.
        </p>

        <p>
          Everyone contributed, yet the final cut looked like one hand made it. We took{' '}
          <b>First Place (Giải Nhất)</b> school-wide.
        </p>
      </>
    ),
    tags: [
      <span key="t1">1st of 30+ classes</span>,
      <span key="t2">PM + DOP</span>,
      <span key="t3">class unification</span>
    ],
    lesson: 'Great media is collective energy held together by one clear vision.'
  },
  {
    id: 2,
    title: 'Reviving a club\'s whole presence',
    badge: '↑ 300%',
    role: 'head of media · PTNK Badminton Club',
    image: '/images/badminton.webp',
    caption: 'PTNK BADMINTON CLUB',
    annotation: '+300% growth →',
    annotationColor: 'blue',
    href: 'https://www.facebook.com/ptnkbadmintonclub',
    cta: 'View on Facebook ↗',
    frameClass: 'yellow r-4',
    fpClass: 'fp4',
    prose: (
      <>
        <p>
          Inheriting the <b>PTNK Badminton Club (PBaC)</b> with post engagement
          hovering under 20 views, I knew it needed a structural overhaul. I
          rebranded its visual identity from scratch and decided to try out the{' '}
          <b>two-way communication model</b>. By synchronizing a fixed content
          calendar with club training and member spotlights, this experiment paid
          off, driving a <b>300% surge</b> in followers and delivering a
          record-breaking recruitment season with <b>over 80 members</b> joining
          our first generation.
        </p>

        <p>
          Then I ran the full media timeline for "Thundera", a regional tournament
          with <b>200+ participants</b> co-hosted with Bùi Thị Xuân and Nguyễn Thị
          Minh Khai - teasers, live coverage, sponsor cross-promo - closing the
          term at 20,000+ reach.
        </p>
      </>
    ),
    tags: [
      <span key="t1">Rebrand</span>,
      <span key="t2">two-way communication model</span>,
      <span key="t3">"Thundera" 200+ participants</span>
    ],
    lesson: 'Long-term engagement comes from consistent planning and truly understanding your audience, not just posting spontaneously.'
  },
  {
    id: 3,
    title: 'GSALCTLN Charity Concert',
    badge: '♥ charity concert',
    role: 'head of organizing committee',
    image: '/images/gsalctln.webp',
    caption: 'GSALCTLN',
    annotation: '7M VND raised',
    annotationColor: 'purple',
    href: 'https://www.facebook.com/share/p/17Ytg231gt/',
    cta: 'View on Facebook ↗',
    frameClass: 'pink r2',
    fpClass: 'fp1',
    prose: (
      <>
        <p>
          I led our class to become the <b>first-ever class</b> in our school’s history
          to pitch, organize, and execute a campus-wide Christmas charity concert{' '}
          <b>(GSALCTLN)</b> from end to end. Leading up to the event, I drove the
          marketing strategy and a week-long 'lucky ticket' fundraiser, securing{' '}
          <b>5M VND</b> in corporate sponsorship. On the night, I coordinated the
          stage, audio-visual, and lighting logistics, while structuring cross-club
          food-stall partnerships with 100% of profits going to the cause.
        </p>

        <p>
          We raised <b>7M VND total</b> - audited and donated in full to Mái Ấm
          Thiên Thần (District 9).
        </p>
      </>
    ),
    tags: [
      <span key="t1">7M VND raised &amp; donated</span>,
      <span key="t2">head organiser</span>,
      <span key="t3">class unification</span>
    ],
    lesson: 'True social impact requires an entrepreneurial mindset and solid execution—good intentions alone are never enough.'
  },
  {
    id: 4,
    title: 'Building a math program from scratch',
    badge: 'free classes',
    role: 'head of advanced math · The LAB',
    image: '/images/lab.webp',
    caption: 'masterclass',
    href: 'https://www.facebook.com/profile.php?id=61567065251602',
    cta: 'View on Facebook ↗',
    frameClass: 'green r-2',
    fpClass: 'fp2',
    prose: (
      <>
        <p>
          I was invited to design the advanced mathematics program track for{' '}
          <b>The LAB</b>—an initiative hosted by <b>Ben Lippen School (USA)</b>—which
          supports middle-schoolers in Vietnam preparing for specialized school entrance
          exams and regional / international math competitions. I built the modules,
          mock papers, and a progress-tracking system from scratch, then ran free online
          masterclasses that attracted hundreds of registrations, alongside a weekly
          'Math Hack of the Week' series to keep student curiosity high.
        </p>
      </>
    ),
    tags: [
      <span key="t1">math program</span>,
      <span key="t2">hundreds enrolled</span>,
      <span key="t3">free masterclasses</span>
    ],
    lesson: 'Designing a high-impact program is like engineering a product; it requires balancing detailed system tracking with content that sparks genuine curiosity.'
  },
  {
    id: 5,
    title: 'Champion of the school league',
    badge: '🏆 champion',
    role: 'main striker · PTNK Football (Interdisciplinary Mathematics - Te Lo No team)',
    image: '/images/football.webp',
    caption: 'school champions',
    annotation: 'school champions →',
    annotationColor: 'green',
    href: 'https://drive.google.com/drive/folders/1KJL920AnXWk4jdHJig54x533dOMeNyf_',
    cta: 'View the album ↗',
    frameClass: 'blue r-2',
    fpClass: 'fp3',
    prose: (
      <>
        <p>
          The PTNK Sports League is the school's biggest annual competition, and squad
          selection is on merit, not signup - I was picked as the <b>main striker</b>{' '}
          for the Interdisciplinary Mathematics <b>(Te Lo No)</b> team on the strength
          of my training and tactical reliability.
        </p>

        <p>
          Across three years we grew up together: an inexperienced roster took a
          surprise <b>3rd</b> in the Thủ Đức bracket in Grade 10; we reached the{' '}
          <b>quarterfinals</b> in Grade 11; and in Grade 12, at full maturity, we won
          the <b>School Championship</b> with a decisive final over 11 Toán-LN1.
        </p>
      </>
    ),
    tags: [
      <span key="t1">main striker</span>,
      <span key="t2">3 years - 3 levels</span>,
      <span key="t3">school champions</span>
    ],
    lesson: 'real teams are built on discipline and communication - not just talent.'
  },
  {
    id: 6,
    title: 'Producing music for a band',
    badge: '🎵 producer',
    role: '"NGAT" band producer',
    image: '/images/ngat.webp',
    caption: 'NGẮT BAND',
    annotation: 'we make songs →',
    annotationColor: 'purple',
    href: 'https://www.facebook.com/profile.php?id=61560084032822',
    cta: 'View on Facebook ↗',
    frameClass: 'pink r2',
    fpClass: 'fp1',
    prose: (
      <>
        <p>
          As the music producer for the band <b>Ngắt</b>, I shape our arrangements,
          sound design, and emotional pacing. This creative playground directly forged
          my instincts behind the editing desk. My sharpest skills as a video editor—
          knowing exactly when to cut, shift momentum, or hold a frame—were meticulously
          trained right here, proving that audio and video timelines are governed by the
          exact same laws of rhythm.
        </p>
      </>
    ),
    tags: [
      <span key="t1">arrangement</span>,
      <span key="t2">sound design</span>,
      <span key="t3">emotional pacing</span>
    ],
    lesson: "A great story isn't just seen or heard; it is felt through the seamless synchronization of melodic pacing and visual cuts."
  },
  {
    id: 7,
    title: 'Director of Strategic Communications',
    badge: '📣 comms',
    role: 'deputy head of communications · Ocean Education',
    image: '/images/ocean.webp',
    caption: 'OCEAN EDUCATION',
    links: [
      {
        label: 'View on Facebook ↗',
        href: 'https://www.facebook.com/TTOceanEducation'
      },
      {
        label: 'View on TikTok ↗',
        href: 'https://www.tiktok.com/@trivooed?_r=1&_t=ZS-97cc6ez6DeD'
      }
    ],
    frameClass: 'green r-2',
    fpClass: 'fp2',
    prose: (
      <>
        <p>
          Invited by my Mathematics teacher to be Deputy Head of Communications at{' '}
          <b>Ocean Education</b>, I led content campaigns tailored to student and
          parent needs. This strategic outreach successfully drove over{' '}
          <b>300 enrollments</b> among various programs of our center.
        </p>
      </>
    ),
    tags: [
      <span key="t1">education center</span>,
      <span key="t2">300+ enrollments</span>,
      <span key="t3">brand</span>
    ],
    lesson: 'Strategic communication is not about selling; it is about analyzing audience needs to deliver measurable, real-world growth, thereby transforming a service into a developing community.'
  },
  {
    id: 8,
    title: 'Repping the school on TikTok',
    badge: '▶ top contributor',
    role: 'team manager & top contributor · PTNK TikTok Team',
    image: '/images/tiktokteam.webp',
    caption: 'tiktok team',
    frameClass: 'blue r2',
    fpClass: 'fp3',
    href: 'https://www.tiktok.com/@ptnk.vnuhcm?_r=1&_t=ZS-97ccmT8atMW',
    cta: 'View on Tiktok ↗',
    prose: (
      <>
        <p>
          Gathered by the school’s Head of Communications - Mr. Pham Cong Danh,
          I collaborated with a talented team to build the first and official PTNK
          TikTok channel from scratch. Starting as an editor and model, I continuously
          sharpened my skills, evolving into the school's official brand ambassador
          and leading digital campaigns that elevated our institutional identity.
          We secured over 18 thousand followers, driving over <b>2 million views</b>{' '}
          and transformed our digital presence into the school’s most influential
          community platform.
        </p>
      </>
    ),
    tags: [
      <span key="t1">school content</span>,
      <span key="t2">short-form</span>,
      <span key="t3">audience growth</span>
    ],
    lesson: 'High-impact content is born at the intersection of backend creative precision and frontend authentic engagement.'
  }
];

export default function Projects({ onImageClick }) {
  const [imageRatios, setImageRatios] = useState({});

  const handleRatioLoad = (projectId, ratio) => {
    setImageRatios((prev) => {
      if (prev[projectId] === ratio) return prev;

      return {
        ...prev,
        [projectId]: ratio
      };
    });
  };

  return (
    <section className="band" id="projects">
      <div className="wrap">
        <p className="kicker reveal">
          <span className="idx">02</span>my projects
        </p>

        <h2 className="title reveal">
          Stuff I put<span className="sub">on screen</span>
        </h2>

        <p className="lead reveal">
          The work where I actually learned how to reach people—not just blending into a
          crowd, but learning what it takes to <b>build and lead a community</b>.
        </p>

        <div
          style={{ marginTop: 'clamp(2rem, 5vw, 3rem)' }}
          className="reveal-stagger reveal"
        >
          {PROJECTS.map((proj) => {
            const externalLinks = proj.links || (
              proj.href && proj.cta
                ? [{ label: proj.cta, href: proj.href }]
                : []
            );

            const hasExternalLinks = externalLinks.length > 0;

            const openImage = () => {
              if (onImageClick) {
                onImageClick(proj.image, proj.caption);
              }
            };

            return (
              <article className="proj reveal" key={proj.id}>
                <div className="proj__media">
                  <div
                    className={`frame ${proj.frameClass}`}
                    style={{
                      aspectRatio: imageRatios[proj.id] || '4 / 3'
                    }}
                  >
                    <div
                      className={`ph ${proj.fpClass}`}
                      onClick={openImage}
                      style={{ cursor: 'zoom-in' }}
                    >
                      <FrameImage
                        src={proj.image}
                        caption={proj.caption}
                        onImageClick={onImageClick}
                        onRatioLoad={(ratio) => handleRatioLoad(proj.id, ratio)}
                      />

                      {hasExternalLinks && (
                        <button
                          type="button"
                          className="ext-badge"
                          aria-label="Open image preview"
                          onClick={(e) => {
                            e.stopPropagation();
                            openImage();
                          }}
                          style={{
                            cursor: 'zoom-in',
                            border: 0
                          }}
                        >
                          ↗
                        </button>
                      )}
                    </div>
                  </div>

                  {externalLinks.length > 0 && (
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '0.15rem',
                        marginTop: '0.2rem'
                      }}
                    >
                      {externalLinks.map((link, idx) => (
                        <div
                          key={idx}
                          className="proj-cta"
                          onClick={() => window.open(link.href, '_blank', 'noopener noreferrer')}
                          style={{ cursor: 'pointer' }}
                        >
                          {link.label}
                        </div>
                      ))}
                    </div>
                  )}

                  {proj.annotation && (
                    <span className={`anno ${proj.annotationColor}`}>
                      {proj.annotation}
                    </span>
                  )}
                </div>

                <div>
                  <div className="proj__role">{proj.role}</div>

                  <h3>
                    {proj.title} <span className="v">{proj.badge}</span>
                  </h3>

                  <div className="prose">{proj.prose}</div>

                  <ul className="tags">
                    {proj.tags.map((tag, idx) => (
                      <li key={idx}>{tag}</li>
                    ))}
                  </ul>

                  <p
                    style={{
                      fontFamily: 'var(--mark)',
                      color: 'var(--violet)',
                      fontSize: '1.15rem',
                      margin: '.9rem 0 0'
                    }}
                  >
                    The lesson: {proj.lesson}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}