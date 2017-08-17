import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

import {HttpProvider} from '../../providers/http/http';

@Component({
  selector: 'page-sports',
  templateUrl: 'sports.html',
  providers:[HttpProvider]
})
export class SportsPage {

    newsData: any;
    loading: any;

    constructor(public navCtrl: NavController, private httpProvider:HttpProvider, public loadingCtrl: LoadingController) {
        
        this.loading = this.loadingCtrl.create({
            content: `
            <ion-spinner ></ion-spinner>`
          });

        this.getData();
    }

    getData(){
        this.loading.present();
        this.httpProvider.getJsonData().subscribe(
          result => {
            this.newsData=result.data.children;
            console.log("Success : "+this.newsData);
          },
          err =>{
            console.error("Error : "+err);
          } ,
          () => {
            console.log('getData completed');
          }
        );
      }
}
