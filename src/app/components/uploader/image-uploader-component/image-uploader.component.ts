import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/uploader/ImageService';

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-image-uploader',
  templateUrl: 'image-uploader.component.html',
  styleUrls: ['image-uploader.component.scss']
})
export class ImageUploaderComponent {

  selectedFile: ImageSnippet;

  constructor(private imageService: ImageService){}

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);

      this.imageService.uploadImage(this.selectedFile.file).subscribe(
        (res) => {
        
        },
        (err) => {
        
        })
    });

    reader.readAsDataURL(file);
  }
}