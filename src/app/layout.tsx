import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { AppNavigationMenu } from "@/AppComponents/AppNavbar/AppNavbar";
import { UserProvider } from "@/context/UserContext";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GramApp",
  description: "Copyrights Reserved @CWC2024",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="relative flex min-h-screen flex-col">
              <AppNavigationMenu />
              <div className="flex-1">{children}</div>
              <Toaster />
            </div>
          </ThemeProvider>
        </UserProvider>
      </body>
    </html>
  );
}
