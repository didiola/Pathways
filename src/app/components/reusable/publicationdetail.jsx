import PublicationPreview from "@/app/components/reusable/publicationpreview";
import { getPublicationBySlug } from "@/app/works/publications/publication-content";

export default function PublicationDetail({ slug }) {
  const publication = getPublicationBySlug(slug);

  if (!publication) {
    return <div className="md:mt-[10rem] mt-[5rem] px-6 py-12">Publication not found.</div>;
  }

  return (
    <PublicationPreview
      title={publication.title}
      image={publication.heroImage ?? publication.image}
    >
      {(publication.article ?? publication.paragraphs.map((text) => ({ type: "paragraph", text }))).map((block) => {
        if (block.type === "heading") {
          return (
            <h2 key={block.text} className="pt-6 text-3xl font-bold leading-tight text-black">
              {block.text}
            </h2>
          );
        }

        if (block.type === "link") {
          return (
            <p key={block.text}>
              <a
                href={block.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-green-700 underline"
              >
                {block.text}
              </a>
            </p>
          );
        }

        return <p key={block.text}>{block.text}</p>;
      })}
    </PublicationPreview>
  );
}
