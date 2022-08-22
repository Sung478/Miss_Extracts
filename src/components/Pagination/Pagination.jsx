import React from 'react'
import './Pagination.css'
import ReactPaginate from 'react-paginate'

export default function Pagination( {onClick, pageCount} ) {

  return (
    <div>
        <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={onClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
            containerClassName='pagination'
            pageLinkClassName='page-num'
            previousLinkClassName='page-num'
            nextLinkClassName='page-num'
            activeLinkClassName='active'
        />
    </div>
  )
}
