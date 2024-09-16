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
    const [sortBy, setSortBy] = useState(true)
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
                <div className='col-12 height-top d-flex align-items-center justify-content-center'>
                    <nav class="navbar bg-body-tertiary">
                        <div class="container-fluid">
                            <Criar
                        inputValue={inputValue}
                        setInputValue={(e) => setInputValue(e.target.value)}
                        criar={() => setTaskList(Funcoes.addItem(inputValue, taskList, setInputValue))}
                    />
                        </div>
                    </nav>


                    <nav class="navbar bg-body-tertiary">
                        <div class="container-fluid">
                            <Link to='/ordenar' className='text-decoration-none btn btn-outline-secondary btn-lg'>Ordenar</Link>
                        </div>
                    </nav>

                    <nav class="navbar bg-body-tertiary">
                        <div class="container-fluid">
                            <Link to='/filtrar' className='text-decoration-none btn btn-outline-secondary btn-lg'>Filtrar</Link>
                        </div>
                    </nav>


                    <nav class="navbar bg-body-tertiary">
                        <div class="container-fluid">
                            <Link to='/buscar' className='text-decoration-none btn btn-outline-secondary btn-lg'>Buscar</Link>
                        </div>
                    </nav>



                </div>

                



                <Routes>
                    <Route element={<Ordenar
                        asc={() => Funcoes.sortAsc('asc', dados2, setSortBy, setDados)}
                        desc={() => Funcoes.sortDesc('desc', dados2, setSortBy, setDados)}
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