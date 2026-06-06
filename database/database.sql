CREATE DATABASE IF NOT EXISTS workingsouls DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_hungarian_ci;
USE workingsouls;

-- Adattáblák
CREATE TABLE People (
    pid int AUTO_INCREMENT PRIMARY KEY,
    pemail VARCHAR(100) NOT NULL UNIQUE,
    pmobile VARCHAR(20) NOT NULL UNIQUE,
    pshowmail BOOLEAN NOT NULL,
    pshowmobile BOOLEAN NOT NULL,
    pdisplay_name VARCHAR(50) NOT NULL,
    ppassword VARCHAR(255) NOT NULL,
    pimage VARCHAR(255),
    pfakedatas INT
);

CREATE TABLE Factory (
    fid INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    femail VARCHAR(100) NOT NULL UNIQUE,
    fmobile VARCHAR(20) NOT NULL UNIQUE,
    fshowmail BOOLEAN NOT NULL,
    fshowmobile BOOLEAN NOT NULL,
    fdisplay_name VARCHAR(50) NOT NULL,
    fpassword VARCHAR(255) NOT NULL,
    fimage VARCHAR(255),
    ffakedatas INT,
    taxid VARCHAR(11) UNIQUE NOT NULL
);

CREATE TABLE Professions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    profname VARCHAR(50) NOT NULL UNIQUE
);


-- Kapcsolatok
CREATE TABLE AdvertisementFromPeople (
    wvalue INT,
    amode BOOLEAN,
    requirements TEXT,
    fakevotes INT,

    people_id INT NOT NULL,
    profession_id INT NOT NULL,

    PRIMARY KEY (people_id, profession_id),

    FOREIGN KEY (people_id) REFERENCES People(pid),
    FOREIGN KEY (profession_id) REFERENCES Professions(id)
);

CREATE TABLE AdvertisementFromFactory (
    wvalue INT,
    amode BOOLEAN,
    requirements TEXT,
    fakevotes INT,

    factory_id INT NOT NULL,
    profession_id INT NOT NULL,

    PRIMARY KEY (factory_id, profession_id),

    FOREIGN KEY (factory_id) REFERENCES Factory(fid),
    FOREIGN KEY (profession_id) REFERENCES Professions(id)
);