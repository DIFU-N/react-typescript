import { useState } from "react"

type AuthUser = {
    name: string,
    email: string,
}

// export const LoggedIn = () => {
//     const [isLoggedIn, setIsLoggedIn] = useState(false)
//     const [userDetails, setUserDetails] = useState<AuthUser | null>(null);
//     const handleLogIn = () => {
//         setIsLoggedIn(true)
//         setUserDetails({
//             name: 'Ted Lasso',
//             email: 'teddylong@teddywestside.tm'
//         })
//     }
//     const handleLogOut = () => {
//         setIsLoggedIn(false)
//         setUserDetails(null);
//     }
//   return (
//     <div>
//         <button onClick={handleLogIn}>Log In</button>
//         <button onClick={handleLogOut}>Log Out</button>
//         <div>User is {isLoggedIn ? 'okay, and logged in' : 'okay, and not logged in'}</div>
//         <div>
//             <h2>User name is {userDetails?.name}</h2>
//             <h2>User email is {userDetails?.email}</h2>
//         </div>
//     </div>
//   )
// }

//in a situation where you know that the userDetails will never be null once the program runs, 
//then you can use useState Type Assertion to set the type to AuthUser allowing you to access userDetails 
// without the ? sign
export const LoggedIn = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [userDetails, setUserDetails] = useState<AuthUser>({} as AuthUser);
    const handleLogIn = () => {
        setIsLoggedIn(true)
        setUserDetails({
            name: 'Ted Lasso',
            email: 'teddylong@teddywestside.tm'
        })
    }
    //in this scenario, userDetails cannot be null so no logout needed
    // const handleLogOut = () => {
    //     setIsLoggedIn(false)
    //     setUserDetails(null);
    // }
  return (
    <div>
        <button onClick={handleLogIn}>Log In</button>
        {/* <button onClick={handleLogOut}>Log Out</button> */}
        <div>User is {isLoggedIn ? 'okay, and logged in' : 'okay, and not logged in'}</div>
        <div>
            <h2>User name is {userDetails.name}</h2>
            <h2>User email is {userDetails.email}</h2>
        </div>
    </div>
  )
}



