/**
 * Renders markup extracted 1:1 from the approved Google Stitch design
 * mockups (see /content/*.ts). Keeping these sections as verbatim markup
 * preserves pixel-fidelity to the approved design while the CMS-backed
 * pieces (contact form, Ask Viky AI, admin) are built as real React
 * components elsewhere.
 */
export default function StaticHtml({ html }: { html: string }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
