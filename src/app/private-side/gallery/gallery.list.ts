import { GalleryEntity } from '../../interfaces/gallery-entity'
import { environment } from 'src/environments/environment'

export const GalleryList: GalleryEntity[] = [
  {
    id: 1,
    src: environment.local_url+'assets/benagil.jpeg',
    title: 'Benagil Cave'
  },
  {
    id: 2,
    src: environment.local_url+'assets/budapest.jpeg',
    title: 'Budapest'
  },
  {
    id: 3,
    src: environment.local_url+'assets/venecia.jpeg',
    title: 'Venecia'
  },
  {
    id: 4,
    src: environment.local_url+'assets/paris.jpeg',
    title: 'Paris'
  },
  {
    id: 5,
    src: environment.local_url+'assets/amsterdam.jpeg',
    title: 'Amsterdam'
  },
  {
    id: 6,
    src: environment.local_url+'assets/viena.jpeg',
    title: 'Viena'
  },
  {
    id: 7,
    src: environment.local_url+'assets/edimburgo.jpeg',
    title: 'Edimburgo'
  },
  {
    id: 8,
    src: environment.local_url+'assets/praga.jpeg',
    title: 'Praga'
  }
]
