import React, { useState } from "react";
import { BusFeaturesType } from "../app/typings";

const BusComponent = ({
  seatNumber,
  types,
  type,
}: {
  seatNumber: string;
  types: BusFeaturesType[];
  type: any;
}) => {
  const arr = new Array(Number(seatNumber)).fill(null);
  const selectedType = types.find((tPose) => tPose.id === type);
  const seatRow =
    selectedType?.name === "2+1" ? 3 : selectedType?.name === "2+2" ? 4 : 0;
  const [selectedSeat, setSelectedSeat] = useState<number>();

  const handleSelect = (index: number) => {
    setSelectedSeat(index);
  };
  return (
    // use for and loop for seatNumber
    <>
      {Number(seatNumber) !== 0 && Number(seatNumber) % seatRow === 0 && (
        <div className="h-full w-[60%] flex items-center">
          <div className="border-2 p-5 py-15 w-full overflow-auto rounded-xl">
            <div className="w-10 h-10 mb-5 rounded bg-red-500"></div>
            <div
              className={`grid ${
                seatRow === 3 ? "grid-cols-4" : "grid-cols-5"
              } gap-2`}
            >
              {arr.map((seat, index) => {
                return (
                  <>
                    <div
                      key={index}
                      className={`border-2 w-10 h-10 flex items-center justify-center rounded border-black p-2 cursor-pointer hover:bg-green-300 ${
                        index % seatRow === 0 && seatRow === 3
                          ? "bg-blue-300"
                          : index % seatRow === 1 && seatRow === 4
                          ? "bg-blue-300"
                          : ""
                      } ${selectedSeat === index ? "bg-green-300" : ""}`}
                      onClick={() => handleSelect(index)}
                    >
                      {index + 1}
                    </div>
                    <>
                      {index % seatRow === 0 && seatRow === 3 && (
                        <div className="grow"></div>
                      )}
                      {index % seatRow === 1 && seatRow === 4 && (
                        <div className="grow"></div>
                      )}
                    </>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {(Number(seatNumber) === 0 || Number(seatNumber) % seatRow !== 0) &&
        type !== "" && (
          <div>
            {selectedType?.name} Seçeneğine Uygun Koltuk Numarası Giriniz
          </div>
        )}
      {type === "" && <div>Otobüs Tipi Seçiniz</div>}
    </>
  );
};

export default BusComponent;
