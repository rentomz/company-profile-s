import React, { useState } from 'react';
import LogoFooter from '../assets/image/logo-footer.png';

export default function Footer() {
  const dateNow = new Date().getFullYear();
  return (
    <div id="footer">
      <div className=" bg-[#07477A] px-4 py-6 relative h-[550px] md:h-[330px]">
        <div className="absolute z-20 bg-[#14619D] md:bg-[#08385F] w-full h-full top-0 left-0 footer-clip-right"></div>
        <div className="absolute z-10 bg-[#08385F] w-full h-full top-0 left-0 footer-clip-left md:hidden"></div>

        <div className="mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 ">
          <div className="footer-left absolute z-30 top-8">
            <img src={LogoFooter} alt="" />

            <div className="bg-white p-6 mt-8 mr-4">
              <select
                id="Department"
                className="bg-gray-50 border border-gray-400 text-[#00537C] font-bold text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
              >
                <option defaultValue={"TD"}>TECHNOLOGY DEPARTMENT</option>
                <option value="DAD">DATA ANALAYSIS DEPARTMENT</option>
              </select>
              <h3 className="address text-[#25A0D8] text-lg mt-9">
                Jl. Lembong No 8 Kel. Braga Kec. Sumur Bandung,
                <br /> Kota Bandung, Jawa Barat
              </h3>
            </div>
          </div>
          <div className="footer-right absolute z-30 bottom-16 md:top-20 md:right-32">
            <ul>
              <li className="my-4">
                <a href="" className=" text-white">
                  Who We Are
                </a>
              </li>
              <li className="my-4">
                <a href="" className="py-2 text-white">
                  Our Values
                </a>
              </li>
              <li className="my-4">
                <a href="" className="py-2 text-white">
                  The Perks
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#08385F] hidden md:block">
        <p className="text-center text-white py-2">
          Copyright {dateNow} Satrio Nugroho All Rights Reserved
        </p>
      </div>
    </div>
  );
}
