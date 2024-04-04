import { Metadata } from "next";
import Head from "next/head";

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
    <div>
      <Head>
      <title>Home-Page</title>
        <meta
          property="og:image"
          content="https://og-vercel-ashy.vercel.app/api/og?title=Home+Page"
        />
      </Head>
      <h1>Home-Page</h1>
    </div>
  );
}
