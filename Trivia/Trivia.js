import React from "react"
import Ans from ".src/Ans"


export default function Trivia(props){ 
    const [trivia, setTrivia] = React.useState({})
    const [triviaData, setTriviaData] = React.useState([])
    
    React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5&category=11&difficulty=medium&type=multiple")
            .then(res => res.json())
            .then(data => setTriviaData(data.results))
    }, [])
    
    function getQuestion(){
        const res = [];
        for(let i = 0; i < 5; i++ ){
            const random = Math.floor(Math.random() * triviaData.length)
            res.push(triviaData[random]);
        };
        const newQuestions = {
            question: question.question,
            correct_answer: question.correct_answer,
            incorrect_answers: question.incorrect_answers
        }
        return trivia, res;
    }
    setTrivia(prevMeme => ({
            ...prevMeme,
            res
        }))
        
    const questionList = trivia.map(item =>{
        <div>
            <h1 className = "q-title">{item.question}</h1>
            <h2 className = "ans-choice">{item.incorrect_answers}</h2>
            <div className = "br"></div>
        </div>
    })
    return(
        <div className="q-body">
        {questionList}
        </div>
    )
}