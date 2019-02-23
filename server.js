const express = require('express')
const app = express()
const port = 3000
app.set('views', './views')
app.set('view engine', 'ejs')

app.get( '/', (req, res) => {
    res.render("./staticPages/home.ejs")
}) 

app.get( '/about', (req, res) => {
    res.render("./staticPages/about.ejs")
}) 

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});