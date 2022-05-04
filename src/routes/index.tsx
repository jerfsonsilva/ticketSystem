import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PrivateUserMiddleware, PublicUserMiddleware } from "../middlewares";
import Dashboard from "../pages/Dashboard";
import { NotFound } from "../pages/Errors/NotFound";
import SignUp from "../pages/login/SignUp";
import SignIn from "../pages/login/SignIn";

type RouteItemType = {
    private?: boolean,
    path: string,
    element: React.ReactElement
}

export function AppRoutes() {
    const listRoutes: Array<RouteItemType> = [
        { path: '/', element: (<SignIn />) },
        { path: '/dashboard', element: (<Dashboard />), private: true },
        { path: '/register', element: (<SignUp />) },
        { path: '/*', element: (<NotFound />) }
    ]
    return (
        <Router>
            <Routes>
                {listRoutes.map((item, index) => {
                    const middleware = item.private ? PrivateUserMiddleware : PublicUserMiddleware;
                    return (
                        <Route path={item.path} key={index} element={middleware(item.element)} />
                    )
                })}
            </Routes>
        </Router>
    );
}
