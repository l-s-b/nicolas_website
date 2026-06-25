import { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageProvider';

export default function UseTitle({defaultTitle = "N I C O L Á S"}) {
    const location = useLocation();
    const { t } = useLanguage();

    useEffect(() => {
        const titles = {
            "/": "",
            "/tienda": t("title.store"),
            "/postalesTour": t("title.postales"),
            "/songs": t("title.songs"),
            "/404": t("title.404")
        };
        let prefix = titles[location.pathname];
        if (location.pathname.includes("/songs/")) {
            prefix = t("title.song");
        }
        document.title = prefix + defaultTitle;
    }, [location, defaultTitle, t]);
}
