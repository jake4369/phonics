import "@styles/index.css";

import Header from "@components/Layout/Header";

export const metadata = {
  title: "My Learning - Phonics",
  description: "Let's Learn Phonics",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
