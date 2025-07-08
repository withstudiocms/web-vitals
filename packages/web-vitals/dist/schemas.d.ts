import { z } from 'astro/zod';
/** Shape of the data submitted from clients to the collection API. */
declare const ClientMetricSchema: z.ZodObject<{
    pathname: z.ZodString;
    route: z.ZodString;
    name: z.ZodEnum<["CLS", "INP", "LCP", "FCP", "FID", "TTFB"]>;
    id: z.ZodEffects<z.ZodString, string, string>;
    value: z.ZodNumber;
    rating: z.ZodEnum<["good", "needs-improvement", "poor"]>;
}, "strip", z.ZodTypeAny, {
    pathname: string;
    route: string;
    name: "CLS" | "INP" | "LCP" | "FCP" | "FID" | "TTFB";
    id: string;
    value: number;
    rating: "good" | "needs-improvement" | "poor";
}, {
    pathname: string;
    route: string;
    name: "CLS" | "INP" | "LCP" | "FCP" | "FID" | "TTFB";
    id: string;
    value: number;
    rating: "good" | "needs-improvement" | "poor";
}>;
/** Transformed client data with added timestamp. */
export declare const ServerMetricSchema: z.ZodEffects<z.ZodObject<{
    pathname: z.ZodString;
    route: z.ZodString;
    name: z.ZodEnum<["CLS", "INP", "LCP", "FCP", "FID", "TTFB"]>;
    id: z.ZodEffects<z.ZodString, string, string>;
    value: z.ZodNumber;
    rating: z.ZodEnum<["good", "needs-improvement", "poor"]>;
}, "strip", z.ZodTypeAny, {
    pathname: string;
    route: string;
    name: "CLS" | "INP" | "LCP" | "FCP" | "FID" | "TTFB";
    id: string;
    value: number;
    rating: "good" | "needs-improvement" | "poor";
}, {
    pathname: string;
    route: string;
    name: "CLS" | "INP" | "LCP" | "FCP" | "FID" | "TTFB";
    id: string;
    value: number;
    rating: "good" | "needs-improvement" | "poor";
}>, {
    timestamp: Date;
    pathname: string;
    route: string;
    name: "CLS" | "INP" | "LCP" | "FCP" | "FID" | "TTFB";
    id: string;
    value: number;
    rating: "good" | "needs-improvement" | "poor";
}, {
    pathname: string;
    route: string;
    name: "CLS" | "INP" | "LCP" | "FCP" | "FID" | "TTFB";
    id: string;
    value: number;
    rating: "good" | "needs-improvement" | "poor";
}>;
export type ClientMetric = z.input<typeof ClientMetricSchema>;
export {};
