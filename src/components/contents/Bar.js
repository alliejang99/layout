import React from 'react';

function Bar() {
    return (
        <section className="bar">
            <div className="box">
                {/* <button className="dateBox">03 / 04</button> */}
                <select className="dateBox" name="date" id="1">
                    <option value="">--select--</option>
                    <option value="2021">2021</option>
                    <option value="2020">2021</option>
                    <option value="2019">2019</option>
                </select>
                <span className="line">~</span>
                <select className="dateBox" name="date" id="1">
                    <option value="">--select--</option>
                    <option value="03/01">03/01</option>
                    <option value="03/02">03/02</option>
                    <option value="03/03">03/03</option>
                </select>
                <select className="sBox" name="date" id="1">
                    <option value="">-select-</option>
                    <option value="기간">기간</option>
                </select>
            </div>
        </section>
    )
}
export default Bar;