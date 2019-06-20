const db = require('../database/db'); 
module.exports = class Lod {
    constructor(id,smak,cena,waga,dataWaznosci){
        this.id = id;
        this.smak = smak;
        this.cena = cena;
        this.waga = waga;
        this.dataWaznosci = dataWaznosci;

    }
    save() {
      return db.execute(
        'INSERT INTO Lody (smak, cena, waga, dataWaznosci) VALUES (?, ?, ?, ?)',
        [this.smak, this.cena, this.waga, this.dataWaznosci]
      );
    }
    static deleteById(id) {}
    static fetchAll() {
      return db.execute('SELECT * FROM Lody');
    }
  
    static findById(id) {
      return db.execute('SELECT * FROM Lody WHERE Lody.id = ?', [id]);
    }
    
      
}