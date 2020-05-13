import express from "express";
import newsControler from "./controler";

const newsRouter = new express.Router();

newsRouter.get("/", newsControler.get);

export default newsRouter;