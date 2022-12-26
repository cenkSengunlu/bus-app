import React from "react";
import { Box, TextField } from "@mui/material";
import SelectBus from "../components/selectMenus/SelectBus";
import StandartTextInput from "../components/inputs/StandartTextInput";
import AmountInput from "../components/inputs/AmountInput";
import DatePicker from "../components/inputs/DatePicker";
import TimePicker from "../components/inputs/TimePicker";
import DateAndTimePicker from "../components/inputs/DateAndTimePicker";
import { useAppDispatch } from "../app/hooks";
import { setActiveTab } from "../slices/main/mainSlice";
import DateTimePicker from "../components/inputs/DateTimePicker";

const defineVoyage = () => {
  const dispatch = useAppDispatch();
  const [bus, setBus] = React.useState("");
  const [where, setWhere] = React.useState("");
  const [to, setTo] = React.useState("");
  const [amount, setAmount] = React.useState("");

  React.useEffect(() => {
    dispatch(setActiveTab("defineVoyage"));
  }, []);
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="h-[70vh] w-[60%] mx-auto rounded-lg shadow-xl border-2 grid grid-cols-6">
        <div className="w-full flex flex-col items-end justify-center rounded-l-lg px-10 col-span-2">
          <div className="flex flex-col w-full space-y-3">
            <SelectBus bus={bus} setBus={setBus} />
            <AmountInput
              title="Koltuk Ücreti"
              value={amount}
              setValue={setAmount}
            />
            {/* <DatePicker /> */}
            {/* <TimePicker /> */}
            {/* <DateAndTimePicker /> */}
            <DateTimePicker />

            <StandartTextInput
              title="Nereden"
              value={where}
              setValue={setWhere}
            />
            <StandartTextInput title="Nereye" value={to} setValue={setTo} />
          </div>
          <button className="text-xl font-semibold mt-7">Kaydet</button>
        </div>
        <div className="w-full flex items-center justify-center rounded-r-lg col-span-4">
          Sefer Listesi
        </div>
      </div>
    </div>
  );
};

export default defineVoyage;
