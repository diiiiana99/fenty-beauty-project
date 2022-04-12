import React from 'react'

function VideoPlayer({src}) {
  return (
    <div>
      <iframe
        title={src}
        src={src}
        className={`resp-iframe-2`}
        width="640"
        height="360"
        frameborder="0"
        wedkitallowfullscreen
        mozallowfullscreen
        allowfullscreen
        allow="autoplay; fullscreen"
        controls= "0"
      >

      </iframe>
    </div>
  )
}

export default VideoPlayer
