import React from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import { Switch } from "react-router-dom"
import { IRoute } from "./routes"
import routes from "./routes"
import { Route } from "react-router-dom"
import GlobalSnackbar from "./components/GlobalSnackbar/GlobalSnackbar"
import { HashRouter } from "react-router-dom"

// const browserHistory = createBrowserHistory()

function App() {
    return (
        <>
            <CssBaseline />
            <HashRouter>
                <Switch>
                    {routes.map((route: IRoute, key: number) => {
                        const Component = route.Component
                        const Loading = route.Loading
                        const path = route.path
                        return (
                            <Route
                                key={key}
                                path={path}
                                render={(matchProps) => {
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
            </HashRouter>
            <GlobalSnackbar></GlobalSnackbar>
        </>
    )
}

export default App
