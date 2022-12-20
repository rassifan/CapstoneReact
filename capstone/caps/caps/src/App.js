import React from "react"
import {Route, Routes} from "react-router-dom"

import Header from "./components/Header"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"

function App() {    
    console.log("reached here")
    return (
        <div>
            <Header />
            <Routes>
                <Route exact path="/">
                    <Photos />
                </Route>
                
                <Route path="/cart">
                    <Cart />
                </Route>
            </Routes>
        </div>
    )
}

export default App