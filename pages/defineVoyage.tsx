import React from "react";

const defineVoyage = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="h-[70vh] w-[60%] mx-auto rounded-lg shadow-xl border-2 grid grid-cols-2">
        <div className="w-full flex items-center justify-center rounded-l-lg">
          Sefer Tanımla dropdown menü
        </div>
        <div className="w-full flex items-center justify-center rounded-r-lg">
          Sefer Listesi
        </div>
      </div>
    </div>
  );
};

export default defineVoyage;
