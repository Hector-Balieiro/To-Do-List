import React from 'react';
import { Route, BrowserRouter, Routes, Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
import Funcoes from './components/funcao';
import Buscar from './pages/buscar.js';
import Ordenar from './pages/ordernar.js';
import Lista from './pages/lista.js';
import Criar from './pages/criar';
import Filtrar from './pages/filtrar';

export default function Rotas() {
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
            <BrowserRouter>
                <div className='height-top d-flex flex-column align-items-center'>
                    <nav class="navbar bg-body-tertiary">
                        <div class="container-fluid">
                            <Link to='/criar'>Criar</Link>
                        </div>
                    </nav>


                    <nav class="navbar bg-body-tertiary">
                        <div class="container-fluid">
                            <Link to='/ordenar'>Ordenar</Link>
                        </div>
                    </nav>
                    <nav class="navbar bg-body-tertiary">
                        <div class="container-fluid">
                            <Link to='/filtrar'>Filtrar</Link>
                        </div>
                    </nav>


                    <nav class="navbar bg-body-tertiary">
                        <div class="container-fluid">
                            <Link to='/buscar'>Buscar</Link>
                        </div>
                    </nav>



                </div>

                



                <Routes>
                    <Route element={<Ordenar
                        asc={() => Funcoes.sortAsc('asc', taskList, sortBy, setSortBy, setDados)}
                        desc={() => Funcoes.sortDesc('desc', taskList, sortBy, setSortBy, setDados)}
                    />} path="/ordenar" />

                    <Route element={<Filtrar
                        completo={() => Funcoes.filterTask('completed', taskList, setFiltered, setDados, findValue)}
                        incompleto={() => Funcoes.filterTask('incompleted', taskList, setFiltered, setDados, findValue)}
                        todos={() => Funcoes.filterTask('all', taskList, setFiltered, setDados, findValue)}
                    />} path="/filtrar" />

                    <Route element={<Buscar
                        findValue={findValue}
                        atualizar={(e) => { setFindValue(e.target.value) }}
                    />} path="/buscar" />

                    <Route element={<Criar
                        inputValue={inputValue}
                        setInputValue={(e) => setInputValue(e.target.value)}
                        criar={() => setTaskList(Funcoes.addItem(inputValue, taskList, setInputValue))}
                    />} path="/criar" />

                </Routes>

                <Lista
                        dados={dados2}
                        complete={setTaskList}
                        lista={taskList}
                        remover={setTaskList}
                    />
            </BrowserRouter>
        </div>
    )
}