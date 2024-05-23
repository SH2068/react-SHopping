import React from "react";
import { CgAdd } from "react-icons/cg";
import { CgRedo } from "react-icons/cg";

const BannerBottom = () => {
  return (
    <div className="w-full bg-white border-b-[1px] py-4 border-b-gray-200 px-4">
      <div className="max-w-container mx-auto h-20 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-2 w-72 shadow-sm hover:shadow-md duration-300">
          <span className="font-bold font-titleFont w-6 text-center">
            <svg
              xmlns=""
              viewBox="0 -117 679.99892 679"
              width="50px"
              height="50px"
            >
              <g>
                <g>
                  <g>
                    <path
                      // d 태그 활용해서 모양 만들거나 이미지
                      fill="#666"
                    ></path>
                    <path
                      // d | img
                      fill="#666"
                    ></path>
                    <path
                      // d | img
                      fill="#666"
                    ></path>
                    <path
                    //   d | img
                      fill="#666"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
          </span>
          <p className="text-lightText text-base">보증기간 : 2년</p>
        </div>
        <div className="flex md:w-auto items-center gap-2 w-72 shadow-sm hover:shadow-md duration-300">
          <span className="text-5xl text-center w-10 ml-1 text-orange-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -117 679.99892 679"
            >
              <path
                // d | img 
                fill="#61dafb"
              ></path>
            </svg>
          </span>
          <p className="text-xl text-lightText text-base">
            퀵배송 <br />{" "}
            <span className="text-xs text-lightText text-base">
              10% 할인
            </span>
          </p>
        </div>
        <div className="flex md:w-auto items-center gap-2 w-72 shadow-sm hover:shadow-md duration-300">
          <span className="text-2xl  text-center w-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -14 512.00001 512"
            >
              <path
                // 
                fill="#61dafb"
              ></path>
              <path
                // 
                fill="#61dafb"
              ></path>
              <path
                // 
                fill="#61dafb"
              ></path>
              <path
                // 
                fill="#61dafb"
              ></path>
              <path
                // 
                fill="#61dafb"
              ></path>
              <path
                // 
                fill="#61dafb"
              ></path>
            </svg>
          </span>
          <p className="text-lightText text-base">환불은 최대 한 달</p>
        </div>
      </div>
    </div>
  );
};

export default BannerBottom;
