import React from 'react';

function Service() {
    return (
        <section className="serviceList">
            <h2>서비스 리스트</h2>

            <div className="boardBox">
                <ul className="boardTit">
                    <li>순위</li>
                    <li>서비스명</li>
                    <li>M ver.</li>
                    <li>DAU</li>
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
                <ul className="boardTxt">
                    <li>2</li>
                    <li>기계전사v Kakao</li>
                    <li>1.4.1</li>
                    <li>23,120 건</li>
                    <li>10,860,000 원</li>
                    <li>30,000,000 원</li>
                    <li>192,712,890 명</li>
                </ul>
                <ul className="boardTxt">
                    <li>3</li>
                    <li>기계전사v Tstore</li>
                    <li>1.0.1</li>
                    <li>1,002,330 건</li>
                    <li>100,000 원</li>
                    <li>121,230,000 원</li>
                    <li>1,377,455 명</li>
                </ul>
                <ul className="boardTxt">
                    <li>4</li>
                    <li>기계전사v Oz</li>
                    <li>1.2.1</li>
                    <li>100,098 건</li>
                    <li>1,000,000,000 원</li>
                    <li>2,563,000 원</li>
                    <li>156,390 명</li>
                </ul>
            </div>
        </section>
    )
}
export default Service;