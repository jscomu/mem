import React from 'react'
import './comCard.css'

type Card = {
    id: string
    src: string
}

interface ComCardProps {
    card:Card
    handleChoice(card:Card):void
    flipped:boolean
}

const ComCard:React.FC<ComCardProps> = ({card, handleChoice, flipped}) => {

    const clickCard = () => {
        handleChoice(card)
    }
    return (
        <div className='card'>
            <div className={flipped ? "flipped" : ""}>
                <img className='front' src={card.src} alt='card front' />
                <img className='back' src='/img/back.png' onClick={clickCard} alt='card back' />
            </div>
        </div>
    )
}

export default ComCard