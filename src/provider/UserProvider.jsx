import React, { useState } from 'react'
import { UserContext } from '../context/UserContext'
 
export const UserProvider = ({children}) => {

    const [User, setUser] = useState({
        'username':'Guest',
        'password':'guest@123',
        'userrole':'guest'
    })

    const saveLoginDetails = (User) =>{
        setUser({
            username:User.username,
            password: User.password,
            userrole: User.userrole
        })
    }

  return (
    <>
        <UserContext.Provider value={{User, saveLoginDetails}}>
            {children}
        </UserContext.Provider>
    </>
  )
}
