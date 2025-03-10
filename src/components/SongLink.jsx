/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

export default function SongLink({song, textShadow}) {
  return (
    <Link to={song.linkPath}>
        <img src={song.imgSrc} alt={`${song.title} ${song.comment}`} />
        <div className="flex songLink">
            <b className={`allCaps ${textShadow}`}>{song.title}</b><span>&gt;</span>
        </div>
        {song.comment && (
        <div className='flex songLinkSub'>
            <span className={`allCaps ${textShadow}`}>{song.comment}</span>
        </div>
        )}
    </Link>
  )
}
