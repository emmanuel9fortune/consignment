
import React from "react";
import { Helmet } from "react-helmet-async";

const SITE_URL = "https://eliteglobaltransit.com";

function makeAbsoluteUrl(value) {
  if (!value) return "";

  if (/^https?:\/\//i.test(value)) {
    return value;
  }

  return `${SITE_URL}${value.startsWith("/") ? "" : "/"}${value}`;
}

function SEO({
  title = "Global Shipping & Logistics",
  description = "Elite Global Transit provides shipping, logistics and transportation solutions.",
  path = "/",
  image = "/og-image.jpg",
  noIndex = false,
}) {
  const normalizedPath = path.startsWith("/")
    ? path
    : `/${path}`;

  const canonicalUrl =
    normalizedPath === "/"
      ? `${SITE_URL}/`
      : `${SITE_URL}${normalizedPath.replace(/\/+$/, "")}`;

  const fullTitle = `${title} | Elite Global Transit`;

  const imageUrl = makeAbsoluteUrl(image);

  const robotsContent = noIndex
    ? "noindex, nofollow"
    : "index, follow";

  return React.createElement(
    Helmet,
    null,

    // Basic SEO
    React.createElement("title", null, fullTitle),

    React.createElement("meta", {
      name: "description",
      content: description,
    }),

    React.createElement("meta", {
      name: "robots",
      content: robotsContent,
    }),

    // Canonical URL
    React.createElement("link", {
      rel: "canonical",
      href: canonicalUrl,
    }),

    // Open Graph
    React.createElement("meta", {
      property: "og:type",
      content: "website",
    }),

    React.createElement("meta", {
      property: "og:site_name",
      content: "Elite Global Transit",
    }),

    React.createElement("meta", {
      property: "og:title",
      content: fullTitle,
    }),

    React.createElement("meta", {
      property: "og:description",
      content: description,
    }),

    React.createElement("meta", {
      property: "og:url",
      content: canonicalUrl,
    }),

    React.createElement("meta", {
      property: "og:image",
      content: imageUrl,
    }),

    // Twitter / X Cards
    React.createElement("meta", {
      name: "twitter:card",
      content: "summary_large_image",
    }),

    React.createElement("meta", {
      name: "twitter:title",
      content: fullTitle,
    }),

    React.createElement("meta", {
      name: "twitter:description",
      content: description,
    }),

    React.createElement("meta", {
      name: "twitter:image",
      content: imageUrl,
    })
  );
}

export default SEO;
