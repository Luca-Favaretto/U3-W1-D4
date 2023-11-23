var url = "https://mocki.io/v1/765b2daf-41d5-4e94-a0d5-abd918f57b8f";
var Articolo = /** @class */ (function () {
  function Articolo(
    _id,
    _codprod,
    _collezione,
    _capo,
    _modello,
    _quantita,
    _colore,
    _prezzoivaesclusa,
    _prezzoivainclusa,
    _disponibile,
    _saldo
  ) {
    this.id = _id;
    this.codprod = _codprod;
    this.collezione = _collezione;
    this.capo = _capo;
    this.modello = _modello;
    this.quantita = _quantita;
    this.colore = _colore;
    this.prezzoivaesclusa = _prezzoivaesclusa;
    this.prezzoivainclusa = _prezzoivainclusa;
    this.disponibile = _disponibile;
    this.saldo = _saldo;
  }
  Articolo.prototype.getSaldoCapo = function () {
    return (this.prezzoivainclusa * this.saldo) / 100;
  };
  Articolo.prototype.getAcquistoCapo = function () {
    console.log("lo sconto " + this.getSaldoCapo() + "$");
    return Number((this.prezzoivainclusa - this.getSaldoCapo()).toFixed(2));
  };
  return Articolo;
})();
fetch(url)
  .then(function (response) {
    if (!response.ok) {
      throw new Error("Errore HTTP! Status: ".concat(response.status));
    }
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    var array = data;
    array.forEach(function (element) {
      var id = element.id,
        codprod = element.codprod,
        collezione = element.collezione,
        capo = element.capo,
        modello = element.modello,
        quantita = element.quantita,
        colore = element.colore,
        prezzoivaesclusa = element.prezzoivaesclusa,
        prezzoivainclusa = element.prezzoivainclusa,
        disponibile = element.disponibile,
        saldo = element.saldo;
      var articolo = new Articolo(
        id,
        codprod,
        collezione,
        capo,
        modello,
        quantita,
        colore,
        prezzoivaesclusa,
        prezzoivainclusa,
        disponibile,
        saldo
      );
      console.log(articolo);
      console.log("Il prezzo scontato è " + articolo.getAcquistoCapo() + "$");
    });
  })
  .catch(function (error) {
    console.error("Si è verificato un errore durante la richiesta:", error);
  });
