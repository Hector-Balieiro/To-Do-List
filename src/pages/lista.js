import Button from "../components/button";
import Funcoes from '../components/funcao'

export default function Lista(props){
    return(
        <div className='global'>
          {props.dados.map((todo, index) => {
            return (
              <div key={index} className="d-flex col-10 m-auto justify-content-center aling-items-center section">

                <div className='col-md-8 col-12 d-flex justify-content-between m-3 conteudo align-items-center p-3'>
                  <p style={{ textDecoration: todo.completed ? "line-through" : "none" }}>{todo.text}</p>
                  <div className='d-flex flex-md-row flex-column'>
                    <Button style={{ backgroundColor: todo.completed ? "#00ff4c" : "whitesmoke", minWidth: '40px' }} className="" funcao={()=>props.complete(Funcoes.toggle(todo.id, props.lista))}><i class="bi bi-check-square-fill"></i></Button>
                    <Button className='button_remove' funcao={()=>props.remover(Funcoes.remove(props.lista, todo.id))}><i class="bi bi-trash-fill"></i></Button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
    )
}