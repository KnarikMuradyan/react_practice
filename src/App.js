import { useState } from 'react';
import './index.css';


export default function App() {
  return (
    <div className='App'>

      < FlashCards />
    </div>
  );
}

const questions = [
  {
    id: 1,
    country: "Armenia ",
    capitalCity: "Yerevan"

  },
  {
    id: 2,
    country: "Spain",
    capitalCity: "Madrid"

  },
  {
    id: 3,
    country: "Italy",
    capitalCity: "Rome"
  },
  {
    id: 4,
    country: "Japan",
    capitalCity: "Tokyo"
  },
  {
    id: 5,
    country: "China",
    capitalCity: "Beijing"
  },
  {
    id: 6,
    country: "Mexico",
    capitalCity: "Mexico"
  }

]

function FlashCards() {

  const [selectedId, setSelectedId] = useState(null);

  function handlerClick(id) {
    setSelectedId(id !== selectedId ? id : null)
  }
  return (
    <div className="flashcards">
      {
        questions.map((question) => (
          <div key={question.id} className={question.id === selectedId ? "selected" : ""} onClick={() => handlerClick(question.id)}>
            <p>{question.id === selectedId ? question.capitalCity : question.country}</p>
            
          </div>

        ))
      }

    </div>

  )
}