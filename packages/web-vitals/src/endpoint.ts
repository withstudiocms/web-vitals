// @ts-expect-error — AstrojsWebVitals requires type-gen which we can’t use.
import { AstrojsWebVitals_Metric, db, sql } from 'astro:db';
import type { APIRoute } from 'astro';
import { ServerMetricSchema } from './schemas.js';

export const prerender = false;

export const ALL: APIRoute = async ({ request }) => {
	try {
		const rawBody = await request.json();

		console.log('==================== DEBUG =====================');
		console.log('Received web vitals metrics:', rawBody);
		console.log('==================== DEBUG =====================');

		const body = ServerMetricSchema.array().parse(rawBody);

		console.log('==================== DEBUG =====================');
		console.log('Parsed web vitals metrics:', body);
		console.log('==================== DEBUG =====================');

		await db
			.insert(AstrojsWebVitals_Metric)
			.values(body)
			.onConflictDoUpdate({
				target: AstrojsWebVitals_Metric.id,
				set: { value: sql`excluded.value` },
			});
	} catch (error) {
		console.error(error);
	}
	return new Response();
};
