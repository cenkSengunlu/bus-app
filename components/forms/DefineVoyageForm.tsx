import React, { useState, useEffect } from "react";
import dayjs, { Dayjs } from "dayjs";
import { Box } from "@mui/material";
import DateTimePicker from "../inputs/DateTimePicker";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setActiveTab } from "../../slices/main/mainSlice";
import AmountInput from "../inputs/AmountInput";
import StandartTextInput from "../inputs/StandartTextInput";
import SelectMenu from "../selectMenus/SelectMenu";
import { CreateBusType, BusFeaturesType } from "../../app/typings";
import { busDefinition, selectBusDefinition } from "../../slices/bus/busSlice";
import AutocompleteMenu from "../selectMenus/AutocompleteMenu";

const DefineVoyageForm = ({
  buses,
  province,
  voyage,
}: {
  buses: CreateBusType[];
  province: BusFeaturesType[];
  voyage: any;
}) => {
  const dispatch = useAppDispatch();
  const [bus, setBus] = useState("");
  const [dateTime, setDateTime] = useState<Dayjs | null>(dayjs(new Date()));
  const [where, setWhere] = useState("");
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    dispatch(setActiveTab("defineVoyage"));
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ bus, dateTime, where, to, amount });
  };
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="min-h-[70vh] w-[60%] mx-auto rounded-lg shadow-xl border-2 grid grid-cols-6">
        <div className="w-full flex flex-col items-end justify-center rounded-l-lg px-16 col-span-3">
          <Box component="form" className="w-full" onSubmit={handleSubmit}>
            <div className="flex flex-col w-full space-y-4">
              <SelectMenu
                title="Otobüs Seç"
                menuId="selectBus"
                options={buses !== null ? buses : []}
                value={bus}
                setValue={setBus}
              />
              <AmountInput
                title="Koltuk Ücreti"
                value={amount}
                setValue={setAmount}
              />
              <DateTimePicker value={dateTime} setValue={setDateTime} />
              {/* <AutocompleteMenu
                title="Nereden"
                menuId="where"
                options={province}
                value={where}
                setValue={setWhere}
              /> */}
              <SelectMenu
                title="Nereden"
                menuId="where"
                disableOption={to}
                options={province !== null ? province : []}
                value={where}
                setValue={setWhere}
              />
              {/* <StandartTextInput
                title="Nereden"
                value={where}
                setValue={setWhere}
              /> */}
              {/* <StandartTextInput title="Nereye" value={to} setValue={setTo} /> */}
              <SelectMenu
                title="Nereye"
                menuId="to"
                disableOption={where}
                options={province !== null ? province : []}
                value={to}
                setValue={setTo}
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="mt-5 border-2 text-lg border-black py-2 px-4 cursor-pointer transition ease-in-out hover:bg-black hover:text-white duration-500"
              >
                Kaydet
              </button>
            </div>
          </Box>
        </div>
        <div className="w-full h-full flex items-center justify-center rounded-r-lg col-span-3">
          Sefer Listesi
        </div>
      </div>
    </div>
  );
};

export default DefineVoyageForm;
