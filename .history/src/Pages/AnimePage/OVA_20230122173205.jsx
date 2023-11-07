import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ParameterSearch from '../../Components/ParameterSearch';

function OVA() {
    const [ova, setOva] = useState();
    const [pagination, setPagination] = useState();
    const [pageNo, setPageNo] = useState(1);
  
    useEffect(() => {
      async function getMovies() {
        const { data } = await axios.get(
          `https://api.jikan.moe/v4/anime?type=ova&page=${pageNo}`
        );
        setOva(data.data);
        setPagination(data.pagination.last_visible_page);
      }
      getMovies();
      console.log(ova);
    }, [pageNo]);
  
    function nextPage() {
      setPageNo(pageNo + 1);
      console.log(pageNo);
    }
    function prevPage() {
      setPageNo(pageNo - 1);
      console.log(pageNo);
    }
  return (
    <div className="Ova">
        <h1>OVA</h1>
        <ParameterSearch
        pageNo={pageNo}
        anime={ova}
        prevPage={prevPage}
        nextPage={nextPage}
        pagination={pagination}
      ></ParameterSearch>
    </div>
  )
}

export default OVA