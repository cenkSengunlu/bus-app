import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../configs/axiosConfig";
import { RootState } from "../../app/store";
import Cookies from "js-cookie";
import { CreateVoyageType, VoyageSliceType } from "../../app/typings";
import Router from "next/router";

const initialState: VoyageSliceType = {
  // ---------- Create Voyage ----------
  createVoyageStatus: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  createVoyageError: null,
  // ---------- Delete Voyage ----------
  deleteVoyageStatus: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  deleteVoyageError: null,
  // ---------- Get All Voyage ----------
  voyages: [],
  voyageStatus: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  voyageError: null,
};

// ---------- Create Voyage ----------
export const createVoyage: any = createAsyncThunk(
  "voyage/createVoyage",
  async ({ fee, from, to, date, bus_id }: CreateVoyageType) => {
    return await axios
      .post("voyage/", { fee, from, to, date, bus_id })
      .then(function (response) {
        console.log(response.data);
        return response.data;
      });
  }
);

// ---------- Delete Voyage ----------
export const deleteVoyage: any = createAsyncThunk(
  "voyage/deleteVoyage",
  async ({ voyageId }: { voyageId: string }) => {
    return await axios.delete(`voyage/${voyageId}`).then(function (response) {
      console.log(response.data);
      console.log(voyageId);
      return { data: response.data, voyageId };
    });
  }
);

// ---------- Get All Voyage ----------
export const getAllVoyage: any = createAsyncThunk(
  "voyage/getAllVoyage",
  async () => {
    return await axios.get("voyage/").then(function (response) {
      return response.data;
    });
  }
);

const voyageSlice = createSlice({
  name: "voyage",
  initialState,
  reducers: {
    logoutUser() {
      Cookies.remove("token");
    },
  },
  extraReducers(builder) {
    builder
      // ---------- Create Voyage ----------
      .addCase(createVoyage.pending, (state) => {
        state.createVoyageStatus = "loading";
      })
      .addCase(createVoyage.fulfilled, (state, action) => {
        state.createVoyageStatus = "succeeded";
        state.voyages.push(action.payload);
        Router.replace(Router.asPath);
      })
      .addCase(createVoyage.rejected, (state, action) => {
        state.createVoyageStatus = "failed";
        state.createVoyageError = action.error.message;
      })
      // ---------- Delete Voyage ----------
      .addCase(deleteVoyage.pending, (state) => {
        state.deleteVoyageStatus = "loading";
      })
      .addCase(deleteVoyage.fulfilled, (state, action) => {
        state.deleteVoyageStatus = "succeeded";
        const { voyageId } = action.payload;
        const voyages = state.voyages;
        const filteredVoyages = voyages.filter(
          (voyage: any) => voyage.id !== voyageId
        );
        state.voyages = filteredVoyages;
        Router.replace(Router.asPath);
      })
      .addCase(deleteVoyage.rejected, (state, action) => {
        state.deleteVoyageStatus = "failed";
        state.deleteVoyageError = action.error.message;
      })
      // ---------- Get All Voyage ----------
      .addCase(getAllVoyage.pending, (state) => {
        state.voyageStatus = "loading";
      })
      .addCase(getAllVoyage.fulfilled, (state, action) => {
        state.voyageStatus = "succeeded";
        state.voyages = action.payload;
      })
      .addCase(getAllVoyage.rejected, (state, action) => {
        state.voyageStatus = "failed";
        state.voyageError = action.error.message;
      });
  },
});

export const { logoutUser } = voyageSlice.actions;

export default voyageSlice.reducer;
