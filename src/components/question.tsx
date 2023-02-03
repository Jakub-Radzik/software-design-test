import { QuestionType } from "../types/Question";
import "./question.css";
import { useState } from "react";



export const Question = ({ id, question, answers, img, pattern }: QuestionType) => {
  
  const [show, setShow] = useState(false)
  return (
    <div className="question-block" onClick={() => setShow(!show)}>
      <div className="question-header">{question}</div>
      {img && <img src={`images/${img}`} alt="alternative" />}
      <div className="question-answers">
        {answers.map(answer => {
          return (
            <div
              className={`question-answer ${
                answer.correct && show ? "answer-correct" : ""
              }`}
            >
              {answer.content}
            </div>
          );
        })}
      </div>
    </div>
  );
};
