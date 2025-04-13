import { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

export default function UseTitle({defaultTitle = "N I C O L Á S"}) {
    const location = useLocation();

    useEffect(() => {
        const titles = {
            "/": "",
            "/postalesTour": "Postales Tour | ",
            "/songs": "Canciones | ",
            "/superSecretNewsletterPage": "SECRET! Newsletter | ",
            "/404": "404 | "
        };
        let prefix = titles[location.pathname];
        if (location.pathname.includes("/songs/")) {
            prefix = "Canción | ";
        }
        document.title = prefix + defaultTitle;
    }, [location, defaultTitle]);
}
