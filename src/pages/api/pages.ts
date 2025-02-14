// src/pages/api/pages.ts
import { fetchPages } from "../../utils/graphqlClient.ts";

export async function GET() {
  try {
    const data = await fetchPages();
    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch pages" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
