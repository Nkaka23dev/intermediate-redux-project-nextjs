import Link from 'next/link'
import React from 'react'
import { TfiSearch } from "react-icons/tfi";

export default function Navbar() {
    return (
        <section className="shadow-md fixed left-0 right-0 top-0 w-full bg-white z-50">
            <div className="max-w-6xl  mx-auto  py-6 flex gap-10 justify-between items-center flex-wrap md:flex-col">
                <div>
                    <Link href="/" className="text-3xl font-bold text-red-600 cursor-pointer">
                        News Article
                    </Link>
                </div>
                <div className="flex-1 relative cursor-pointer">
                    <input
                        placeholder="Search.."
                        type="text"
                        className="w-full px-5  border py-2 rounded-full border-gray-500 focus:outline-0"
                    />
                    <button className="absolute right-3 top-2 cursor-pointer">
                        <TfiSearch className="text-2xl text-gray-500 " />
                    </button>
                </div>
                <div className="flex">
                    <Link
                        href="/"
                        className="hover:bg-red-400 duration-300 hover:text-white text-lg underline p-2 rounded-xl  cursor-pointer"
                    >
                        Home
                    </Link>
                    <Link
                        href="#"
                        className="hover:bg-red-400 duration-300 hover:text-white text-lg underline p-2 rounded-xl  cursor-pointer"
                    >
                        Create Article
                    </Link>
                </div>
            </div>
        </section>
    )
}
