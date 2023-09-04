import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent {
  imageDefault = './assets/images/image_not_found.jpeg'
  @Input() img: string = ''
  @Output() loaded = new EventEmitter<string>()

  imgLoad() {
    console.log('Image loaded succesfully')
    this.loaded.emit('Successfully loaded image ' + this.img);
  }

  imgError() {
    this.img = this.imageDefault
  }
}
