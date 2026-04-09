import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavigationProvider } from "@/app/context/NavigationContext";
import { Sidebar } from "@/app/components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ishan Tandel | Product Designer",
  description: "Product Designer portfolio and projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-primary">
        <NavigationProvider>
          <div className="flex h-screen bg-primary">
            <Sidebar />
            <main className="flex-1 overflow-auto p-10">
              {children}
            </main>
          </div>
        </NavigationProvider>
      </body>
    </html>
  );
}
