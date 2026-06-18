const express = require("express")

const {
    getTransportOption,
    createTransportOption,
    updateTransportOption,
    deleteTransportOption
} = require("../controllers/TransportOption")

const router = express.Router()

router.get("/get", getTransportOption)
router.post("/create", createTransportOption)
router.patch("/update", updateTransportOption)
router.delete("/delete", deleteTransportOption)