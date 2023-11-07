import React from 'react'

function FilterList({toggleFilterSelect,filterSelect,name}) {
  return (
    <>
           <li
              className="filter__list-item"
              onClick={toggleFilterSelect}
            >
              <p>{name}</p>

              {filterSelect === true && (
                <div className="filter__body">
                  <p>select</p>
                  <p>select</p>
                  <p>select</p>
                  <p>select</p>
                  <p>select</p>
                  <p>select</p>
                  <p>select</p>
                </div>
              )}
            </li>
    </>
  )
}

export default FilterList