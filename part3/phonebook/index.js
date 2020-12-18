const express = require('express')
const app = express()

app.use(express.json())


persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "123123"
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "879041"
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "1231319680345"
  },
  {
    id: 4,
    name: "Mary Poppendick",
    number: "12321312"
  },
  {
    id: 5,
    name: "wp",
    number: "123123"
  }
]

app.get('/', (request, response) => {
  response.send("helloworld")
})

app.get('/api/persons', (request, response) => {
  response.json(persons)
})

app.get('/info', (request, response) => {
  response.send(`<p>Phonebook has info of ${persons.length} people</p><p>${new Date()}</p>`)
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(person => person.id === id)

  if (person){
    response.json(person)
  } else {
    response.status(404).end()
  }
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons.filter(person => person.id !== id)
  response.status(204).end()
})

const generateId = () => {
  // const maxId = persons.length > 0 ? Math.max(...persons.map(person => person.id)) : 0
  // return maxId + 1

  const id = Math.floor(Math.random()*(100-1)+1)
  return id
}

app.post('/api/persons/', (request, response) => {
  console.log(request.body)
  const body = request.body

  if (!body.name){
    return response.status(400).json({
      error: "name missing"
    })
  } else if (!body.number){
    return response.status(400).json({
      error: "number missing"
    })
  }

  const dup = persons.filter(person => person.name.toLowerCase() === body.name.toLowerCase())

  if (dup){
    return response.status(400).json({
      error: "name must be unique"
    })
  }

  const person = {
    name: body.name,
    number: body.number,
    id: generateId()
  }

  persons = persons.concat(person)

  response.json(person)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`)
})