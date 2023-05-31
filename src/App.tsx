import Greet from "./components/Greet"
import { Heading } from "./components/Heading"
import { Oscar } from "./components/Oscar"
import Person from "./components/Person"
import PersonList from "./components/PersonList"
import { Status } from "./components/Status"

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
      <Status status="error" />
      <Heading>Placeholder Text</Heading>
      <Oscar>
        <Heading>Oscar Pistorious did that shii</Heading>
      </Oscar>
    </div>
  )
}

export default App
