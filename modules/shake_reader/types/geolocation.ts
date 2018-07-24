export class Geolocation {
  city: string //"Rzeszow"
  street: string //"UL. ŻOŁNIERZY 9 DYWIZJI PIECHOTY"
  street_number: number //"8"
  constructor(city: string, street: string, street_number: number) {
    this.city = city
    this.street = street
    this.street_number = street_number
  }
}
