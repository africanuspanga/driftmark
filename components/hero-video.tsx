"use client";

export function HeroVideo() {
  return (
    <video
      ref={(video) => {
        // React doesn't always set the DOM `muted` property from the prop,
        // and browsers block autoplay unless the property itself is true.
        if (video) {
          video.muted = true;
          video.play().catch(() => {
            // Autoplay blocked (e.g. Low Power Mode): the poster stays visible.
          });
        }
      }}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster="/hero-poster.jpg"
      aria-hidden="true"
      disablePictureInPicture
      className="absolute inset-0 h-full w-full object-cover"
    >
      <source src="/hero-video.mp4" type="video/mp4" />
    </video>
  );
}
