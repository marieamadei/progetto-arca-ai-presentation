import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Progetto Arca AI — Dati che spiegano. Intelligenza che orienta.",
  description: "La nuova esperienza Streetbeat per trasformare i dati di fundraising di Progetto Arca in comprensione, evidenza e azione.",
  icons: {
    icon: "/assets/arca-logo.png",
    shortcut: "/assets/arca-logo.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
