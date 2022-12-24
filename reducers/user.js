import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// 더미 데이터
const logInUser = (data) => ({
  email: data.email,
  password: data.password,
});

const signUpUser = (data) => ({
  email: data.email,
  name: data.name,
  password: data.password,
});

// initialState
const initialState = {
  me: null,
  signUpData: null,
  logInLoading: false,
  logInDone: false,
  logInError: null,
  signUpLoading: false,
  signUpDone: false,
  signUpError: null,
};

// 비동기 액션
export const logIn = createAsyncThunk("user/login", async (data, thunkAPI) => {
  try {
    const response = await logInUser(data);
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const signUp = createAsyncThunk(
  "user/signup",
  async (data, thunkAPI) => {
    try {
      const response = await signUpUser(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// reducer
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(logIn.pending, (state) => {
        state.logInLoading = true;
        state.logInDone = false;
        state.logInError = null;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.logInLoading = false;
        state.logInDone = true;
        state.logInError = null;
        state.me = action.payload;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.logInLoading = false;
        state.logInDone = false;
        state.logInError = action.payload;
      })
      .addCase(signUp.pending, (state) => {
        state.signUpLoading = true;
        state.signUpDone = false;
        state.signUpError = null;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.signUpLoading = false;
        state.signUpDone = true;
        state.signUpError = null;
        state.signUpData = action.payload;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.signUpLoading = false;
        state.signUpDone = false;
        state.signUpError = action.payload;
      }),
});

export default userSlice;
