//http://babeljs.io/repl

// EXO DEUX ES6

class Facture{
  constructor(name, price){
    this.name = name;
    this.price = price;
  }
  getFacture(){
    return this.name + ' ' + this.price;
  }
  getTTC(){
    let ttc   = 20 * this.price / 100;
    let total = this.price + ttc;
    return(total);
  }
}

class Client{
  constructor(name){
    this.name = name;
    this.factures = [];
  }

  addFacture(facture){
    this.factures.push(facture);
  }

  getTotalDue(){
    let total = 0;

    this.factures.forEach((facture, index) =>{
      total += facture.getTTC();
    })
    return total;
  }
}

let facture1 = new Facture('Developpment', 2000);
let client   = new Client('Hetic');

let facture2 = new Facture('Developpment', 2000);

client.addFacture(facture1);
client.addFacture(facture2);

console.log(client.getTotalDue());
