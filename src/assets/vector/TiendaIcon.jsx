/* eslint-disable react/prop-types */
export default function TiendaIcon({size, themeClass}) {
  return (
    <svg
        className={themeClass}
        width={size}
        height={size}
        fill="none"
        viewBox="-3 -2 30 30"
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M5 9C5 7.89543 5.89543 7 7 7H17C18.1046 7 19 7.89543 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z" />
        <path d="M15 7V6C15 4.34315 13.6569 3 12 3V3C10.3431 3 9 4.34315 9 6V7" />
        <path d="M9 11L9 12C9 13.6569 10.3431 15 12 15V15C13.6569 15 15 13.6569 15 12L15 11" />
    </svg>
  )
}
