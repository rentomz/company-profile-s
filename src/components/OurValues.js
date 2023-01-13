import React from 'react';
import Ic_rectangular from '../assets/image/img-rectangular.png';
import OurValueImage from '../assets/image/our-value-img.png';

export default function OurValues() {
  return (
    <div className="px-4 mx-auto lg:max-w-7xl  md:px-8 pt-12" id="our-values">
      <h1 className="text-center text-[#029FE4] text-4xl font-medium">
        Our Values
      </h1>
      <h3 className="mt-14 text-[#777777] lg:text-xl">
        Ridiculus laoreet libero pretium et, sit vel elementum convallis fames.
        Sit suspendisse etiam eget egestas. Aliquet odio et lectus etiam sit.
      </h3>
      <h3 className="mt-6 text-[#777777] lg:text-xl">
        In mauris rutrum ac ut volutpat, ornare nibh diam. Montes, vitae, nec
        amet enim.
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 relative h-[700px] lg:h-[500px] mt-12">
        <div className="our-value-point ">
          <ul>
            <li className="li-img mt-4">
              <h1 className="text-2xl">Dedication</h1>
              <p className="text-[#777777] mt-2">
                Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus id quod maxime placeat.
              </p>
            </li>
            <li className="li-img mt-4">
              <h1 className="text-2xl">Intellectual Honesty</h1>
              <p className="text-[#777777]  mt-2">
                Itaque earum rerum hic tenetur a sapiente delectus, ut aut
                reiciendis voluptatibus maiores alias conse.
              </p>
            </li>
            <li className=" li-img mt-4">
              <h1 className="text-2xl">Curiosity</h1>
              <p className="text-[#777777]  mt-2">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque.
              </p>
            </li>
          </ul>
        </div>
        <div className="our-value-img absolute right-0 bottom-0 lg:bottom-[20%]">
          <img src={OurValueImage} className="h-fit md:h-[300px]" alt="" />
        </div>
      </div>
    </div>
  );
}
