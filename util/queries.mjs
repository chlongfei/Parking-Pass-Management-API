import sql from 'mysql2';

/* SQL configurations are set in .env */
import dotenv from 'dotenv';
dotenv.config();


/* Internal Functions */
/**
 * established connectio to mySQL server
 * @returns connection to SQL server
 */
function sqlConnect(){
    let conn = sql.createConnection({
        host: process.env.SQL_SRC,
        user: process.env.SQL_USR,
        password: process.env.SQL_PWD,
        database: process.env.SQL_DB
    });
    return conn;
}

/**
 * executes query in SQL server
 * @param {string} query 
 * @returns 
 */
function runQuery(query){
    let connection =  sqlConnect();
    return new Promise((resolve, reject) =>{
        connection.execute(query, (error, result) =>{
            if(error) reject (error);
            resolve(result);
        });
    })
}


/* APIs */

/* Client - Getters */
/**
 * @returns list of client types
 */
 export function getClientTypes(){
    let query = "SELECT * from clientTypes;";
    return runQuery(query);
}

/**
 * @returns list of clients
 */
 export function getClients(){
    let query = "SELECT * from clients;";
    return runQuery(query);
}


/* Pass - Getters */
/**
 * @returns list of pass types
 */
 export function getPassTypes(){
    let query = "SELECT * from passTypes;";
    return runQuery(query);
}

/**
 * @returns list of passs
 */
 export function getPasses(){
    let query = "SELECT * from passes;";
    return runQuery(query);
}


/* Operational - Getters */
/**
 * @returns list of pass assignments
 */
 export function getPassAssignments(){
    let query = "SELECT * from assignments;";
    return runQuery(query);
}

/**
 * @returns list of pass assignments
 */
 export function getHistory(){
    let query = "SELECT * from history;";
    return runQuery(query);
}