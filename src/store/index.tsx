import { configureStore } from "@reduxjs/toolkit";
import userReduce from "./modules/user"
import filterReduce from "./modules/filter"

const store = configureStore({
    reducer:{
        user: userReduce,
        filter: filterReduce},
});

export type RootStore = ReturnType<typeof store.getState>;

export default store;