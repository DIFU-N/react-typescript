
// type ButtonProp = {
//     variant: 'primary' | 'secondary'
//     //the react comp props were added so the defined react props for the btn component can be used
// } & React.ComponentProps<'button'> 

//if you wanted to use custom types that have already been defined in the React Element Props
//you use omit
type ButtonProp = {
    variant: 'primary' | 'secondary'
    children: string // define the prop type you want to use
    //the react comp props were added so the defined react props for the btn component can be used
} & Omit<React.ComponentProps<'button'>, 'children'> 


export const CustomButton = ({variant, children, ...rest}: ButtonProp) => {
  return (
    <button className={`class-with-${variant}`} {...rest}>{children}</button>
  )
}
