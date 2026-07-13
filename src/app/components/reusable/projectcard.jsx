"use client";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({
  title,
  image,
  href,
  imageClassName = "w-full h-76 object-cover",
}) {
  const isExternal = href.startsWith("http");

  const cardContent = (
    <>
      <Image src={image} alt={title} className={imageClassName} />
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <span className="text-sm text-gray-500 group-hover:underline inline-flex items-center">
          Read more
          <span className="ml-1">→</span>
        </span>
      </div>
    </>
  );

  const cardStyles =
    "group block rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300";

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cardStyles}
      >
        {cardContent}
      </a>
    );
  }

  return (
    <Link href={href} className={cardStyles}>
      {cardContent}
    </Link>
  );
}
