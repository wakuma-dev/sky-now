import { TiWeatherPartlySunny } from "react-icons/ti";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/" className="flex items-center gap-1 md:gap-2">
      <TiWeatherPartlySunny className="text-3xl text-white" />

      <span className="text-[14px] font-medium text-white">Sky Now</span>
    </Link>
  );
}
