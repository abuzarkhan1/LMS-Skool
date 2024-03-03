import React,{FC} from 'react'

type Props = {
    courseInfo:any;
    setCourseInfo: (courseInfo:any) => void;
    active:number
    setActive: (courseInfo:any) => void;
}

const CourseInformation:FC<Props> = ({courseInfo,setCourseInfo,active,setActive})=> {
  return (
    <div>CourseInformation</div>
  )
}

export default CourseInformation