import React, { useState } from 'react'

const Game = () => {

    const color:string[] = ["green","red","yellow","blue"];

    type game = {
        playerTurn: boolean;
        moves: string[];
        score: number;
        turnCount: number;
    }

    const [game, setGame] = useState<game>({
        playerTurn: false,
        moves: [],
        score: 0,
        turnCount: 0,
    });

    const startGame = () => {
        setGame({...game, playerTurn: true});
        
    };

  return (
    <div className='mt-12 flex flex-col items-center'>
        
        <div className="flex min-w-sm flex-col columns-2 gap-12">
            {/* Score Header */}
            <h2 className='text-white text-3xl self-center '>Your score is: </h2>
            {/* Game Plate */}
            <div className="flex flex-col gap-5">
                <div className="flex flex-row gap-5">
                    <div id='green' className="bg-greenCard w-32 h-32 cursor-pointer active:opacity-50"></div>
                    <div id='red' className="bg-redCard w-32 h-32 cursor-pointer active:opacity-50"></div>
                </div>
                <div className="flex flex-row gap-5">
                    <div id='yellow' className="bg-yellowCard w-32 h-32 cursor-pointer active:opacity-50"></div>
                    <div id='blue' className="bg-blueCard w-32 h-32 cursor-pointer active:opacity-50"></div>
                </div>
            </div>
            {/* Start Button */}
            <button className='bg-cardDark w-[70%] self-center text-white text-3xl tracking-widest py-3 rounded-[10px] active:bg-white active:text-cardDark' onClick={startGame}>
                {game.playerTurn ? "STOP" : "START"}
            </button>
        </div>

    </div>
  )
}

export default Game