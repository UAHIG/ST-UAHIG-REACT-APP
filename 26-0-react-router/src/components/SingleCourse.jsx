import courses from "../data/courses"
import { Link, useParams } from "react-router-dom"
import NotFound from "./NotFound"

const SingleCourse = () => {
  const params = useParams()
  const course = courses.find((course) => course.slug === params.courseSlug)
  if (!course) {
    return <NotFound />
  }
  return (
    <>
      <h1>{course.title}</h1>
      <h2>{course.slug}</h2>
      <h3>{course.id}</h3>
      <Link to=".." relative="path">All courses</Link>
    </>
  )
}

export default SingleCourse
