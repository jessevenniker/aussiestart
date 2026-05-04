/**
 * JsonLd — injects a JSON-LD structured data block via react-helmet-async.
 *
 * Usage:
 *   <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", ... }} />
 *
 * Multiple schemas on one page: pass an array in @graph, or render multiple <JsonLd>.
 */
import { Helmet } from 'react-helmet-async'

export default function JsonLd({ data }) {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(data)}
      </script>
    </Helmet>
  )
}
