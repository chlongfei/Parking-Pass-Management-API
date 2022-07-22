/**
 * Parking Pass Management API
 * LongFei Chen (chlf.dev)
 * July 14, 2022
 */

import path from 'path';
import express from 'express';
import { addPassType, getPassTypes} from './util/passes.mjs';
import { addClient, addClientTypes, getClients, getClientTypes } from './util/clients.mjs';
import { fileURLToPath } from 'url';
const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.json());

/* CLIENT GETTERS */

/**
 * retrives JSON of client types
 */
app.get('/api/c/types',(req, res)=>{
    getClientTypes().then(clientTypes =>{
        res.type('application/json').send(clientTypes).status(200);
    });
});

/**
 * adds client type
 * rseponds with new type id
 */
app.post('/api/c/type', (req,res)=>{
    addClientTypes(req.body.typeName,req.body.typeDesc).then(typeID =>{
        res.type('application/json').send(typeID[1][0]).status(200);
    });
});

/**
 * retrives JSON of clients
 */
app.get('/api/c',(req,res)=>{
    getClients().then(clients=>{
        res.type('application/json').send(clients);
    });
});

/**
 * adds client
 * responds with client id
 */
app.post('/api/c', (req,res)=>{
    addClient(req.body.name,req.body.type,req.body.contact,req.body.phone,req.body.email).then(clientId=>{
        res.type('application/json').send(clientId[1][0]).status(200);
    });
});

/**
 * retrives JSON of pass types
 */
 app.get(`/api/p/types`, (req,res)=>{
    getPassTypes().then( passTypes => {
        res.type('application/json').send(passTypes).status(200);
    });
});

/**
 * adds pass type
 * responds with new type id
 */
app.post('/api/p/type', (req,res)=>{
    addPassType(req.body.typeName, req.body.typeDesc).then(typeID =>{
        res.type('application/json').send(typeID[1][0]).status(200);
    });
});

/**
 * default response for illegal api call
 */
app.use('/', (req, res, next) =>{
    res.sendFile(path.join(__dirname, '/util/txt/root.txt'));
});

/**
 * express server listener
 */
app.listen(process.env.WEB_PORT, ()=>{
    console.log(`System now listening on port ${process.env.WEB_PORT}`);
});