import React from 'react';

function Columns() {
    return (
        <section className="columns">
            <div className="userKocht">
                <p>유저 코흐트</p>
                <div className="groupBox">
                    <ul className="userBox">
                        <li className="groupTitle">10대 유저</li>
                        <li className="group">그룹 설명1</li>
                        <li className="group">그룹 설명2</li>
                        <li className="group">그룹 설명3</li>
                        <li className="group">그룹 설명4</li>
                    </ul>    
                    <ul className="userBox">
                        <li className="groupTitle">20대 유저</li>
                        <li className="group">그룹 설명1</li>
                        <li className="group">그룹 설명2</li>
                        <li className="group">그룹 설명3</li>
                        <li className="group">그룹 설명4</li>
                    </ul>    
                    <ul className="userBox">
                        <li className="groupTitle">30대 유저</li>
                        <li className="group">그룹 설명1</li>
                        <li className="group">그룹 설명2</li>
                        <li className="group">그룹 설명3</li>
                        <li className="group">그룹 설명4</li>
                    </ul>

                    <span className="groupIcon">
                        <span className="iconBar1"></span>
                        <span className="iconBar2"></span>
                        <p  className="text">그룹 추가</p>
                    </span>
                </div>
            </div>

            <div className="vsKocht">
                <div className="vsBox">
                    비교하고 싶은 코흐트를 드래그하세요.
                </div>
                <span>vs</span>
                <div className="vsBox">
                    비교하고 싶은 코흐트를 드래그하세요.
                </div>
            </div>
            <h3>그룹비교</h3>
        </section>
        
    )
}
export default Columns;