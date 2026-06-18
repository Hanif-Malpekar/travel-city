const TransportOption = require("../models/TransportOption")

let sendRes = {
  success: true,
  data: []
}

async function getTransportOption (req, res) {

    let findData = {}

    const userData = await TransportOption.find(findData)

    sendRes.data = userData 

    return res.status(200).send(sendRes)
}

function createTransportOption () {
    return
}

function updateTransportOption () {
    return
}

function deleteTransportOption () {
    return
}

module.exports = {
    getTransportOption,
    createTransportOption,
    updateTransportOption,
    deleteTransportOption
}