import React from 'react';

function Btn() {
    return (
        <div className="btn">
            <button className="btnText btnCommon" type="button" title="글쓰기">글쓰기</button>
            <button className="btnModify btnCommon" type="button" title="수정">수정</button>
            <button className="btnBoard btnCommon" type="button" title="목록">목록</button>
        </div>
    )
}
export default Btn;