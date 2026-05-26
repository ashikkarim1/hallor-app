interface VideoEmbedProps {
  src: string
  type?: 'youtube' | 'mp4'
  title?: string
}

export default function VideoEmbed({ src, type = 'youtube', title }: VideoEmbedProps) {
  if (type === 'youtube') {
    const videoId = src.includes('youtube.com')
      ? src.split('v=')[1]?.split('&')[0]
      : src.split('youtu.be/')[1]?.split('?')[0]

    return (
      <div className="relative w-full aspect-video bg-black rounded overflow-hidden border border-gray-700">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=0`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    )
  }

  return (
    <div className="relative w-full aspect-video bg-black rounded overflow-hidden border border-gray-700">
      <video
        className="w-full h-full object-cover"
        controls
        muted
        title={title}
      >
        <source src={src} type="video/mp4" />
        Your browser doesn't support video.
      </video>
    </div>
  )
}
