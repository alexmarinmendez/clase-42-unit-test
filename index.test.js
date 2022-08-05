const TODOS = require('./TODOS.js')
const assert =  require('assert')

describe('Pruebas de TODOS', () => {
    it('Si instacío la clase TODOS, debería estar vacía',() => {
        const todos = new TODOS()
        assert.strictEqual(todos.list().length,0)
    })
    it('Debe aumentar la logitud de tareas al agregarse un TODO', () => {
        const todos = new TODOS()
        todos.add('task1')
        assert.strictEqual(todos.list().length, 1)
    })
    it('Debería agrear un TODO', () => {
        const todos = new TODOS()
        todos.add('Ejecutar tests')
        // assert.strictEqual(todos.list(), [{title:'Ejecutar tests', completed:false}])
        assert.deepStrictEqual(todos.list(), [{title:'Ejecutar tests', completed:false}])
    })
})

describe('Escenarios con errores', () => {
    it('Debe arrojar un error si no tengo tareas al querer completar', () => {
        const todos = new TODOS()
        const expected = new Error('No tasks')
        assert.throws(()=> {
            todos.completeTodo('Leer un libro')
        }, expected)
    })
})