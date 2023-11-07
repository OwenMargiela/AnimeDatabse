import React, { useState } from "react";

function FilterAdder(
  filterObj,
  filter,
  setFilterObj,
  objectProperty
  )
    const [objectProperty ] = useState(objectProperty)

   {
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
