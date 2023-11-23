let url: string = "https://mocki.io/v1/765b2daf-41d5-4e94-a0d5-abd918f57b8f";

class Articolo {
  id: number;
  codprod: number;
  collezione: string;
  capo: string;
  modello: number;
  quantita: number;
  colore: string;
  prezzoivaesclusa: number;
  prezzoivainclusa: number;
  disponibile: string;
  saldo: number;

  constructor(
    _id: number,
    _codprod: number,
    _collezione: string,
    _capo: string,
    _modello: number,
    _quantita: number,
    _colore: string,
    _prezzoivaesclusa: number,
    _prezzoivainclusa: number,
    _disponibile: string,
    _saldo: number
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

  getSaldoCapo(): number {
    return (this.prezzoivainclusa * this.saldo) / 100;
  }

  getAcquistoCapo(): number {
    console.log("lo sconto" + this.getSaldoCapo());
    return Number((this.prezzoivainclusa - this.getSaldoCapo()).toFixed(2));
  }
}

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Errore HTTP! Status: ${response.status}`);
    }

    return response.json();
  })
  .then(data => {
    console.log(data);
    let array = data;
    array.forEach(element => {
      const {
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
      } = element;
      let articolo = new Articolo(
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
      console.log(articolo.getAcquistoCapo());
    });
  })
  .catch(error => {
    console.error("Si è verificato un errore durante la richiesta:", error);
  });
