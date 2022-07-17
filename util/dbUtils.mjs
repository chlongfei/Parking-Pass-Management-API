/**
 * Generic database utilities
 */
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
export function runQuery(query){
    let connection =  sqlConnect();
    return new Promise((resolve, reject) =>{
        connection.execute(query, (error, result) =>{
            if(error) reject (error);
            resolve(result);
        });
    })
}