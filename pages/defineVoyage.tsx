import React from "react";
import { Box, TextField } from "@mui/material";
import SelectBus from "../components/selectMenus/SelectBus";
import StandartTextInput from "../components/inputs/StandartTextInput";
import AmountInput from "../components/inputs/AmountInput";

const defineVoyage = () => {
  const [bus, setBus] = React.useState("");
  const [where, setWhere] = React.useState("");
  const [to, setTo] = React.useState("");
  const [amount, setAmount] = React.useState("");
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
            <div>Gün:</div>
            <div>Saat:</div>

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
