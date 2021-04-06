import React, { useState } from "react";
import Btn from "./Btn";

function Paging() {

  const [active, setActive] = useState(false)
  const [pageNum, setPageNum] = useState(['1','2','3','4','5','6','7','8','9','10'])



  return (
    <div className="btnBox">
      <div className="paging">
        <button className="pn">prev</button>
        <button className={active ? 'current' : 'btnPage'}>{pageNum}</button>
        <button className="pn">next</button>
      </div>
      <Btn />
    </div>
  );
}
export default Paging;
