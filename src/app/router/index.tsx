import { createBrowserRouter } from "react-router-dom";
import Main from "../../pages/Main/Main";
import Movie from "../../pages/Movie/Movie";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
    },
    {
        path: "/movie/:movie",
        element: <Movie />,
    }
])
export default router