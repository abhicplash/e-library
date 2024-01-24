import React from "react";
import { details } from "../../utils/config";

function Shimmer() {
    return (
        <div className="w-full flex flex-col items-center my-10 ">
            <div className="flex gap-2 w-full justify-center shadow-xl pb-10  ">
                <h1>Search </h1>
                <input
                    type="text"
                    name="search"
                    id="inputbox"
                    className="border border-black rounded-md  w-1/7 pl-2"
                    placeholder="Book"
                />
                <h1>Here!</h1>
            </div>
            <div className="flex flex-wrap w-full justify-center  items-center gap-10 py-20">
                {details.slice(0, 24).map((list, index) =>
                    <div
                        key={index}
                        className="p-2 h-36 flex rounded-lg shadow-md bg-blue-100 max-md:w-1/2 max-lg:w-1/3 w-1/4 gap-2"
                    >
                        <div className="w-1/3 h-[20vh] shadow-xl rounded-2xl border" />
                        <div className=" w-2/3 rounded-md shadow-md" />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Shimmer;
