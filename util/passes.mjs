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
 * looks up pass by id
 * @param {int} passId 
 * @returns json result of pass query
 */
export function getPassById(passId){
    let query = `SELECT * from passes WHERE passID = ${passId};`;
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
 * looks up pass assignment by pass id
 * @param {int} passId 
 * @returns json result of pass assignment
 */
export function getPassAssignmentByPassId(passId){
    let query = `SELECT * from assignments WHERE passID = ${passId}`;
    return runQuery(query);
}

/**
 * @returns list of pass assignments
 */
export function getHistory(){
    let query = "SELECT * from history;";
    return runQuery(query);
}

/* Setters */

/**
 * creates new pass entry
 * @param {int} type 
 * @param {string} notes 
 * @returns 
 */
export function createPass(type,notes){
    let query = `INSERT INTO passes (passType,passIsValid,passNotes) VALUES (${type},TRUE,${notes}); SELECT last_insert_id() AS newID;`;
    return runQuery(query);
}