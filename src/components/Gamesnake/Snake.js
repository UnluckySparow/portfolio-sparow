import React, { useRef, useState } from 'react'

const  canvasX = 320
const  canvasY = 320
const  initialSnake = [[4,10],[4,10]]
const  initialApple = [[4,10],[4,10]]
const scale = 50
const timedelay = 100 ; 
export default function Snake() { 
  const canvasRef = useRef(null);
  const [snake , setSnake] = useState(initialSnake)
  const [direction , setDirection] = useState([0,-1])
  const [apple , setApple] = useState(initialApple)
  const [delay , setDelay] = useState (0)
  // < number | null> (null)
  const [gameOver ,setGameOver] = useState(false)
  const [score , setScore] = useState(0);
  // intreval(()=> runGame(),delay);
  function checkCollision (head){
    for (let i = 0 ; i < head.length ; i++ ){
      if(head[i]<0 || head[i] * scale >= canvasX )
      return true
    }
    for (const s of head) {
      if(head[0] === s[0] && head[1] === s[1])
      return true
    }
    return false
  }
  function runGame(){
      const newSnake = [...snake];
      const newSnakeHead = [newSnake[0][0] + direction[0] , newSnake[0][1] + direction[1]];
      newSnake.unshift(newSnakeHead);
      if(checkCollision(newSnakeHead)){
        setDelay(null);
        setGameOver(true);
      }
  }

  return (
    
    <div className='pagecurrent col-md-9'>
      <div className='container_snake'>
        <div className='scorediv'>
          <h4>Score : {score}</h4>
        </div>
        {/* onKeyDown={(e => changedirection(e))} */}
        <div className='nokia_mock' >
              <canvas className='espace_playing' ref={canvasRef} width={`${canvasX}px`} height={`${canvasY}px`} />
              <button>Play !</button>
        </div>
      </div>
      {gameOver && <div className='gameOver'>Game Over !</div>}
       
    </div>
  )
    
}

