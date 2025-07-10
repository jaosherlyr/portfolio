import { Link } from "react-router-dom"

function NotFoundPage() {

  return (
    <>
        <h1>This page doesn't exist!!!</h1>
        <Link to={"/"}>Go back Home</Link>
    </>
  )
}

export default NotFoundPage