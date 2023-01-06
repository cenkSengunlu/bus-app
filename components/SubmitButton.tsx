import React from "react";

const SubmitButton = ({ canSave }: { canSave: boolean }) => {
  return (
    <button
      type="submit"
      disabled={!canSave}
      className="mt-5 border-2 text-lg border-black py-2 px-4 cursor-pointer transition ease-in-out duration-500 hover:bg-orange-500 hover:border-orange-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-50 rounded-lg"
    >
      Kaydet
    </button>
  );
};

export default SubmitButton;
