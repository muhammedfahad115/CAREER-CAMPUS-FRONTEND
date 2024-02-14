import { configureStore } from "@reduxjs/toolkit";
import axios from "axios";
import { config } from "react-spring";
import studentauthentication from "./studentslice";

const studentStore = configureStore({
    reducer : {
        auth : studentauthentication
    }
})


console.log(studentStore)

export default studentStore