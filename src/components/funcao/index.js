const controller = {


    data: async function () {
        let varDados = []
        for (let v = 1; v <= 4; v++) {

            let dados = await fetch(`https://jsonplaceholder.typicode.com/todos/${v}`)
            let data = await dados.json()
            varDados.push({ id: data.id, text: data.title, completed: data.completed })
        }
        return varDados
    },

    toggle: function (id, list) {
        console.log(list)
        const newComplete = list.map(item => {
            if (item.id === id) {
                return { ...item, completed: !item.completed }
            }

            return item
        })
        console.log(newComplete)
        return newComplete
    },

    addItem: function (input, list, clean) {
        let todos = []
        if (input.trim() !== '') {
            const newItem = { id: list.lenght + 1, text: input, completed: false }
            todos = [...list, newItem]
        }
        clean('')
        return todos
    },

    remove: function (list, id) {
        let newTodos = [...list]
        let geral = newTodos.findIndex(item => item.id === id)
        newTodos.splice(geral, 1)
        return newTodos
    },

    filterTask: function (typeFilter, list, data, dataShow) {
        let filterTemp;
        if (typeFilter === 'completed') {
            filterTemp = list.filter(item => item.completed === true)
        }

        else if (typeFilter === 'incompleted') {
            filterTemp = list.filter(item => item.completed === false)
        }
        else {
            filterTemp = list
        }
        data(typeFilter)
        dataShow(filterTemp)
    },

    sortAsc: function (status, list, sortBy, sortStatus, sortData) {
        if (status === 'asc' && sortBy === false) {
            sortData(list.sort((a, b) => a.text.localeCompare(b.text)))
            sortStatus(true)

        }
    },

    sortDesc: function (status, list, sortBy, sortStatus, sortData) {
        if (status === 'desc' && sortBy === true) {

            sortStatus(false)
            sortData(list.sort((a, b) => b.text.localeCompare(a.text)))
        }
    }

}




export default controller;
