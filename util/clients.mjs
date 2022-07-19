/**
 * Utilities for manipulating client information
 */
import {runQuery} from './dbUtils.mjs';

/* Getters */
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