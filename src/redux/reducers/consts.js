import produce from "immer";
import createReducer from "./reducerUtils";

const initalStaste = {
  categoriesList: [
    "action",
    "science fiction",
    "suspense",
    "comedy",
    "drama",
  ],
};

const user = {
  
};

export default produce(
  (state, action) => createReducer(state, action, user),
  initalStaste
);
