import Game from "./components/Game"


const App = () => {
  return (
    <div className="bg-veryDark min-h-screen w-full flex flex-col items-center">
      <h1 className="text-white text-5xl text-center mt-6">The Simon Game</h1>

      <Game />

      <div className="mt-16"></div>
    </div>
  )
}

export default App