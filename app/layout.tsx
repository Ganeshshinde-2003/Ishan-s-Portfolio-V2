import type { Metadata } from "next";
import "./globals.css";
import { MarsAssistantProvider } from "@/app/context/MarsAssistantContext";
import { ThemeProvider } from "@/app/context/ThemeContext";
import { NavigationProvider } from "@/app/context/NavigationContext";
import { Sidebar } from "@/app/components/Sidebar";
import { MarsAssistant } from "@/app/components/MarsAssistant";

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
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-[var(--bg)]">
        <ThemeProvider>
          <MarsAssistantProvider>
            <NavigationProvider>
              <div className="flex flex-col md:flex-row h-screen bg-[var(--bg)]">
                <Sidebar />
                <main className="flex-1 overflow-hidden p-0 md:p-10">
                  <div className="bg-[var(--panel)] text-[var(--text)] h-full w-full rounded-t-2xl md:rounded-2xl shadow-[0_1px_40px_10px_rgba(5,5,5,0.2)] overflow-y-auto scrollbar-hide">
                    {children}
                  </div>
                </main>
              </div>
              <MarsAssistant />
            </NavigationProvider>
          </MarsAssistantProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
