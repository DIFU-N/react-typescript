export type PublicProps = {
    name: string
}

export const Public = ({name}: PublicProps) => {
    return <div>Private Profile Component + {name}</div>
}