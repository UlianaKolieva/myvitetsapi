import { createBrowserRouter } from "react-router-dom";
import Main from "../../pages/Main/Main";
import Movie from "../../pages/Movie/Movie";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
    },
    {
        path: "/settings",
        element: <Movie />,
    }
])
export default router