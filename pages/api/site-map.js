const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");

export default async (req, res) => {
  // An array with your pages.
  const links = [
    { url: "/", changefreq: "daily", priority: 1 },
    { url: "/gallery", changefreq: "daily", priority: 0.8 },
    { url: "/dataScience", changefreq: "daily", priority: 0.7 },
    { url: "/graphicsDesign", changefreq: "daily", priority: 0.7 },
    { url: "/digitalMarketing", changefreq: "daily", priority: 0.7 },
    { url: "/webDevelopment", changefreq: "daily", priority: 0.7 },
    { url: "/callCenterSupport", changefreq: "daily", priority: 0.7 },
    { url: "/callCenterSupport", changefreq: "daily", priority: 0.7 },
    { url: "/robotics", changefreq: "daily", priority: 0.7 },
    { url: "/contact", changefreq: "daily", priority: 0.7 },
  ]

  // Create a stream to write to
  const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });

  res.writeHead(200, {
    "Content-Type": "application/xml",
  });

  const xmlString = await streamToPromise(
    Readable.from(links).pipe(stream)
  ).then((data) => data.toString());

  res.end(xmlString);
};