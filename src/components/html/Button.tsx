
type ButtonProp = {
    variant: 'primary' | 'secondary'
    //the react comp props were added so the defined react props for the btn component can be used
} & React.ComponentProps<'button'> 

export const CustomButton = ({variant, children, ...rest}: ButtonProp) => {
  return (
    <button className={`class-with-${variant}`} {...rest}>{children}</button>
  )
}
