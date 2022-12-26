import React from "react";

const buyTicket = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="min-h-[70vh] w-[60%] mx-auto rounded-lg shadow-xl border-2 grid grid-cols-6">
        <div className="w-full flex items-center justify-center rounded-l-lg px-24 col-span-4">
          <div>Bilet Al Detay</div>
        </div>
        <div className="w-full flex items-center justify-center rounded-r-lg col-span-2">
          Bilet Al Otobüs
        </div>
      </div>
    </div>
  );
};

export default buyTicket;
