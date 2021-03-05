import React from 'react';

function Analytics() {
    return (
        <section  className="analytics">
            <h2>그룹</h2>

            <div className="boardBox">
                <ul className="boardTit">
                    <li>순위</li>
                    <li>그룹명</li>
                    <li>DAU</li>
                    <li>누적접속</li>
                    <li>매출</li>
                    <li>과금</li>
                    <li>신규가입자</li>
                </ul>
                <ul className="boardTxt">
                    <li>1</li>
                    <li>기계전사 v</li>
                    <li>1.4.1</li>
                    <li>5,000,000 건</li>
                    <li>1,000,000 원</li>
                    <li>30,120,000 원</li>
                    <li>10,812 명</li>
                </ul>
            </div>
        </section>
    )
}
export default Analytics;

