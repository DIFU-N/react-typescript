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
import { List } from "./components/generics/List"
import { Toast } from "./components/template literals/Toast"
import { CustomButton } from "./components/html/Button"

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
      <List items={['okay', 'this', 'is']} onClick={(item) => console.log(item)} />
      {/* in a situation where you want to pass any type of array as a prop , this would not work */}
      {/* this is where generic types are introduced */}
      <List items={[1,2,3,3,5]} onClick={(item) => console.log(item)} />
      <List items={[{
        name: 'asko',
        age: 12
      }, {
        name: 'asxx',
        age: 22
      }, {
        name: 'minl',
        age: 39
      }]} onClick={(item) => console.log(item)} />
      <Toast position="center" />
      <CustomButton variant="primary">
        Are you ready?
      </CustomButton>
    </div>
  )
}

export default App
