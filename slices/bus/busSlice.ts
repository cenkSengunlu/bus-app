import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../configs/axiosConfig";
import { RootState } from "../../app/store";
import Cookies from "js-cookie";
import { BusSliceType, CreateBusType } from "../../app/typings";

const initialState: BusSliceType = {
  // ---------- Bus Definition ----------
  busDefinition: null,
  busDefinitionStatus: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  busDefinitionError: null,
  // ---------- Create Bus ----------
  createBusStatus: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  createBusError: null,
  // ---------- Get Bus Model ----------
  busModels: [],
  busModelsStatus: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  busModelsError: null,
};

// ---------- Bus Definition ----------
export const busDefinition: any = createAsyncThunk(
  "bus/busDefinition",
  async () => {
    return await axios.get("bus-definition/").then(function (response) {
      console.log(response.data);
      return response.data;
    });
  }
);

// ---------- Create Bus ----------
export const createBus: any = createAsyncThunk(
  "bus/createBus",
  async ({
    plate_number,
    model_id,
    number_of_seats,
    type,
    properties,
  }: CreateBusType) => {
    return await axios
      .post("bus/", {
        plate_number,
        model_id,
        number_of_seats,
        type,
        properties,
      })
      .then(function (response) {
        console.log(response.data);
        return response.data;
      });
  }
);

// ---------- Update Bus ----------
export const updateBus: any = createAsyncThunk(
  "bus/updateBus",
  async ({
    plate_number,
    model_id,
    number_of_seats,
    type,
    properties,
  }: CreateBusType) => {
    return await axios
      .put("bus/", {
        plate_number,
        model_id,
        number_of_seats,
        type,
        properties,
      })
      .then(function (response) {
        return response.data;
      });
  }
);

// ---------- Get Bus Model ----------
export const getBusModel: any = createAsyncThunk(
  "bus/getBusModel",
  async ({ modelId }: { modelId: string }) => {
    return await axios.get(`model/${modelId}`).then(function (response) {
      return response.data;
    });
  }
);

const busSlice = createSlice({
  name: "bus",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // ---------- Bus Definition ----------
      .addCase(busDefinition.pending, (state) => {
        state.busDefinitionStatus = "loading";
      })
      .addCase(busDefinition.fulfilled, (state, action) => {
        state.busDefinitionStatus = "succeeded";
        state.busDefinition = action.payload;
      })
      .addCase(busDefinition.rejected, (state, action) => {
        state.busDefinitionStatus = "failed";
        state.busDefinitionError = action.error.message;
      })
      // ---------- Create Bus ----------
      .addCase(createBus.pending, (state) => {
        state.createBusStatus = "loading";
      })
      .addCase(createBus.fulfilled, (state) => {
        state.createBusStatus = "succeeded";
      })
      .addCase(createBus.rejected, (state, action) => {
        state.createBusStatus = "failed";
        state.createBusError = action.error.message;
      })
      // ---------- Get Bus Model ----------
      .addCase(getBusModel.pending, (state) => {
        state.busModelsStatus = "loading";
      })
      .addCase(getBusModel.fulfilled, (state, action) => {
        state.busModelsStatus = "succeeded";
        state.busModels = action.payload.Model;
      })
      .addCase(getBusModel.rejected, (state, action) => {
        state.busModelsStatus = "failed";
        state.busModelsError = action.error.message;
      });
  },
});

export const selectBusDefinition = (state: RootState) =>
  state.bus.busDefinition;
export const selectBusModels = (state: RootState) => state.bus.busModels;

export default busSlice.reducer;
