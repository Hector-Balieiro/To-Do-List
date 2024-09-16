import Button from '../components/button';

export default function Ordernar(props) {
  return (
    <div className='row mt-4 justify-content-center'>
      <div className='col-md-4 col-6'>
        <h3 className='color'>To Do List</h3>
      </div>
      <div className='col-md-4 col-6 text-end'>
        <Button className='text-decoration-none btn btn-outline-secondary mx-1' funcao={props.asc}>ASC</Button>
        <Button className='text-decoration-none btn btn-outline-secondary mx-1' funcao={props.desc}>DESC</Button>
      </div>
    </div>
  )
}