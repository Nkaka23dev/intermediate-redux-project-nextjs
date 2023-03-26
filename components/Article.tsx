import Link from "next/link";
import { BsArrowRight, BsArrowDown } from "react-icons/bs";


export default function Article({ title }: any) {
  return (
    <div className="grid grid-cols-3 md:grid-cols-1 mt-32 gap-24 items-start">
      {/* All articles */}
      <div className="col-span-full">
        <h1 className="text-2xl flex items-center gap-3  font-bold tracking-wide uppercase  static top-3">
          {title}
          <BsArrowDown className="text-lg" />
        </h1>

        <div className="grid grid-cols-3 gap-7 md:grid-cols-1 mt-10">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((article, indx) => {
            return (
              <Link key={indx} href="details">
                <div
                  className="shadow-xl hover:shadow-2xl items-start content-start flex justify-between flex-col h-full cursor-pointer"
                >
                  <img
                    className="aspect-video h-[12rem] w-[40rem] object-cover object-center mt-2"
                    src="https://i2-vnexpress.vnecdn.net/2023/03/18/VolkswagenID2all1-1679120658-2113-1679145822.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=eTA7NMataNexVF8EFSowuA"
                    alt=""
                  />
                  <div className="text-sm mt-auto py-6 px-2 space-y-3 flex flex-col">
                    <h4 className="capitalize text-gray-600 text-[1rem] leading-6  shadow-red-600">
                      First title p;lacre here
                    </h4>
                    <div className=" pb-3">
                      <button className="p-2 w-full rounded-full hover:bg-red-400 hover:text-white justify-center gap-2 border flex items-center font-semibold border-red-500 text-red-500">
                        View More
                        <BsArrowRight className="text-lg  font-bold" />
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      {/* news publishers */}
    </div>
  )
}
