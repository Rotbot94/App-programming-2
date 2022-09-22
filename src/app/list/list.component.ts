import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {

  list: any;
  newListItem: any;

  constructor() { }

  ngOnInit() {
    this.fetchList();
  }

  saveListItem() {
    if (!this.newListItem || this.newListItem === '') {
      console.log('Input is empty, please enter something into the input field');
      return;
    }
    let storageKey;
    if (this.list === undefined) {
      storageKey = 0;
    } else {
      storageKey = this.list?.length + 1;
    }
    localStorage.setItem(storageKey, this.newListItem);
    this.fetchList();
    this.newListItem = '';
  }

  fetchList() {
    const keyList = Object.entries(localStorage);
    console.log(keyList);
    this.updateList(keyList);
  }

  updateList(keyList) {
    if (!keyList) {
      console.log('No key list was found');
      return;
    }
    this.list = keyList;
  }

  removeListItem(target) {
    if(!target) {
      console.log('No target');
      return;
    }
    localStorage.removeItem(target[0]);
    console.log('Item was removed from storage');
    this.fetchList();
  }

}
