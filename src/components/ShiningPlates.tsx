import { button } from '../constants/style'

interface Props {
    id: string[];
}

const ShiningPlates = ({id}:Props) => {
    const color1: string = id[0];
    const color2: string = id[1];
  return (
    <div className="flex flex-row gap-5">
        <div id={`${color1}`} className={`${button.green} bg-${color1}Card cursor-default`}></div>
        <div id={`${color2}`} className={`${button.red} bg-${color2}Card cursor-default`}></div>
    </div>
  )
}

export default ShiningPlates