import React from "react";
import Suggestion from "./Suggestion";

export default function ListContainer() {
  const position = ['Trinity College, 学院绿地 Dublin 2, 爱尔兰','Hamilton Building, Westland Row, Dublin 2, 爱尔兰','Dorset Street Upper, 都柏林爱尔兰','Phoenix Park, Dublin 8, 爱尔兰','Dublin Airport (DUB), 都柏林爱尔兰','Dublin Zoo, Saint James\' (part of Phoenix Park), Dublin 8, 爱尔兰']
  const suggestions = position.map((item) => {
    return <li key={item} className="px-4 py-4 sm:px-6"><Suggestion props={item} key={item}/></li>;
  });

  return <ul role="list" className="divide-y divide-gray-200">{suggestions}</ul>;
}

