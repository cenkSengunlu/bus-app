import React, { useState } from "react";
import BusComponent from "../BusComponent";
import SelectMenu from "../selectMenus/SelectMenu";
import { MdOutlineSwapHorizontalCircle } from "react-icons/md";

const BuyTicketForm = () => {
  const [where, setWhere] = useState<string>("");
  const [to, setTo] = useState<string>("");

  const handleChange = () => {
    const whereSwap = where;
    const toSwap = to;
    setWhere(toSwap);
    setTo(whereSwap);
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="min-h-[70vh] w-[60%] mx-auto rounded-lg shadow-xl border-2 grid grid-cols-6 ">
        <div className="w-full flex flex-col items-center justify-start rounded-l-lg px-12 col-span-4 py-5">
          <div className="text-3xl mb-5">Sefer Listesi</div>
          <div className="w-full flex flex-col items-center">
            <div className="w-full flex items-center justify-between space-x-3 ">
              <SelectMenu
                title="Nereden"
                menuId="selectWhere"
                options={[
                  { name: "Ankara", id: "ankara" },
                  { name: "İstanbul", id: "istanbul" },
                  { name: "İzmir", id: "izmir" },
                ]}
                value={where}
                disableOption={to}
                setValue={setWhere}
              />
              <button
                onClick={handleChange}
                disabled={where.trim() === "" || to.trim() === ""}
                className="text-orange-500 text-5xl disabled:cursor-not-allowed disabled:text-gray-500"
              >
                <MdOutlineSwapHorizontalCircle />
              </button>
              <SelectMenu
                title="Nereye"
                menuId="selectTo"
                options={[
                  { name: "Ankara", id: "ankara" },
                  { name: "İstanbul", id: "istanbul" },
                  { name: "İzmir", id: "izmir" },
                ]}
                value={to}
                disableOption={where}
                setValue={setTo}
              />
              <button className="w-64 h-full border-2 text-lg border-black py-2 px-4 cursor-pointer transition ease-in-out hover:bg-orange-500 hover:border-orange-500 hover:text-white duration-500 disabled:cursor-not-allowed disabled:opacity-50 rounded">
                Bilet Bul
              </button>
            </div>
            <div className="w-full bg-rose-500 my-2">Date Picker</div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center rounded-r-lg col-span-2"></div>
      </div>
    </div>
  );
};

export default BuyTicketForm;
