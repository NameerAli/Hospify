const mongoose = require("mongoose");

// mongoose.connect(process.env.MONGO_URL);

// const connection = mongoose.connection;

// connection.on("connected", () => {
//   console.log("MongoDB connection is successful");
// });

// connection.on("error", (error) => {
//   console.log("Error in MongoDB connection", error);
// });


mongoose.connect(process.env.Mongo_URL, {
    dbName: 'sheyhealthy',
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    () => {
      console.log("Database connected");
    },
    (error) => {
      console.log("Database can't be connected: " + error);
    }
  );

module.exports = mongoose;
