import { useState } from "react";
import "./App.css";
import { Background } from "./components/background";
import { Question } from "./components/question";
import data from "./result.json";
import { AnswerType, QuestionType } from "./types/Question";
import github from "./github.png";

function App() {
  const [jsonData, ] = useState(data as QuestionType[]);
  const [phrase, setPhrase] = useState<string>("");

  const filterCondition = (question: string) => {
    return question.toLowerCase().includes(phrase.toLowerCase());
  };

  const showAll = () => {
    localStorage.clear();
    window.location.reload()
  }
  
  function shuffleAnswers(array: Array<AnswerType>) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  return (
    <div className="App">
      <Background />
      <header>
        <div>Projektowanie Oprogramowania Testownik</div>
        <div className="stats">Pytań z odpowiedziami: {jsonData.length}</div>
      </header>
      <div className="version">
        1.2.0 <br /> GLHF
      </div>
      <a href="https://github.com/Jakub-Radzik">
        <img src={github} alt="github logo" className="gh" />
      </a>
      <div>
        <button onClick={showAll}>Show all</button>
        <input
          type="text"
          placeholder="Filter by question content..."
          value={phrase}
          onChange={(e) => setPhrase(e.target.value)}
        />
      </div>
      <div className="listing">
        {jsonData
          .filter((q) => filterCondition(q.question))
          .map((question) => {
            return (
              <Question
                key={question.id}
                pattern={question.pattern}
                id={question.id}
                question={question.question}
                answers={shuffleAnswers(question.answers)}
                img={question.img}
              />
            );
          })}
      </div>
    </div>
  );
}

export default App;
