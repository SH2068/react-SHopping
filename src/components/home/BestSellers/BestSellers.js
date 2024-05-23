import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
} from "../../../assets/images/index";

const BestSellers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1011"
          img={bestSellerOne}
          productName="CRP-CHP1010FD"
          price="10"
          color="Black Pink"
          badge={true}
          des="베스트셀러칸"
        />
        <Product
          _id="1012"
          img={bestSellerTwo}
          productName="XX전자 65QNED80KRA"
          price="11"
          color="Gray"
          badge={false}
          des="베스트셀러칸"
        />
        <Product
          _id="1013"
          img={bestSellerThree}
          productName="XX전자 Crystal UHD KU85UC7000FXKR"
          price="12"
          color="Blue"
          badge={true}
          des="베스트셀러칸"
        />
        <Product
          _id="1014"
          img={bestSellerFour}
          productName="XX전자 OLED KQ77SC90AFXKR"
          price="222"
          color="Black"
          badge={false}
          des="베스트셀러칸"
        />
      </div>
    </div>
  );
};

export default BestSellers;
