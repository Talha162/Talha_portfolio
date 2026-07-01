import { profile } from "@/data/portfolio";

/**
 * React 19 hoists <title>/<meta>/<link> rendered anywhere in the tree to <head>.
 * Static tags already live in index.html; this keeps the document title
 * dynamic without react-helmet.
 */
export function SEO() {
  return (
    <>
      <title>{`${profile.name} — Senior Flutter Developer`}</title>
      <meta
        name="description"
        content="Senior Flutter Developer with 3+ years of experience building scalable, cross-platform mobile apps across food delivery, healthcare, fintech, and construction domains."
      />
    </>
  );
}
