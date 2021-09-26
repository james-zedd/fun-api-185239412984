const mongoose = require('mongoose');
const { DB_USER, DB_PASS, CLUSTER, DATABASE } = process.env;
const db = `mongodb+srv://${DB_USER}:${DB_PASS}@${CLUSTER}/${DATABASE}?retryWrites=true&w=majority`;

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true
        });
        console.log('Mongo DB connected ...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;