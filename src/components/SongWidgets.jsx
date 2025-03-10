/* eslint-disable react/prop-types */
export const WidgetSpotify = ({url, size}) => (
    <iframe
        style={{
            border: 'none',
            overflow: 'hidden',
            borderRadius: '12px'
        }}
        src={url}
        width="100%"
        height={size === 'small' ? 152 : 352}
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
    ></iframe>
)

export const WidgetYouTube = ({url}) => (
    <iframe
        style={{
            border: 'none',
            overflow: 'hidden',
            aspectRatio: "16/9"
        }}
        width="100%"
        src={url}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
    ></iframe>
)