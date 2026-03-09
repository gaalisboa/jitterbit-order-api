const jwt = require("jsonwebtoken")

const SECRET = "jitterbit-secret"

function auth(req, res, next) {

    const header = req.headers.authorization

    if (!header) {
        return res.status(401).json({ message: "Token não fornecido" })
    }

    const token = header.split(" ")[1]

    try {

        const decoded = jwt.verify(token, SECRET)

        req.user = decoded

        next()

    } catch (error) {

        return res.status(401).json({ message: "Token inválido" })

    }

}

module.exports = auth