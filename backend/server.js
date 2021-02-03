const app = require('./app');
const connectDatabase = require('./config/database');

const dotenv = require('dotenv');

// Handle Uncaught exeptions
process.on('uncaughtException', err => {
    console.log(`ERROR: ${err.stack}`);
    process.exit(1)
})

// setting up config file
dotenv.config({ path: 'backend/config/config.env' });

// Connecting to database
connectDatabase();

const server = app.listen(process.env.PORT, () => {
    console.log(`Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`)
});

// Handle Unhandled Promise rejections
process.on('unhandledRejection', err => {
    console.log(`ERROR: ${err.stack}`);
    server.close(() => {
        process.exit(1);
    })
})