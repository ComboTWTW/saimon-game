import React, { useState } from 'react'
import {button} from '../constants/style'

const Game = () => {

    function timeout(ms:number) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    const colors:string[] = ["green","red","yellow","blue"];

    type game = {
        gameStarted: boolean;
        score: number;
    }

    const [game, setGame] = useState<game>({
        gameStarted: false,
        score: 0,
    });

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
        for (let i = 0; i < origMoves.length; i++) {
            setTimeout(function timer() {
                setTimeout(() => document.getElementById(`${origMoves[i]}`)?.classList.add("opacity-50"), 500);
                setTimeout(() => {document.getElementById(`${origMoves[i]}`)?.classList.remove("opacity-50")}, 1000);
            }, i * 1000);
        }
    }

    let checked = origMoves.length;
    const checkingTime = (id:string) => {
        if(id === origMoves[origMoves.length - checked]) {
            console.log("That push was right");
            checked -= 1;
            if(checked === 0) {
                startGame();
            }
        } else {
            console.log("You lose");
            setOrigMoves([]);
            stopGame();
        }
    }

    const stopGame = () => {
        setGame({...game, gameStarted: false});
    }


  return (
    <div className='mt-12 flex flex-col items-center'>
        {/* Game Block */}
        <div className="flex min-w-sm flex-col columns-2 gap-12">
            {/* Score Header */}
            <h2 className='text-white text-3xl self-center '>Your score is: </h2>
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