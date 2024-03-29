import express from 'express'
import routerProd from './routes/products.routes.js'
import routerCart from './routes/carts.routes.js'
import {__dirname} from './path.js'
import path from 'path'

const PORT = 8080
const app = express()

//Middlewares

app.use(express.json())
app.use(express.urlencoded({extended:true}))

//Routes
app.use('/api/products', routerProd)
app.use('/api/cart', routerCart)
app.use('/static', express.static(path.join(__dirname, 'public')))
console.log(path.join(__dirname, '/public'));

app.listen(PORT, () => {
    console.log('Server on PORT: ', PORT);
})