# Parking Pass Management API

express.js CRUD API for management of parking passes.

## Install
    npm install

# API
API usage is described below. All responses are in JSON form.

Malformed API calls are greeted with generic page at root `/` indicating server status.

## Get History
### Request
`GET /api/g/h`

## Get List of All Passes
### Request
`GET /api/g/p`

## Get Pass by ID
### Request
`GET /api/g/p/:id`

| Parameter| Required/Optional| Data Type|
|----------|------------------|----------|
| `id`     | required         | integer  |

## Get List of Pass Assignments
### Request
`GET /api/g/p/assignments`

## Get Pass Assignment by Pass ID
### Request
`GET /api/g/p/a/:id`

| Parameter| Required/Optional| Data Type|
|----------|------------------|----------|
| `id`     | required         | integer  |

## Get List of All Pass Types
### Request
`GET /api/g/p/types`

## Get List of All Clients
### Request
`GET /api/g/c`

## Get List of All Client Types
### Request 
`GET /api/g/types`

## Create New Pass
### Request
`GET /api/c/p/n/:type`

| Parameter  | Required/Optional| Data Type|
|------------|------------------|----------|
| `type`     | required         | integer  |