const onRequest = async ({ params, url }, next) => {
  const response = await next();
  const contentType = response.headers.get("Content-Type");
  if (contentType !== "text/html") return response;
  const webVitalsMetaTag = getMetaTag(url, params);
  return new Response(
    response.body?.pipeThrough(new TextDecoderStream()).pipeThrough(HeadInjectionTransformStream(webVitalsMetaTag)).pipeThrough(new TextEncoderStream()),
    response
  );
};
function HeadInjectionTransformStream(htmlToInject) {
  let hasInjected = false;
  return new TransformStream({
    transform: (chunk, controller) => {
      if (!hasInjected) {
        const headCloseIndex = chunk.indexOf("</head>");
        if (headCloseIndex > -1) {
          chunk = chunk.slice(0, headCloseIndex) + htmlToInject + chunk.slice(headCloseIndex);
          hasInjected = true;
        }
      }
      controller.enqueue(chunk);
    }
  });
}
function getMetaTag(url, params) {
  let route = url.pathname;
  for (const [key, value] of Object.entries(params)) {
    if (value) route = route.replace(value, `[${key}]`);
  }
  route = miniEncodeAttribute(stripTrailingSlash(route));
  return `<meta name="x-astro-vitals-route" content="${route}" />`;
}
function stripTrailingSlash(str) {
  return str.length > 1 && str.at(-1) === "/" ? str.slice(0, -1) : str;
}
function miniEncodeAttribute(str) {
  return str.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}
export {
  onRequest
};
