require('dotenv').config()
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const PhonebookEntry = require('./modules/phonebook')

app.use(express.json())
app.use(cors())
app.use(express.static('build'))

morgan.token('body', (request, response) => {
  if (request.method === 'POST'){
    return JSON.stringify(request.body)
  } else {
    return ''
  }
})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

app.get('/', (request, response) => {
  response.send('helloworld')
})

app.get('/api/persons', (request, response) => {
  // response.json(persons)
  PhonebookEntry.find({}).then(entry => {
    response.json(entry)
  })
})

app.get('/info', (request, response) => {
  // response.send(`<p>Phonebook has info of ${persons.length} people</p><p>${new Date()}</p>`)
  PhonebookEntry.find({})
    .then(result => {
      response.send(
        `<p>Phonebook has info for ${result.length} people</p>`
      )
    })
})

app.get('/api/persons/:id', (request, response, next) => {
  PhonebookEntry.findById(request.params.id)
    .then(entry => {
      if (entry){
        response.json(entry)
      } else {
        response.status(404).end()
      }
    })
    .catch(error => next(error))
})

app.delete('/api/persons/:id', (request, response, next) => {
  PhonebookEntry.findByIdAndRemove(request.params.id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

// const generateId = () => {
//   // const maxId = persons.length > 0 ? Math.max(...persons.map(person => person.id)) : 0
//   // return maxId + 1
//   const id = Math.floor(Math.random()*(100-1)+1)
//   return id
// }


app.post('/api/persons/', (request, response, next) => {
  const body = request.body
  const newName = body.name
  const newNum = body.number

  if (newName.length === 0){
    console.log('No name')
    return response.status(400).json({
      'error': 'name missing'
    })
  } else if (newNum === 0){
    console.log('No num')
    return response.status(400).json({
      'error': 'number missing'
    })
  }

  const person = new PhonebookEntry({
    name: newName,
    number: newNum,
  })

  person.save()
    .then(savedPerson => {
      response.json(savedPerson)
    })
    .catch(error => next(error))
})


app.put('/api/persons/:id', (req, res, next) => {
  const number = req.body.number
  PhonebookEntry.findByIdAndUpdate(req.params.id, { number: number }, { new: true }).then(p => {
    res.json(p.toJSON())
  }).catch(err => next(err))
})

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError'){
    return response.status(400).send( { error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).send( { error: 'Name must be at least 8 characters long' })
  }
  next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})