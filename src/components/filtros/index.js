import Button from '../button';
import Funcoes from '../funcao';
import { useState, useEffect } from 'react'

export default function Filtros() {
  const [taskList, setTaskList] = useState([])
  const [dados, setDados] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [filtered, setFiltered] = useState('all')
  const [sortBy, setSortBy] = useState(false)
  const [findValue, setFindValue] = useState()

  useEffect(() => {
    let testes = Funcoes.data()
    testes.then(data => {
      setTaskList(data)
    })
  }, [])

  useEffect(() => {
    setDados(taskList)
    Funcoes.filterTask(filtered, taskList, setFiltered, setDados)
  }, [taskList])

  const dados2 = findValue ? dados.filter(item => item.text.toLowerCase().includes(findValue.toLowerCase())) : dados
  return (
    <div>
      <div>
        <div className='height-top d-flex flex-column align-items-center'>
          <div className='col-md-7 col-11 d-flex justify-content-between mt-4 align-items-end height'>
            <h3 className='color'>To Do List</h3>
            <div className=''>
              <Button funcao={() => Funcoes.sortAsc('asc', taskList, sortBy, setSortBy, setDados)}>ASC</Button>
              <Button funcao={() => Funcoes.sortDesc('desc', taskList, sortBy, setSortBy, setDados)}>DESC</Button>
            </div>
          </div>
          <div className='col-md-7 col-11 d-flex justify-content-between align-items-end height'>
            <h3 className='color'>Filtrar</h3>
            <div>
              <Button funcao={() => Funcoes.filterTask('completed', taskList, setFiltered, setDados, findValue)}>Completo</Button>
              <Button funcao={() => Funcoes.filterTask('incompleted', taskList, setFiltered, setDados, findValue)}>Incompleto</Button>
              <Button funcao={() => Funcoes.filterTask('all', taskList, setFiltered, setDados, findValue)}>Todos</Button>
            </div>
          </div>
          <div className='d-flex color col-md-7 col-11 justify-content-start flex-column'>
            <h3>Buscar</h3>
            <input type='text' value={findValue} onChange={(e) => {
              setFindValue(e.target.value)
            }} />
          </div>
        </div>

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
                <input type="textarea" className='w-100' value={inputValue} onChange={(e) => setInputValue(e.target.value)} aria-label="Recipient's username" aria-describedby="basic-addon2" />

              </div>
              <div className="modal-footer">
                <Button type="button" data-bs-dismiss="modal" className='button_create' funcao={() => setTaskList(Funcoes.addItem(inputValue, taskList, setInputValue))}><img src="plus-square.svg" /></Button>
              </div>
            </div>
          </div>
        </div>

        <div className='global'>
          {dados2.map((todo, index) => {
            return (
              <div key={index} className="d-flex col-10 m-auto justify-content-center aling-items-center section">

                <div className='col-md-8 col-12 d-flex justify-content-between m-3 conteudo align-items-center p-3'>
                  <p style={{ textDecoration: todo.completed ? "line-through" : "none" }}>{todo.text}</p>
                  <div className='d-flex flex-md-row flex-column'>
                    <Button style={{ backgroundColor: todo.completed ? "#00ff4c" : "whitesmoke", minWidth: '40px' }} className="" funcao={() => setTaskList(Funcoes.toggle(todo.id, taskList))}><i class="bi bi-check-square-fill"></i></Button>
                    <Button className='button_remove' funcao={() => setTaskList(Funcoes.remove(taskList, todo.id))}><i class="bi bi-trash-fill"></i></Button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )

}