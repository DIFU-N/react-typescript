import { useState } from "react"

type AuthUser = {
    name: string,
    email: string,
}

export const LoggedIn = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [userDetails, setUserDetails] = useState<AuthUser | null>(null);
    const handleLogIn = () => {
        setIsLoggedIn(true)
        setUserDetails({
            name: 'Ted Lasso',
            email: 'teddylong@teddywestside.tm'
        })
    }
    const handleLogOut = () => {
        setIsLoggedIn(false)
        setUserDetails(null);
    }
  return (
    <div>
        <button onClick={handleLogIn}>Log In</button>
        <button onClick={handleLogOut}>Log Out</button>
        <div>User is {isLoggedIn ? 'okay, and logged in' : 'okay, and not logged in'}</div>
        <div>
            <h2>User name is {userDetails?.name}</h2>
            <h2>User email is {userDetails?.email}</h2>
        </div>
    </div>
  )
}
