import { useEffect, useRef } from 'react'

export const DomRef = () => {
    //the ! in fornt of the null does the same thing as the ? in front of the current(if it was replaced with the other)
    //input elemnt type is that.
    const inputRef = useRef<HTMLInputElement>(null!);

    useEffect(() => {
        inputRef.current.focus()
    }, [])
  return (
    <div>
        <input type="text" ref={inputRef} />
    </div>
  )
}
