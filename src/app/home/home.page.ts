import { Component } from '@angular/core';
import { CapFlyBuy } from 'capacitor-flybuy-plugin';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() { }

  public async callPlugin() {
    const { status, messageAs } = await CapFlyBuy.createCustomer({
      name: 'flybuy_capacitor_test',
      carColor: 'white',
      carType: 'toyota',
      licensePlate: 'A1234567',
      phone: '5551112222'
    });
    console.log('=> createCustomer: ', status, messageAs);
    const orderResult = await CapFlyBuy.createOrder({
      siteId: 5345,
      partnerId: `${Math.floor(1000 + Math.random() * 9000)}`,
      customer: messageAs
    });
    console.log('=> createOrder: ', orderResult.status, orderResult.messageAs);
  }
}
