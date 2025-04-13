/* eslint-disable react/prop-types */
import '../assets/css/Switch.css';

export default function Switch({ switchClass }) {
  return (
    <span className="switch">
      <input id="switch-input" type="checkbox" />
      <label id="switch-label" htmlFor="switch-input" className={switchClass}></label>
    </span>
  )
}
