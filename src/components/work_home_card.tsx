import React from "react";
import { UilCompass } from '@iconscout/react-unicons';
import {useNavigate} from "react-router-dom";
function Work_Home(props:any) {
  console.log(props)
  const navigate = useNavigate()
  return (
    <div className="flex items-center justify-between -mx-2">
      <div className="flex space-x-2">
        <UilCompass className="h-12 w-12 text-blue-600 p-2 bg-blue-100 rounded-full" onClick={()=>navigate('/Page4', {
          state: {
            id: 1,
            name: `${props.props}`,
          }
        })}/>
        <div>
          <dt className=" text-base" style={{width:"13rem"}}>{props.props}</dt>
          <dl className=" text-sm text-gray-500">Capel Street,Rotunda</dl>
        </div>
      </div>
      <span>
      </span>
    </div>
  );
}

export default Work_Home;
