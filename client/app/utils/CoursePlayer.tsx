import React, { FC } from 'react'

type Props = {
    videoUrl:string;
    title:string;
}

const CoursePlayer:FC<Props> = ({videoUrl}) => {
  return (
    <div>CoursePlayer</div>
  )
}

export default CoursePlayer