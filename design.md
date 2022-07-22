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
> ✔  = Function Created 🔗 = API Available
### 🔗✔ getPassTypes()
returns a JSON list of all pass types in the DB.

### 🔗✔ addPassType(typeName, typeDescription)
adds new pass types to the DB.

| Parameter         | Required/Optional | Data type | Description               |
|-------------------|-------------------|-----------|---------------------------|
| `typeName`        | required          | string    | name of pass type         |
| `typeDescription` | required          | string    | decription of pass type   |

### 🔗✔ getClientTypes()
returns a JSON list of all client types in the DB.

### 🔗✔ addClientType(typeName, typeDescription)
adds new pass types to DB.

| Parameter         | Required/Optional | Data type | Description               |
|-------------------|-------------------|-----------|---------------------------|
| `typeName`        | required          | string    | name of client type       |
| `typeDescription` | required          | string    | description of client type|

### 🔗✔ getClients()
returns a JSON list of all clients in the DB.

### 🔗✔ addClient(name, type, contact, phone, email)
adds new client to DB.

| Parameter | Required/Optional | Data type | Description                       |
|-----------|-------------------|-----------|-----------------------------------|
| `name`    | required          | string    | name of client                    |
| `type`    | required          | int       | client type identifier            |
| `contact` | optional          | string    | name of contact for client        |
| `phone`   | optional          | string    | phone number for contact          |
| `email`   | optional          | string    | email for contact                 |

### ✔ getPasses()
returns a JSON list of all passes in DB.

### ✔ addPass(type, start, end, notes)
adds a new pass to DB.

| Parameter | Required/Optional | Data type | Description                       |
|-----------|-------------------|-----------|-----------------------------------|
| `type`    | required          | int       | pass type identifier              |
| `start`   | required          | string    | pass active period start [datetime](https://dev.mysql.com/doc/refman/8.0/en/datetime.html#:~:text=MySQL%20retrieves%20and%20displays%20DATETIME,both%20date%20and%20time%20parts.)        |
| `end`     | required          | string    | pass active period end [datetime](https://dev.mysql.com/doc/refman/8.0/en/datetime.html#:~:text=MySQL%20retrieves%20and%20displays%20DATETIME,both%20date%20and%20time%20parts.)        |
| `notes`   | optional          | string    | pass notes                        |

### ✔ getAssignments()
returns a JSON list of all pass assignments in DB.

### ✔ addAssignment(passID, clientID, clientPlateProv, cilentPlateDigit, notes)
adds a new assignment to DB.

| Parameter         | Required/Optional | Data type | Description               |
|-------------------|-------------------|-----------|---------------------------|
| `passID`          | required          | int       | id of pass assigned       |
| `clientID`        | required          | int       | id of client assigned to  |
| `clientPlateProv` | optional          | string    | client lic. plate province|
| `cilentPlateDigit`| optional          | string    | client lic. plate digits  |
| `notes`           | optional          | string    | assignment notes          |

### ✔ getPassAssignmentByPassId(passId)
returns JSON of pass assignment associated with specified pass Id

| Parameter         | Required/Optional | Data type | Description               |
|-------------------|-------------------|-----------|---------------------------|
| `passID`          | required          | int       | id of pass assigned       |

### ✔ getHistory()
returns a JSON list of all pass action history in DB.

### ✔ addHistory(passID, desc)
adds a history entry

| Parameter         | Required/Optional | Data type | Description               |
|-------------------|-------------------|-----------|---------------------------|
| `passID`          | required          | int       | id of pass actioned       |
| `desc`            | optional          | string    | description of action     |

