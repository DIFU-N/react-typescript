//this swouldnt be sufficient as all 3 boolean props could be passed in ,causing tScript to cry and we don't want that
// export const RandomeNumber = ({value, isPositive, isNegative, isZero}: RandomNumberProps) => {
//     return (
//         <div>
//             {value} {isPositive && 'positive'} {isNegative && 'negative'}{' '}
//             {isZero && 'zero'} 
//         </div>
//     )
// }
// hence
type ValueType = {
    value: number
}

//apparently, never is a type.. crazy
type PositiveNumber = ValueType & {
    isPositive: boolean,
    isNegative: never,
    isZero: never,
}
type NegativeNumber = ValueType & {
    isPositive: never,
    isNegative: boolean,
    isZero: never,
}
type Zero = ValueType & {
    isPositive: never,
    isNegative: never,
    isZero: boolean,
}

type RandomNumberProps = PositiveNumber | NegativeNumber | Zero

export const RandomeNumber = ({value, isPositive, isNegative, isZero}: RandomNumberProps) => {
    return (
        <div>
            {value} {isPositive && 'positive'} {isNegative && 'negative'}{' '}
            {isZero && 'zero'} 
        </div>
    )
}