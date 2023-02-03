import { QuestionType } from "../types/Question";
import "./question.css";
import { useState } from "react";



export const Question = ({ id, question, answers, img, pattern }: QuestionType) => {
  const [show, setShow] = useState(false)
  const [hidden, setHidden] = useState(localStorage.getItem(`question-${id}`) === "true");

  const toggleHidden = () => {
    setHidden(!hidden);
    localStorage.setItem(`question-${id}`, JSON.stringify(!hidden));
  }

  return (
    <div className="question-block" onClick={() => setShow(!show)}>
      <button className="hide-button" onClick={toggleHidden}>{hidden?"Show":"Hide"}</button>
      <div className="question-header">{question}</div>

      {hidden ? null : (
        <>
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
        </>
      )}
    </div>
  );
};
