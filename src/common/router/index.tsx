import {
  Navigate,
    createBrowserRouter,
  } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import NewsPage from "../../pages/NewsPage";
import ProfilePage from "../../pages/ProfilePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/news",
    element: <NewsPage/>,
  },
  {
    path: "/profile",
    element: <ProfilePage/>,
  },
  {
    path:"*",
    element: <Navigate to="/" replace />
  }
]);

export default router;