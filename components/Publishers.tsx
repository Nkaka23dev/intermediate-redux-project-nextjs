import Link from "next/link";
import { GrArticle } from "react-icons/gr";

export default function Publishers() {
    return (
        <div className="mt-4 flex flex-col md:mt-5 md:px-4 ">
            <h1 className="text-2xl mb-3  font-bold tracking-wide capitalize text-red-500">
                News Publishers
            </h1>
            <div className="grid grid-cols-4 md:grid-cols-1">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1, 4, 15, 16, 17, 18, 19, 20].map((article, idx) => {
                    return (
                        <Link href="pubdetails">
                            <div key={idx} className="flex hover:underline cursor-pointer  py-2 justify-between items-center">
                                <h1 className="capitalize text-lg text-gray-600 flex items-center gap-1">
                                    <GrArticle />
                                    Publishers will be here
                                </h1>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    )
}
