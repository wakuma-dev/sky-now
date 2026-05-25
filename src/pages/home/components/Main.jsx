import React from "react";
import useWeather from "../../../hooks/useWeather";
import { FaWind } from "react-icons/fa";
import { FaRegSun } from "react-icons/fa";
import { IoMoonOutline } from "react-icons/io5";
import { WiHumidity } from "react-icons/wi";
import Loading from "../../../components/common/Loading";
import { FaWindowMinimize } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa";
import { CiTempHigh } from "react-icons/ci";
export default function Main() {
  const { data, error, isLoading } = useWeather();

  if (isLoading) return <Loading />;
 if (error)
   return (
     <p className="text-red-500">
       {error === "city not found" ? "City not found" : error}
     </p>
   );

  // Convert UNIX time → readable time
  const formatTime = (timestamp) => {
    if (!timestamp) return "--:--";
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="bg-[#1d1c1f] rounded-lg p-6 flex flex-col items-start gap-4">
      {/* TITLE */}
      <p className="text-[20px] text-white font-bold">Today's Highlights</p>

      {/* WIND + SUNSET SECTION */}
      <div className="w-full flex flex-col lg:flex-row gap-3">
        {/* WIND CARD */}
        <div className="w-full lg:w-1/2 bg-[#1a181b] text-white rounded-lg p-5">
          <div className="flex justify-between">
            <span className="text-[16px] text-[#7b7980]">Wind Speed</span>

            <button className="bg-[#F6F657] text-black px-3 py-0.5 rounded-full">
              live
            </button>
          </div>

          <div className="mt-4 flex items-center gap-3">
            <FaWind size={50} />
            <p>{data?.wind?.speed} m/s</p>
          </div>
        </div>

        {/* SUNRISE / SUNSET */}
        <div className="w-full lg:w-1/2 bg-[#1a181b] text-white rounded-lg p-5 flex flex-col gap-3">
          <p className="text-[16px] text-[#7b7980]">Sunrise & Sunset</p>

          <div className="flex items-center gap-8">
            {/* SUNRISE */}
            <div className="flex flex-col items-start gap-2">
              <FaRegSun className="text-yellow-400" size={40} />
              <span className="text-[14px] text-[#7b7980]">Sunrise</span>
              <p>{formatTime(data?.sys?.sunrise)}</p>
            </div>

            {/* SUNSET */}
            <div className="flex flex-col items-start gap-2">
              <IoMoonOutline className="text-blue-300" size={40} />
              <span className="text-[14px] text-[#7b7980]">Sunset</span>
              <p>{formatTime(data?.sys?.sunset)}</p>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM CARDS GRID */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {/* HUMIDITY */}
        <div className="flex flex-col items-start gap-3 bg-[#1a181b] p-5 rounded-md text-white">
          <p className="text-[#7b7980] text-[16px] font-bold">Humidity</p>
          <div className="flex items-center justify-between w-full">
            <WiHumidity size={50} />
            <p className="text-[36px] text-white">{data?.main?.humidity}%</p>
          </div>
        </div>

        {/* PRESSURE */}
        <div className="flex flex-col items-start gap-3 bg-[#1a181b] p-5 rounded-md text-white">
          <p className="text-[#7b7980] text-[16px] font-bold">Pressure</p>
          <div className="flex items-center justify-between w-full">
            <FaWindowMinimize size={50} />
            <p className="text-[36px] text-white">{data?.main?.pressure} hPa</p>
          </div>
        </div>

        {/* VISIBILITY */}
        <div className="flex flex-col items-start gap-3 bg-[#1a181b] p-5 rounded-md text-white">
          <p className="text-[#7b7980] text-[16px] font-bold">Visibility</p>
          <div className="flex items-center justify-between w-full">
            <FaRegEye size={50} />
            <p className="text-[36px] text-white">{data?.visibility} m</p>
          </div>
        </div>

        {/* FEELS LIKE */}
        <div className="flex flex-col items-start gap-3 bg-[#1a181b] p-5 rounded-md text-white">
          <p className="text-[#7b7980] text-[16px] font-bold">Feels like</p>
          <div className="flex items-center justify-between w-full">
            <CiTempHigh size={50} />
            <p className="text-[36px] text-white">{data?.main?.feels_like}°C</p>
          </div>
        </div>
      </div>
    </div>
  );
}
