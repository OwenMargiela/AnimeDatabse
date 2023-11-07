import React from 'react'

function AnimePage() {
    const {id} = useParams()
  return (
    <div>{id}</div>
  )
}

export default AnimePage