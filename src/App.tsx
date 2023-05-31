import Greet from "./components/Greet"

function App() {
  return (
    <div>
      <Greet name='People' messageCount={5} isLoggedIn={true} />
    </div>
  )
}

export default App
