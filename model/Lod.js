const lody = [];

module.exports = class Lod {
    constructor(smak){
        this.smak = smak;
    }
    
    save(){
        lody.push(this);
    }

    static fetchAll(){
        return this.lody;

    }
}