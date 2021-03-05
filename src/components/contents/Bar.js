import React from 'react';

function Bar() {
    return (
        <section className="bar">
            <div className="box">
                <button className="dateBox">03 / 04</button>
                <span className="line">~</span>
                <button className="dateBox">03 / 31</button>
                <button className="sBox">기간</button>
            </div>
        </section>
    )
}
export default Bar;