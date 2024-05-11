import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

function Pagination() {
  const {page,totalPages,changHandler}=useContext(AppContext);
  return (
    <div className=' w-11/12 flex justify-between items-center bg-red-700 m-auto border-2 border-black p-4'>
      <div className=' bg-slate-600'>
        {page>1 && <button
        onClick={()=>changHandler(page-1)} 
        >Previous</button>}
        {page<totalPages && <button
          onClick={()=>changHandler(page+1)} 
        >Next</button>}
      </div>
      <div>
        <p>page {page} of {totalPages}</p>
      </div>
    </div>
  )
}

export default Pagination
