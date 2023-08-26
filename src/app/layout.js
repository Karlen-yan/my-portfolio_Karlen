import ThemeSwitcher from "./ThemeSwitcher";
import "./globals.css";
import Providers from "./providers";



export const metadata = {
  title: "Discover My Digital World: Web Development and Design Portfolio",
  description:
    "Explore my journey through innovative projects and creative solutions in web development and design. From interactive applications to performance optimization, join me in exploring my technological path."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body >
        <Providers>
          <ThemeSwitcher />
          {children}
        </Providers>
      </body>
    </html>
  );
}
