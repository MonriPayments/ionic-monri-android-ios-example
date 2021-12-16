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

  monriPluginNewPayment($event: MouseEvent) {
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
                expiryYear: 2032,
                saveCard: true
              },
              transaction: {
                email: 'ionic.monri@gmail.com',
                orderInfo: 'Ionic monri order info',
                phone: '061123213',
                city: 'Sarajevo',
                country: 'BA',
                address: 'Laticka',
                fullName: 'Ionic Monri Example',
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

  monriPluginSavedCardPayment($event: MouseEvent) {
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
              savedCard: {
                panToken: 'd5719409d1b8eb92adae0feccd2964b805f93ae3936fdd9d8fc01a800d094584',
                cvv: '123',//allow the user to enter cvv..
              },
              transaction: {
                email: 'ionic.saved.card.no.3ds.monri@gmail.com',
                orderInfo: 'Ionic monri order info saved card no 3DS',
                phone: '061123213',
                city: 'Sarajevo',
                country: 'BA',
                address: 'Laticka',
                fullName: 'Ionic Monri Example',
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


  monriPluginSavedCard3DSPayment($event: MouseEvent) {
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
              savedCard: {
                panToken: 'c32b3465be7278d239f68bb6d7623acf0530bf34574cf3b782754d281c76bd02',
                cvv: '123',//allow the user to enter cvv..
              },
              transaction: {
                email: 'ionic.saved.card.3ds.monri@gmail.com',
                orderInfo: 'Ionic monri order info saved card 3DS',
                phone: '061123213',
                city: 'Sarajevo',
                country: 'BA',
                address: 'Laticka',
                fullName: 'Ionic Monri Example',
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
