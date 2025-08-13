import "./globals.css";

export const metadata = {
  title: "Start",
  description: "株式会社スタートのサイトです",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        {children}
      </body>
    </html>
  );
}
