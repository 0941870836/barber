import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "../customers/customerSlice";

const rootReducer = {
    customer: customerReducer,
}

const store = configureStore({
    reducer: rootReducer,
});

export default store;