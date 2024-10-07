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
        console.log(Funcoes)
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

    const onChange = event =>{
        localStorage.setItem('setData', event.target.value);
        setInputValue(event.target.value)
    }

    return (
        <div>
            <BrowserRouter>
                <div className='container'>
                    <div className='row'>
                        <div class="col-12 height-top d-flex justify-content-center gap-3">
                            <nav class="navbar bg-body-tertiary">
                                <Criar
                                    inputValue={inputValue}
                                    setInputValue={onChange}
                                    criar={() => setTaskList(Funcoes.addItem(inputValue, taskList, setInputValue))}
                                />
                            </nav>

                            <nav class="navbar bg-body-tertiary">
                                    <Link to='/ordenar' className='text-decoration-none btn btn-outline-secondary button-size'>Ordenar</Link>
                            </nav>
                                
                            <nav class="navbar bg-body-tertiary">
                                    <Link to='/filtrar' className='text-decoration-none btn btn-outline-secondary button-size'>Filtrar</Link>
                            </nav>

                            <nav class="navbar bg-body-tertiary">
                                    <Link to='/buscar' className='text-decoration-none btn btn-outline-secondary button-size'>Buscar</Link>
                            </nav>
                        </div>
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

                
                </div>
            </BrowserRouter>
        </div>
    )
}