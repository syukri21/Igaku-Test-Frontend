import React from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import { Router, Switch } from "react-router-dom"
import { createBrowserHistory } from "history"
import { IRoute } from "./routes"
import routes from "./routes"
import { Route, Redirect } from "react-router-dom"
import GlobalSnackbar from "./components/GlobalSnackbar/GlobalSnackbar"
import Api from "./api/api"

const browserHistory = createBrowserHistory()

function App() {
    return (
        <>
            <CssBaseline />
            <Router history={browserHistory}>
                <Switch>
                    {routes.map((route: IRoute, key: number) => {
                        const Component = route.Component
                        const Loading = route.Loading
                        const protect = route.Protected
                        const path = route.path
                        const hasToken = !!Api.getToken()
                        return (
                            <Route
                                key={key}
                                path={path}
                                render={(matchProps) => {
                                    if (protect && !hasToken) return <Redirect to='/login'></Redirect>
                                    return (
                                        <React.Suspense fallback={Loading}>
                                            <Component {...matchProps} />
                                        </React.Suspense>
                                    )
                                }}
                            />
                        )
                    })}
                </Switch>
            </Router>
            <GlobalSnackbar></GlobalSnackbar>
        </>
    )
}

export default App
