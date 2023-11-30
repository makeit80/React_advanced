import dataProcess from "../modules/dataStorage";
import userData from "../modules/userData";
import loginState from "../modules/loginState";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        dataProcess,
        userData,
        loginState,
    }
});

export default store;


