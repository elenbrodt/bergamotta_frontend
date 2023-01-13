import { configureStore } from "@reduxjs/toolkit";
import userReduce from "./modules/user"

const store = configureStore({
    reducer:{user: userReduce},
});

export type RootStore = ReturnType<typeof store.getState>;

export default store;