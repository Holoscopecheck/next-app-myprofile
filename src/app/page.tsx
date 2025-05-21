import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.headerTitle}>自己紹介</h1>
      </header>
      <main className={styles.main}>
        <section className={styles.sectionContainer} id="hobbies">
          <div className={styles.sectionHeader}>
            <h1 className={styles.sectionTitle}>趣味</h1>
          </div>
          <section className={styles.sectionInner}>
            <ul className={styles.listContent}>
              <li className={styles.itemContent}>読書</li>
              <li className={styles.itemContent}>アニメ鑑賞</li>
              <li className={styles.itemContent}>ランニング</li>
            </ul>
          </section>
        </section>
        <section className={styles.sectionContainer} id="interests">
          <div className={styles.sectionHeader}>
            <h1 className={styles.sectionTitle}>興味</h1>
          </div>
          <section className={styles.sectionInner}>
            <ul className={styles.listContent}>
              <li className={styles.itemContent}>Figma</li>
              <li className={styles.itemContent}>おうちサーバー</li>
            </ul>
          </section>
        </section>
        <section className={styles.sectionContainer} id="efforts">
          <div className={styles.sectionHeader}>
            <h1 className={styles.sectionTitle}>頑張っていること</h1>
          </div>
          <section className={styles.sectionInner}>
            <ul className={styles.listContent}>
              <li className={styles.itemContent}>筋トレ</li>
              <li className={styles.itemContent}>サークル活動</li>
              <li className={styles.itemContent}>
                サーバサイドプログラムの勉強
              </li>
            </ul>
          </section>
        </section>
      </main>
    </>
  );
}
