import { useState, useReducer } from 'react'
import PlateActive from './PlateActive';
import PlateInactive from './PlateInactive';
import Stats from './Stats';
import { blueSound, greenSound, yellowSound, redSound, errorSound } from '../assets/index'

const Game = () => {

    const colors:string[] = ["green","red","yellow","blue"];

    enum GameActionKind {
        toggleGame = 'toggleGame',
        setScore = 'setScore',
        setRecord = 'setRecord',
        pushMoves = 'pushMoves',
        setShine = 'setShine',
      }

    interface GameAction {
        type: string;
        payload?: any;
    }

    interface GameState {
        gameStarted: boolean;
        score: number;
        record: number;
        shine: boolean;
    }
    
    const gameReducer = (state: GameState, action: GameAction) => {
        const { type, payload } = action;
        switch(type) {
            case GameActionKind.toggleGame:
                return {...state, gameStarted: payload};
            case GameActionKind.setScore:
                return {...state, score: payload};
            case GameActionKind.setRecord:
                return {...state, record: state.score};
            case GameActionKind.setShine:
                return {...state, shine: payload};
            default:
                return state;
        };
    }

    const [state, dispatch] = useReducer(gameReducer, { 
        gameStarted: false,
        score: 0,
        record: 0,
        shine: false,
    })

    const [origMoves, setOrigMoves] = useState<string[]>([]);

    const startGame = () => {
        dispatch({type: GameActionKind.toggleGame, payload: true});
        console.log("Game started. Moves: " + origMoves);
        fillMoves();
        console.log("moves were filled: " + origMoves);
        shiningTurn(origMoves);
        
    };

    const fillMoves = () => origMoves.push(colors[Math.floor(Math.random()*colors.length)]);

    const playAudio = (id: string) => {
        switch(id) {
            case 'green':
                new Audio(greenSound).play();
                break
            case 'red':
                new Audio(redSound).play();
                break
            case 'yellow':
                new Audio(yellowSound).play();
                break
            case 'blue':
                new Audio(blueSound).play();
                break
        }
    }

    async function shiningTurn(origMoves:string[]){
        dispatch({type: GameActionKind.setShine, payload: true});
        let promise = new Promise((resolve, reject) => {
            for (let i = 0; i < origMoves.length; i++) {
                setTimeout(function timer() {
                    setTimeout(() => playAudio(origMoves[i]), 700);
                    setTimeout(() => document.getElementById(`${origMoves[i]}`)?.classList.add("opacity-50"), 700);
                    setTimeout(() => {document.getElementById(`${origMoves[i]}`)?.classList.remove("opacity-50")}, 900);
                    setTimeout(() => i + 1 === origMoves.length && resolve(""), 1000);
                }, i * 550)
            }
        });

        await promise;
        dispatch({type: GameActionKind.setShine, payload: false});
        console.log(state.shine);
        console.log("shining is done");
    }

    let checked = origMoves.length;
    const checkingTime = (id:string) => {
        if(!state.shine){
            if(id === origMoves[origMoves.length - checked]) {
                console.log("That push was right");
                playAudio(id);
                checked -= 1;
                if(checked === 0) {
                    dispatch({type: GameActionKind.setScore, payload: state.score + 1})
                    startGame();
                }
            } else {
                new Audio(errorSound).play();
                console.log("You lose");
                stopGame(true);
            }
        }
    }

    const stopGame = (lose:boolean):void => {
        dispatch({type: GameActionKind.setShine, payload: false});
        setOrigMoves([]);
        state.score > state.record && dispatch({type: GameActionKind.setRecord});
        dispatch({type: GameActionKind.setScore, payload: 0})
        lose ? setTimeout(() => dispatch({type: GameActionKind.toggleGame, payload: false}), 250) : dispatch({type: GameActionKind.toggleGame, payload: false});
    }


  return (
    <div className='mt-12 flex flex-col items-center'>
        {/* Game Block */}
        <div className="flex min-w-sm flex-col columns-2 gap-12">
            {/* Score and Record Header */}
            <Stats score={state.score} record={state.record}/>
            {/* Game Plate */}
            {!state.gameStarted 
            ? <PlateInactive /> 
            : <PlateActive shine={state.shine} checkingTime={checkingTime}/>
            }
            {/* Start Button */}
            <button disabled={state.gameStarted} className={`bg-white w-[70%] self-center text-black text-3xl tracking-widest font-semibold py-3 rounded-[10px] active:bg-white active:text-cardDark ${state.gameStarted && `opacity-25 active:bg-white active:text-black focus:outline-none`}`} onClick={state.gameStarted ? () => stopGame(false) : startGame}>
                START
            </button>
        </div>
        {/* Game Block End*/}
    </div>
  )
}

export default Game