import { createContext, useState } from "react";

export const UserContext = createContext(null)

export const UserProvider = (props)=>{
    const [authUser, setAuthUser] = useState({
        status: false,
        userId: 0,
        email: "",
        username: "",
      });
      
    return <UserContext.Provider value={{ authUser, setAuthUser }}>{props.children}</UserContext.Provider>
}