import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";
import { authSelector } from "./selectors";
import Profile from "../../modules/Profile";

const ProfilePage = () => {
    const { isAuth } = useAppSelector(authSelector)
    return <>
        {isAuth ? <Profile /> : <Navigate to="/" replace />}
    </>
}
export default ProfilePage;