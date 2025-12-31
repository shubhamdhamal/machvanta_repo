import type { Metadata } from "next"; import { Inter } from "next/font/google"; import "./globals.css"; import { ThemeProvider } from "@/components/theme-provider"; import Navbar from "@/components/Navbar"; import Footer from "@/components/Footer"; import { Toaster } from "sonner";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = { title: "Machvanta India Pvt Ltd", description: "Industrial Automation" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex flex-col min-h-screen"><Navbar /><main className="flex-grow pt-20">{children}</main><Footer /></div>
          <Toaster position="top-center" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}