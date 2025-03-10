/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import '../assets/css/VerMas.css'

export default function VerMas({path}) {
  return (
    <Link className="allCaps" id="verMas" to={path}>
      Ver más
    </Link>
  )
}
