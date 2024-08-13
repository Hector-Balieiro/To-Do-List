import './App.css';
import { useState } from 'react'

function App() {
  const task = [{ id: 1, text: 'Construir uma máquina do tempo', completed: false },
  { id: 2, text: 'Gym', completed: false },
  { id: 3, text: 'Learn React', completed: false }
  ]

  const [taskList, setTaskList] = useState(task)
  const [inputValue, setInputValue] = useState("")
  const [filtered, setFiltered] = useState(task)
  const [sort, setSort] = useState('')
  const [findValue, setFindValue] = useState('')


  function toggle(id) {
    const newComplete = filtered.map(item => {
      if (item.id === id) {
        return { ...item, completed: !item.completed }
      }
      return item
    })
    setTaskList(newComplete)
    setFiltered(newComplete)
  }

  function addItem() {
    if (inputValue.trim() !== '') {
      const newItem = { id: taskList.length + 1, text: inputValue, completed: false }
      const todos = [...filtered, newItem]
      setTaskList(todos)
      setFiltered(todos)
    }

    setInputValue('')
  }

  function remove(id) {
    setFiltered(filtered.filter(item => item.id !== id))

  }

  function filteredAll(status) {
    const filtrar = taskList.filter(item => {
      if (status === 'complete' && item.completed) {
        return item
      }

      if (status === 'incomplete' && !item.completed) {
        return item
      }

      if (status === 'all') {
        return item
      }
    })
    setFiltered(filtrar)
  }

  function getAll() {
    let newArray = filtered
    if (findValue.trim() !== '') {
      newArray = filtered.filter(item => {
        if (item.text.toLowerCase().includes(findValue.toLowerCase()))
          return item
      })
    }
    return newArray
  }

  let getter = sort === 'asc' ? getAll().sort((a, b) => a.text.localeCompare(b.text)) : (sort === 'desc' ? getAll().sort((a, b) => b.text.localeCompare(a.text)) : getAll())

  return (
    <div className='all'>
      <div className='height-top d-flex flex-column align-items-center'>
        <div className='col-md-7 col-11 d-flex justify-content-between mt-4 align-items-end height'>
          <h3 className='color'>To Do List</h3>
          <div className=''>
            <button onClick={() => setSort('asc')}>ASC</button>
            <button onClick={() => setSort('desc')}>DESC</button>
          </div>
        </div>
        <div className='col-md-7 col-11 d-flex justify-content-between align-items-end height'>
          <h3 className='color'>Filtrar</h3>
          <div>
            <button onClick={() => filteredAll('complete')}>Completo</button>
            <button onClick={() => filteredAll('incomplete')}>Incompleto</button>
            <button onClick={() => filteredAll('all')}>Todos</button>
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
              <button type="button" data-bs-dismiss="modal" className='button_create' onClick={addItem}><img src="plus-square.svg"/></button>
            </div>
          </div>
        </div>
      </div>

      <div className='global'>
        {getter.map((todo, index) => {
          return (
            <div key={index} className="d-flex col-10 m-auto justify-content-center aling-items-center section">

              <div className='col-md-8 col-12 d-flex justify-content-between m-3 conteudo align-items-center p-3'>
                <p style={{ textDecoration: todo.completed ? "line-through" : "none" }}>{todo.text}</p>
                <div className='d-flex flex-md-row flex-column'>
                  <button style={{ backgroundColor: todo.completed ? "#00ff4c" : "whitesmoke", minWidth: '40px' }} className="" onClick={() => toggle(todo.id)}><img src='check-square-fill.svg' /></button>
                  <button className='button_remove' onClick={() => remove(todo.id)}><img src='trash-fill.svg' /></button>
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
