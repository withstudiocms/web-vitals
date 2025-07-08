import { AstrojsWebVitals_Metric, db, sql } from "astro:db";
import { ServerMetricSchema } from "./schemas.js";
const prerender = false;
const ALL = async ({ request }) => {
  try {
    const rawBody = await request.json();
    const body = ServerMetricSchema.array().parse(rawBody);
    await db.insert(AstrojsWebVitals_Metric).values(body).onConflictDoUpdate({
      target: AstrojsWebVitals_Metric.id,
      set: { value: sql`excluded.value` }
    });
  } catch (error) {
    console.error(error);
  }
  return new Response();
};
export {
  ALL,
  prerender
};
