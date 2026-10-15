import Image from "next/image";

export function FramedImage({
  src,
  alt,
  width,
  height,
  priority = false,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
}) {
  return (
    <div className="relative">
      <div
        className="absolute -left-3 top-3 hidden h-full w-full border-4 border-yellow sm:block"
        aria-hidden="true"
      />
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className="relative h-auto w-full object-cover"
      />
    </div>
  );
}
