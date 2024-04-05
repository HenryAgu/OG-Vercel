import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  const imageData = await fetch(new URL('../../public/images.jpeg', import.meta.url)).then(
    (res) => res.arrayBuffer(),
  );
  try {
    const { searchParams } = new URL(request.url);

    const hasTitle = searchParams.has('title');
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'My default title';
    return new ImageResponse(
      (
        
        <div tw="flex w-full h-full items-center justify-center">
          <div tw="flex items-center justify-center h-full w-1/2 bg-blue-200">
            <h1>{title}</h1>
          </div>
          <div tw="flex h-full w-1/2">
            {/* @ts-ignore */}
            <img src={imageData} alt="imageData" tw="h-full w-full"/>
          </div>
        </div>
      )
    );
  } catch (e: any) {
    return new Response("Failed to get OG image", { status: 500 });
  }
}
