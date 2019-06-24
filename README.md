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



INSERT INTO `tin`.`cukiernik` (`idCukiernik`, `imie`, `nazwisko`, `wiek`) VALUES ('1', 'Kamil', 'Janosik', '24');
INSERT INTO `tin`.`cukiernik` (`idCukiernik`, `imie`, `nazwisko`, `wiek`) VALUES ('2', 'Patryk', 'Kowalski', '24');
INSERT INTO `tin`.`cukiernik` (`idCukiernik`, `imie`, `nazwisko`, `wiek`) VALUES ('3', 'Krystian', 'Trump', '24');



INSERT INTO `tin`.`lody` (`idlody`, `smak`, `cena`, `waga`, `dataWaznosci`, `FK_idCukiernik`) VALUES ('1', 'Malina', '5', '0.4', '2019-11-11', '1');
INSERT INTO `tin`.`lody` (`idlody`, `smak`, `cena`, `waga`, `dataWaznosci`, `FK_idCukiernik`) VALUES ('2', 'Truskawka', '3', '0.3', '2019-11-10', '2');
INSERT INTO `tin`.`lody` (`idlody`, `smak`, `cena`, `waga`, `dataWaznosci`, `FK_idCukiernik`) VALUES ('3', 'Wanilia', '7', '0.5', '2019-10-10', '1');
INSERT INTO `tin`.`lody` (`idlody`, `smak`, `cena`, `waga`, `dataWaznosci`, `FK_idCukiernik`) VALUES ('4', 'Cytryna', '2', '0.1', '2019-12-10', '3');
INSERT INTO `tin`.`lody` (`idlody`, `smak`, `cena`, `waga`, `dataWaznosci`, `FK_idCukiernik`) VALUES ('5', 'Czekolada', '5', '0.3', '2019-11-10', '1');