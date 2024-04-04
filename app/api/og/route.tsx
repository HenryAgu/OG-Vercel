import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const hasTitle = searchParams.has("title");
    const title = hasTitle
      ? searchParams.get("title")?.slice(0, 100)
      : "Default Title";
    return new ImageResponse(
      (
        <div tw="flex w-full h-full items-center justify-center">
          <div tw="flex">
            <h1>{title}</h1>
          </div>
        </div>
      )
    );
  } catch (e: any) {
    return new Response("Failed to get OG image", { status: 500 });
  }
}
