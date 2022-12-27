import React, { useState } from "react";
import { BusFeaturesType, CreateVoyageType } from "../app/typings";
import InfoModal from "./modals/InfoModal";

const VoyageList = ({
  voyage,
  province,
}: {
  voyage: CreateVoyageType[];
  province: BusFeaturesType[];
}) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<CreateVoyageType>();

  const handleOpen = (voyage: CreateVoyageType) => {
    setSelected(voyage);
    setOpen(true);
  };
  return (
    <>
      {voyage !== null &&
        voyage.map((item: CreateVoyageType, index: number) => {
          const where = province.find(
            (item2: BusFeaturesType) => item2.id === item.from
          );
          const to = province.find(
            (item2: BusFeaturesType) => item2.id === item.to
          );
          const itemDate = new Date(item.date);
          return (
            <div
              onClick={() =>
                handleOpen({
                  id: item.id,
                  from: where?.name === undefined ? "Bilinmiyor" : where?.name,
                  to: to?.name === undefined ? "Bilinmiyor" : to?.name,
                  date: item.date,
                  fee: item.fee,
                  bus_id: item.bus_id,
                })
              }
              key={index}
              className={`"w-full grid xl:grid-cols-2 grid-cols-1 text-white p-2 rounded-lg select-none cursor-pointer  transition ease-in-out duration-300 hover:bg-opacity-80 ${
                index % 2 === 0 ? "bg-blue-700 " : "bg-blue-500"
              }`}
            >
              <div className="w-full flex items-center justify-center">
                <div>
                  {String(itemDate.getDate()).padStart(2, "0")}.
                  {String(itemDate.getMonth() + 1).padStart(2, "0")}.
                  {String(itemDate.getFullYear())}
                </div>
                <div>&nbsp;&nbsp;-&nbsp;&nbsp;</div>
                <div>
                  {String(itemDate.getHours()).padStart(2, "0") +
                    ":" +
                    String(itemDate.getMinutes()).padStart(2, "0")}
                </div>
              </div>
              <div className="w-full flex justify-center items-center">
                <span className="text-lg">{where?.name}</span>
                <span className="text-2xl">&nbsp;&nbsp;&gt;&nbsp;&nbsp;</span>
                <span className="text-lg">{to?.name}</span>
              </div>
            </div>
          );
        })}
      {open && (
        <InfoModal
          open={open}
          setOpen={setOpen}
          title={"voyage-info-modal"}
          voyageItem={selected}
        />
      )}
    </>
  );
};

export default VoyageList;
