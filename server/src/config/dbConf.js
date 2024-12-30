const mongoose = require ("mongoose")

const dbCon = async () => {
    await mongoose.connect("mongodb+srv://naobregon27:QQWIZQH11TLXhhg8@prueba.wpiy2.mongodb.net/"
 );
}

module.exports = dbCon