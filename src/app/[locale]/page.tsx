import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function HomePage() {
  const t = useTranslations();
  return (
    <div>
      <Link href="/admin">{t("dashboard.dashboard")}</Link>
    </div>
  );
}
