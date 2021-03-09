import React from 'react';

function Columns() {
    return (
        <section className="columns">
            <div className="userKocht">
                <p className="kochtTitle">User Kocht</p>

                <div className="kocht">
                    <div className="groupBox">
                        <ul className="userBox">
                            <li className="groupTitle">10대 유저</li>
                            <li className="group">desc 1</li>
                            <li className="group">desc 2</li>
                            <li className="group">desc 3</li>
                            <li className="group">desc 4</li>
                        </ul>    
                        <ul className="userBox">
                            <li className="groupTitle">20대 유저</li>
                            <li className="group">desc 1</li>
                            <li className="group">desc 2</li>
                            <li className="group">desc 3</li>
                            <li className="group">desc 4</li>
                        </ul>    
                        <ul className="userBox">
                            <li className="groupTitle">30대 유저</li>
                            <li className="group">desc 1</li>
                            <li className="group">desc 2</li>
                            <li className="group">desc 3</li>
                            <li className="group">desc 4</li>
                        </ul>
                        <ul className="userBox">
                            <li className="groupTitle">40대 유저</li>
                            <li className="group">desc 1</li>
                            <li className="group">desc 2</li>
                            <li className="group">desc 3</li>
                            <li className="group">desc 4</li>
                        </ul>
                    
                        <span className="groupIcon">
                            <span className="iconBar1"></span>
                            <span className="iconBar2"></span>
                            <p  className="text">그룹 추가</p>
                        </span>
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
                </div>
            </div>

           {/* <h3>그룹비교</h3> */}
        </section>
    )
}
export default Columns;