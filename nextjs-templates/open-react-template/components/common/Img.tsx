import { FC, MouseEventHandler } from "react";

import Image, { StaticImageData } from "next/image";

type ImgProps = React.HTMLAttributes<HTMLDivElement> & {
  alt?: string;
  aspect?: number | string;
  className?: string;
  color?: string;
  height?: number | string;
  objectFit?: "fill" | "contain" | "cover" | "none" | "scale-down";
  onClick?: MouseEventHandler<HTMLDivElement>;
  placeholder?: "blur" | "empty" | undefined;
  quality?: number;
  radius?: number;
  size?: number | string;
  src?: string | StaticImageData;
  unoptimized?: boolean;
  width?: number | string;
  imgClassName?: string;
};

const Img: FC<ImgProps> = ({
  alt,
  aspect,
  color,
  className,
  height,
  objectFit,
  onClick,
  placeholder,
  quality,
  radius,
  size,
  src,
  unoptimized,
  width,
  imgClassName,
  ...props
}: ImgProps) => {
  return (
    <div
      className={`relative flex h-full w-full cursor-pointer ${className || ""} ${
        color || "bg-indigo-100 dark:bg-gray-800 "
      }`}
      onClick={onClick}
      style={{
        width: width || size,
        height: height || size,
        aspectRatio: aspect,
        borderRadius: radius,
      }}
      {...props}
    >
      <Image
        src={src ?? ""}
        alt={alt || "img"}
        fill
        quality={quality}
        unoptimized={unoptimized}
        sizes="100%"
        placeholder={placeholder}
        loading="lazy"
        className={imgClassName ? imgClassName : ""}
        style={{
          objectFit: objectFit || "cover",
          borderRadius: radius,
        }}
      />
    </div>
  );
};

export { Img };
