import { Component } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { routes } from 'src/app/shared/routes/routes';
interface gallery {
  src: string
}
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent {
  public routes = routes;
  public gallery: Array<gallery> = [];

  constructor(private _lightbox: Lightbox) {
    for (let i = 1; i <= 12; i++) {
      const src = 'assets/img/gallery/gallery-thum-0' + i + '.jpg';
      this.gallery.push({ src: src });
    }
  }
  /* eslint-disable @typescript-eslint/no-explicit-any */
  open(index: number, albumArray: Array<any>): void {
    this._lightbox.open(albumArray, index);
  }

  close(): void {
    this._lightbox.close();
  }
}
