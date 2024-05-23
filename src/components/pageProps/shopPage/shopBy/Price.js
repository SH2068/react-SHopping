import React from "react";
import NavTitle from "./NavTitle";

const Price = () => {
  const priceList = [
    {
      _id: 950,
      priceOne: 1,
      priceTwo: 9,
    },
    {
      _id: 951,
      priceOne: 11,
      priceTwo: 20,
    },
    {
      _id: 952,
      priceOne: 21,
      priceTwo: 30,
    },
    {
      _id: 953,
      priceOne: 31,
      priceTwo: 40,
    },
    {
      _id: 954,
      priceOne: 41,
      priceTwo: 50,
    },
  ];
  return (
    <div className="cursor-pointer">
      <NavTitle title="가격적정선" icons={false} />
      <div className="font-titleFont">
        <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
          {priceList.map((item) => (
            <li
              key={item._id}
              className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center gap-2 hover:text-primeColor hover:border-gray-400 duration-300"
            >
              ${item.priceOne.toFixed(2)} - ${item.priceTwo.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Price;
