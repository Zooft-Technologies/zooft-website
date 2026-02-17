"use client";

import Image, { type ImageProps } from "next/image";
import { useState, useEffect } from "react";

const FALLBACK_SVG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect fill='%23E8F8F5' width='800' height='600'/%3E%3Crect x='370' y='258' width='60' height='44' rx='4' fill='none' stroke='%2316A085' stroke-width='2'/%3E%3Ccircle cx='385' cy='272' r='4' fill='%2316A085'/%3E%3Cpath d='M374 294l12-14 8 9 6-5 14 10' fill='none' stroke='%2316A085' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Ctext x='400' y='326' text-anchor='middle' font-family='system-ui,sans-serif' font-size='14' fill='%2316A085'%3EImage unavailable%3C/text%3E%3C/svg%3E";

export default function ImageWithFallback({
  src,
  alt = "",
  ...props
}: ImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setImgSrc(src);
    setHasError(false);
  }, [src]);

  return (
    <Image
      {...props}
      src={hasError ? FALLBACK_SVG : imgSrc}
      alt={alt}
      unoptimized={hasError}
      onError={() => {
        if (!hasError) {
          setHasError(true);
        }
      }}
    />
  );
}
