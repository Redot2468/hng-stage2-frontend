import { configureStore } from "@reduxjs/toolkit";
import ticketReducer from "./tickets/ticketSlice";

export const store = configureStore({
  reducer: {
    ticket: ticketReducer,
  },
});

export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore["dispatch"];
