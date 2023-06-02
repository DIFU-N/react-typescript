// So what is the ‘Polymorphic Component’?
// In a few words, it is a component that lets us specify which React element we want to use for its root.
import React from 'react'


type TextOwnProps<E extends React.ElementType> = {
    size?: 'sm' | 'md' | 'lg'
    color?: 'primary' | 'secondary'
    children: React.ReactNode
    as?: E
}
//but React.component props is a generic type and we stil have to figure out which react element component proops to use
// type TextProps = TextOwnProps & React.ComponentProps

//but when this happens, you create room for duplicate types like children, size and color,
// so the best thing would be to exclude all the types already listed in the TextOWnProps type
// type TextProps<E extends React.ElementType> = TextOwnProps<E> & React.ComponentProps<E>

//with the omit utility tag
type TextProps<E extends React.ElementType> = TextOwnProps<E> & 
 Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>

// with changing each element for each component call, div would have to be replaced 
//React.elementtype = 'div' sets div as the default elemnt type, if as isn't included as a prop
export const Text = <E extends React.ElementType = 'div'> ({ size, color, children, as }: TextProps<E>) => {
    const Component = as || 'div'
  return (
    // the htmlFor prop would throw an error in App.tsx, because Component is not yet capable of handling html elemnt props
    <Component className={`class-with-${size}-${color}`}>{children}</Component>
  )
}
