import './Todos.scss'
import { Form,FormControl,Button } from 'react-bootstrap'

const Todos = () => {
  return (
    <Form className='todos'>
      <h2>here are your task today</h2>
   <FormControl className='inputBtn' type='text'/>
   <Button className='addBtn' variant="secondary">Add</Button>
   <Button className='backBtn' variant="warning">Back</Button>




  
 </Form>
  )
}

export default Todos
