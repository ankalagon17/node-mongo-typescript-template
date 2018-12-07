import express from "express";
import bodyParser from "body-parser";
import { Routes } from "./routes/Routes";
import mongoose from "mongoose";

export class Config {

    public app: express.Express;
    public route: Routes;
    public mongoUrl: string;

    constructor() {
        this.app = express();
        this.appConfig();
        this.route = new Routes(this.app);
        this.mongoUrl = "mongodb://localhost/CRMdb";
        this.mongoConfig();
    }

    private appConfig(): void {
        // support application/json type post data
        this.app.use(bodyParser.json());

        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({extended: false}));
    }

    private mongoConfig(): void {
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl);
    }

}