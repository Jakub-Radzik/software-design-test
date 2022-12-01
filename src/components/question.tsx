import { QuestionType } from "../types/Question";
import "./question.css";

export const Question = ({ id, question, answers, img }: QuestionType) => {
  return (
    <div className="question-block">
      <div className="question-header">{question}</div>
      {img && <img src={`images/${img}`} alt="alternative" />}
      <div className="question-answers">
        {answers.map(answer => {
          return (
            <div
              className={`question-answer ${
                answer.correct ? "answer-correct" : ""
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
