import { filter } from 'lodash';
import { Poster } from '../../models/poster';
import { PosterService } from '../../services/poster.service';
import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-poster-upload',
  templateUrl: './poster-upload.component.html',
  styleUrls: ['./poster-upload.component.css']
})
export class PosterUploadComponent implements OnInit {

  @Input() poster: Poster;

  selectedFile: File;

  constructor(private activeModal: NgbActiveModal,
    private posterService: PosterService) { }

  ngOnInit() {
  }

  uploadPosterImage() {
    const uploadData = new FormData();
    uploadData.append('posterImage', this.selectedFile, this.selectedFile.name);
    this.posterService.uploadImage(this.poster, uploadData).subscribe((result) => {
      console.log(result);
      this.poster.url = result.url;
      this.activeModal.close('Upload');
    });
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

  cancel() {
    this.activeModal.dismiss();
  }
}
