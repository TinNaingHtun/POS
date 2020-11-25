import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddItemsPage } from '../pages/add-items/add-items.page';

import { UpdateItemsPage } from '../pages/update-items/update-items.page';
import { from } from 'rxjs';
import { StorageService, Item } from ".././services/storage.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  dbData: any;
  updateData: any;
  dataReturned: any;
  constructor(public modalController: ModalController,private storageService: StorageService) {}
  ngOnInit() {
    this.storageService.getUserdata().then(res => {
      this.dbData = res;
    });
}
  async addItem() {
    const modal = await this.modalController.create({
      component: AddItemsPage,
    });
    return await modal.present();
  }
  async updateItem(data) {
    const modal = await this.modalController.create({
      component: UpdateItemsPage,
      componentProps: {
        "code": data.code,
        "name": data.name,
        "price": data.price
      }
    });
    
    return await modal.present();
  }

}
