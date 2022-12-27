import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../configs/axiosConfig";
import { RootState } from "../../app/store";
import Cookies from "js-cookie";
import { BuyTicketType, TicketSliceType } from "../../app/typings";

const initialState: TicketSliceType = {
  // ---------- Buy Ticket ----------
  buyTicketStatus: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  buyTicketError: null,
  // ---------- Get Ticket Info ----------
  ticketInfo: null,
  ticketInfoStatus: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  ticketInfoError: null,
};

// ---------- Buy Ticket ----------
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

// ---------- Get Ticket Info ----------
export const getTicketInfo: any = createAsyncThunk(
  "ticket/getTicketInfo",
  async () => {
    return await axios
      .get("buy-ticket/")
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
      // ---------- Buy Ticket ----------
      .addCase(buyTicket.pending, (state) => {
        state.buyTicketStatus = "loading";
      })
      .addCase(buyTicket.fulfilled, (state) => {
        state.buyTicketStatus = "succeeded";
      })
      .addCase(buyTicket.rejected, (state, action) => {
        state.buyTicketStatus = "failed";
        state.buyTicketError = action.error.message;
      })
      // ---------- Get Ticket Info ----------
      .addCase(getTicketInfo.pending, (state) => {
        state.ticketInfoStatus = "loading";
      })
      .addCase(getTicketInfo.fulfilled, (state, action) => {
        state.ticketInfoStatus = "succeeded";
        state.ticketInfo = action.payload;
      })
      .addCase(getTicketInfo.rejected, (state, action) => {
        state.ticketInfoStatus = "failed";
        state.ticketInfoError = action.error.message;
      });
  },
});

export const selectTicketInfo = (state: RootState) => state.ticket.ticketInfo;

export const { logoutUser } = ticketSlice.actions;

export default ticketSlice.reducer;
