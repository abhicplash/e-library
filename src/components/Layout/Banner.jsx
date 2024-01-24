import React from "react";
import book from "../../assets/bb.png";

function Banner() {
    return (
        <div className="  flex justify-center items-center gap-36 w-full h-[100vh] shadow-xl">
            <div className="  flex flex-col justify-center items-center ">
                <h1 className="text-6xl font-bold text-blue-950 hover:scale-150  duration-1000 ">
                    Find Your Best <br /> <span className="text-9xl  font-extrabold  ">BOOK</span>
                </h1>

            </div>
            <div className="  flex justify-center items-center">
                <img src={book} alt="" className="hover:[transform:rotateY(180deg)] duration-1000 rounded-t-full w-72   border-2 border-blue-300 " />

            </div>
        </div>
    );
}

export default Banner;
