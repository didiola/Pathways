"use client";
import Image from "next/image";
import Link from "next/link";

export default function ProjectLayout({
  title,
  imageSrc,
  breadcrumb = [],
  children,
}) {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-4 space-x-1">
        {breadcrumb.map((crumb, index) => (
          <span key={index}>
            {crumb.href ? (
              <Link href={crumb.href} className="hover:underline">
                {crumb.label}
              </Link>
            ) : (
              <span className="text-black">{crumb.label}</span>
            )}
            {index < breadcrumb.length - 1 && (
              <span className="mx-1">&gt;</span>
            )}
          </span>
        ))}
      </nav>

      {/* Title */}
      <h1 className="text-4xl font-bold mb-8">{title}</h1>

      {/* Image */}
      {imageSrc && (
        <div className="mb-10">
          <Image
            src={imageSrc}
            alt={title}
            className="rounded-lg object-cover w-full h-auto"
          />
        </div>
      )}

      {/* Content */}
      <div className="prose prose-lg max-w-none text-gray-800">{children}</div>
    </div>
  );
}
