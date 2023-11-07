import React, { useState } from "react";

function FilterAdder(
  filterObj,
  filter,
  setFilterObj,
  name
  )
  {
       const [objectProperty ,setObjecProperty] = useState(name)
  return (
      <>
      {filter === "default"
      ? delete filterObj.objectPropert
      : setFilterObj({ ...filterObj, objectProperty: filter })
      }
      </>
      );
    }

export default FilterAdder;
