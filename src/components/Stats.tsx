
interface Props {
    score: number;
    record: number;
}

const Stats = ({score, record}:Props) => {
  return (
    <div className="flex flex-row justify-between">
        <h2 className='text-white text-3xl self-center '>Score: {score}</h2>
        <h2 className='text-white text-3xl self-center '>Record: {record}</h2>
    </div>
  )
}

export default Stats