"use client";
import { getLocalStorageValueForKey } from "@/utils/localStorage";
import React, { createContext, useState, useEffect } from "react";
import { getUser } from "./GlobalContext";
import { SnakeToCamel } from "@/utils/generalFunction";

const UserContext = createContext<any>(undefined);

export const UserProvider: React.FC<any> = ({ children }) => {
  const [user, setUser] = useState<any>(null);

  const updateUser = async () => {
    try {
        const currentUser = getLocalStorageValueForKey("userId");
        console.log(currentUser);
        
        if (currentUser){
          getUser(currentUser).then((result) => {
            const camelCaseObject = SnakeToCamel(result);
            const userData = camelCaseObject
            setUser(userData[0]);
          });
        }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    updateUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
