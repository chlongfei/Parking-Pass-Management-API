# Parking Pass API Design

## SQL
### Database
    niu_parking
### Tables
    passTypes:
        - passTypeID
        - passTypeName
        - passTypeDesc

    clientTypes:
        - clientTypeID
        - clientTypeName
        - clientTypeDesc

    clients:
        - clientID
        - clientName
        - clientType
        - clientContact
        - clientPhone
        - clientEmail

    passes:
        - passID
        - passType
        - passIsValid
        - passNotes
    
    assignments:
        - assignmentID
        - assignmentTime
        - passID
        - clientID
        - clientPlateProv
        - clientPlateDigit
        - assignmentNotes
    
    history:
        - histID
        - histTime
        - passID
        - histAction

## Functions
### ✔ getPassTypes()
returns a JSON list of all pass types in the DB.

### ✔ addPassType(typeName, typeDescription)
adds new pass types to the DB.

| Parameter         | Required/Optional | Data type |
|-------------------|-------------------|-----------|
| `typeName`        | required          | string    |
| `typeDescription` | required          | string    |

### ✔ getClientTypes()
returns a JSON list of all client types in the DB.

### ✔ addClientType(typeName, typeDescription)
adds new pass types to DB.

| Parameter         | Required/Optional | Data type |
|-------------------|-------------------|-----------|
| `typeName`        | required          | string    |
| `typeDescription` | required          | string    |

### ✔ getClients()
returns a JSON list of all clients in the DB.

### ✔ addClient(name, type, contact, phone, email)
adds new client to DB.

| Parameter | Required/Optional | Data type |
|-----------|-------------------|-----------|
| `name`    | required          | string    |
| `type`    | required          | int       |
| `contact` | required          | string    |
| `phone`   | required          | string    |
| `email`   | required          | string    |

### ✔ getPasses()
returns a JSON list of all passes in DB.

### ✔ addPass(type, start, end, notes)
adds a new pass to DB.

| Parameter | Required/Optional | Data type |
|-----------|-------------------|-----------|
| `type`    | required          | int       |
| `start`   | required          | string    |
| `end`     | required          | string    |
| `notes`   | optional          | string    |

### ✔ getAssignments()
returns a JSON list of all pass assignments in DB.

### ✔ addAssignment(assnTime, passID, clientID, clientPlateProv, cilentPlateDigit, notes)
adds a new assignment to DB.

| Parameter         | Required/Optional | Data type |
|-------------------|-------------------|-----------|
| `assnTime`        | required          | int       |
| `passID`          | required          | int       |
| `clientID`        | required          | int       |
| `clientPlateProv` | optional          | string    |
| `cilentPlateDigit`| optional          | string    |
| `notes`           | optional          | string    |

### ✔ getHistory()
returns a JSON list of all pass action history in DB.

### ✔ addHistory(passID, desc)
adds a history entry

| Parameter         | Required/Optional | Data type |
|-------------------|-------------------|-----------|
| `passID`          | required          | int       |
| `desc`            | optional          | string    |

