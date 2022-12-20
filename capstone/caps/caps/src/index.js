import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router} from "react-router-dom"
import PhotoContextProvider from "./context/PhotoContext"
import App from "./App"

ReactDOM.render(
    <PhotoContextProvider>
        <Router>
            <App />
        </Router>
    </PhotoContextProvider>, 
    document.getElementById("root")
)
