import React from "react";

const navLinks = [
  ["Home", "https://dinn7470.github.io/DanielInnocente.com/"],
  ["Portfolio", "https://dinn7470.github.io/DanielInnocente.com/portfolio"],
  [
    "Resume",
    "https://drive.google.com/file/d/1UJ044hJu0KQN5b0jU0n3b_HiMa2iUQxt/view?usp=sharing"
  ]
];

const projectFacts = [
  ["Role", "Lead UX Researcher"],
  ["Team", "Daniel Innocente + Dr. Dhananjay Singh"],
  ["Tools", "Figma, React"],
  ["Timeline", "7 months from research to synthesis"]
];

const researchFindings = [
  {
    title: "Popularity Decides Visibility",
    body:
      "Crowdfunding platforms often reward campaigns that already have engagement, which can bury seniors with smaller networks."
  },
  {
    title: "Storytelling Becomes Labor",
    body:
      "Success often depends on writing an emotional, polished story. That can pressure people to overshare during already vulnerable moments."
  },
  {
    title: "Social Reach Is Treated Like Access",
    body:
      "Campaigns rely heavily on social sharing, disadvantaging older adults who are less active or less confident online."
  }
];

const designMoves = [
  ["Rotate visibility", "Requests are surfaced through fair rotation instead of likes, comments, or shares."],
  ["Ask for need, not performance", "The request flow focuses on clear context and practical need, not dramatic storytelling."],
  ["Build support inside the product", "Discovery, forums, and Community Fund requests work without depending on outside social media."],
  ["Make accessibility visible", "Readable type, simple navigation, and easy-to-find controls are treated as core features."],
  ["Protect trust", "Privacy-forward patterns reduce fear around sharing health or financial information."]
];

const prototypeScreens = [
  ["images/supportme/support-model-landing.png", "Support model landing"],
  ["images/supportme/stories-list.png", "Needs-based story discovery"],
  ["images/supportme/share-your-story.png", "Privacy-aware story request"],
  ["images/supportme/community-fund-impact.png", "Community Fund impact"],
  ["images/supportme/medical-device-listing.png", "Medical device mutual aid"],
  ["images/supportme/brain-cancer-community.png", "Peer support community"],
  ["images/supportme/create-community-post.png", "Create post flow"]
];

const evaluationMetrics = [
  "Can seniors complete onboarding, posting, and request flows with confidence?",
  "Does visibility feel fair across users with different network sizes?",
  "Do people feel more supported, less isolated, and safer sharing sensitive information?",
  "Are accessibility controls easy to find, understand, and adjust?"
];

export default function SupportMeCaseStudy() {
  return (
    <main className="supportme-page">
      <style>{styles}</style>

      <nav className="site-nav" aria-label="Primary navigation">
        {navLinks.map(([label, href]) => (
          <a key={label} href={href}>
            {label}
          </a>
        ))}
      </nav>

      <header className="hero">
        <section className="hero-copy" aria-labelledby="case-title">
          <p className="eyebrow">UX research + accessible product strategy</p>
          <h1 id="case-title">SupportMe</h1>
          <p className="hero-lede">
            A senior-centered support platform that makes asking for help feel less public,
            less performative, and more human.
          </p>
          <div className="hero-actions" aria-label="Project summary">
            <a href="#prototype">See the prototype</a>
            <a href="#designer">How I design</a>
          </div>
        </section>

        <section className="hero-panel" aria-label="Project snapshot">
          <p className="panel-kicker">The challenge</p>
          <h2>Design support that does not reward the loudest network.</h2>
          <p>
            SupportMe began as a research paper and Figma prototype with Penn State
            University&apos;s ReSENSE Research Lab in 2025.
          </p>
        </section>
      </header>

      <section className="fact-strip" aria-label="Project details">
        {projectFacts.map(([label, value]) => (
          <article key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
          </article>
        ))}
      </section>

      <section className="section split" id="overview">
        <div>
          <p className="eyebrow">Overview</p>
          <h2>Older adults need support systems that meet them with dignity.</h2>
        </div>
        <div className="copy-stack">
          <p>
            Many seniors face overlapping challenges: illness, financial strain, isolation,
            and digital tools that assume high confidence, strong social networks, and comfort
            with public self-disclosure.
          </p>
          <p>
            SupportMe proposes one accessible space for peer support, needs-based fundraising,
            and small Community Fund requests, designed around clarity, privacy, and fairness.
          </p>
        </div>
      </section>

      <section className="section" id="research">
        <div className="section-head">
          <p className="eyebrow">Research</p>
          <h2>What I learned from the system, not just the screen.</h2>
          <p>
            I combined literature review with crowdfunding platform analysis to understand why
            seniors are disadvantaged before they ever press "publish."
          </p>
        </div>

        <div className="card-grid">
          {researchFindings.map((finding) => (
            <article className="card" key={finding.title}>
              <h3>{finding.title}</h3>
              <p>{finding.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section design-map" id="design">
        <div className="section-head">
          <p className="eyebrow">Design implications</p>
          <h2>Every research finding became a product decision.</h2>
        </div>

        <div className="move-list">
          {designMoves.map(([title, body], index) => (
            <article className="move" key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section concept" id="concept">
        <div>
          <p className="eyebrow">Concept</p>
          <h2>SupportMe blends emotional care with practical help.</h2>
        </div>
        <div className="concept-grid">
          <article>
            <h3>Peer communities</h3>
            <p>Condition and life-stage groups for encouragement, shared experience, and belonging.</p>
          </article>
          <article>
            <h3>Fair discovery</h3>
            <p>Requests rotate through the platform instead of being ranked by popularity.</p>
          </article>
          <article>
            <h3>Community Fund</h3>
            <p>Micro-assistance for urgent needs like prescriptions, groceries, copays, or rides.</p>
          </article>
          <article>
            <h3>Fit Me controls</h3>
            <p>Readable, adjustable, senior-friendly interface settings placed where people need them.</p>
          </article>
        </div>
      </section>

      <section className="section" id="prototype">
        <div className="section-head">
          <p className="eyebrow">Prototype</p>
          <h2>A warmer support experience, without hiding the serious parts.</h2>
          <p>
            The interface direction is calm, direct, and confidence-building: enough personality to
            feel alive, enough restraint to respect sensitive moments.
          </p>
        </div>

        <div className="screen-grid">
          {prototypeScreens.map(([src, caption]) => (
            <figure className="screen" key={src}>
              <img src={src} alt={`${caption} from the SupportMe prototype`} />
              <figcaption>{caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section split" id="evaluation">
        <div>
          <p className="eyebrow">Next step</p>
          <h2>Test whether the design feels usable, fair, and emotionally safe.</h2>
        </div>
        <ul className="metric-list">
          {evaluationMetrics.map((metric) => (
            <li key={metric}>{metric}</li>
          ))}
        </ul>
      </section>

      <section className="designer-note" id="designer">
        <p className="eyebrow">How I show up as a UX designer</p>
        <h2>I like turning messy human problems into systems that feel clear, fair, and kind.</h2>
        <p>
          This project reflects the way I design: research-led, equity-minded, accessibility-aware,
          and comfortable moving between big-picture systems thinking and the tiny interface choices
          that help people feel safe enough to continue.
        </p>
      </section>
    </main>
  );
}

const styles = `
:root {
  --ink: #14213d;
  --muted: #546179;
  --line: #dce4ec;
  --paper: #fbfcf8;
  --mint: #00cda8;
  --mint-soft: #dffbf3;
  --coral: #ff6b5f;
  --sun: #ffd166;
  --lavender: #ece7ff;
  --white: #ffffff;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: var(--paper);
}

.supportme-page {
  min-height: 100vh;
  color: var(--ink);
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  line-height: 1.55;
}

.site-nav {
  position: fixed;
  top: 18px;
  right: 22px;
  z-index: 10;
  display: flex;
  gap: 8px;
  padding: 8px;
  background: rgba(255, 255, 255, 0.88);
  border: 1px solid var(--line);
  border-radius: 999px;
  backdrop-filter: blur(16px);
}

.site-nav a,
.hero-actions a {
  color: var(--ink);
  font-size: 0.92rem;
  font-weight: 750;
  text-decoration: none;
}

.site-nav a {
  padding: 8px 12px;
  border-radius: 999px;
}

.site-nav a:hover {
  background: var(--mint-soft);
}

.hero {
  display: grid;
  grid-template-columns: minmax(0, 1.25fr) minmax(280px, 0.75fr);
  gap: 28px;
  align-items: end;
  min-height: 78vh;
  padding: 112px clamp(20px, 6vw, 80px) 56px;
  background:
    linear-gradient(135deg, rgba(0, 205, 168, 0.9), rgba(255, 209, 102, 0.72)),
    radial-gradient(circle at 80% 20%, rgba(255, 107, 95, 0.5), transparent 32%),
    var(--mint);
}

.hero-copy {
  max-width: 780px;
}

.eyebrow {
  margin: 0 0 10px;
  color: #42506a;
  font-size: 0.78rem;
  font-weight: 850;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.hero h1 {
  margin: 0;
  color: var(--white);
  font-size: clamp(4rem, 11vw, 8.5rem);
  line-height: 0.88;
  letter-spacing: 0;
}

.hero-lede {
  max-width: 680px;
  margin: 28px 0 0;
  color: #102237;
  font-size: clamp(1.18rem, 2vw, 1.65rem);
  font-weight: 700;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
}

.hero-actions a {
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  padding: 10px 16px;
  background: var(--white);
  border: 1px solid rgba(20, 33, 61, 0.18);
  border-radius: 8px;
}

.hero-actions a:last-child {
  background: var(--ink);
  color: var(--white);
}

.hero-panel {
  padding: 24px;
  background: rgba(255, 255, 255, 0.86);
  border: 1px solid rgba(255, 255, 255, 0.76);
  border-radius: 8px;
  box-shadow: 0 22px 60px rgba(20, 33, 61, 0.18);
}

.panel-kicker {
  margin: 0 0 8px;
  color: var(--coral);
  font-size: 0.85rem;
  font-weight: 850;
  text-transform: uppercase;
}

.hero-panel h2 {
  margin: 0 0 12px;
  font-size: clamp(1.55rem, 3vw, 2.15rem);
  line-height: 1.05;
}

.hero-panel p:last-child {
  margin-bottom: 0;
  color: var(--muted);
}

.fact-strip,
.section,
.designer-note {
  width: min(1120px, calc(100% - 40px));
  margin-inline: auto;
}

.fact-strip {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1px;
  margin-top: -24px;
  background: var(--line);
  border: 1px solid var(--line);
  border-radius: 8px;
  overflow: hidden;
  position: relative;
}

.fact-strip article {
  min-height: 118px;
  padding: 18px;
  background: var(--white);
}

.fact-strip span {
  display: block;
  margin-bottom: 8px;
  color: var(--muted);
  font-size: 0.84rem;
  font-weight: 800;
  text-transform: uppercase;
}

.fact-strip strong {
  display: block;
  font-size: 1rem;
  line-height: 1.35;
}

.section {
  padding: 76px 0 0;
}

.split {
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
  gap: clamp(28px, 5vw, 72px);
  align-items: start;
}

.section h2,
.designer-note h2 {
  margin: 0;
  font-size: clamp(2rem, 5vw, 4rem);
  line-height: 0.98;
  letter-spacing: 0;
}

.section p,
.copy-stack p,
.card p,
.move p,
.concept p,
.designer-note p {
  color: var(--muted);
  font-size: 1rem;
}

.copy-stack p:first-child {
  margin-top: 0;
}

.split > div:last-child,
.copy-stack {
  align-self: stretch;
}

.split > div:last-child p,
.copy-stack p {
  color: var(--muted);
  font-size: clamp(1.45rem, 2.4vw, 2rem);
  line-height: 1.38;
}

.section-head {
  max-width: 760px;
  margin-bottom: 24px;
}

.section-head p:last-child {
  font-size: 1.08rem;
}

.card-grid,
.concept-grid,
.screen-grid {
  display: grid;
  gap: 16px;
}

.card-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.card,
.concept article {
  padding: 20px;
  background: var(--white);
  border: 1px solid var(--line);
  border-radius: 8px;
}

.card h3,
.move h3,
.concept h3 {
  margin: 0 0 8px;
  font-size: 1.15rem;
}

.card p,
.concept p,
.move p {
  margin: 0;
}

.design-map {
  padding-bottom: 8px;
}

.move-list {
  display: grid;
  gap: 12px;
}

.move {
  display: grid;
  grid-template-columns: 56px minmax(0, 1fr);
  gap: 18px;
  align-items: start;
  padding: 18px;
  background: var(--white);
  border: 1px solid var(--line);
  border-radius: 8px;
}

.move span {
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  background: var(--lavender);
  border-radius: 8px;
  color: var(--ink);
  font-weight: 900;
}

.concept {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 28px;
  align-items: start;
}

.concept-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.concept article:nth-child(1) {
  border-top: 6px solid var(--mint);
}

.concept article:nth-child(2) {
  border-top: 6px solid var(--sun);
}

.concept article:nth-child(3) {
  border-top: 6px solid var(--coral);
}

.concept article:nth-child(4) {
  border-top: 6px solid #8c7cf0;
}

.screen-grid {
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
}

.screen {
  margin: 0;
}

.screen img {
  display: block;
  width: 100%;
  aspect-ratio: 9 / 16;
  object-fit: contain;
  object-position: top;
  background: var(--white);
  border: 1px solid var(--line);
  border-radius: 8px;
}

.screen figcaption {
  margin-top: 8px;
  color: var(--muted);
  font-size: 0.92rem;
  font-weight: 700;
}

.metric-list {
  display: grid;
  gap: 12px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.metric-list li {
  padding: 16px 18px;
  background: var(--white);
  border-left: 6px solid var(--mint);
  border-radius: 8px;
  color: var(--muted);
  font-weight: 650;
}

.designer-note {
  margin-top: 76px;
  margin-bottom: 80px;
  padding: clamp(28px, 6vw, 56px);
  background: var(--ink);
  border-radius: 8px;
}

.designer-note .eyebrow,
.designer-note p {
  color: #dce4ec;
}

.designer-note h2 {
  max-width: 900px;
  color: var(--white);
}

.designer-note p:last-child {
  max-width: 780px;
  margin-bottom: 0;
  font-size: 1.1rem;
}

@media (max-width: 960px) {
  .hero,
  .split,
  .concept {
    grid-template-columns: 1fr;
  }

  .card-grid,
  .fact-strip {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .screen-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .site-nav {
    left: 12px;
    right: 12px;
    justify-content: center;
    overflow-x: auto;
  }

  .hero {
    min-height: auto;
    padding: 102px 20px 40px;
  }

  .hero-actions a {
    flex: 1 1 180px;
    justify-content: center;
  }

  .fact-strip,
  .card-grid,
  .concept-grid,
  .screen-grid {
    grid-template-columns: 1fr;
  }

  .move {
    grid-template-columns: 1fr;
  }

  .split > div:last-child p,
  .copy-stack p {
    font-size: clamp(1.28rem, 6vw, 1.6rem);
  }
}
`;
