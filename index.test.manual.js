const TODOS = require('./TODOS.js')

const todos = new TODOS()
console.log(todos.list())

todos.add('Hacer pruebas')
console.log(todos.list())

todos.add('Utilizar Mocha')
console.log(todos.list())

todos.completeTodo('Utilizar Mocha')
console.log(todos.list())


