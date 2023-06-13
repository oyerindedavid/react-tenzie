import { useEffect, useState } from 'react';
import './App.css';
import Die from "./Die/Die";
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti'

function App() {

  const [dice, setDice] = useState(allNewDice());
  const [tenzies, setTenzies] =  useState(false)

  useEffect((_) =>{
     const allHeld = dice.every(die => die.isHeld)
     const firstValue = dice[0].value
     const allSameValue = dice.every(dice => dice.value === firstValue) //if every dice dice has value equals to the first value
     if(allHeld && allSameValue){
        setTenzies(true)
        console.log("You won!")
     }
  }, [dice])

  function generateNewDie(){
    return {
      value: Math.ceil(Math.random() * 6), 
      isHeld:false,
      id: nanoid()
    }
  }

  function allNewDice(){
       const newDice = []
       for(let i = 0; i < 10; i++){
           let dieData = generateNewDie()
           newDice.push(dieData)
        }
        return(newDice);
  }
 
  const diceWidget = dice.map(die => <Die 
       value={die.value} 
       isHeld={die.isHeld}
       updateDice={()=>updateDice(die)}
       key={die.id}
        />)

  function rollDice(){
    if(!tenzies){
      setDice((prevDice) =>{
        return prevDice.map((die)=>{
          return die.isHeld === false ?
          generateNewDie()
          : die
        })
    })
    }else{
      setTenzies(false)
      setDice(allNewDice)
    }
  }

  function updateDice(selectedDie){
    
    setDice((prevDice) =>{
      return prevDice.map((die)=>{
        return die.id === selectedDie.id ?
            {...die, isHeld: !selectedDie.isHeld}
        : die
      })
    })
  }

  return (
    <div className='container'>
      {tenzies && <Confetti/>}
      <h1 className='title'>Tenzies</h1>
      <div className='instruction'>
        Roll until all dice are the same. Click each die to freeze it at its current
        value between rolls.
      </div>
        <div className='boxes'>
          {diceWidget}
        </div>
        <div className='button roll-dice' onClick={rollDice}>
            { tenzies ? "New game" : "Roll"}
        </div>
    </div>
  );
}

export default App;
