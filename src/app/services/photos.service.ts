import { Injectable } from '@angular/core';
import { Photo } from '../models/photo';

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  getPhotos(num: number): Photo[] {
    const photos = [
      new Photo('gato1.jpg', '2024-08-20'),
      new Photo('gato2.jpg', '2024-08-15'),
      new Photo('gato3.jpg', '2024-02-15'),
      new Photo('gato4.jpg', '2024-02-15'),
      new Photo('gato5.jpg', '2024-08-15'),
    ];
    const shuffle = (array: Photo[]) => {
      array.sort(() => Math.random() - 0.5);
    };
    shuffle(photos);
    return photos.slice(0, num);
  }
}
