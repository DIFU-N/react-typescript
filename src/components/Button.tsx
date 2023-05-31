import React from "react"

type ButtonProp = {
    //react type for buttonclick
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}

const Button = (props: ButtonProp) => {
  return (
    <div>
        <button onClick={(event) => props.handleClick(event, 1)}>Click Here, right now</button>
    </div>
  )
}

export default Button