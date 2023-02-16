import { button } from '../constants/style'


interface Props {
    shine: boolean;
    checkingTime: (arg0:string) => void;
}


const PlateActive = ({shine, checkingTime}:Props) => {
  return (
    <div className="flex flex-col gap-5">
                { !shine ? 
                <div className="flex flex-row gap-5">
                    <div id={`green`} className={`${button.red} bg-greenCard cursor-pointer`} onClick={() => checkingTime(`green`)}></div>
                    <div id={`red`} className={`${button.red} bg-redCard cursor-pointer`} onClick={() => checkingTime(`red`)}></div>
                </div> :
                <div className="flex flex-row gap-5">
                    <div id={`green`} className={`${button.green} bg-greenCard cursor-default`}></div>
                    <div id={`red`} className={`${button.red} bg-redCard cursor-default`}></div>
                </div>
                }
                { !shine ? 
                <div className="flex flex-row gap-5">
                    <div id={`yellow`} className={`${button.red} bg-yellowCard cursor-pointer`} onClick={() => checkingTime(`yellow`)}></div>
                    <div id={`blue`} className={`${button.red} bg-blueCard cursor-pointer`} onClick={() => checkingTime(`blue`)}></div>
                </div> :
                <div className="flex flex-row gap-5">
                    <div id={`yellow`} className={`${button.green} bg-yellowCard cursor-default`}></div>
                    <div id={`blue`} className={`${button.red} bg-blueCard cursor-default`}></div>
                </div>
                }
            </div>
  )
}

export default PlateActive