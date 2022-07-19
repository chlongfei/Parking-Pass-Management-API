/**
 * Utilities for manipulating passes information
 */
import {runQuery} from './dbUtils.mjs';

/**
 * @returns JSON list of all pass types in DB
 */
export function getPassTypes(){
    let query = "SELECT * from passTypes;";
    return runQuery(query);
}

/**
 * adds a pass type to DB
 * @param {string} name 
 * @param {string} description 
 * @returns ID of new pass type record
 */
export function addPassType(name, description){
    let query = `INSERT INTO passTypes (passTypeName,passTypeDesc) VALUES (${name},${description}); SELECT last_insert_id() AS passTypeID;`;
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
 * creates new pass entry
 * @param {int} type 
 * @param {string} notes 
 * @returns 
 */
export function addPass(type, start, end, notes){
    let query = `INSERT INTO passes (passType,passIsValid,passStart,passEnd,passNotes) VALUES (${type},TRUE, ${start}, ${end}, ${notes}); SELECT last_insert_id() AS newID;`;
    return runQuery(query);
}

/**
 * @returns list of pass assignments
 */
export function getAssignments(){
    let query = "SELECT * from assignments;";
    return runQuery(query);
}

/**
 * adds new pass assignment to DB
 * @param {int} passID 
 * @param {int} clientID 
 * @param {string} clientPlateProv 
 * @param {string} clientPlateDigit 
 * @param {string} notes 
 * @returns 
 */
export function addAssignment(passID, clientID, clientPlateProv, clientPlateDigit, notes){
    let query = `INSERT INTO assignments (assignmentTime,passID,clientId,clientPlateProv,clientPlateDigit,assignmentNotes) VALUES ((SELECT NOW()),${passID},${clientID},${clientPlateProv},${cilentPlateDigit},${notes}); SELECT LAST_INSERT_ID() AS assignmentID;`;
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

/**
 * adds an history entry
 * @param {int} passID 
 * @param {string} desc 
 * @returns 
 */
export function addHistory(passID, desc){
    let query = `INSERT INTO history (histTime,passID,histAction) VALUES ((SELECT NOW()),${passID},${desc}); SELECT LAST_INSERT_ID();`;
    return runQuery(query);
}



