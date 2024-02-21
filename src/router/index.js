import { createBrowserRouter } from "react-router-dom";
import Post from "../components/Post";
import Login from "../pages/login";
import App from "../App";
import Home from "../pages/home";
import EditPost from "../pages/editPost";
import EditReply from "../pages/editReply";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post/:id",
        element: <Post />,
      },
      { path: "/login", element: <Login /> },
      { path: "/editPost", element: <EditPost /> },
      { path: "/editReply", element: <EditReply /> },
    ],
  },
]);

export default router;
