import React from "react";

const InfoModalRow = ({ title, value }: { title: string; value: string }) => {
  return (
    <div className="w-full flex">
      <div className="w-3/6">{title}</div>
      <div className="w-3/6 text-lg font-semibold">{value}</div>
    </div>
  );
};

export default InfoModalRow;
