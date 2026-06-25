import { useLanguage } from "../context/LanguageProvider";

export default function NotFound() {
  const { t } = useLanguage();
  return (
    <main>
        <h2>404</h2>
        <p>{t("notFound.text")}</p>
    </main>
  )
}
