import { SlicePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { GalleryEntity } from '../../../interfaces/gallery-entity';

@Pipe({
  name: 'gallerySlice'
})
export class GallerySlicePipe implements PipeTransform {

  shortPictures: GalleryEntity[] = [];

  transform(pictures: GalleryEntity[], start:number, end:number): GalleryEntity[] {

    this.shortPictures.length=0;
    for(start; start < end; start++){
      this.shortPictures.push(pictures[start]);
    }

    return this.shortPictures;
  }


}
