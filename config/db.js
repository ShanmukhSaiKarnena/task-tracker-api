const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Use MONGO_URI from .env
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB Connected');
  } catch (err) {
    console.error('❌ DB Connection Failed:', err.message);
    process.exit(1); // Stop the app
  }
};

module.exports = connectDB;
