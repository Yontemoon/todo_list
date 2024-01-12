"use client"

import { createContext, useContext, useState, useEffect, Dispatch, SetStateAction } from "react";
import { Todo } from "../lib/definitions";
import { DATA } from "../data";

type UserContextProps = {
    data: Todo[] | null;
    setData: Dispatch<SetStateAction<Todo[] | null>>
}

const UserContext = createContext<UserContextProps | null>(null);

export const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context) {
      throw new Error('useUserContext must be used within a UserProvider');
    }
    return context;
  };
  
const UserProvider = ({children}: {children: React.ReactNode}) => {

    const [data, setData] = useState<Todo[] | null>(null)



    useEffect(() => {
        const existingData = window.localStorage.getItem("LocalStorageData")
        console.log("LOCAL DATA",   existingData)
        if (existingData) {
            const user = JSON.parse(existingData)
            setData(user)
        } else {
            setData(DATA)
            const stringifyData = JSON.stringify(DATA)
            window.localStorage.setItem("LocalStorageData", stringifyData)
        }
    },[])

    const contextValue: UserContextProps = {
        data, 
        setData,
    }

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    );
};

// export const handleCreateData = (newData: Todo) => {
//     if (data) {
//         const addedData = data.push(newData)
//         console.log(addedData)
//         window.localStorage.setItem("LocalStorageData", JSON.stringify(addedData))
//         setData(addedData)
//     }
// }

export default UserProvider;