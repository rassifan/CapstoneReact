import React from "react"
import Header from "./components/Header"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"
import { Route, Routes} from "react-router-dom"

function App() {    
    return (
        <div>
            <Header />
            <h1>Home Page</h1>
        <Routes>
        <Route path="/"> <Cart/> </Route>
        <Route path="/cart"> <Photos/> </Route>
        </Routes>
        </div>
        
    )
}

export default App