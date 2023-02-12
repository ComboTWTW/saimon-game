import React from 'react'

const Game = () => {

    const color:string[] = ["green","red","yellow","blue"];

    type game = {
        playerTurn: boolean;
        moves: string[];
        score: number;
    }

  return (
    <div className='mt-16 flex flex-col items-center'>
        
        <div className="flex min-w-sm flex-col columns-2 gap-5">

            <h2 className='text-white text-3xl self-center mb-5'>Your score is: </h2>

            <div className="flex flex-row gap-5">
                <div id='green' className="bg-greenCard w-32 h-32 cursor-pointer active:opacity-50"></div>
                <div id='red' className="bg-redCard w-32 h-32 cursor-pointer active:opacity-50"></div>
            </div>
            <div className="flex flex-row gap-5">
                <div id='yellow' className="bg-yellowCard w-32 h-32 cursor-pointer active:opacity-50"></div>
                <div id='blue' className="bg-blueCard w-32 h-32 cursor-pointer active:opacity-50"></div>
            </div>
        
        </div>

    </div>
  )
}

export default Game