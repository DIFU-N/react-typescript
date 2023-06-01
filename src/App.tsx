import Button from "./components/Button"
import Greet from "./components/Greet"
import { Heading } from "./components/Heading"
import { Input } from "./components/Input"
import { Oscar } from "./components/Oscar"
import Person from "./components/Person"
import PersonList from "./components/PersonList"
import { Status } from "./components/Status"
import { StylesContainer } from "./components/StylesContainer"
import { Private } from "./components/auth/Private"
import { Public } from "./components/auth/Profile"
import { ClassCounter } from "./components/class/Counter"
import { MutableRef } from "./components/ref/MutableRef"
import { Counter } from "./components/state/Counter"
import { LoggedIn } from "./components/state/LoggedIn"

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
      <Button handleClick={(event, id)=> {
        console.log('button clicked', event, id);
      }} />
      <Input value="" handleChange={(event) => console.log('this shii', event)} />
      <StylesContainer styles={{border: '3px solid black', color: 'darkseagreen'}} />
      <LoggedIn />
      <Counter />
      <MutableRef />
      <ClassCounter message="this is how legends are made!" />
      <Private isLoggedIn={true} Component={Public} />
    </div>
  )
}

export default App
