import Image from "next/image";
import Link from "next/link";

export default function PublicationPreview({ title, image, children }) {
  return (
    <div className="md:mt-[10rem] mt-[5rem] pb-12">
      <section className="md:pt-24 md:pb-28 py-16 border-b border-gray-200">
        <div className="max-w-5xl md:mx-18 mx-6">
          <h1 className="md:text-8xl text-5xl font-bold leading-none">{title}</h1>
        </div>
      </section>

      <section className="border-b border-gray-200">
        <div className="max-w-6xl md:mx-auto mx-6 px-1 py-8 text-sm text-gray-500">
          <Link href="/">Home</Link>
          <span className="mx-2">→</span>
          <Link href="/works/publications" className="ml-1 hover:underline">
            Publications
          </Link>
          <span className="mx-2">→</span>
          <span className="text-black font-semibold">{title}</span>
        </div>
      </section>

      <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden">
        <Image
          src={image}
          alt={title}
          priority
          className="w-full aspect-[5/3] object-cover"
        />
      </div>

      {children ? (
        <section className="md:py-24 py-14">
          <div className="mx-auto max-w-4xl px-6 text-gray-700 space-y-7 leading-8 text-lg font-medium">
            {children}
          </div>
        </section>
      ) : null}
    </div>
  );
}
