
type InputProps = React.ComponentProps<'input'>

export const CustomInput = (props: InputProps) => {
  return (
    <input type="text" {...props} />
  )
}
