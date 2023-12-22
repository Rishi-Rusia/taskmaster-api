import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authoRoutes.js"
import session from "express-session";
import passport from "passport";
import { OAuth2StrategyOptionsWithoutRequiredURLs } from "passport-google-oauth20";
import {OAuth2Strategy} from "passport-google-oauth2";

dotenv.config();
const app= express();

app.use(cors());
app.use(express.json());

const clientId="809487737999-nqs47ptnk6j10toa5hmrhr3irfpq0ggp.apps.googleusercontent.com"

const clientSecret="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"

app.use("/api/v1/auth", authRoutes); 

app.get("/", (req,res)=>{
    console.log("Request was received");
    res.send("Thankyou for hitting the server");
});


app.listen(5000, (req,res)=>{
    console.log("Server is running");
    
    mongoose.connect(process.env.MONGO_URL).then(() => {
        console.log(`Connected to MongoDB`);
      })
      .catch((error) => {
        console.error(`MongoDB connection error: ${error}`);
      });;
   
});