import useWeather from '../../../hooks/useWeather'
import { SlCalender } from "react-icons/sl";
import Loading from '../../../components/common/Loading';
import { CiLocationOn } from "react-icons/ci";
export default function Sidebar() {
    const date = new Date();
    const options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
    };
    const {data, error, isLoading} = useWeather();
    if (isLoading) {
        return <Loading />;
    }
    if (error)
      return (
        <p className="text-red-500">
          {error === "city not found" ? "City not found" : error}
        </p>
      );
    return (
      <div className="flex flex-col items-start gap-3 p-6 bg-[#1d1c1f] rounded-lg">
        <span className="text-[20px] text-white font-medium">Now</span>
        <div className="flex items-center gap-3">
          <p className="text-[80px] leading-[88px] font-normal text-white">
            {data?.main?.temp}
            <sup>°C</sup>
          </p>
        </div>
        <div className="border-b border-[#333] w-full" />
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-2">
           <SlCalender className="text-white" />
            <p className="text-[16px] leading-[14px] font-medium text-[#7b7980]">
              {date.toLocaleDateString("en-US", options)}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <CiLocationOn className="text-white" />
            <p className="text-[16px] leading-[14px] font-medium text-[#7b7980]">
                Addis Ababa, Ethiopia
            </p>
            
          </div>
        </div>
      </div>
    );
}