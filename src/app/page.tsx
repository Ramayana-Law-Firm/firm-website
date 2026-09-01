import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.hero}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Ramayana Advisory</p>
          <h1>Strategic counsel for ambitious businesses.</h1>
          <p className={styles.lead}>
            We help founders, family offices, and growing firms align strategy,\n            operations, and digital transformation with measurable momentum.
          </p>

          <div className={styles.actions}>
            <a className={styles.primary} href="#consulting">
              Book a consultation
            </a>
            <a className={styles.secondary} href="#services">
              Explore services
            </a>
          </div>

          <ul className={styles.stats}>
            <li>
              <strong>15+</strong>
              <span>Years of guidance</span>
            </li>
            <li>
              <strong>120</strong>
              <span>Client engagements</span>
            </li>
            <li>
              <strong>94%</strong>
              <span>Repeat partnerships</span>
            </li>
          </ul>
        </div>

        <div className={styles.panel} id="services">
          <div className={styles.card}>
            <span>01</span>
            <h2>Corporate Strategy</h2>
            <p>Roadmaps, market positioning, and execution planning.</p>
          </div>
          <div className={styles.card}>
            <span>02</span>
            <h2>Growth Advisory</h2>
            <p>Go-to-market systems, sales design, and operational lift.</p>
          </div>
          <div className={styles.card}>
            <span>03</span>
            <h2>Digital Transformation</h2>
            <p>Modern workflows, automation, and scalable reporting.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
