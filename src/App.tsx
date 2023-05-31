import Greet from "./components/Greet"
import Person from "./components/Person"
import PersonList from "./components/PersonList"

function App() {
  const personName = {
    first: 'Bruce',
    last: 'Banner'
  }
  const nameList = [
    {
      first: 'Bruce',
      last: 'Banner'
    },
    {
      first: 'Stiles',
      last: 'Stilinski'
    },
    {
      first: 'Mike',
      last: 'Ross'
    },
  ]
  return (
    <div>
      <Greet name='People' messageCount={5} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
    </div>
  )
}

export default App
