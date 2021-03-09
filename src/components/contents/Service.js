import React from 'react';

function Service() {
    return (
        <section className="serviceList">
            <h2>Service List</h2>

            <div className="boardBox">
                <ul className="boardTit">
                    <li className="num">순위</li>
                    <li className="serveN">서비스명</li>
                    <li className="ver">M ver.</li>
                    <li className="sum1">DAU</li>
                    <li className="sum2">매출</li>
                    <li className="sum3">과금</li>
                    <li className="sum4">신규가입자</li>
                </ul>
                <ul className="boardTxt">
                    <li className="num">1</li>
                    <li className="serveN">기계전사 v</li>
                    <li className="ver">1.4.1</li>
                    <li className="sum1">5,000,000 건</li>
                    <li className="sum2">1,000,000 원</li>
                    <li className="sum3">30,120,000 원</li>
                    <li className="sum4">10,812 명</li>
                </ul>
                <ul className="boardTxt">
                    <li className="num">2</li>
                    <li className="serveN">기계전사v Kakao</li>
                    <li className="ver">1.4.1</li>
                    <li className="sum1">23,120 건</li>
                    <li className="sum2">10,860,000 원</li>
                    <li className="sum3">30,000,000 원</li>
                    <li className="sum4">192,712,890 명</li>
                </ul>
                <ul className="boardTxt">
                    <li className="num">3</li>
                    <li className="serveN">기계전사v Tstore</li>
                    <li className="ver">1.0.1</li>
                    <li className="sum1">1,002,330 건</li>
                    <li className="sum2">100,000 원</li>
                    <li className="sum3">121,230,000 원</li>
                    <li className="sum4">1,377,455 명</li>
                </ul>
                <ul className="boardTxt">
                    <li className="num">4</li>
                    <li className="serveN">기계전사v Oz</li>
                    <li className="ver">1.2.1</li>
                    <li className="sum1">100,098 건</li>
                    <li className="sum2">1,000,000,000 원</li>
                    <li className="sum3">2,563,000 원</li>
                    <li className="sum4">156,390 명</li>
                </ul>
            </div>
        </section>
    )
}
export default Service;