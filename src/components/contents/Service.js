import React, { useState } from "react";
import Example from "./Exaple";

const ServiceInfo = [
  {
    id: 1,
    num: "1",
    serveN: "기계전사 v",
    ver: "1.4.1",
    sum1: "5,000,020 건",
    sum2: "1,000,000 원",
    sum3: "30,120,000 원",
    sum4: "10,812 명",
  },
  {
    id: 2,
    num: "2",
    serveN: "기계전사v Kakao",
    ver: "1.0.1",
    sum1: "23,120 건",
    sum2: "1,000,060 원",
    sum3: "30,120,000 원",
    sum4: "10,812 명",
  },
  {
    id: 3,
    num: "3",
    serveN: "기계전사v Tstore",
    ver: "1.0.1",
    sum1: "23,120 건",
    sum2: "1,000,010 원",
    sum3: "30,120,000 원",
    sum4: "10,812 명",
  },
  {
    id: 4,
    num: "4",
    serveN: "기계전사v Oz",
    ver: "1.0.1",
    sum1: "23,120 건",
    sum2: "1,0800,000 원",
    sum3: "30,120,000 원",
    sum4: "10,812 명",
  },
];

function Service() {
  const [ServiceInfo, setServeState] = useState([]);

  const test = () => {
    ServiceInfo.sort((a, b) => {
      let nameA = a.sum2.toUpperCase();
      let nameB = b.sum2.toUpperCase();
      if (nameA > nameB) {
        return 1;
      }
      if (nameA < nameB) {
        return -1;
      }
      return 0;
    });
  };

  const serve = () => {
    setServeState(
      ServiceInfo.map((d) => {
        return {
          select: false,
          id: d.id,
          num: d.num,
          serveN: d.serveN,
          ver: d.ver,
          sum1: d.sum1,
          sum2: d.sum2,
          sum3: d.sum3,
          sum4: d.sum4,
        };
      })
    );
  };

  return (
    <section className="serviceList">
      <h2>Service List</h2>
      <div className="boardBox">
        <ul className="boardTit">
          <li className="clickBox">
            <input
              type="checkbox"
              onChange={(e) => {
                let checked = e.target.checked;
                setServeState(
                  ServiceInfo.map((d) => {
                    d.select = checked;
                    return d;
                  })
                );
              }}
            />
            <Example />
          </li>
          <li className="num">순위</li>
          <li className="serveN">서비스명</li>
          <li className="ver">M ver.</li>
          <li className="sum1">DAU</li>
          <li className="sum2">매출</li>
          <li className="sum3">과금</li>
          <li className="sum4">신규가입자</li>
        </ul>

        <ul className="boardTxt">
          <li className="clickBox">
            <li className="num"></li>
          </li>
        </ul>
      </div>
    </section>
  );
}
export default Service;
