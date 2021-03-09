import React from 'react';

function Basic() {
    return (
        <section className="basic">
            <h2>Basic Indicators</h2>
            <div className="basicList">
                <div className="dau flex">
                    <div className="mainTitle">dau</div>
                    <div className="subTitle">
                        <p className="pointTit">dau</p>
                        <span className="ponitCont">630.70</span>
                    </div>
                    <div className="pointBox">
                        <div className="point">
                            <p className="pointTit">가입자수</p>
                            <span className="ponitCont">148</span>
                        </div>
                        <div className="point">
                            <p className="pointTit">누적 접속수</p>
                            <span className="ponitCont">11,098</span>
                        </div>
                    </div>
                </div>

                <div className="arpu flex">
                    <div className="mainTitle">arpu</div>
                    <div className="subTitle">
                        <p className="pointTit">arpu</p>
                        <span className="ponitCont">630.70</span>
                    </div>
                    <div className="pointBox">
                        <div className="point">
                            <p className="pointTit">과금 ARPU</p>
                            <span className="ponitCont">&#8361;180,026,148</span>
                        </div>
                    </div>
                    
                </div>

                <div className="sales flex">
                    <div className="mainTitle">매출</div>
                    <div className="subTitle">
                        <p className="pointTit">매출</p>
                        <span className="ponitCont">&#8361;180,026,148</span>
                    </div>
                    <div className="pointBox">
                        <div className="point">
                            <p className="pointTit">재과금액</p>
                            <span className="ponitCont">&#8361;11,098,657,650</span>
                        </div>
                        <div className="point">
                            <p className="pointTit">과금율</p>
                            <span className="ponitCont">50%</span>
                        </div>  
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Basic;