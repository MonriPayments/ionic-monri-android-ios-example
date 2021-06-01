import {Component, ElementRef, ViewChild} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {IonicMonri} from '../../../../ionic-monri-android-ios';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('paragraphElement')
  paragraphElement: ElementRef;

  constructor(public http: HttpClient) {
  }

  public onClickEvent($event: MouseEvent) {
    // IonicMonri.echo({value:'Adnan\'s test'});
    IonicMonri.showMessage();

    const httpHeaders: HttpHeaders = new HttpHeaders();
    httpHeaders.append('Accept', 'application/json');
    httpHeaders.append('Content-Type', 'application/json');

    const postData = JSON.stringify({});

    this.http.post(
      'http://localhost:8081/https://mobile.webteh.hr/example/create-payment-session',
      postData,
      {headers: httpHeaders}
    )
      .toPromise()
      .then(json => IonicMonri.confirmPayment({
          options: {
            authenticityToken: '6a13d79bde8da9320e88923cb3472fb638619ccb',
            developmentMode: true,
          },
          params: {
            clientSecret: json['client_secret'],
            card: {
              pan: '4341 7920 0000 0044',
              cvv: '123',
              expiryMonth: 12,
              expiryYear: 2020,
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
      ))
      .then(r => JSON.stringify(r))
      .then(result => {
        this.paragraphElement.nativeElement.value = result;
        // IonicMonri.showMessage(result);
      })
      .catch(e => {
        console.log('ERROR');
        this.paragraphElement.nativeElement.value = e.toString();
        // IonicMonri.showMessage(e.toString());
      });
  };

}
