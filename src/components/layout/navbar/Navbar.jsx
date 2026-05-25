import React from "react";
import SearchIcon from './SearchIcon';
import Logo from "./Logo";

export default function Navbar() {
    return (
        <nav className="w-full flex items-center justify-between bg-black px-4 md:px-8 lg:px-12 py-3 lg:py-5">
             <Logo />
             <SearchIcon />
        </nav>
    )
}

