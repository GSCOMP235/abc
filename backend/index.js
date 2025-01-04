const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv/config");
const router = require("./routes/router");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// CORS Configuration
const corsOptions = {
  origin: ["*"],
  credentials: true,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// Routes
app.use("/api", router);

// Database Connection
const dbOptions = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose
  .connect(process.env.DB_URI, dbOptions)
  .then(async () => {
    console.log("Connected to MongoDB Atlas");
    try {
      console.log("Initialization completed");
    } catch (err) {
      console.error("Error during initialization:", err);
    }
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB Atlas:", err);
    process.exit(1);
  });

// Start Server
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Graceful Shutdown
process.on("SIGINT", async () => {
  console.log("Gracefully shutting down...");
  await mongoose.disconnect();
  server.close(() => {
    console.log("Server closed");
    process.exit(0);
  });
});
