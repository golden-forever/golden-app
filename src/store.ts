import { configureStore } from "@reduxjs/toolkit";

import companySlice from "./features/companies/companySlice";

export const store = configureStore({
  reducer: {
    company: companySlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
