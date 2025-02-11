import React from "react";
import {createBrowserRouter} from "react-router-dom";
import Main from "./pages/Main.tsx";
import Layout from "./components/Layout.tsx";
import Login from "./pages/user/Login.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {index: true, element: <Main />},
            {path: "/login", element: <Login />}
        ],
    },
]);

export default router;