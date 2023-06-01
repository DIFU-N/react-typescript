import { Login } from "./Login"
import { PublicProps } from "./Profile"

type PrivateProps = {
    isLoggedIn: boolean,
    Component: React.ComponentType<PublicProps>
}

export const Private = ({isLoggedIn, Component}: PrivateProps) => {
    if (isLoggedIn) {
        return <Component name="Minso"/>
    } else {
        return <Login />
    }
}