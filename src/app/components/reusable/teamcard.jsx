import Image from "next/image";

export default function TeamCard({ name, title, bio, imgSrc }) {
  return (
    <div className="w-full relative group overflow-hidden rounded-xl shadow-lg">
      {/* Image */}
      <div className="relative h-96 w-full overflow-hidden">
        {imgSrc ? (
          <Image
            src={imgSrc}
            alt={name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="bg-gray-200 w-full h-full rounded-xl z-0 " />
        )}
        {/* Bio Overlay */}
        <div className="absolute inset-0 bg-[#F4C06B] text-black p-4 opacity-0 group-hover:opacity-95 transition-opacity duration-300 flex items-center justify-center text-sm text-center z-10">
          <p>{bio}</p>
        </div>
      </div>

      {/* Text */}
      <div className="p-3 bg-white">
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-sm text-gray-500">{title}</p>
      </div>
    </div>
  );
}
