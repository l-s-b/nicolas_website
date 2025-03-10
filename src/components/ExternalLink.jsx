/* eslint-disable react/prop-types */
function ExternalLink({to, children}) {
  return (
    <a
        href={to}
        target="_blank"
        rel="noreferrer noopener"
    >
        {children}
    </a>
  )
}

export default ExternalLink