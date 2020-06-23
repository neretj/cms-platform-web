import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/uploader/ImageService';
import { Observable } from 'rxjs';
import { HttpEventType, HttpResponse } from '@angular/common/http';

class ImageSnippet {
  pending: boolean = false;
  status: string = 'init';

  constructor(public src: string, public file: File) { }
}

@Component({
  selector: 'app-image-uploader',
  templateUrl: 'image-uploader.component.html',
  styleUrls: ['image-uploader.component.scss']
})
export class ImageUploaderComponent implements OnInit {

  selectedFile: ImageSnippet;

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.fileInfos = this.imageService.getFiles();
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  validTypes = ['image/png', 'image/jpeg', 'image/jpg'];
  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';

  fileInfos: Observable<any>;

  upload() {
    this.progress = 0;

    if (this.isValidImage(this.selectedFiles.item(0))) {
      this.currentFile = this.selectedFiles.item(0);
      this.imageService.upload(this.currentFile).subscribe(
        event => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progress = Math.round(100 * event.loaded / event.total);
          } else if (event instanceof HttpResponse) {
            this.message = event.body.message;
            this.fileInfos = this.imageService.getFiles();
          }
        },
        err => {
          this.progress = 0;
          this.message = 'Could not upload the file!';
          this.currentFile = undefined;
        });
    } else {
      this.message = 'This is not a valid type';
    }
    this.selectedFiles = undefined;
  }

  isValidImage(image: File) {
    let valid = false;
    if (image && this.validTypes.some((type) => {
      return type === image.type;
    })) {
      valid = true;
    }
    return valid;
  }
}