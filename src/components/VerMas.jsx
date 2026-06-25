/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import '../assets/css/VerMas.css'
import { useLanguage } from '../context/LanguageProvider'

export default function VerMas({path}) {
  const { t } = useLanguage();
  return (
    <Link className="allCaps" id="verMas" to={path}>
      {t("songs.seeMore")}
    </Link>
  )
}
