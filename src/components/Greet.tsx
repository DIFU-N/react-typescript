//use types when building applications and interfaces when building libraries
type GreetProps = {
  name: string,
  messageCount: number,
  isLoggedIn: boolean,
}

const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>
        {props.isLoggedIn ? 
        `Welcome ${props.name}!! Ive been drinking more alcohol for the past ${props.messageCount} days`
        : 'Welcome, but I do not know that man'}
      </h2>
    </div>
  )
}

export default Greet