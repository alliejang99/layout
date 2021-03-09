import React from 'react';
import ReactPaginate from "react-paginate";
import Btn from './Btn';


function Paging() {
    return (
        <div className="paging">
            <ReactPaginate
                // pageCount={Math.ceil(totalRecords / 10)}
                pageRangeDisplayed={10}
                marginPagesDisplayed={10}
                breakLabel={""}
                previousLabel={"prev"}
                nextLabel={"next"}
                activeClassName={"currentPage"}
                previousClassName={"btnPage"}
                nextClassName={"btnPage"}
            />
            <Btn />
        </div>
    )
}
export default Paging;