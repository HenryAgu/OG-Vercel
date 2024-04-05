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
      </Head>
      <h1>Second Day:Home-Page</h1>
    </div>
  );
}
