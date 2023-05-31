type OscarProps = {
    //this is the type used for react components 
    children: React.ReactNode
}

export const Oscar = (props: OscarProps) => {
  return (
    <div>{props.children}</div>
  )
}
