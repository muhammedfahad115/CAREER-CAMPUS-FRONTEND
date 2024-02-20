import { createContext, useState } from "react";

const StudentContext = createContext();
// eslint-disable-next-line react/prop-types
function StudentsContextProvider({ children }) {
    const [verifyPhoneNumber, setVerifyPhoneNumber] = useState(null);
    const [newPasswordAuthorized, setNewPasswordAuthorized] = useState(false)
    return (
        <StudentContext.Provider value={{ verifyPhoneNumber, setVerifyPhoneNumber, newPasswordAuthorized, setNewPasswordAuthorized }}>
            {children}
        </StudentContext.Provider>
    )
}


export { StudentContext, StudentsContextProvider }