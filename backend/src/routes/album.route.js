import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.send("Album router with GET method");
});

export default router;
