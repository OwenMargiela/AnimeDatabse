import React from 'react'

function FilterAdder(filterObj,filter,filterObj, setFilterObj,objectProperty) {
  return (
    <>{
    function filterAdderType() {
        console.log(filter)
        if (filter === "default"){
            delete filterObj.objectProperty
        }else{
            
            setFilterObj({ ...filterObj, type: filter });
        }
        
        
    }}
        </>
    )
}

export default FilterAdder