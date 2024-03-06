import { configureStore } from "@reduxjs/toolkit";

import studentauthentication from "./studentslice";

const studentStore = configureStore({
    reducer : {
        auth : studentauthentication
    }
})


console.log(studentStore)

export default studentStore