import React from 'react'

export default function Tictac({ squares, callback }) {
  return (
    <div>
      <div className="tic-tac">
        <div className="grid" onClick={callback} data="0">
          <span className="span">{squares[0]}</span>
        </div>
        <div className="grid" onClick={callback} data="1">
          <span className="span">{squares[1]}</span>
        </div>
        <div className="grid" onClick={callback} data="2">
          <span className="span">{squares[2]}</span>
        </div>
        <div className="grid" onClick={callback} data="3">
          <span className="span">{squares[3]}</span>
        </div>
        <div className="grid" onClick={callback} data="4">
          <span className="span">{squares[4]}</span>
        </div>
        <div className="grid" onClick={callback} data="5">
          <span className="span">{squares[5]}</span>
        </div>
        <div className="grid" onClick={callback} data="6">
          <span className="span">{squares[6]}</span>
        </div>
        <div className="grid" onClick={callback} data="7">
          <span className="span">{squares[7]}</span>
        </div>
        <div className="grid" onClick={callback} data="8">
          <span className="span">{squares[8]}</span>
        </div>
      </div>
    </div>
  )
}
