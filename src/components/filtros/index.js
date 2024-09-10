import Funcoes from '../funcao';
import Criar from   '../../pages/criar.js';
import Buscar from '../../pages/buscar.js';
import Filtrar from '../../pages/filtrar.js';
import Ordenar from '../../pages/ordernar.js';
import Lista from '../../pages/lista.js';

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
        <div className='height-top d-flex flex-column align-items-center'>
          <Ordenar
            asc={() => Funcoes.sortAsc('asc', taskList, sortBy, setSortBy, setDados)}
            desc={() => Funcoes.sortDesc('desc', taskList, sortBy, setSortBy, setDados)}
          />

          <Filtrar
            completo={() => Funcoes.filterTask('completed', taskList, setFiltered, setDados, findValue)}
            incompleto={() => Funcoes.filterTask('incompleted', taskList, setFiltered, setDados, findValue)}
            todos={() => Funcoes.filterTask('all', taskList, setFiltered, setDados, findValue)}
          />

          <Buscar
            findValue={findValue}
            atualizar={(e) => { setFindValue(e.target.value) }}
          />
        </div>

        <Criar
          inputValue={inputValue}
          setInputValue={(e) => setInputValue(e.target.value)}
          criar={() => setTaskList(Funcoes.addItem(inputValue, taskList, setInputValue))}
        />

        <Lista
          dados = {dados2}
          complete = {setTaskList}
          lista={taskList}
          remover={setTaskList}
        />
    </div>
  )

}