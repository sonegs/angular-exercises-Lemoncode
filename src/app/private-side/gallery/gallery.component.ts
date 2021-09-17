import { Component, OnInit } from '@angular/core';
import { GalleryEntity } from '../../interfaces/gallery-entity';
import { GalleryList } from './gallery.list';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  mainPicture:string = GalleryList[0].src;
  pictures: GalleryEntity[] = GalleryList;
  idPicture: number = 1;
  numOfPictures: number = GalleryList.length;
  selected: number = 0;

  nextButton: boolean = false;
  previewButton: boolean = true;
  hidePreviewButtonWithId: number = 1;

  mainPictureWidth: number = 450;
  mainPictureHeight: number = 270;

  play: boolean = false;
  interval: ReturnType<typeof setInterval> = setInterval(()=>{}, 1000)
  playString: string = 'Play';

  firstImageListItem: number = 0;
  lastImageListItem: number = 3;
  numOfSmallPictures: number = this.lastImageListItem;
  nextListButton: boolean = false;
  previewListButton: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  searchPicture(){ // Busca coincidencias con el id de la imagen de la lista
    GalleryList.map((gallery)=>{
      if(gallery.id == this.idPicture){
        this.mainPicture = gallery.src;
      }
    })
    this.setFocus(this.idPicture-1);
  }

  previewPicture() { // pasa una imagen hacia atras
    GalleryList.map((gallery)=>{
      if(gallery.src == this.mainPicture){
        this.idPicture = gallery.id - 1;
        this.nextButton=false;
        this.previewButtonBehavior(this.hidePreviewButtonWithId);
      }
    })
    this.searchPicture();
  }

  nextPicture(){ // pasa una imagen hacia delante
    GalleryList.map((gallery)=>{
      if(gallery.src == this.mainPicture){
        this.idPicture = gallery.id + 1;
        this.previewButton=false;
        this.nextButtonBehavior(this.numOfPictures);
      }
    })
    this.searchPicture();
  }

  nextButtonBehavior(num: number){ // Esconde/Muestra el boton next
    (this.idPicture === num) ? this.nextButton = true : this.nextButton = false;
  }

  previewButtonBehavior(num: number){ // Esconde/Muestra el boton preview
    (this.idPicture === num) ? this.previewButton = true : this.previewButton = false;
  }


    previewList(){ // Mueve hacia atras la galeria pequeña de imagenes

      this.lastImageListItem = this.firstImageListItem;
      this.firstImageListItem -= this.numOfSmallPictures;

      if(this.firstImageListItem == 0){
        this.previewListButton=true;
      }

      this.nextListButton=false;
    }

  nextList(){ // Mueve hacia delante la galeria pequeña de imagenes

    this.firstImageListItem = this.lastImageListItem;
    this.lastImageListItem += this.numOfSmallPictures;

    if(this.lastImageListItem > this.numOfPictures){
      this.lastImageListItem = this.numOfPictures;
      this.nextListButton=true;
    }

    this.previewListButton=false;

  }

  increase(){ // Aumenta el tamaño de la imagen
    this.mainPictureWidth *= 1.1;
    this.mainPictureHeight *= 1.1;
  }

  reduce(){ // Disminuye el tamaño de la imagen
    this.mainPictureWidth /= 1.1;
    this.mainPictureHeight /= 1.1;
  }

  playOrStop(){ // Comienza/Detiene el movimiento de las imagenes
    this.play = !this.play;
    (this.play) ? this.interval=setInterval(this.moveImage.bind(this), 1000) : clearInterval(this.interval);
    (this.play) ? this.playString = 'Stop' : this.playString = 'Play';
  }

  moveImage(){ // Mueve las imagenes
    GalleryList.map((gallery)=>{

      if(gallery.src == this.mainPicture){
        this.idPicture = gallery.id + 1;
      }
      if(this.idPicture==this.numOfPictures+1){
        this.idPicture=1
      }
    })

    this.searchPicture()
    this.nextButtonBehavior(this.numOfPictures);
    this.previewButtonBehavior(this.hidePreviewButtonWithId);

  }

  getPicture(e: Event){ // Obtiene la imagen de las miniaturas
    this.mainPicture = (e.target as HTMLImageElement).src;

  }

  setFocus(focus: number) { // Cambia el foco de la clase selected
     this.selected = focus;
     (this.selected === 0 ) ? this.previewButtonBehavior(this.hidePreviewButtonWithId) : this.previewButtonBehavior(0);
     (this.selected === this.numOfPictures ) ? this.nextButtonBehavior(this.numOfPictures+1) : this.nextButtonBehavior(0);
  }


}
