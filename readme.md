# Parking Pass Management API

express.js CRUD API for management of parking passes.

## Install
    npm install

# API
API usage is described below. All responses are in JSON form.

Malformed API calls are greeted with generic page at root `/` indicating server status.

## Get List of Client Types
### Request
`GET /api/c/types`
### Example Response
```json
    {
        "clientTypeID": 1,
        "clientTypeName": "Vendor",
        "clientTypeDesc": "Vendor"
    }
```
## Add Client Type
### Request
`POST /api/c/type`
### Example Payload
```json
    {
        "typeName": "name",
        "typeDesc": "description"
    }
```
### Example Response
```json
    {
        "passTypeID": 1
    }
```
## Get List of Clients
### Request
`GET /api/c`
### Example Response
```json
    {
        "clientID": 1,
        "clientName": "Vendor",
        "clientType": 1,
        "clientContact": "Jon Smith",
        "clientPhone": "1234567890",
        "clientEmail": "jsmith@example.com"
    }
```
## Add Client
### Request
`POST /api/c'/type`'
### Example Payload
```json
    {
        "name": "Jon's Store",
        "type": "1",
        "contact": "Jon Smith",
        "phone": "1234567890",
        "email": "jsmith@example.com"
    }
```
### Example Response
```json
    {
        "clientID": 1
    }
```
## Get List of Pass Types
### Request
`GET /api/p/types`
### Example Response
```json
    {
        "passTypeID": 1,
        "passTypeName": "Vendor",
        "passTypeDesc": "Vendor"
    }
```
## Add Pass Type
### Request
`POST /api/p/type`
### Example Payload
```json
    {
        "typeName": "name",
        "typeDesc": "description"
    }
```
### Example Response
```json
    {
        "passTypeID": 1
    }
```
## Get List of Passes
### Request
`GET /api/p`
### Example Response
```json
    {
        "passID": 1,
        "passType": 1,
        "passIsValid": 1,
        "passStart": "2022-07-22T00:00:00.000Z",
        "passEnd": null,
        "passNotes": "notes"
    }
```
## Add Pass
### Request
`POST /api/p`
### Example Payload
```json
    {
        "type":1,
        "start":null,
        "end":null,
        "noets":"notes"
    }
```
### Example Response
```json
    {
        "passID": 1
    }
```
## Get List of Pass Assignments
### Request
`GET /api/a`
### Example Response
```json
    {
        "assignmentID": 1,
        "assignmentTime": "2022-07-22T03:19:03.000Z",
        "passID": 1,
        "clientID": 1,
        "clientPlateProv": "ON",
        "clientPlateDigit": "ABC123",
        "assignmentNotes": ""
    }
```
## Add Pass Assignment
### Request
`POST /api/p`
### Example Payload
```json
    {
        "passId": 1,
        "clientId":1,
        "clientPlateProv": "ON",
        "clientPlateDigit": "ABC123",
        "notes": ""
    }
```
### Example Response
```json
    {
        "assignmentID": 1
    }
```