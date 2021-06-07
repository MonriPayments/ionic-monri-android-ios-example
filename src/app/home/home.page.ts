import {Component, ElementRef, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IonicMonri} from '../../../../ionic-monri-android-ios';
import MonriHelper from '../monri-helper';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('paragraphElement')
  paragraphElement: ElementRef;

  constructor(private httpClient: HttpClient) {
  }

  monriPluginClickEvent($event: MouseEvent) {
    MonriHelper.createPaymentSession().then(//custom plugin for this
      session => {
        console.log('client_secret: ', session.client_secret);
        this.paragraphElement.nativeElement.innerText = 'client_secret: ' + session.client_secret;
        return IonicMonri.confirmPayment({
            options: {
              authenticityToken: '6a13d79bde8da9320e88923cb3472fb638619ccb',
              developmentMode: true,
            },
            params: {
              clientSecret: session.client_secret,
              card: {
                pan: '4111 1111 1111 1111',
                cvv: '123',
                expiryMonth: 12,
                expiryYear: 2023,
                saveCard: true
              },
              transaction: {
                email: 'jasmin.suljich@gmail.com',
                orderInfo: 'React native bridge???',
                phone: '061123213',
                city: 'Sarajevo',
                country: 'BA',
                address: 'Laticka',
                fullName: 'Jasmin Suljic',
                zip: '71210',
              },
            }
          }
        );
      }
    ).then(r => JSON.stringify(r))
      .then(result => {
        this.paragraphElement.nativeElement.innerText = 'result: ' + result;
      })
      .catch(e => {
        console.log('ERROR');
        this.paragraphElement.nativeElement.innerText = 'error: ' + e;
      });

  }
}
