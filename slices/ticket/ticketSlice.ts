import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../configs/axiosConfig";
import { RootState } from "../../app/store";
import Cookies from "js-cookie";
import { BuyTicketType, TicketSliceType } from "../../app/typings";

const initialState: TicketSliceType = {
  buyTicketStatus: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  buyTicketError: null,
};

export const buyTicket: any = createAsyncThunk(
  "ticket/buyTicket",
  async ({ no, sex, voyage_id }: BuyTicketType) => {
    return await axios
      .post("buy-ticket/", { no, sex, voyage_id })
      .then(function (response) {
        return response.data;
      })
      .catch((err) => {
        return err;
      });
  }
);

const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    logoutUser() {
      Cookies.remove("token");
    },
  },
  extraReducers(builder) {
    builder
      .addCase(buyTicket.pending, (state) => {
        state.buyTicketStatus = "loading";
      })
      .addCase(buyTicket.fulfilled, (state) => {
        state.buyTicketStatus = "succeeded";
      })
      .addCase(buyTicket.rejected, (state, action) => {
        state.buyTicketStatus = "failed";
        state.buyTicketError = action.error.message;
      });
  },
});

export const { logoutUser } = ticketSlice.actions;

export default ticketSlice.reducer;
