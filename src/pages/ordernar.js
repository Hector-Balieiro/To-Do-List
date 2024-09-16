import Button from '../components/button';

export default function Ordernar(props){
    return(
        <div className='col-12 d-flex justify-content-center'>
            <div className='col-md-7 col-11 d-flex justify-content-between mt-4 align-items-end height'>
            <h3 className='color'>To Do List</h3>
            <div className=''>
              <Button className='text-decoration-none btn btn-outline-secondary mx-1' funcao={props.asc}>ASC</Button>
              <Button className='text-decoration-none btn btn-outline-secondary mx-1' funcao={props.desc}>DESC</Button>
            </div>
          </div>
        </div>
    )
}