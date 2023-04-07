import express from "express";
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

import { userRouter} from  './routes/users.js';
import { recipesRouter} from  './routes/recipes.js';

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors({
    origin:["http://localhost:3000", "https://mern-task-app.onrender.com"],
}));

app.use("/auth", userRouter);
app.use("/recipes",  recipesRouter);

mongoose.connect(
    "mongodb+srv://anu:anu11@cluster0.pqdbkc7.mongodb.net/Cluster0?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
).then(() => {
    console.log("CONNECTION SUCCESSFUL");
}).catch((e) =>{
    console.log(e);
});
app.listen(port, () => console.log("SERVER STARTED!"))