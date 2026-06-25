/* eslint-disable react/prop-types */
import '../assets/css/Switch.css';
import { useLanguage } from '../context/LanguageProvider';

export default function Switch({ switchClass }) {
  const { lang, toggleLang } = useLanguage();
  return (
    <span className="switch">
      <input id="switch-input" type="checkbox" checked={lang === "en"} onChange={toggleLang} />
      <label id="switch-label" htmlFor="switch-input" className={switchClass}></label>
    </span>
  )
}
