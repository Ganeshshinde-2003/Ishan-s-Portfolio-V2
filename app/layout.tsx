import type { Metadata } from "next";
import "./globals.css";
import { NavigationProvider } from "@/app/context/NavigationContext";
import { MarsAssistantProvider } from "@/app/context/MarsAssistantContext";
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
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body className="min-h-full bg-[#131415]">
        <NavigationProvider>
          <MarsAssistantProvider>
            <div className="flex flex-col md:flex-row h-screen bg-[#131415]">
              <Sidebar />
              <main className="flex-1 overflow-auto p-0 md:p-10">
                {children}
              </main>
            </div>
            <MarsAssistant />
          </MarsAssistantProvider>
        </NavigationProvider>
      </body>
    </html>
  );
}
