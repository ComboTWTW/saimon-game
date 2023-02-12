import Game from "./components/Game"


const App = () => {
  return (
    <div className="bg-veryDark min-h-screen w-full flex flex-col items-center">
      <h1 className="text-white text-5xl mt-10">The Simon Game</h1>

      <Game />
    </div>
  )
}

export default App