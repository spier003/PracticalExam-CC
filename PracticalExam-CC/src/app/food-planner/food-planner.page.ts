import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-food-planner',
  templateUrl: './food-planner.page.html',
  styleUrls: ['./food-planner.page.scss'],
})
// export class FoodPlannerPage implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
export class FoodPlannerPage {
  @ViewChild(IonModal) modal: IonModal;

  message = 'To test what kind of diet suits you. Try it!';
  name: string;
  diet: string;

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
    this.modal.dismiss(this.diet, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }
}
