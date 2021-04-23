const app = require('express')()

const PORT = process.env.PORT || 3030

app.get("", (req, res) => {
    res.send("Hello Word")
})

app.listen(PORT, () => {
    console.log(`App up at port ${PORT}`)
})