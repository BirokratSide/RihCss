export class CustomerParamConfig {
  aktivno: boolean;
  placnik: string;
  stevec: string;
  datum_zadnjega_placila: string;
  znesek: string;
  znesek_pred_zad_placilom: string;

  constructor(aktivno: boolean, placnik: string, stevec: string, datum_zadnjega_placila: string, znesek: string, znesek_pred_zad_placilom: string) {
    this.aktivno = aktivno;
    this.placnik = placnik;
    this.stevec = stevec;
    this.datum_zadnjega_placila = datum_zadnjega_placila;
    this.znesek = znesek;
    this.znesek_pred_zad_placilom = znesek_pred_zad_placilom;
  }
}
