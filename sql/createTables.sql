/* pass types */
Create Table passTypes (
    passTypeID int not null auto_increment,
    passTypeName varchar(255) not null,
    passTypeDesc varchar(1000) not null,
    primary key (passTypeID)
);

/* client types */
Create Table clientTypes(
    clientTypeID int not null auto_increment,
    clientTypeName varchar(255) not null,
    clientTypeDesc varchar(1000) not null,
    primary key (clientTypeID)
);

/* clients */
Create Table clients (
    clientID int not null auto_increment,
    clientName varchar(255) not null,
    clientType int not null,
    clientContact varchar(255),
    clientPhone varchar(255),
    clientEmail varchar(255),
    primary key (clientID),
    foreign key (clientType) references clientTypes(clientTypeID)
);

/* passes */
Create Table passes (
    passID int not null auto_increment,
    passType int not null,
    passIsValid boolean not null,
    passStart date not null,
    passEnd date,
    passNotes varchar(1000),
    primary key (passID),
    foreign key (passType) references passTypes(passTypeID)
);

/* pass assignments */
Create Table assignments (
    assignmentID int not null auto_increment,
    assignmentTime datetime not null,
    passID int not null,
    clientID int not null,
    clientPlateProv varchar(255),
    clientPlateDigit varchar(255),
    assignmentNotes varchar(1000),
    primary key (assignmentID),
    foreign key (passID) references passes(PassID),
    foreign key (clientID) references clients(clientID)
);

/* pass history */
Create Table history (
    histID int not null auto_increment,
    histTime datetime not null,
    passID int not null,
    histAction varchar(255),
    primary key (histID)
);