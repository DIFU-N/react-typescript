//use types when building applications and interfaces when building libraries
type GreetProps = {
  name: string,
  // optional props settings ? infront of defined prop
  messageCount?: number,
  isLoggedIn: boolean,
}

const Greet = (props: GreetProps) => {
  const {messageCount = 0 } = props;
  // if messageCount is passed in use that value, else use 0
  return (
    <div>
      <h2>
        {props.isLoggedIn ? 
        `Welcome ${props.name}!! Ive been drinking more alcohol for the past ${messageCount} days`
        : 'Welcome, but I do not know that man'}
      </h2>
    </div>
  )
}

export default Greet