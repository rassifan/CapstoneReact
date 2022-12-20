import React from "react"
import Trivia from "./Trivia"
import Home from "./Home"

export default function App(){
    const [start, setStart] = React.useState(false)
    
    function Starting(){
        setStart(prevStart => prevStart = true)
        return(
            start
        )
    }
    
    
    
    
    return(
         <main>
            <div className="trivia-container">
            {start ? <Trivia/> : <Home/>}
            </div>
            <button className="start-quiz" onClick={Starting}>Start Quiz</button>
        </main>
    )
}