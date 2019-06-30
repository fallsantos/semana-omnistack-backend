const mongoose = require('mongoose')

mongoose.connect(
    "mongodb+srv://fallsantosdev:B13b14b14b13dev*@cluster0-4cxi0.mongodb.net/backend-semana-omnistack?retryWrites=true&w=majority", 
    {useNewUrlParser: true}
)

let db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
    console.info("Database connect successfuly!")
});

module.exports = db