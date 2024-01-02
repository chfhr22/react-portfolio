import React from 'react'
import RepleList from './RepleList'
import RepleWrite from './RepleWrite'

const RepleArea = (props) => {

  return (
    <div>
        <RepleList postId={props.postId} />
        <RepleWrite postId={props.postId} />
        
    </div>
  )
}

export default RepleArea