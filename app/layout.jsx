import { Toaster } from "react-hot-toast";
import {  Roboto } from "next/font/google";
import "@/app/style/global.css";

const Nova = Roboto({ weight: "300", subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://quantumshadow.com/"),
  title: "Quantum Shadow",
  applicationName: "QuantumShadow",
  author: "QuantumShadow",
  images: "",
  description:
    "Win this game by Hacking your way to freedom",
    metadataBase: new URL("https://quantumshadow.com/"),
    keywords: [
    "learn ethical hacking",
    "cypher",
    "penetration testing",
    "decrpt",
    "anonymous",
    "secure",
    "bug biunty",
    "developer",
    "programming",
    "hackers",
  ],
  openGraph: {
    title: "Quantum Shadow",
    description:
      "Win this game by Hacking your way to freedom",
    url: "https://quantumshadow.com//",
    siteName: "QuantumShadow",
    images: "",
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={Nova.className}>
        <Toaster
          position="top-right"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            className: "",
            duration: 8000,
            style: {
              background: "#040510",
              color: "#1ea3f9",
            },
          }}
        />
        {children}
      </body>
    </html>
  );
}
