import type { Metadata } from "next";
import ClientScripts from "./components/ClientScripts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agina - Creative Agency & Portfolio",
  description: "Creative solutions for modern brands",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="no-js" lang="en">
      <head>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <link rel="shortcut icon" type="image/x-icon" href="/assets/images/favicon.png" />
        {/* Preload critical scripts */}
        <link rel="preload" href="/assets/js/jquery.min.js" as="script" />
        <link rel="preload" href="/assets/js/gsap.min.js" as="script" />
        {/* Stylesheets */}
        <link rel="stylesheet" href="/assets/fonts/local-fonts.css" />
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/agina-icons.css" />
        <link rel="stylesheet" href="/assets/css/meanmenu.css" />
        <link rel="stylesheet" href="/assets/css/swiper.min.css" />
        <link rel="stylesheet" href="/assets/css/venobox.min.css" />
        <link rel="stylesheet" href="/assets/css/main.css" />
      </head>
      <body>
        {children}
        <ClientScripts />
      </body>
    </html>
  );
}
