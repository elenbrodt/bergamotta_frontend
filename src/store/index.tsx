import { configureStore } from "@reduxjs/toolkit";
import userReduce from "./modules/user"
import filterReduce from "./modules/filter"
import ownerReduce from "./modules/owner"

const store = configureStore({
    reducer:{
        user: userReduce,
        filter: filterReduce, 
        owner: ownerReduce
    },
});

export type RootStore = ReturnType<typeof store.getState>;

export default store;