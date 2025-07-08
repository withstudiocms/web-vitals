import { z } from "astro/zod";
const RatingSchema = z.enum(["good", "needs-improvement", "poor"]);
const MetricTypeSchema = z.enum(["CLS", "INP", "LCP", "FCP", "FID", "TTFB"]);
const MetricIdSchema = z.string().regex(/^v4-\d{13}-\d{13}$/).transform((id) => id.replace(/^(v4-\d{8})\d{5}(-\d{13})$/, "$1$2"));
const ClientMetricSchema = z.object({
  pathname: z.string(),
  route: z.string(),
  name: MetricTypeSchema,
  id: MetricIdSchema,
  value: z.number().gte(0),
  rating: RatingSchema
});
const ServerMetricSchema = ClientMetricSchema.transform((metric) => {
  const timestamp = /* @__PURE__ */ new Date();
  timestamp.setMinutes(0, 0, 0);
  return { ...metric, timestamp };
});
export {
  ServerMetricSchema
};
