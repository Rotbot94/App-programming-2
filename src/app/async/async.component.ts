import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
})
export class AsyncComponent {

  constructor() { }

  resolveAfter5Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 5000);
    });
  }

  async getValueWithAsync() {
    const value = <any>await this.resolveAfter5Seconds(20);
    alert(`async result: ${value}`);
  }

}
