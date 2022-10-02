import { createContext, Fragment, useState } from "react";

export const UserContext = createContext();

const ManagedUserContext = ({ children }) => {
  const [user, setUser] = useState({
    name: "dinesh",
  });

  return (
    <Fragment>
      <UserContext.Provider
        value={{
          user,
          setUser,
        }}
      >
        {children}
      </UserContext.Provider>
    </Fragment>
  );
};

export default ManagedUserContext;
