
import { Helmet } from "react-helmet-async";

const SITE_URL = "https://eliteglobaltransit.com";

export default function SEO({
  title = "Elite Global Transit | Global Shipping & Logistics",
  description = "Elite Global Transit provides reliable international shipping, freight forwarding, cargo transportation and global logistics solutions.",
  path = "/",
  image = "/images/seo-cover.jpg",
  noIndex = false,
  schema = null,
}) {
  const canonical = `${SITE_URL}${path}`;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Elite Global Transit",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description,
  };

  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />

      <meta
        name="robots"
        content={
          noIndex
            ? "noindex, nofollow"
            : "index, follow"
        }
      />

      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Elite Global Transit" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={`${SITE_URL}${image}`} />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${SITE_URL}${image}`} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schema || organizationSchema)}
      </script>
    </Helmet>
  );
}
