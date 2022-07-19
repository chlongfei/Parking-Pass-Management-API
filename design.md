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
### - [ ] getPassTypes