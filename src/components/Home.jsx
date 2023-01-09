import { Button } from "react-bootstrap"
import {NavLink} from "react-router-dom"

const Home = () => {
  return (
    <div>
      <h1>welcome to CRUD App</h1>
      <p>what are your task today</p>
      <NavLink to='todos'><Button variant="primary">go to task</Button></NavLink>
    </div>
  )
}

export default Home
