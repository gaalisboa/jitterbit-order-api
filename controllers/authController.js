const jwt = require("jsonwebtoken")

const SECRET = "jitterbit-secret"

exports.login = (req, res) => {

    const { username, password } = req.body

    if (username === "admin" && password === "1234") {

        const token = jwt.sign(
            { user: username },
            SECRET,
            { expiresIn: "1h" }
        )

        return res.json({ token })
    }

    return res.status(401).json({
        message: "Credenciais inválidas"
    })

}