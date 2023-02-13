import React, { useState } from 'react'
import {button} from '../constants/style'

const Game = () => {

    const colors:string[] = ["green","red","yellow","blue"];

    type game = {
        gameStarted: boolean;
        score: number;
    }

    const [game, setGame] = useState<game>({
        gameStarted: false,
        score: 0,
    });


    let moves:string[] = [];
    let turnCount = 1;
    const startGame = () => {
        setGame({...game, gameStarted: true});
        movesFilling();
        setTimeout(() => shining(moves), 1000);
        console.log("shining done");
        console.log(moves);
        console.log(moves);
        //checking time

    };

    const movesFilling = () => {
        const fillMoves = (moves:string[], turnCount:number) => {
            while(moves.length < turnCount) {
                console.log(moves.length);
                console.log(turnCount);
                moves.push(colors[Math.floor(Math.random()*colors.length)])
                console.log(moves.length);
                console.log(turnCount);
             }
        }
        fillMoves(moves, turnCount);
        console.log("moves were filled");

    }

    const shining = (moves:string[]) => {
        moves.map((move:string) => {
            let shine:Boolean = true;
            shine && document.getElementById(`${move}`)?.classList.add("opacity-60");
            setTimeout(() => {shine = false; document.getElementById(`${move}`)?.classList.remove("opacity-60")}, 500);
        })
    }
    shining(moves);


    const checkingTime = (id:string) => {
        let checked = turnCount;
        while(checked != 0) {
            if(id === moves[-1]) {
                console.log("you're right for that push");
                checked -= 1;
                if (checked === 0) {
                    break;
                }
            } else {
                console.log("you lose");
                setGame({...game, gameStarted: false});
                break;
            }
        }
        console.log("checking ends");
        if(checked != 0) {setTimeout(() => movesFilling(), 1000);
        shining(moves);}
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
        {/* Game Block */}
    </div>
  )
}

export default Game