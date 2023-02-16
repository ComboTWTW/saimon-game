import { useState } from 'react'
import { button } from '../constants/style'
import PlateActive from './PlateActive';
import PlateInactive from './PlateInactive';
import Stats from './Stats';

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
    const [shine, setShine] = useState<boolean>(false);

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

    async function shiningTurn(origMoves:string[]){
        setShine(true);
        let promise = new Promise((resolve, reject) => {
            for (let i = 0; i < origMoves.length; i++) {
                setTimeout(function timer() {
                    console.log(i);
                    console.log(shine);
                    setTimeout(() => document.getElementById(`${origMoves[i]}`)?.classList.add("opacity-50"), 500);
                    setTimeout(() => {document.getElementById(`${origMoves[i]}`)?.classList.remove("opacity-50")}, 750);
                    setTimeout(() => i + 1 === origMoves.length && resolve(""), 1000);
                   
                }, i * 850)
            }
        });

        await promise;
        setShine(false);
        console.log(shine);
        console.log("shining is done");
    }

    let checked = origMoves.length;
    const checkingTime = (id:string) => {
        if(!shine){
        if(id === origMoves[origMoves.length - checked]) {
            console.log("That push was right");
            checked -= 1;
            if(checked === 0) {
                setScore(score + 1);
                startGame();
            }
        } else {
            console.log("You lose");
            stopGame(true);
        }
    }
    }

    const stopGame = (lose:boolean):void => {
        setShine(false);
        setOrigMoves([]);
        score > record && setRecord(score);
        setScore(0);
        lose ? setTimeout(() => setGame({...game, gameStarted: false}), 500) : setGame({...game, gameStarted: false});
    }


  return (
    <div className='mt-12 flex flex-col items-center'>
        {/* Game Block */}
        <div className="flex min-w-sm flex-col columns-2 gap-12">
            {/* Score and Record Header */}
            <Stats score={score} record={record}/>
            {/* Game Plate */}
            {!game.gameStarted 
            ? <PlateInactive /> 
            : <PlateActive shine={shine} checkingTime={checkingTime}/>
            }
            {/* Start Button */}
            <button className='bg-cardDark w-[70%] self-center text-white text-3xl tracking-widest py-3 rounded-[10px] active:bg-white active:text-cardDark' onClick={game.gameStarted ? () => stopGame(false) : startGame}>
                {game.gameStarted ? "STOP" : "START"}
            </button>
        </div>
        {/* Game Block End*/}
    </div>
  )
}

export default Game