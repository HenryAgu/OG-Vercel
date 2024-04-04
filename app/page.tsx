import { Metadata } from "next";

export const metadata: Metadata = {
  openGraph: {
    images: [
      {
        url: "http://localhost:3000/api/og?title=Home%20Page",
        width: 1200,
        height: 630,
        alt: "Home Page",
      },
    ],
  },
};
export default function Home() {
  return (
    <main>
      <head>
        <title>Home-Page</title>
        <meta
          property="og:image"
          content="https://og-vercel-ashy.vercel.app/api/og"
        />
      </head>
      <h1>Home-Page</h1>
    </main>
  );
}
