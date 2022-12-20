import React from "react"
import Header from "./components/Header"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"
import { Route, Routes, Switch} from "react-router-dom"

function App() {    
    return (
        <Routes>
        <div>
            <Header />
            <h1>Home Page</h1>
        </div>
        <Route path="/"> <Cart/> </Route>
        <Route path="/cart"> <Photos/> </Route>
        </Routes>
        
    )
}

export default App