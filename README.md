"# Cukiernia" 
Skrypt do tworzenia bazy danych mysql 

dla Cukiernika 
CREATE TABLE `cukiernik` (
  `idCukiernik` int(11) NOT NULL AUTO_INCREMENT,
  `imie` varchar(45) NOT NULL,
  `nazwisko` varchar(45) NOT NULL,
  `wiek` int(11) NOT NULL,
  PRIMARY KEY (`idCukiernik`),
  UNIQUE KEY `idCukiernik_UNIQUE` (`idCukiernik`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

dla Lodów

CREATE TABLE `lody` (
  `idlody` int(11) NOT NULL AUTO_INCREMENT,
  `smak` varchar(45) NOT NULL,
  `cena` double NOT NULL,
  `waga` double NOT NULL,
  `dataWaznosci` date NOT NULL,
  `FK_idCukiernik` int(11) DEFAULT NULL,
  PRIMARY KEY (`idlody`),
  UNIQUE KEY `idlody_UNIQUE` (`idlody`),
  KEY `idCukienik_idx` (`FK_idCukiernik`),
  CONSTRAINT `idCukienik` FOREIGN KEY (`FK_idCukiernik`) REFERENCES `cukiernik` (`idCukiernik`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci