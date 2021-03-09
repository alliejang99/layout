import React from 'react';

function Analytics() {
    return (
        <section  className="analytics">
            <h2>Group</h2>

            <div className="boardBox">
                <ul className="boardTit">
                    <li className="num">순위</li>
                    <li className="serveN">그룹명</li>
                    <li className="ver">DAU</li>
                    <li className="sum1">누적접속</li>
                    <li className="sum2">매출</li>
                    <li className="sum3">과금</li>
                    <li className="sum4">신규가입자</li>
                </ul>
                <ul className="boardTxt">
                    <li className="num">1</li>
                    <li className="serveN">Name</li>
                    <li className="ver">1.4.1</li>
                    <li className="sum1">5,000,000 건</li>
                    <li className="sum2">1,000,000 원</li>
                    <li className="sum3">30,120,000 원</li>
                    <li className="sum4">10,812 명</li>
                </ul>
            </div>
        </section>
    )
}
export default Analytics;

