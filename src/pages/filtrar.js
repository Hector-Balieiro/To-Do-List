import Button from "../components/button";

export default function Filtrar(props){
    return(
        <div className='col-7 m-auto d-flex justify-content-between align-items-end height'>
            <h3 className='color'>Filtrar</h3>
            <div>
              <Button className='text-decoration-none btn btn-outline-secondary mx-1' funcao={props.completo}>Completo</Button>
              <Button className='text-decoration-none btn btn-outline-secondary mx-1' funcao={props.incompleto}>Incompleto</Button>
              <Button className='text-decoration-none btn btn-outline-secondary mx-1' funcao={props.todos}>Todos</Button>
            </div>
          </div>
    )
}