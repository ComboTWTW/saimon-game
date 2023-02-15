import React, { useState } from 'react'
import {button} from '../constants/style'

const Game = () => {

    const colors:string[] = ["green","red","yellow","blue"];

    type game = {
        gameStarted: boolean;
    }

    const [game, setGame] = useState<game>({
        gameStarted: false,
    });

    const [score, setScore] = useState<number>(0);
    const [record, setRecord] = useState<number>(0);
    const [origMoves, setOrigMoves] = useState<string[]>([]);

    const startGame = () => {
        setGame({...game, gameStarted: true});
        console.log("Game started. Moves: " + origMoves);
        fillMoves(origMoves);
        console.log("moves were filled: " + origMoves);
        shiningTurn(origMoves);
        
    };

    const fillMoves = (origMoves:string[]) => {
        origMoves.push(colors[Math.floor(Math.random()*colors.length)]);
        
    }


    const shiningTurn = (origMoves:string[]) => {
        let shine = true;
        for (let i = 0; i < origMoves.length; i++) {
            setTimeout(function timer() {
                setTimeout(() => document.getElementById(`${origMoves[i]}`)?.classList.add("opacity-50"), 500);
                setTimeout(() => {document.getElementById(`${origMoves[i]}`)?.classList.remove("opacity-50")}, 750);
            }, i * 850);
        }
        shine = false;
    }

    let checked = origMoves.length;
    const checkingTime = (id:string) => {
        if(id === origMoves[origMoves.length - checked]) {
            console.log("That push was right");
            checked -= 1;
            if(checked === 0) {
                setScore(score + 1);
                startGame();
            }
        } else {
            console.log("You lose");
            stopGame();
        }
    }

    const stopGame = () => {
        setOrigMoves([]);
        score > record && setRecord(score);
        setScore(0);
        setGame({...game, gameStarted: false});
    }


  return (
    <div className='mt-12 flex flex-col items-center'>
        {/* Game Block */}
        <div className="flex min-w-sm flex-col columns-2 gap-12">
            {/* Score and Record Header */}
            <div className="flex flex-row justify-between">
                <h2 className='text-white text-3xl self-center '>Score: {score}</h2>
                <h2 className='text-white text-3xl self-center '>Record: {record}</h2>
            </div>
            {/* Game Plate */}
            <div className="flex flex-col gap-5">
                <div className="flex flex-row gap-5">
                    <div id='green' className={`${button.green}`} onClick={() => checkingTime("green")}></div>
                    <div id='red' className={`${button.red}`} onClick={() => checkingTime("red")}></div>
                </div>
                <div className="flex flex-row gap-5">
                    <div id='yellow' className={`${button.yellow}`} onClick={() => checkingTime("yellow")}></div>
                    <div id='blue' className={`${button.blue}`} onClick={() => checkingTime("blue")}></div>
                </div>
            </div>
            {/* Start Button */}
            <button className='bg-cardDark w-[70%] self-center text-white text-3xl tracking-widest py-3 rounded-[10px] active:bg-white active:text-cardDark' onClick={game.gameStarted ? stopGame : startGame}>
                {game.gameStarted ? "STOP" : "START"}
            </button>
        </div>
        {/* Game Block End*/}
    </div>
  )
}

export default Game