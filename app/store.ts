import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../slices/login/loginSlice";
import mainReducer from "../slices/main/mainSlice";
import busReducer from "../slices/bus/busSlice";
import ticketReducer from "../slices/ticket/ticketSlice";
import voyageReducer from "../slices/voyage/voyageSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    main: mainReducer,
    bus: busReducer,
    ticket: ticketReducer,
    voyage: voyageReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
