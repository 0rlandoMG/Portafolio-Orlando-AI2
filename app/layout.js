import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { LanguageProvider } from "../context/LanguageProvider";

export const metadata = {
  title: "Orlando Marrero | AI Engineer & Software Engineer",
  description:
    "Portfolio of Orlando Marrero, Junior AI Engineer & Software Engineer specializing in local language model integration and full-stack development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-brand-bgLight font-sans text-brand-textLight antialiased dark:bg-brand-bg dark:text-brand-text">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 py-4 sm:px-6 lg:px-8">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
