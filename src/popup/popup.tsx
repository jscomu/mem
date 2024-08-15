import React, {useState} from 'react'
import { createRoot } from 'react-dom/client'
import './popup.css'
import ComCard from './comCard'

const cardImages = [
  {"src" : "/img/sym1.png", matched : false},
  {"src" : "/img/sym2.png", matched : false},
  {"src" : "/img/sym3.png", matched : false},
  {"src" : "/img/sym4.png", matched : false},
  {"src" : "/img/sym5.png", matched : false},
  {"src" : "/img/sym6.png", matched : false}
]

const App: React.FC<{}> = () => {

  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)

  const btnExe = () => {
    //카드 섞기
    const shuffled = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card_src) => ({id: Math.random(), ...card_src}))
    //console.log(shuffled)
    setCards(shuffled)
    setTurns(0)
  }

  return (
    <div>
      <h1>메모리게임</h1>
      <button onClick={btnExe}>시작</button>

      <div className='card-grid'>
        {cards.map(card => (
          <ComCard
            key={card.id}
            card={card}
          />
        ))}
      </div>
    </div>
  )
}

const container = document.createElement('div')
document.body.appendChild(container)
const root = createRoot(container)
root.render(<App />)
