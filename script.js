@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap');

:root {
  --navy: #101827;
  --navy-light: #172438;
  --cyan: #55C9F4;
  --white: #FFFFFF;
  --muted: #A7B3C4;
  --border: rgba(255,255,255,0.10);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

body {
  background: var(--navy);
  color: var(--white);
  font-family: 'DM Sans', sans-serif;
  line-height: 1.7;
}

a {
  color: inherit;
  text-decoration: none;
}

.header {
  height: 82px;
  padding: 0 8%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(16,24,39,0.94);
  border-bottom: 1px solid var(--border);
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(14px);
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 21px;
  font-weight: 700;
  letter-spacing: 2px;
}

.brand-mark {
  width: 39px;
  height: 39px;
  display: grid;
  place-items: center;
  border: 1px solid var(--cyan);
  color: var(--cyan);
  border-radius: 10px;
}

.brand-small {
  display: block;
  font-size: 8px;
  letter-spacing: 3px;
  color: var(--muted);
}

.nav {
  display: flex;
  align-items: center;
  gap: 29px;
  font-size: 13px;
  color: var(--muted);
}

.nav a:hover,
.text-link:hover {
  color: var(--cyan);
}

.nav-contact {
  border: 1px solid var(--cyan);
  color: var(--cyan);
  padding: 9px 16px;
  border-radius: 5px;
}

.menu-toggle {
  display: none;
  color: white;
  background: none;
  border: none;
  font-size: 27px;
  cursor: pointer;
}

.hero {
  min-height: 690px;
  padding: 130px 10% 100px;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  background: radial-gradient(ellipse at 80% 40%, #18334b 0%, transparent 45%);
}

.hero-content {
  max-width: 850px;
  position: relative;
  z-index: 2;
}

.eyebrow,
.card-number {
  color: var(--cyan);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 3px;
}

.hero h1 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(42px, 6.5vw, 78px);
  line-height: 1.13;
  margin: 25px 0;
  letter-spacing: -3px;
}

.hero h1 span,
.section-heading h2 span,
.careers-banner h2 span {
  color: var(--cyan);
}

.hero-description {
  color: var(--muted);
  max-width: 570px;
  font-size: 16px;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 35px;
}

.button {
  display: inline-block;
  padding: 13px 23px;
  border-radius: 5px;
  font-size: 13px;
  font-weight: 700;
  transition: 0.25s;
}

.button-primary {
  background: var(--cyan);
  color: var(--navy);
}

.button-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 30px rgba(85,201,244,0.22);
}

.button-outline {
  border: 1px solid var(--border);
}

.button-outline:hover {
  border-color: var(--cyan);
  color: var(--cyan);
}

.hero-glow {
  position: absolute;
  width: 380px;
  height: 380px;
  right: 7%;
  top: 22%;
  background: rgba(85,201,244,0.07);
  filter: blur(90px);
  border-radius: 50%;
}

.hero-orbit {
  position: absolute;
  right: 10%;
  border: 1px solid rgba(85,201,244,0.12);
  border-radius: 50%;
  transform: rotate(-25deg);
}

.orbit-one {
  width: 380px;
  height: 180px;
}

.orbit-two {
  width: 450px;
  height: 240px;
}

.hero-bottom {
  position: absolute;
  bottom: 28px;
  left: 10%;
  color: var(--muted);
  font-size: 10px;
  letter-spacing: 2px;
}

.hero-bottom span {
  color: var(--cyan);
  padding: 0 10px;
}

.section {
  padding: 110px 10%;
}

.section-heading {
  max-width: 680px;
  margin-bottom: 45px;
}

.section-heading h2,
.careers-banner h2 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(34px, 5vw, 52px);
  line-height: 1.2;
  margin: 16px 0;
}

.section-intro {
  color: var(--muted);
}

.about-content {
  max-width: 800px;
  color: #C3CDDA;
  font-size: 17px;
}

.about-content p + p {
  margin-top: 18px;
}

.values,
.service-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 55px;
}

.value-card,
.service-card {
  padding: 30px;
  background: var(--navy-light);
  border: 1px solid var(--border);
  border-radius: 9px;
  transition: 0.3s;
}

.value-card:hover,
.service-card:hover {
  transform: translateY(-6px);
  border-color: var(--cyan);
}

.value-card span {
  color: var(--cyan);
  font-size: 12px;
}

.value-card h3,
.service-card h3,
.project-panel h3 {
  font-family: 'Space Grotesk', sans-serif;
  margin: 15px 0 8px;
  font-size: 20px;
}

.value-card p,
.service-card p:not(.card-number),
.project-panel p:not(.card-number) {
  color: var(--muted);
  font-size: 13px;
}

.services {
  background: #0D1522;
}

.service-icon {
  color: var(--cyan);
  font-size: 32px;
  margin-bottom: 24px;
}

.project-panel {
  display: flex;
  align-items: center;
  gap: 35px;
  padding: 40px;
  border: 1px solid var(--border);
  border-radius: 10px;
  background: linear-gradient(110deg, #172438, #101827);
}

.project-symbol {
  flex-shrink: 0;
  width: 90px;
  height: 90px;
  border: 1px solid var(--cyan);
  border-radius: 20px;
  display: grid;
  place-items: center;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 40px;
  color: var(--cyan);
}

.project-symbol span {
  font-size: 13px;
}

.text-link {
  color: var(--cyan);
  font-size: 13px;
  white-space: nowrap;
}

.careers-banner {
  padding: 100px 10%;
  background: linear-gradient(110deg, #17344A, #101827);
}

.careers-banner > div {
  max-width: 700px;
}

.careers-banner p:not(.eyebrow) {
  color: var(--muted);
}

.contact {
  text-align: center;
}

.contact .section-heading {
  margin-left: auto;
  margin-right: auto;
}

.footer {
  border-top: 1px solid var(--border);
  padding: 45px 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
}

.footer > p {
  color: var(--muted);
  font-size: 10px;
  letter-spacing: 1px;
}

.copyright {
  width: 100%;
  text-align: center;
}

.reveal {
  opacity: 0;
  transform: translateY(22px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 850px) {
  .header {
    padding: 0 5%;
  }

  .menu-toggle {
    display: block;
  }

  .nav {
    display: none;
    position: absolute;
    top: 81px;
    left: 0;
    width: 100%;
    padding: 25px;
    background: var(--navy);
    flex-direction: column;
    align-items: stretch;
    gap: 18px;
    border-bottom: 1px solid var(--border);
  }

  .nav.open {
    display: flex;
  }

  .nav-contact {
    text-align: center;
  }

  .hero {
    padding: 100px 7%;
    min-height: 620px;
  }

  .hero-orbit {
    right: -35%;
    opacity: 0.5;
  }

  .section {
    padding: 80px 7%;
  }

  .values,
  .service-grid {
    grid-template-columns: 1fr;
  }

  .project-panel {
    align-items: flex-start;
    flex-direction: column;
  }

  .footer {
    padding: 40px 7%;
    flex-direction: column;
    text-align: center;
  }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }

  .reveal {
    opacity: 1;
    transform: none;
  }
}
