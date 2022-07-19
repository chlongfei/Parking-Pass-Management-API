/**
 * Parking Pass Management API
 * LongFei Chen (chlf.dev)
 * July 14, 2022
 */

import path from 'path';
import express from 'express';
import { getClientTypes, getClients} from './util/clients.mjs';
import { getPassTypes, getPasses, getPassAssignments, getHistory, createPass, getPassById, getPassAssignmentByPassId} from './util/passes.mjs';
import { fileURLToPath } from 'url';
const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

/* GET */

/* CLIENTS */
/**
 * returns list of client types
 */
app.get('/api/g/c/types', (req, res)=>{
    getClientTypes().then(result =>{
        res.type('application/json').send(result).status(200);
    });
})

/**
 * returns list of client
 */
app.get('/api/g/c', (req, res)=>{
    getClients().then(result =>{
        res.type('application/json').send(result).status(200);
    });
})

/* PASSES - SET */
/**
 * issues a new pass returns pass ID
 */
 app.get('/api/c/p/n/:type',(req, res) => {
    createPass(req.params.type, null).then( passData =>{
        let passId = passData[1][0];
        console.log(passId);
        res.type('application/json').send(passId).status(200);
    })
})

/* PASSES - GET */
/**
 * lookup pass by ID
 */
app.get('/api/g/p/:id',(req,res) =>{
    getPassById(req.params.id).then(result =>{
        res.type('application/json').send(result).status(200);
    })
})

/**
 * returns list of pass types
 */
app.get('/api/g/p/types', (req, res)=>{
    getPassTypes().then(result =>{
        res.type('application/json').send(result).status(200);
    });
})

/**
 * returns list of pass assignments
 */
app.get('/api/g/p/assignments', (req, res)=>{
    getPassAssignments().then(result =>{
        res.type('application/json').send(result).status(200);
    });
})

/**
 * lookup pass assignment by pass ID
 */
 app.get('/api/g/p/a/:id',(req,res) =>{
    getPassAssignmentByPassId(req.params.id).then(result =>{
        res.type('application/json').send(result).status(200);
    })
})

/**
 * returns list of passes
 */
app.get('/api/g/p', (req, res)=>{
    getPasses().then(result =>{
        res.type('application/json').send(result).status(200);
    });
})

/**
 * returns pass history
 */
app.get('/api/g/h', (req, res)=>{
    getHistory().then(result =>{
        res.type('application/json').send(result).status(200);
    });
})

/**
 * default response for illegal api call
 */
app.use('/', (req, res, next) =>{
    res.sendFile(path.join(__dirname, '/util/txt/root.txt'));
})

/**
 * express server listener
 */
app.listen(process.env.WEB_PORT, ()=>{
    console.log(`System now listening on port ${process.env.WEB_PORT}`)
})