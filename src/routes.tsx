import React from "react"

// const Settings = React.lazy(() => import("../Pages/Settings/Settings"))
const Login = React.lazy(() => import("./pages/login"))
const Register = React.lazy(() => import("./pages/register"))
const Todo = React.lazy(() => import("./pages/todo"))

export interface RouteRedirect {
    roleId: number
    to: string
}

export interface IRoute {
    Component: ((props: any) => JSX.Element) | React.SFC<any>
    Loading: ((props: any) => JSX.Element) | React.SFC<any> | null
    exact: boolean
    path: string
    Protected: boolean
    redirect?: RouteRedirect[]
}

const routes: IRoute[] = [
    {
        Component: Register,
        Loading: null,
        exact: true,
        path: "/register",
        Protected: false,
    },
    {
        Component: Login,
        Loading: null,
        exact: true,
        path: "/login",
        Protected: false,
    },
    {
        Component: Todo,
        Loading: null,
        exact: true,
        path: "/todo",
        Protected: false,
    },
    {
        Component: Login,
        Loading: null,
        exact: false,
        path: "/",
        Protected: false,
    },
]

export default routes
