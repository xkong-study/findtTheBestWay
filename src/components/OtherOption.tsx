import {BiWalk, BsBusFrontFill} from "react-icons/all";
import {ChevronRightIcon} from "@heroicons/react/20/solid";
import moment from "moment";
import React from "react";

export default function OtherOption({duration,station,busNumber,arriveTime}){
  let dateBus = new Date();
  let currentMinutes = dateBus.getMinutes();
  let newBusMinutes = currentMinutes + parseInt(duration.replace(/[^0-9]/g, ""));
  dateBus.setMinutes(newBusMinutes)
 console.log(duration,station,busNumber,arriveTime)
  return(
    <div>
    <div className="w-full h-40 bg-white-500 border border-b-8 border-t-8 border-collapse">
      <div className="flex flex-col">
        <div className="mx-5 mt-2"><p>Options</p></div>
        <div className="mt-2">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row mt-5">
              <BiWalk className="w-4 h-4 mx-5 mr-3"/>
              <ChevronRightIcon className="h-4 w-4" aria-hidden="true"/>
              <BsBusFrontFill className="w-4 h-4 mx-3"/>
              <p style={{backgroundColor: "yellow", width: "1rem"}}>{busNumber}</p>
              <ChevronRightIcon className="h-4 w-4" aria-hidden="true"/>
              <BiWalk className="w-4 h-4 mx-3"/>
            </div>
            <div className="mr-5"><p>{duration}</p></div>
          </div>
        </div>
        <div className="mx-5 mt-5"><p>{moment().calendar().split(' ')[2]}-{dateBus.toTimeString()}</p>
        </div>
        <div className="mx-5 mt-1">
          <p>Arrive time:{arriveTime} Stop:{station}</p>
        </div>
      </div>
    </div>
</div>
  )
}
