const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/userData", { useNewUrlParser: true },
    (err) => {
        if (err) {
            console.log("error connecting to database")
        }
        else {
            console.log("sucessfully connected to mongodb");
        }
    }
);

module.exports = mongoose;