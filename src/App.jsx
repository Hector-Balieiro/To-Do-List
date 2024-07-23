import './App.css'
import {useState} from 'react'

export default function App() {

  const [todos, setTodos]= useState([
          {
            id:1,
            text: "Learn React",
            completed: false
          },
          {
            id:2,
            text: "Gym",
            completed: false
          },
          {
            id:3,
            text: "Construir uma máquina do tempo",
            completed: false
          }

        ])
  const newArray = [...todos]
  let [inputValue, setInputValue] = useState('')
  let [findValue, setFindValue] = useState('')


  const addItem = () => {
     if(inputValue.trim() !== ''){
       const novoItem = {id: todos.length +1, text: inputValue, completed: false}
       setTodos([...todos, novoItem])
     }
     setInputValue('')

  }

  const [filtro, setFiltro] = useState('')
  const filter = filtro === true ? todos.filter(item => item.completed === true && item.text.toLowerCase().includes(findValue.toLowerCase())) : (filtro === false ? todos.filter(item => item.completed === false && item.text.toLowerCase().includes(findValue.toLowerCase())) : todos.filter(item => item.text.toLowerCase().includes(findValue.toLowerCase())))

  function remover(id){
    setTodos(todos.filter(item => item.id !== id ))

  }

  function toggleCompleted(id){
    setTodos(todos.map(array =>{
      if(array.id === id){
        return {...array, completed: !array.completed}
      }
        return array
    }))
  }

  function ordem(){
    setTodos(newArray.sort((a,b) => a.text.localeCompare(b.text)))
  }

  function reverseOrdem(){
    setTodos(newArray.sort((a,b) => b.text.localeCompare(a.text)))
  }

  function completed(){
    setFiltro(true)
  }

  function incompleted(){
   setFiltro(false)
  }

  function noFilter(){
    setFiltro('')
  }

  return(

      <div className="all ">
        <div className='height-top d-flex flex-column align-items-center'>
          <div className='col-md-7 col-11 d-flex justify-content-between mt-4 align-items-end height'>
          <h3 className='color'>To Do List</h3>
            <div className=''>
              <button onClick={ordem}>ASC</button>
              <button onClick={reverseOrdem}>DESC</button>
            </div>
          </div>
          <div className='col-md-7 col-11 d-flex justify-content-between align-items-end height'>
            <h3 className='color'>FIltrar</h3>
            <div>
              <button onClick={completed}>Completo</button>
              <button onClick={incompleted}>Incompleto</button>
              <button onClick={noFilter}>Todos</button>
            </div>
          </div>
          <div className='d-flex color col-md-7 col-11 justify-content-start flex-column'>
            <h3>Buscar</h3>
            <input type='text' value={findValue} onChange={(e) => setFindValue(e.target.value)}/>
          </div>
        </div>
        <div className="d-flex flex-column col-md-7 col-11 margin">
            <div>
              <h3 className='text-start color'>Criar Tarefa</h3>
            </div>

          <div class="d-flex">
            <input type = "text" className='w-100' value={inputValue} onChange={(e) =>setInputValue(e.target.value)} aria-label="Recipient's username" aria-describedby="basic-addon2"/>
            <button className='button_create'onClick={addItem}><img src='plus-square.svg'/></button>
          </div>
        </div>

      <div className='global'>
      {filter.map(todo =>{
        return(

          <div className="d-flex col-10 m-auto justify-content-center aling-items-center section">

            <div className='col-md-8 col-12 d-flex justify-content-between m-3 conteudo align-items-center p-3'>
            <p key = {todo.id} style={{textDecoration:todo.completed ? "line-through": "none"}}>{todo.text}</p>
              <div className='d-flex flex-md-row flex-column'>
                <button style={{backgroundColor:todo.completed? "#00ff4c" : "whitesmoke", minWidth:'40px'}} className="" onClick ={()=>toggleCompleted(todo.id)}><img src='check-square-fill.svg'/></button>
                <button className='button_remove' onClick={() =>remover(todo.id)}><img src='trash-fill.svg'/></button>
                </div>
              </div>
          </div>

        )
      })}
        </div>

    </div>
  )
}


