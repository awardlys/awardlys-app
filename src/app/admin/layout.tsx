import type { Metadata } from "next";
import { Sidebar } from "./components/sidebar";

export const metadata: Metadata = {
  title: "Admin",
  description: "Admin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <div className="grid grid-cols-app gap-2">
        <div className="bg-slate-800 text-zinc-200 h-screen p-3">
          <Sidebar />
        </div>
        <div>{children}</div>
      </div>
    </main>
  );
}
