import React, { useState, useEffect } from "react";

function Service() {
    const [serviceState, setServeState] = useState([]);

    useEffect(()=>{
        let serviceState = [
            {
                id: 1,
                num: '1',
                serveN: '기계전사 v',
                ver: '1.4.1',
                sum1: '5,000,000 건',
                sum2:'1,000,000 원',
                sum3: '30,120,000 원',
                sum4: '10,812 명',
            },
            {
                id: 2,
                num: '2',
                serveN: '기계전사v Kakao',
                ver: '1.0.1',
                sum1: '23,120 건',
                sum2:'1,000,000 원',
                sum3: '30,120,000 원',
                sum4: '10,812 명',
            },
            {
                id: 3,
                num: '3',
                serveN: '기계전사v Tstore',
                ver: '1.0.1',
                sum1: '23,120 건',
                sum2:'1,000,000 원',
                sum3: '30,120,000 원',
                sum4: '10,812 명',
            },
            {
                id: 4,
                num: '4',
                serveN: '기계전사v Oz',
                ver: '1.0.1',
                sum1: '23,120 건',
                sum2:'1,000,000 원',
                sum3: '30,120,000 원',
                sum4: '10,812 명',
            },
        ];

        setServeState(
            serviceState.map(d=>{
                return{
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
    }, [])

    return (
        <section className="serviceList">
            <h2>Service List</h2>
                <div className="boardBox">
                    <ul className="boardTit">
                        <li className="clickBox">
                            <input
                                type="checkbox"
                                onChange={e => {
                                    let checked = e.target.checked;
                                    setServeState(
                                        serviceState.map(d => {
                                        d.select = checked;
                                        return d;
                                        })
                                    );
                                }}
                            />
                        </li>
                        <li className="num">순위</li>
                        <li className="serveN">서비스명</li>
                        <li className="ver">M ver.</li>
                        <li className="sum1">DAU</li>
                        <li className="sum2">매출</li>
                        <li className="sum3">과금</li>
                        <li className="sum4">신규가입자</li>
                    </ul>
                    {serviceState.map((d)=>(
                        <ul className="boardTit" key = {d.id}>
                            <li className="clickBox">
                                <input 
                                    onChange={event => {
                                        let checked = event.target.checked;
                                        setServeState(
                                            serviceState.map(data => {
                                                if (d.id === data.id) {
                                                    data.select = checked;
                                                }
                                                return data;
                                            })
                                        );
                                    }}
                                    type="checkbox"
                                    checked={d.select}
                                />
                            </li>
                            <li className="num">{d.num}</li>
                            <li className="serveN">{d.serveN}</li>
                            <li className="ver">{d.ver}</li>
                            <li className="sum1">{d.sum1}</li>
                            <li className="sum2">{d.sum2}</li>
                            <li className="sum3">{d.sum3}</li>
                            <li className="sum4">{d.sum4}</li>
                        </ul>
                    ))}
                </div>
        </section>
    )
}
export default Service;
