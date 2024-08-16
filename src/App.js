import './App.css';
import { useEffect, useState } from 'react'

function App() {
  const task = [{ id: 1, text: 'Construir uma máquina do tempo', completed: false },
  { id: 2, text: 'Gym', completed: false },
  { id: 3, text: 'Learn React', completed: false }
  ]

  const [taskList, setTaskList] = useState(task)
  const [inputValue, setInputValue] = useState("")
  const [findValue, setFindValue] = useState('')
  const [mirror, setMirror] = useState(taskList)
  const [filter, setFilter] = useState('')
  useEffect(() => {
    setMirror(taskList)
    filterTask(filter)
  }, [taskList])

  function toggle(id) {
    const newComplete = taskList.map(item => {
      if (item.id === id) {
        return { ...item, completed: !item.completed }
      }
      return item
    })
    setTaskList(newComplete)
  }

  function addItem() {
    if (inputValue.trim() !== '') {
      const newItem = { id: taskList.length + 1, text: inputValue, completed: false }
      const todos = [...taskList, newItem]
      setTaskList(todos)
    }
    setInputValue('')
  }

  function remove(index) {
    let newTodos = [...taskList]
    newTodos.splice(index, 1)
    setTaskList(newTodos)
  }

  function filterTask(typeFilter) {
    if (typeFilter === 'completed') {
      setMirror(taskList.filter(item => item.completed === true))
    }

    else if (typeFilter === 'incompleted') {
      setMirror(taskList.filter(item => item.completed === false))
    }

    else {
      setMirror(taskList)
    }
    setFilter(typeFilter)
  }

  return (
    <div className='all'>
      <div className='height-top d-flex flex-column align-items-center'>
        <div className='col-md-7 col-11 d-flex justify-content-between mt-4 align-items-end height'>
          <h3 className='color'>To Do List</h3>
          <div className=''>
            <button >ASC</button>
            <button >DESC</button>
          </div>
        </div>
        <div className='col-md-7 col-11 d-flex justify-content-between align-items-end height'>
          <h3 className='color'>Filtrar</h3>
          <div>
            <button onClick={() => filterTask('completed')}>Completo</button>
            <button onClick={() => filterTask('incompleted')}>Incompleto</button>
            <button onClick={() => filterTask('todo')}>Todos</button>
          </div>
        </div>
        <div className='d-flex color col-md-7 col-11 justify-content-start flex-column'>
          <h3>Buscar</h3>
          <input type='text' value={findValue} onChange={(e) => setFindValue(e.target.value)} />
        </div>
      </div>

      <div className="d-flex flex-column col-md-7 col-11 margin">
        <div>
          <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Criar Tarefa
          </button>
        </div>
      </div>




      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Crie sua tarefa</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <input type="textarea" className='w-100' value={inputValue} onChange={(e) => setInputValue(e.target.value)} aria-label="Recipient's username" aria-describedby="basic-addon2" />

            </div>
            <div class="modal-footer">
              <button type="button" data-bs-dismiss="modal" className='button_create' onClick={addItem}><img src="plus-square.svg" /></button>
            </div>
          </div>
        </div>
      </div>

      <div className='global'>
        {mirror.map((todo, index) => {
          return (
            <div key={index} className="d-flex col-10 m-auto justify-content-center aling-items-center section">

              <div className='col-md-8 col-12 d-flex justify-content-between m-3 conteudo align-items-center p-3'>
                <p style={{ textDecoration: todo.completed ? "line-through" : "none" }}>{todo.text}</p>
                <div className='d-flex flex-md-row flex-column'>
                  <button style={{ backgroundColor: todo.completed ? "#00ff4c" : "whitesmoke", minWidth: '40px' }} className="" onClick={() => toggle(todo.id)}><img src='check-square-fill.svg' /></button>
                  <button className='button_remove' onClick={() => remove(index)}><img src='trash-fill.svg' /></button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>

  )
}


export default App;
