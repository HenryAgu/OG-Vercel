import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  try {
    return new ImageResponse(
      (
        <div tw="flex items-center justify-center w-full h-full bg-blue-100">
          <h1>Henry's Og:Image</h1>
        </div>
      )
    );
  } catch (e: any) {
    return new Response("Failed to get OG image", { status: 500 });
  }
}
