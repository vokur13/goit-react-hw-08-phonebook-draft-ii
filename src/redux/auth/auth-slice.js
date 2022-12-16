import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

function isRejectedAction(action) {
  return action.type.endsWith('rejected');
}

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(authOperations.register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(authOperations.logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(authOperations.logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(authOperations.refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(authOperations.refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(authOperations.refreshUser.rejected, state => {
        state.isRefreshing = false;
      })
      .addMatcher(
        isRejectedAction,
        // `action` will be inferred as a RejectedAction due to isRejectedAction being defined as a type guard
        (state, action) => {}
      )
      .addDefaultCase((state, action) => {});
  },
});

export default authSlice.reducer;

// =======================================

// import { createSlice, createAction } from '@reduxjs/toolkit';

// function isRejectedAction(action) {
//   return action.type.endsWith('rejected');
// }

// const isLoggedIn = createAction('isLoggedIn');

// const initialState = {
//   isLoggedIn: false,
// };

// export const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   extraReducers: build => {
//     build
//       .addCase(isLoggedIn, (state, action) => {
//         state.isLoggedIn = action.payload;
//         console.log('state.isLoggedIn', state.isLoggedIn);
//       })
//       .addMatcher(
//         isRejectedAction,
//         // `action` will be inferred as a RejectedAction due to isRejectedAction being defined as a type guard
//         (state, action) => {}
//       )
//       .addDefaultCase((state, action) => {});
//   },
// });

// export const authReducer = authSlice.reducer;
// // export default authSlice.reducer;
