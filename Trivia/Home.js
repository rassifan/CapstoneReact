import React from "react"
import Trivia from "./Trivia"
import Home from "./Home"
import Ans from "./Ans"

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
            {start ? <Trivia/>: <Home/>}
            </div>
            <div className = "btn-c">
            <button className="start-quiz" onClick={Starting}>{start ? "Check Answers" : "Start Quiz" }</button>
            </div>
        </main>
    )
}