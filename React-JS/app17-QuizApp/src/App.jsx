import { useState } from "react";
import "./App.css";
import { questions } from "./Questions";

function App() {
  // console.log(questions);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  console.log(questions[questionIndex]);

  const handleSubmit = (ans) => {
    console.log(ans);
    setQuestionIndex(questionIndex + 1);
    if (questions[questionIndex].correctAnswer == ans) {
      setScore(score + 1);
    }
    // if (questionIndex == 4) {
    //   alert("Quiz Completed");
    // }
  };

  return (
    <>
      {questionIndex < 5 ? (
        <>
          <h1>{questions[questionIndex].question}</h1>

          <ul>
            {questions[questionIndex].options.map((ans, i) => (
              <li
                key={i}
                onClick={() => {
                  handleSubmit(ans);
                }}
              >
                {ans}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <>
          <h1>Quiz Completed</h1>
          <h2>Your score Is : {score}</h2>
        </>
      )}
    </>
  );
}

export default App;
