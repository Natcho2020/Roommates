import express from 'express'
import cors from 'cors'
const app = express()
//Uso de cors para simplificar rutas get , post ,etc.
//Ejemplo :app.get('/products/:id', cors(), function (req, res, next) {
//res.json({ msg: 'This is CORS-enabled for a Single Route' })

import { router as main } from './routes/index.js'



app.use(express.json())
app.use(cors())
app.use("/", main)




app.listen(3000, () => {
    console.log("App en puerto 3000")
})
