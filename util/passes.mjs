/**
 * Utilities for manipulating passes information
 */
import {runQuery} from './dbUtils.mjs';

/* Getters */
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