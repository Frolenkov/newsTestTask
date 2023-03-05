import { useTranslation } from "react-i18next";

const Profile = () => {
    const { t } = useTranslation();
    return <div>{t("profile")}</div>
}

export default Profile;