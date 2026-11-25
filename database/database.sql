CREATE DATABASE IF NOT EXISTS workingsouls DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_hungarian_ci;
USE workingsouls;

CREATE TABLE ProfilPerson (
    person_id INT AUTO_INCREMENT PRIMARY KEY,
    p_email VARCHAR(100) NOT NULL UNIQUE,
    p_username VARCHAR(40) NOT NULL,
    p_password VARCHAR(255) NOT NULL,
    p_country VARCHAR(56) NOT NULL,
    p_location VARCHAR(200) NOT NULL,
    p_fake_datas INT NOT NULL DEFAULT 0 CHECK (p_fake_datas >= 0),
    p_image_profil MEDIUMBLOB,
    driving_license BOOLEAN NOT NULL DEFAULT FALSE,
    p_phone_number VARCHAR(20) NOT NULL UNIQUE,
    wanted_salary INT NOT NULL CHECK (wanted_salary >= 0)
);

CREATE TABLE Qualification (
    qualification_id INT AUTO_INCREMENT PRIMARY KEY,
    degree VARCHAR(50) NOT NULL,
    type VARCHAR(50) NOT NULL,
    UNIQUE (degree, type)
);

CREATE TABLE ProfilCompany (
    company_id INT AUTO_INCREMENT PRIMARY KEY,
    c_email VARCHAR(100) NOT NULL UNIQUE,
    c_username VARCHAR(40) NOT NULL,
    c_password VARCHAR(255) NOT NULL,
    c_country VARCHAR(56) NOT NULL,
    c_fake_datas INT NOT NULL DEFAULT 0 CHECK (c_fake_datas >= 0),
    c_phone_number VARCHAR(20) NOT NULL UNIQUE,
    c_image_profil MEDIUMBLOB,
    tax_id VARCHAR(11) NOT NULL UNIQUE
);

CREATE TABLE AdvertisementFromCompany (
    advertisement_id INT AUTO_INCREMENT PRIMARY KEY,
    c_location VARCHAR(200) NOT NULL,
    offered_salary INT NOT NULL CHECK (offered_salary >= 0),
    offered_job VARCHAR(100) NOT NULL,
    requirement TEXT NOT NULL,
    company_id INT NOT NULL,
    FOREIGN KEY (company_id) REFERENCES ProfilCompany(company_id) ON DELETE CASCADE
);

CREATE TABLE HasQualification (
    person_id INT NOT NULL,
    qualification_id INT NOT NULL,
    PRIMARY KEY (person_id, qualification_id),
    FOREIGN KEY (person_id) REFERENCES ProfilPerson(person_id) ON DELETE CASCADE,
    FOREIGN KEY (qualification_id) REFERENCES Qualification(qualification_id) ON DELETE CASCADE
);

CREATE TABLE Applying (
    person_id INT NOT NULL,
    advertisement_id INT NOT NULL,
    cv MEDIUMBLOB,
    PRIMARY KEY (person_id, advertisement_id),
    FOREIGN KEY (person_id) REFERENCES ProfilPerson(person_id) ON DELETE CASCADE,
    FOREIGN KEY (advertisement_id) REFERENCES AdvertisementFromCompany(advertisement_id) ON DELETE CASCADE
);
