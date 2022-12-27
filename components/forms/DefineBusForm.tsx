import React, { useEffect, useState } from "react";
import { FormControl } from "@mui/material";
import BusComponent from "../BusComponent";
import StandartTextInput from "../inputs/StandartTextInput";
import SelectMenu from "../selectMenus/SelectMenu";
import { BusFeaturesType } from "../../app/typings";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  createBus,
  getBusModel,
  selectBusDefinition,
  selectBusModels,
} from "../../slices/bus/busSlice";
import MultipleSelectMenu from "../selectMenus/MultipleSelectMenu";
import { setActiveTab } from "../../slices/main/mainSlice";
import SubmitButton from "../SubmitButton";

const DefineBusForm = ({
  brands,
  types,
  properties,
}: {
  brands: BusFeaturesType[];
  types: BusFeaturesType[];
  properties: BusFeaturesType[];
}) => {
  const dispatch = useAppDispatch();
  const [plate, setPlate] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [seatNumber, setSeatNumber] = useState("");
  const [type, setType] = useState("");
  const [features, setFeatures] = useState<any>([]);
  const modelsState = useAppSelector(selectBusModels);

  useEffect(() => {
    dispatch(getBusModel({ modelId: brand }));
    setModel("");
  }, [brand]);

  useEffect(() => {
    dispatch(setActiveTab("defineBus"));
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      createBus({
        plate_number: plate,
        model_id: model,
        number_of_seats: Number(seatNumber),
        type: type,
        properties: features.map((feature: any) => {
          return {
            id: feature,
          };
        }),
      })
    );
  };

  const canSave = [
    plate.trim(),
    brand.trim(),
    model.trim(),
    seatNumber.trim(),
    type.trim(),
    features.length !== 0,
  ].every(Boolean);

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="min-h-[70vh] w-[60%] mx-auto rounded-lg shadow-xl border-2 grid grid-cols-2">
        <div className="w-full flex items-center justify-center rounded-l-lg">
          <FormControl
            component="form"
            onSubmit={handleSubmit}
            className="w-full px-16"
          >
            <div className="flex flex-col w-full space-y-2">
              <StandartTextInput
                title="Plaka"
                value={plate}
                setValue={setPlate}
              />
              <SelectMenu
                title="Marka"
                menuId="selectBrand"
                options={brands}
                value={brand}
                setValue={setBrand}
              />
              <SelectMenu
                title="Model"
                menuId="selectModel"
                options={modelsState === null ? [] : modelsState}
                value={model}
                setValue={setModel}
              />
              <StandartTextInput
                title="Koltuk Sayısı"
                value={seatNumber}
                setValue={setSeatNumber}
              />
              <SelectMenu
                title="Tip"
                menuId="selectType"
                options={types}
                value={type}
                setValue={setType}
              />
              <MultipleSelectMenu
                title={"Özellikler"}
                menuId={"properties"}
                properties={properties}
                multipleVal={features}
                setMultipleVal={setFeatures}
              />
            </div>
            <div className="flex justify-end">
              <SubmitButton canSave={canSave} />
            </div>
          </FormControl>
        </div>
        <div className="w-full flex items-center justify-center rounded-r-lg">
          <BusComponent seatNumber={seatNumber} types={types} type={type} />
        </div>
      </div>
    </div>
  );
};

export default DefineBusForm;
