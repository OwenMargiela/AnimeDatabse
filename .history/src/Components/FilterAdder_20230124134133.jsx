import React, { useState } from "react";

function FilterAdder(
  filterObj,
  filter,
  setFilterObj,
  name
  )
  {
  return (
      <>
      {filter === "default"
      ? delete filterObj.name
      : setFilterObj({ ...filterObj, objectProperty: name })
      }
      </>
      );
    }

export default FilterAdder;
