import React, {useState} from 'react'
import { useEffect } from 'react'
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
  const [choice1st, setChoice1st] = useState(null)
  const [choice2rd, setChoice2rd] = useState(null)

  const btnExe = () => {
    //카드 섞기
    const shuffled = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card_src) => ({id: Math.random(), ...card_src}))
    //console.log(shuffled)
    setCards(shuffled)
    setTurns(0)
  }

  const handleChoice = (card) => {
    //console.log(card)
    choice1st ? setChoice2rd(card) : setChoice1st(card)
  }

  useEffect(() => {
    if(choice1st && choice2rd) {  //카드 두개가 선택되어 있으면
      if(choice1st.src === choice2rd.src) {
        console.log("그림이 같다.")
        setCards(prevCards => { //그림이 맞은 카드는 matched true로 변경
          return prevCards.map(card => {
            if(card.src === choice1st.src) {
              return {...card, matched: true}
            } else {
              return card
            }
          })
        })
        resetTurn()
      } else {
        console.log("그림이 다르다.")
        setTimeout(() => resetTurn(), 1000) //틀렸을때 딜레이 1초
      }
    }
  }, [choice1st, choice2rd])

  const resetTurn = () => {
    setChoice1st(null)
    setChoice2rd(null)
    setTurns(prevTurns => prevTurns + 1)
  }

  const tryStyle = {color: 'blue', fontSize: '1.2rem'}

  return (
    <div>
      <h1>
        <span className='title'>메모리게임</span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span style={tryStyle}>Try : {turns}</span>
      </h1>
      <button onClick={btnExe}>시작</button>

      <div className='card-grid'>
        {cards.map(card => (
          <ComCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choice1st || card === choice2rd || card.matched}
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
