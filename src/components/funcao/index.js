const controller = {

    data: async function () {
        let varDados = []
        for (let v = 1; v <= 4; v++) {

            let dados = await fetch(`https://jsonplaceholder.typicode.com/todos/${v}`)
            let data = await dados.json()
            varDados.push({ id: data.id, text: data.title, completed: data.completed })
            
        }

        // localStorage.setItem("myArray", JSON.stringify(varDados))
        let dados2 = JSON.parse(localStorage.getItem("myArray"))
        console.log(dados2)
        return dados2  
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
        let todos = [...list]
  
        let data = crypto.randomUUID();
        if (input.trim() !== '') {
            const newItem = { id: data, text: input, completed: false }
            todos = [...list, newItem]
            
            
        }
        localStorage.setItem("myArray", JSON.stringify(todos))
        let dados2 = JSON.parse(localStorage.getItem("myArray"))
        clean('')
        console.log(dados2)
        
        return  dados2
    },

    remove: function (list, id) {
        let newTodos = [...list]
        let geral = newTodos.findIndex(item => item.id === id)
        newTodos.splice(geral, 1)
        localStorage.setItem("myArray", JSON.stringify(newTodos))
        let dados2 = JSON.parse(localStorage.getItem("myArray"))
        return dados2
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

    sortAsc: function (status, list, sortStatus, sortData) {
        if (status === 'asc') {
            sortData(list.sort((a, b) => a.text.localeCompare(b.text)))
            sortStatus(true)

        }
    },

    sortDesc: function (status, list, sortStatus, sortData) {
        if (status === 'desc') {
            sortData(list.sort((a, b) => b.text.localeCompare(a.text)))
            sortStatus(false)
            
        }
    }

}




export default controller;
