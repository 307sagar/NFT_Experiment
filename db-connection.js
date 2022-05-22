import mongoose from 'mongoose'

let connection

try {
  connection = mongoose.connect('mongodb+srv://zapper307:<password>@cluster0.ui8zt.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
  })

} catch (error) {
  console.log(error)
}

export default connection
