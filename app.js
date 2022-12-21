import express from 'express';
const app = express();
import allRoutes from './routes/index.js';
app.use("/",allRoutes);
const PORT = 3001;
app.listen(PORT,() => {
    console.log(`Server is running on ${PORT}`)
});