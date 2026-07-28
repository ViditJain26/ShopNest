const mongoose = require('mongoose');

const uri = "mongodb+srv://Vidit_Jain:ViditJain123@youtube-backend.lir3kte.mongodb.net/shopnest?retryWrites=true&w=majority&appName=youtube-backend";

console.log("Connecting to MongoDB...");
mongoose.connect(uri, { serverSelectionTimeoutMS: 5000 })
  .then(() => {
    console.log("SUCCESS: Connected to MongoDB Atlas!");
    process.exit(0);
  })
  .catch((err) => {
    console.error("FAILURE: Could not connect to MongoDB Atlas!");
    console.error(err);
    process.exit(1);
  });
