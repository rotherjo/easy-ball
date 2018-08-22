import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const events = [
      { id: 0, ename: 'Freibier' , eort: 'easyCube', edatum: '6.8.2018', eanz: 7, besucher: 0 },
      { id: 1, ename: 'BER-Eröffnung', eort: 'Schönefeld', edatum: '31.7.2018', eanz: 0, besucher: 0 },
      { id: 2, ename: 'Drittes Event', eort: 'Holzmarktstraße', edatum: '8.8.2018', eanz: 6, besucher: 6 }
    ];
    const persons = [
      { id: 0, vname: 'Bud', nname: 'Spencer', mail: 'hau@kopf.it', firma: 'Filmcrew',
        imgurl: 'https://ih1.redbubble.net/image.368405967.1798/st%2Csmall%2C215x235-pad%2C210x230%2Cf8f8f8.lite-1u3.jpg',
        darf: true , vip: true, gescannt: false},
      { id: 1, vname: 'Dave', nname: 'Minion', mail: '6921@minions.gru', firma: 'GruRocks',
        imgurl: 'https://images-na.ssl-images-amazon.com/images/I/41HPFwV%2BdYL._SY355_.jpg',
        darf: false , vip: false, gescannt: true}
    ];
    return {persons, events};
  }
}
