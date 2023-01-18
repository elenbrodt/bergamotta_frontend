import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

interface FilterState {
  place_types_ids: any[];
  food_types_ids: any[];
  place_profiles_ids: any[];
  isFiltered: false;
  search: string;
}

/* const initialState: FilterState = {
    place_types_ids: [], 
    food_types_ids: [], 
    place_profiles_ids: [],
    
} */

/* const filterReducer = combineReducers({
    place_types_ids: (state = initialState.place_types_ids, action) =>{ switch(action.type){default: return state}},
    food_types_ids: (state = initialState.food_types_ids, action) =>{ switch(action.type){default: return state}},
    place_profiles_ids: (state = initialState.place_profiles_ids, action) =>{ switch(action.type){default: return state}},
})
export const filter = createStore(filterReducer) */

const filterReduce = createSlice({
  name: "filter",
  initialState: {
    place_types_ids: [],
    food_types_ids: [],
    place_profiles_ids: [],
    isFiltered: false,
    search: "",
  } as FilterState,
  reducers: {
    setFilter(state, action) {
      const filter = {
        place_types_ids: action.payload.place_types_ids,
        food_types_ids: action.payload.food_types_ids,
        place_profiles_ids: action.payload.place_profiles_ids,
        isFiltered: true,
      };
      Object.assign(state, filter);
    },
    removeFilter(state, action) {
      Object.assign(state, {
        place_types_ids: [null],
        food_types_ids: [null],
        place_profiles_ids: [null],
        isFiltered: false,
      });
    },
    setSearch(state, action) {
      Object.assign(state, {
        search: action.payload.search,
      });
    },
  },
});

export const useFilter = () => {
  return useSelector((state: any) => state.filter) as FilterState;
};

export const { setFilter, removeFilter, setSearch } = filterReduce.actions;

export default filterReduce.reducer;
