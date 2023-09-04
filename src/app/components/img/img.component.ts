import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent {
  imageDefault = './assets/images/image_not_found.jpeg'
  @Input() img: string = ''

  imgError() {
    this.img = this.imageDefault
  }
}
