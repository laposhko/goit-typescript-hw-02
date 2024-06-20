import { configureStore } from "@reduxjs/toolkit";

//reducer import
// import { combineReducers } from "@reduxjs/toolkit";
// const rootReducer = combineReducers({});

// export type RootState = ReturnType<typeof rootReducer>;
export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: {},
});
