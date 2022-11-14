
import chaire from "../../../assets/images/chair.png";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const ApointmentBanner = ({selectedDate, setSelectedDate}) => {
 
  
  return (
    <div className="hero min-h-screen ">
      <div className=" grid grid-cols-1 md:grid-cols-2  gap-10">
      <div className="flex  flex-col-reverse">
          <img
            src={chaire}
            className=" rounded-lg shadow-2xl  "
            alt=""
          />
        </div>
        <div className=" flex justify-center  ">
          <DayPicker mode="single" selected={selectedDate} onSelect={setSelectedDate} />
         
        </div>
       
      </div>
    </div>
  );
};

export default ApointmentBanner;
