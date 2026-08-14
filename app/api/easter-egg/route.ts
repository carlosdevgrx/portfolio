import { NextResponse } from "next/server";

// Proxies to Upstash Redis REST API — shared counter across all visitors
export async function POST() {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) {
    return NextResponse.json({ count: null });
  }

  try {
    const res = await fetch(`${url}/incr/easter-egg-counter`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      cache: "no-store",
    });
    if (!res.ok) throw new Error("upstash error");
    const data = (await res.json()) as { result: number };
    return NextResponse.json({ count: data.result });
  } catch {
    return NextResponse.json({ count: null });
  }
}
