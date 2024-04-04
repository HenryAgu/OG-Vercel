import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home-Page</title>
        <meta
          property="og:image"
          content="https://og-vercel-ashy.vercel.app/api/og?title=Home+Page"
        />
        <meta
          name="twitter:image"
          content="https://og-vercel-ashy.vercel.app/api/og?title=Home+Page"
        />
        {/* WhatsApp */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <h1>Home-Page</h1>
    </div>
  );
}
