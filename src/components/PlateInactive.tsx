import { button } from '../constants/style'

const PlateInactive = () => {
  return (
    <div className="flex flex-col gap-5">
        <div className="flex flex-row gap-5">
            <div className={`${button.green} bg-greenCard cursor-default`}></div>
            <div className={`${button.red} bg-redCard cursor-default`}></div>
        </div>
        <div className="flex flex-row gap-5">
            <div className={`${button.green} bg-yellowCard cursor-default`}></div>
            <div className={`${button.red} bg-blueCard cursor-default`}></div>
        </div>
    </div>
  )
}

export default PlateInactive