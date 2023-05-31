import React from "react"

type InputProps = {
    value: string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = (props: InputProps) => {
    //this keeps the eventchange fxn the same, whether it's passed in or not
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event);
    }
  return (
    <div>
        <input type="text" value={props.value} onChange={handleInputChange}/>
    </div>
  )
}
