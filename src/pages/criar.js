import Button  from '../components/button';

export default function Criar(props){
    return(
        <div>
            <div className="d-flex flex-column col-md-7 col-11 margin">
          <div>
            <Button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" title="Criar tarefa">Criar tarefa</Button>
          </div>
        </div>


        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Crie sua tarefa</h5>
                <Button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></Button>
              </div>
              <div className="modal-body">
                <input type="textarea" className='w-100' value={props.inputValue} onChange={props.setInputValue} aria-label="Recipient's username" aria-describedby="basic-addon2" />

              </div>
              <div className="modal-footer">
                <Button type="button" data-bs-dismiss="modal" className='button_create' funcao={props.criar}><i class="bi bi-plus-square"></i></Button>
              </div>
            </div>
          </div>
        </div>
        </div>
    )
}