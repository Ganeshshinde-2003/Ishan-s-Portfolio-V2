import type { Metadata } from "next";
import "./globals.css";
import { NavigationProvider } from "@/app/context/NavigationContext";
import { Sidebar } from "@/app/components/Sidebar";

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
          <div className="flex h-screen bg-[#131415]">
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
