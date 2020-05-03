const mongoose = require("mongoose");

const uri = "mongodb://localhost:27017/myRestApi";

// La db se creara si no existe.
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

mongoose.connection.on("open", () => {
    console.log("Database is connect to", uri);
});

mongoose.connection.on("error", (err) => {
    console.log(err);
});