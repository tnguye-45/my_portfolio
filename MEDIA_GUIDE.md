# Adding photos and videos

The portfolio media lives in `lib/portfolio-media.ts`.

## Photos

1. Put image files in `public/photos`.
2. Add an entry to `photoGallery` in `lib/portfolio-media.ts`.
3. Use a public path for the source:

```ts
{
  id: "street-portrait",
  title: "Street Portrait",
  category: "Portrait",
  src: "/photos/street-portrait.jpg",
  aspect: "portrait",
}
```

Supported photo aspects are `portrait`, `landscape`, and `square`.

## Videos

1. Put video files in `public/videos`.
2. Put poster/thumbnail images in `public/video-thumbnails`.
3. Add `videoSrc` and optional `thumbnail` to `featuredVideo` or one of the `videos` entries:

```ts
{
  id: "event-recap",
  title: "Event Recap",
  client: "Nightlife",
  duration: "1:12",
  videoSrc: "/videos/event-recap.mp4",
  thumbnail: "/video-thumbnails/event-recap.jpg",
}
```

For YouTube or Vimeo, use an embeddable URL instead:

```ts
{
  id: "demo-reel",
  title: "Demo Reel",
  client: "Featured Video",
  duration: "0:58",
  embedUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
}
```
