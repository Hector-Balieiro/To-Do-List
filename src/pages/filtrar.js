import Button from "../components/button";

export default function Filtrar(props){
    return(
        <div className='col-md-7 col-11 d-flex justify-content-between align-items-end height'>
            <h3 className='color'>Filtrar</h3>
            <div>
              <Button funcao={props.completo}>Completo</Button>
              <Button funcao={props.incompleto}>Incompleto</Button>
              <Button funcao={props.todos}>Todos</Button>
            </div>
          </div>
    )
}