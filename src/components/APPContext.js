import React, { createContext, useState } from "react";

const APPCONTEXT = createContext();

const APPProvider = ({ children }) => {
  const [userId, setUserId] = useState();


  return (
    <APPCONTEXT.Provider value={{ userId, setUserId }}>
      {children}
    </APPCONTEXT.Provider>
  );
};

export { APPCONTEXT, APPProvider };
