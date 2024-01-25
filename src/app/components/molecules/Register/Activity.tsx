import React from "react";
import { motion as m } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
interface ITActivity {
  name: string;
  action?: () => void;
  key:number;
}
const Activity: React.FC<ITActivity> = ({ name, action }) => {
  return (
    <m.div
      onClick={() => action && action()}
      whileHover={{
        cursor: "pointer",
        border: "1px solid green",
        transition: { duration: 0.3 },
      }}
      className="country w-full border border-gray-100 shadow-sm text-black p-7 rounded-sm flex flex-row justify-between items-center"
    >
      <div className="flex flex-row gap-6 items-center">
        <div>
          <p className="md:text-md text-sm font-quick">{name}</p>
        </div>
      </div>
      <ChevronRight color="black" />
    </m.div>
  );
};

export default Activity;
