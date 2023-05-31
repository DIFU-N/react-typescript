//use types when building applications and interfaces when building libraries
type GreetProps = {
  name: string
}

const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>Welcome {props.name}!! Ive been drinking more alcohol for the past 5 days</h2>
    </div>
  )
}

export default Greet