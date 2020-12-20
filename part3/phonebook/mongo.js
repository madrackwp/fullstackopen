const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log("Please provide password as the 3rd argument")
  process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://admin:${password}@cluster0.tkmbw.mongodb.net/phonebookDB?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true})

const phonebookEntrySchema = new mongoose.Schema({
  name: String,
  number: String,
})

const PhonebookEntry = mongoose.model('PhonebookEntry', phonebookEntrySchema)

if (process.argv.length === 5){
  //Creating entry to be inserted
  const newPhonebookEntry = new PhonebookEntry({
    name: process.argv[3],
    number: process.argv[4]
  })

  newPhonebookEntry.save().then(result => {
    console.log('phonebookEntry saved')
    mongoose.connection.close()
  })
}

if (process.argv.length === 3 ){
  //Viewing all entries in the database
  PhonebookEntry.find({}).then(result => {
    result.forEach(note => {
      console.log(note)
    })
    mongoose.connection.close()
  })
}
