import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../configs/axiosConfig";
import { RootState } from "../../app/store";
import Cookies from "js-cookie";
import { LoginSliceType, LoginUserType } from "../../app/typings";

const initialState: LoginSliceType = {
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const loginUser: any = createAsyncThunk(
  "login/loginUser",
  async ({ username, password }: LoginUserType) => {
    return await axios
      .post("login/", { username, password })
      .then(function (response) {
        return response.data;
      });
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logoutUser() {
      Cookies.remove("token");
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        if (action.payload) {
          state.status = "succeeded";
          Cookies.set("token", action.payload.data);
        } else {
          state.status = "failed";
          state.error = "Kullanıcı adı veya şifre hatalı";
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const loginStatus = (state: RootState) => state.login.status;

export const { logoutUser } = loginSlice.actions;

export default loginSlice.reducer;
