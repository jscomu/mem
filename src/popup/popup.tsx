import React from 'react'
import { createRoot } from 'react-dom/client'
import './popup.css'

const App: React.FC<{}> = () => {

  const btnExe = () => {
    console.log("버튼눌렀다.")
  }

  return (
    <div>
      <h1>메모리게임</h1>
      <button onClick={btnExe}>시작</button>
    </div>
  )
}

const container = document.createElement('div')
document.body.appendChild(container)
const root = createRoot(container)
root.render(<App />)
