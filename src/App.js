import React, { useState } from 'react'
import Tictac from './components/Tictac'
import './App.css'

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [count, setCount] = useState(0)
  const [winnerX, setWinnerX] = useState(0)
  const [winnerO, setWinnerO] = useState(0)

  let winnerArr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  function winner() {
    let s = count % 2 === 0 ? 'x' : 'o'
    for (let i = 0; i < 8; i++) {
      let line = winnerArr[i]
      if (
        squares[line[0]] === s &&
        squares[line[1]] === s &&
        squares[line[2]] === s
      ) {
        alert(s + ' winner')
        if (s === 'x') {
          setWinnerX(winnerX + 1)
        } else if (s === 'o') {
          setWinnerO(winnerO + 1)
        }
        setTimeout(() => {
          setSquares(Array(9).fill(null))
          setCount(0)
        }, 1000)
      }
    }
  }

  function handlerClick(e) {
    let data = e.target.getAttribute('data')
    let numSquares = squares
    console.log(numSquares)
    if (numSquares[data] === null) {
      numSquares[data] = count % 2 === 0 ? 'x' : 'o'
      setCount(count + 1)
      setSquares(numSquares)
    } else {
      alert('Ошибка, в поле есть символ')
    }
    winner()
  }

  return (
    <div className="App">
      <div className="container">
        <Tictac squares={squares} callback={handlerClick} />
        <div className="score">
          <h2>SCORE</h2>
          <p>Player 1: {winnerX}</p>
          <p>Player 2: {winnerO}</p>
          <button
            className="btnChange"
            onClick={() => {
              setCount(null)
              alert('You changed player 1 "X"')
            }}>
            Change Player 1
          </button>
          <button
            className="btnChange"
            onClick={() => {
              setCount(1)
              alert('You changed player 2 "O"')
            }}>
            Change Player 2
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
