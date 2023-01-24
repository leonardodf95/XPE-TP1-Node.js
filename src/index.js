import express, { json } from 'express';
import cors from 'cors'
import routes from './routes/index.js';


const server = express()

server.use(cors())
server.use(json())
server.use(routes)

const PORT = 3000

server.listen(PORT, ()=>{
    console.log('Server is listen')
})