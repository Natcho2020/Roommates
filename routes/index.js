//Path para que funcione dirname
import { Router } from "express";
import path from "node:path"

const router = Router()

//Dirname no operativo por type modules en el package (uso de modulos )
//Definir ruta get para el index main html 
router.get("/", (req, res) => {
    res.sendFile(path.join(import.meta.dirname, "../static/index.html"))
})

export { router }