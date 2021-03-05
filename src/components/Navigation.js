import React from 'react';
import '../scss/style.scss';

/***** image *****/
import Example from '../img/example.png';
import tstore from '../img/tstore.png';
import google_play from '../img/google_play.png';
import appstore from '../img/appstore.png';


function Navigation() {
    return (
        <nav className="nav">
            <div className="service">
                <div className="serviceImg">
                    <img src={Example} alt="이미지" />
                </div>
                <div className="serviceInfo">
                    <p>기계전사 V</p>
                    <ul>
                        <li>
                            <img className="imageSize" src={tstore} alt="이미지" />
                        </li>
                        <li>
                            <img className="imageSize"  src={google_play} alt="이미지" />
                        </li>
                        <li>
                            <img className="imageSize"  src={appstore} alt="이미지" />
                        </li>
                    </ul>
                </div>
            </div>
            <div className="serviceTable">
                <div className="tableTop">
                    <p>분석</p>
                    <ul>
                        <li>기본지표</li>
                        <li>모네타제이션</li>
                        <li>LTV &amp; FQ</li>
                        <li>커스텀 이벤트</li>
                        <li>퍼널분석</li>
                    </ul>
                </div>
                <div className="tableBottom">
                    <p>운영</p>
                    <ul>
                        <li>푸시발송</li>
                        <li>캠페인</li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navigation;