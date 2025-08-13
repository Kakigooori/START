import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.Main}>
      <section className={styles.TitleMVContents}>
        <div className={styles.MV}>
          <div className={styles.Texts}>
            <h2 className={styles.Title}>START</h2>
            <p className={styles.p}>仕事に最高のスタートを</p>
          </div>
        </div>
      </section>
      <section className={styles.NewsContents}>
        <h1>ニュース</h1>
        <div className={styles.News}>
          <a href="#" className={styles.Contents}>
            <h2 className={styles.Data}>2030.02.10</h2>
            <h3 className={styles.NewsText}>コーポレートサイトをリニューアルしました。</h3>
          </a>
          <a href="#" className={styles.Contents}>
            <h2 className={styles.Data}>2030.02.08</h2>
            <h3 className={styles.NewsText}>採用を強化中です！一緒に働きませんか？</h3>
          </a>
          <a href="#" className={styles.Contents}>
            <h2 className={styles.Data}>2030.02.02</h2>
            <h3 className={styles.NewsText}>人材紹介SNS『スタート』をリリースしました。3/31まで新規登録キャンペーンを開催中です！サービス内で使える500ポイントをプレゼント！</h3>
          </a>
        </div>
      </section>
      <section className={styles.ServiceContents}>
        <h1>サービス</h1>
        <div className={styles.Service}>
          <div className={styles.WorkContents}>
            <svg xmlns="http://www.w3.org/2000/svg"
            height="48px"
            viewBox="0 0 24 24"
            width="48px"
            fill="#dd1b57">
              <path
              d="M0 0h24v24H0z"
              fill="none"/><path
              d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
            </svg>
            <h2>人材紹介業</h2>
            <p>新規サイトの制作はもちろんサイトリニューアルやランディングページの制作も可能です。</p>
          </div>
          <div className={styles.WorkContents}>
            <svg xmlns="http://www.w3.org/2000/svg"
            height="48px"
            viewBox="0 0 24 24"
            width="48px"
            fill="#dd1b57">
              <path
              d="M0 0h24v24H0z"
              fill="none"/><path
              d="M15 11V5l-3-3-3 3v2H3v14h18V11h-6zm-8 8H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm6 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm6 12h-2v-2h2v2zm0-4h-2v-2h2v2z"/>
            </svg>
            <h2>スクール事業</h2>
            <p>オンラインでWeb制作を学べるスクールを運営しています。</p>
          </div>
          <div className={styles.WorkContents}>
            <svg xmlns="http://www.w3.org/2000/svg"
            height="48px"
            viewBox="0 0 24 24"
            width="48px"
            fill="#dd1b57">
              <path
              d="M0 0h24v24H0z"
              fill="none"/><path
              d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z"/>
            </svg>
            <h2>Webメディア運営</h2>
            <p>人事系メディアやWebデザイン関連のメディアなどを複数運営しています。</p>
          </div>
        </div>
      </section>
    </div>
  );
}
