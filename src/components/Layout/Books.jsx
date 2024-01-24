import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

function Books() {
    const [book, setBook] = useState([]);
    const [searchTerm, setSearchTerm] = useState("wonder");
    useEffect(() => {
        if (searchTerm !== "") {
            getBookData()
        }
    }, [searchTerm]);
    async function getBookData() {
        const BookData = await fetch(
            `https://openlibrary.org/search.json?title=${searchTerm}`
        );
        const BookJson = await BookData.json();
        setBook(BookJson.docs);
    }
    return book.length === 0
        ? <Shimmer />
        : <div className="w-full flex flex-col items-center my-10">
            <div className="flex gap-2 w-full justify-center shadow-xl pb-10">
                <h1>Search </h1>
                <input
                    type="text"
                    className="border border-black rounded-lg pl-2"
                    placeholder="Book"
                    name="search"
                    id="inputbox"
                    onChange={(e) => { setSearchTerm(e.target.value) }}
                />
                <h1>Here!</h1>
            </div>

            <div className=" flex flex-wrap max-md:flex-col justify-center  gap-7 items-center py-16">
                {console.log(book)}
                {book.slice(0, 30).map(list =>
                    <div
                        key={list.key}
                        className="shadow-md my-5 rounded-lg py-2 px-1 flex  max-md:w-1/2 max-lg:w-1/3 w-1/4 gap-2"
                    >
                        <img
                            src={`https://covers.openlibrary.org/b/id/${list.cover_i}-L.jpg`}
                            alt=""
                            className="w-1/3 h-[20vh] shadow-xl rounded-2xl border border-orange-200"
                        />
                        <div className="w-2/3 rounded-md shadow-md  flex flex-col justify-between p-1">
                            <h1 className="font-bold w-[80%] ">
                                {list.title.slice(0, 45)}
                            </h1>
                            <h1 className="text-sm">
                                {list.author_name}
                            </h1>
                            <h1 className="text-sm">
                                {list.first_publish_year}
                            </h1>
                        </div>
                    </div>
                )}
            </div>
        </div>;
    //   book.length === 0
    //     ? <Shimmer />
    //     : <div className="flex flex-wrap w-full justify-center items-center gap-14 my-16 px-14">
    //         {console.log(book)}
    //         {book.slice(0, 24).map(book =>
    //           <div
    //             className="w-1/3  h-[50vh] border shadow-md shadow-blue-400 rounded-md flex justify-center items-center p-1 gap-4"
    //             key={book.cover_i}
    //           >
    //             <img
    //               src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
    //               alt=""
    //               className="h-[75%] w-[45%]  shadow-sm shadow-blue-400 rounded-lg"
    //             />
    //             <div className="w-[80%] h-[80%] flex-col flex gap-1 justify-between  ">
    //               <h1 className="pl-2  w-[100%] bg-blue-50 rounded-lg font-semibold border text-[0.75rem] text-blue-950 uppercase ">
    //                 {book.title.slice(0,20)}
    //               </h1>
    //               <h1 className="pl-2  w-[100%] bg-blue-50 h-36  border rounded-lg text-[0.6rem]">
    //                 {book.author_name}
    //               </h1>
    //               <h1 className="pl-2  w-[100%] bg-blue-50 h-10  border rounded-lg text-[0.5rem]">
    //                 {book.first_publish_year}
    //               </h1>
    //             </div>
    //           </div>
    //         )}
    //       </div>;
}

export default Books;
