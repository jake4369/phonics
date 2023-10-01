import "@styles/index.css";

export const metadata = {
  title: "Phonics",
  description: "Let's Learn Phonics",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
