"use client"

import { useState } from "react"
import Image from "next/image"
import { Play, Film, X } from "lucide-react"
import { featuredVideo, videos, type VideoItem } from "@/lib/portfolio-media"

export function VideoReel() {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null)

  return (
    <section id="video" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-accent font-mono text-sm tracking-widest uppercase mb-4">
            <Film className="h-4 w-4" />
            Videography
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
            Moving Pictures
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-pretty">
            Cinematic storytelling that brings brands and ideas to life.
          </p>
        </div>

        {/* Featured Video */}
        <div className="mb-12">
          <VideoPoster
            video={featuredVideo}
            isFeatured
            onSelect={setSelectedVideo}
          />
          <p className="text-center mt-4 text-muted-foreground">
            {featuredVideo.videoSrc || featuredVideo.embedUrl
              ? `Watch my ${featuredVideo.title}`
              : "Add your demo reel in lib/portfolio-media.ts"}
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video) => (
            <article
              key={video.id}
              className="group relative bg-card rounded-xl overflow-hidden border border-border hover:border-accent/50 transition-all"
            >
              <VideoPoster video={video} onSelect={setSelectedVideo} />
              
              <div className="p-4">
                <h3 className="font-medium group-hover:text-accent transition-colors">
                  {video.title}
                </h3>
                <p className="text-sm text-muted-foreground">{video.client}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedVideo && (
        <VideoModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />
      )}
    </section>
  )
}

function VideoPoster({
  video,
  isFeatured = false,
  onSelect,
}: {
  video: VideoItem
  isFeatured?: boolean
  onSelect: (video: VideoItem) => void
}) {
  const canPlay = Boolean(video.videoSrc || video.embedUrl)

  return (
    <button
      type="button"
      onClick={() => canPlay && onSelect(video)}
      className={`relative aspect-video w-full bg-secondary overflow-hidden border border-border group ${
        isFeatured ? "rounded-xl" : "rounded-none border-0"
      } ${canPlay ? "cursor-pointer" : "cursor-default"}`}
      aria-label={canPlay ? `Play ${video.title}` : `${video.title} video not added yet`}
    >
      {video.thumbnail ? (
        <Image
          src={video.thumbnail}
          alt={`${video.title} thumbnail`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes={isFeatured ? "100vw" : "(max-width: 768px) 100vw, 33vw"}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
          <span className="text-muted-foreground text-sm">
            {canPlay ? video.title : `Add video: ${video.title}`}
          </span>
        </div>
      )}

      <div className="absolute inset-0 flex items-center justify-center bg-background/20 transition-colors group-hover:bg-background/40">
        <div
          className={`rounded-full flex items-center justify-center transition-transform ${
            canPlay ? "bg-accent group-hover:scale-110" : "bg-card border border-border"
          } ${isFeatured ? "h-20 w-20" : "h-12 w-12"}`}
        >
          <Play
            className={`${isFeatured ? "h-8 w-8" : "h-5 w-5"} ${
              canPlay ? "text-accent-foreground" : "text-muted-foreground"
            } ml-1`}
          />
        </div>
      </div>

      <div className="absolute bottom-2 right-2 px-2 py-1 bg-background/80 rounded text-xs font-mono">
        {video.duration}
      </div>
    </button>
  )
}

function VideoModal({
  video,
  onClose,
}: {
  video: VideoItem
  onClose: () => void
}) {
  return (
    <div
      className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
        aria-label="Close video"
      >
        <X className="h-6 w-6" />
      </button>

      <div
        className="w-full max-w-5xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="aspect-video rounded-xl overflow-hidden bg-black border border-border">
          {video.embedUrl ? (
            <iframe
              src={video.embedUrl}
              title={video.title}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <video
              src={video.videoSrc}
              poster={video.thumbnail}
              controls
              autoPlay
              className="h-full w-full"
            />
          )}
        </div>

        <div className="mt-4 text-center">
          <p className="text-foreground font-medium text-lg">{video.title}</p>
          <p className="text-sm text-muted-foreground">{video.client}</p>
          {video.description && (
            <p className="mt-2 text-sm text-muted-foreground">{video.description}</p>
          )}
        </div>
      </div>
    </div>
  )
}
