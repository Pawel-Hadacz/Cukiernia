const db = require('../database/db'); 
module.exports = class Cukiernik {
    constructor(idCukiernik,imie,nazwisko,wiek){
        this.idCukiernik = idCukiernik;
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.wiek = wiek;
       
        

    }
    save() {
      return db.execute(
       'INSERT INTO Cukiernik (imie, nazwisko, wiek) VALUES (?, ?, ?)',
        [this.imie, this.nazwisko, this.wiek]
      );
    }
    
    static fetchAll() {
      return db.execute('SELECT * FROM Cukiernik');
    }
    static delete() {
      return db.execute('DELETE * FROM Cukiernik');
    }
  
    
      
}