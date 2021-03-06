const db = require('../database/db'); 
module.exports = class Lod {
    constructor(id,smak,cena,waga,dataWaznosci,FK_idCukiernik){
        this.id = id;
        this.smak = smak;
        this.cena = cena;
        this.waga = waga;
        this.dataWaznosci = dataWaznosci;
        this.FK_idCukiernik = FK_idCukiernik;

    }
    save() {
      return db.execute(
       'INSERT INTO Lody (smak, cena, waga, dataWaznosci,FK_idCukiernik) VALUES (?, ?, ?, ?,? )',
        [this.smak, this.cena, this.waga, this.dataWaznosci, this.FK_idCukiernik]
      );
    }
     delete() {
      return db.execute('DELETE * FROM Lody WHERE id =?',[this.id]);
    }
    static fetchAll() {
      return db.execute('SELECT * FROM Lody');
    }
  
    
    
      
}