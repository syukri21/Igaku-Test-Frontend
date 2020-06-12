import React from "react"
import CssBaseline from "@material-ui/core/CssBaseline"

import Todo from "./pages/todo"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"

function App() {
    return (
        <>
            <CssBaseline />
            <Login></Login>
        </>
    )
}

export default App
