import { createContext, useContext } from "react";

export const UserContext = createContext({
    _id: '',
    email: '',
    token: '',
    username: '',
    userLoginHandler: () => null, 
    userLogoutHandler: () => null, 
})

export function useUserContext() {
    const data = useContext(UserContext)

    return data;
}