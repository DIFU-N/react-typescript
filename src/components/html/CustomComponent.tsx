//let's say you want thsi comp to have the same prop types as the Greet component props
//this is how we do it

import Greet from "../Greet"

export const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
  return (
    <div>
        CustomComponent
        {props.name}
        {props.messageCount}
        {props.isLoggedIn}
    </div>
  )
}
