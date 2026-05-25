import React from "react";
import useWeatherStore from "../../../app/store/useWeatherStore";
import { IoSearchOutline } from "react-icons/io5";

export default function SearchIcon() {
  const city = useWeatherStore((state) => state.city);
  const setCity = useWeatherStore((state) => state.setCity);

  return (
    <div className="relative">
      <IoSearchOutline
        className="absolute left-3 top-1/2 -translate-y-1/2 text-[#888]"
        size={20}
      />

      <input
        type="search"
        placeholder="India"
        value={city}
        onChange={(e) => setCity(e.target.value.trimStart())}
        className="outline-none w-full max-w-[300px] lg:max-w-[400px] rounded-full bg-[#1d1c1f] py-2 pl-10 pr-4 text-white placeholder:text-[#888]"
      />
    </div>
  );
}
