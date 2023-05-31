import React from 'react'

type StylesProps = {
    styles: React.CSSProperties
}

export const StylesContainer = (props: StylesProps) => {
  return (
    <div style={props.styles}>StylesContainer</div>
  )
}
