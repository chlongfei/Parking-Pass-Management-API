/**
 * Utilities for manipulating client information
 */
import {runQuery} from './dbUtils.mjs';

/**
 * @returns list of client types
 */
export function getClientTypes(){
    let query = "SELECT * from clientTypes;";
    return runQuery(query);
}

/**
 * adds new client type to DB
 * @param {string} name 
 * @param {string} description 
 * @returns new client type ID.
 */
export function addClientTypes(name, description){
    let query = `INSERT INTO clientTypes (typeName,typeDescription) VALUES (${name},${description});SELECT LAST_INSERT_ID() AS typeID;`;
    return runQuery(query);
}

/**
 * @returns list of clients
 */
export function getClients(){
    let query = "SELECT * from clients;";
    return runQuery(query);
}