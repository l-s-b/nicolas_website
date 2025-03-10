/* eslint-disable react/prop-types */
import '../assets/css/Separator.css';
export default function Separator({title, themeClasses}) {
  return (
    <>
        <h2 className={`${themeClasses.text} allCaps`} id="separatorTitle">{title}</h2>
        <div className={themeClasses.bg} id="separatorLine"></div>
    </>
  )
}
