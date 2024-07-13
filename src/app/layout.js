import ThemeSwitcher from "./ThemeSwitcher";
import "./globals.css";
import Providers from "./providers";
import Head from 'next/head';



export const metadata = {
  title: "Web Development and Design Portfolio",
  description:
    "Explore my journey through innovative projects and creative solutions in web development and design. From interactive applications to performance optimization, join me in exploring my technological path."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
       <Head>
       <link rel="icon" href="/maletin.png" />
       </Head>
      <body >
        <Providers>
          <ThemeSwitcher />
          {children}
        </Providers>
      </body>
    </html>
  );
}
