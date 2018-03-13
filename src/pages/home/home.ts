import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QnaProvider } from '../../providers/QnaProvider/QnaProvider';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private message;
  private resposta: any = {};

  constructor(public navCtrl: NavController, public Qna: QnaProvider) {

  }

  getResposta() {
    let objMessage: any = { "question": this.message};
    this.Qna.callService(objMessage)
      .subscribe(
      data => {
        this.resposta = data.answers[0];
        console.log(data);
      }
      );
  }

}
