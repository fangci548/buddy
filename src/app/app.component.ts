import { Component } from '@angular/core';
import { IonBadge } from '@ionic/angular';
import { ProviderService } from './service/provider.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {



  constructor(private provider: ProviderService) {
    console.log(provider.enableConnect);
  }


}
