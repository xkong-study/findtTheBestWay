import React from "react";
import {
  ClockIcon,
  PaperClipIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import {useDispatch} from "react-redux"
import {PlaceClassification, SavePlace} from "../store/reducer";
import {Dialog} from "antd-mobile";

function Suggestion(props:any) {
  const dispatch = useDispatch()
  const save=()=>{
    Dialog.show({
      content: 'Locations categorized into',
      closeOnAction: true,
      actions: [
        {
          key: 'work',
          text: 'work',
        },
        {
          key: 'home',
          text: 'home',
        },
        [
          {
            key: 'cancel',
            text: 'cancel',
          },
          {
            key: 'submit',
            text: 'submit',
            bold: true,
            danger: true,
          },
        ],
      ],
      onAction: function(event) {
        let clickedKey = event.key;
        if(clickedKey!='cancel') {
          console.log(clickedKey)
          dispatch((PlaceClassification(clickedKey)))
          dispatch((SavePlace(props.props)))
        }
      }
    })
  }
  return (
    <div className="flex items-center justify-between -mx-2">
        <div className="flex space-x-2">
            <ClockIcon className="h-12 w-12 text-blue-600 p-2 bg-blue-100 rounded-full"/>
            <div>
                <dt className=" text-base" style={{width:"13rem"}}>{props.props}</dt>
                <dl className=" text-sm text-gray-500">Capel Street,Rotunda</dl>
            </div>
        </div>
        <span>
      <HeartIcon className="h-10 w-10 text-pink-600 p-2 bg-pink-100 ring-1 ring-pink-600 rounded-full mx-5 -mt-3" onClick={save}/>
      </span>
    </div>
  );
}

export default Suggestion;
