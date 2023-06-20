import dayjs from "dayjs";
import { useState } from "react";
import { generateDate, months } from "./dateGenerate";

const cn = (...classes: any) => {
  return classes.filter(Boolean).join(" ");
};

interface CalendarProps {
  date?:string;
  canEdit?: Boolean
}

export const Calendar = ({ date, canEdit=false }: CalendarProps): JSX.Element => {
  const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  const defaultCurrentDate = date ? new Date(date) : new Date()
  const currentDate = dayjs(defaultCurrentDate);
  const [defaultDate, setDefaultDate] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate);
  
  return (
    <div className="border-2 border-rose-600/70 rounded p-2 max-w-md">
      <div className="text-center">
        <h1 className="select-none font-semibold">
          {months[defaultDate.month()]}, {defaultDate.year()}
        </h1>
      </div>
      <div className="grid grid-cols-7">
        {days.map((day, index) => {
          return (
            <h1
              key={index}
              className="text-sm text-center h-10 grid place-content-center text-gray-500 select-none"
            >
              {day}
            </h1>
          );
        })}
      </div>

      <div className=" grid grid-cols-7 ">
        {generateDate(defaultDate.month(), defaultDate.year()).map(
          ({ date, currentMonth }, index) => {
            return (
              <div
                key={index}
                className="text-center h-8 w-8 grid place-content-center text-sm border-t"
              >
                <h1
                  className={cn(
                    currentMonth ? "" : "text-gray-400",
                    selectDate.toDate().toDateString() ===
                      date.toDate().toDateString()
                      ? "bg-black text-white"
                      : "",
                    defaultDate.toDate().toDateString() ===
                      date.toDate().toDateString()
                      ? "bg-red-600 text-white"
                      : "",
                    "h-6 w-6 rounded-full grid place-content-center hover:bg-black hover:text-white transition-all cursor-pointer select-none"
                  )}
                  onClick={() => {
                    if(canEdit){
                        setSelectDate(date);
                    }
                  }}
                >
                  {date.date()}
                </h1>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};
