const { URL_MONGOOSE } = require('./config');
const mongoose = require ("mongoose")

const dbCon = async () => {
    await mongoose.connect(URL_MONGOOSE
 );
}

module.exports = dbCon



// mongodb+srv://naobregon27:<db_password>@prueba.wpiy2.mongodb.net/?retryWrites=true&w=majority&appName=prueba