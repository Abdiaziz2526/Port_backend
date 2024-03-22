import  express  from "express";
import connectTodb from "./Configdb/database.js";
//import userRoutes from './routes/userRoutes.js'
import TaxesRout from './routes/TaxesRoutes.js'
import dotenv from 'dotenv'



dotenv.config()
const app = express()
connectTodb()

const port = 7000
app.use(express.json())
app.use('/api/taxes', TaxesRout)

app.listen(port , ()=>{
    console.log(`Server is running on ${port}`)
})