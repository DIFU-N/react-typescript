import React from "react";

type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

//it is also possible to use Props by destructuring the InputProps obj as so:
export const Input = ({value, handleChange}: InputProps) => {
  //this keeps the eventchange fxn the same, whether it's passed in or not
  // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log(event);
  // };
  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
};

// export const Input = (props: InputProps) => {
//     //this keeps the eventchange fxn the same, whether it's passed in or not
//     const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         console.log(event);
//     }
//   return (
//     <div>
//         <input type="text" value={props.value} onChange={handleInputChange}/>
//     </div>
//   )
// }
