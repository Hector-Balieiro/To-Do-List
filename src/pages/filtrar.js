import Button from "../components/button";

export default function Filtrar(props) {
  return (
    <div className="row  justify-content-center ">
      <div className='col-12 col-md-6 col-lg-5 col-xl-4'>
        <h3 className='color'>Filtrar</h3>
        </div>
        <div className="col-12 col-md-6 col-lg-5 col-xl-4 my-auto d-flex flex-sm-row flex-column justify-content-md-end ">
          <Button className='text-decoration-none btn btn-outline-secondary mx-1' funcao={props.completo}>Completo</Button>
          <Button className='text-decoration-none btn btn-outline-secondary mx-1' funcao={props.incompleto}>Incompleto</Button>
          <Button className='text-decoration-none btn btn-outline-secondary mx-1' funcao={props.todos}>Todos</Button>
        </div>
      
    </div>
  )
}