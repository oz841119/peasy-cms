import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function HomePage() {
  const t = useTranslations();
  return (
    <div>
      <h1>{t("website.title")}</h1>
      <Link href="/about">{t("website.title")}</Link>
    </div>
  );
}
