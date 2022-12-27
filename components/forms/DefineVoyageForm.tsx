import React, { useState, useEffect } from "react";
import dayjs, { Dayjs } from "dayjs";
import { Box } from "@mui/material";
import DateTimePicker from "../inputs/DateTimePicker";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setActiveTab } from "../../slices/main/mainSlice";
import AmountInput from "../inputs/AmountInput";
import StandartTextInput from "../inputs/StandartTextInput";
import SelectMenu from "../selectMenus/SelectMenu";
import {
  CreateBusType,
  BusFeaturesType,
  CreateVoyageType,
} from "../../app/typings";
import { busDefinition, selectBusDefinition } from "../../slices/bus/busSlice";
import AutocompleteMenu from "../selectMenus/AutocompleteMenu";
import SubmitButton from "../SubmitButton";
import { createVoyage } from "../../slices/voyage/voyageSlice";
import VoyageList from "../VoyageList";

const DefineVoyageForm = ({
  buses,
  province,
  voyage,
}: {
  buses: CreateBusType[];
  province: BusFeaturesType[];
  voyage: CreateVoyageType[];
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
    dispatch(
      createVoyage({
        fee: Number(amount),
        from: where,
        to: to,
        date: dateTime?.toDate(),
        bus_id: bus,
      })
    );
  };

  const canSave = [
    bus.trim(),
    dateTime !== null,
    where.trim(),
    to.trim(),
    Number(amount) !== 0,
  ].every(Boolean);

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
              <SubmitButton canSave={canSave} />
            </div>
          </Box>
        </div>
        <div className="w-full h-full flex flex-col items-center justify-start rounded-r-lg col-span-3 py-11">
          <div className="text-4xl font-semibold mb-10">Sefer Listesi</div>
          {voyage === null && <div>Tanımlı Sefer Yok!</div>}
          {voyage !== null && (
            <div className="h-80 w-full px-5 space-y-2 overflow-auto">
              <VoyageList voyage={voyage} province={province} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DefineVoyageForm;
