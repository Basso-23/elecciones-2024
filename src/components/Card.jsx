import React from "react";

const Card = ({ t1, t2, num, icon }) => {
  return (
    <div className=" h-[140px] w-full relative rounded-sm shadow">
      <div className=" absolute left-4 top-3 text-[#878A99] text-[13px] font-medium">
        {t1}
      </div>
      <div className=" absolute left-4 bottom-9 text-[#495057] text-[26px] font-bold">
        {num}
      </div>
      <div className=" absolute left-4 bottom-3 text-[#878A99] text-[13px] font-medium">
        {t2}
      </div>
      <div className=" absolute right-4 top-3 w-12 aspect-square bg-[#dbe9ff] rounded-full flex justify-center items-center text-[#0061FE] ">
        {icon}
      </div>
    </div>
  );
};

export default Card;
