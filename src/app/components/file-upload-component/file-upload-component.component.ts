import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FileAnalyzerService } from 'src/app/services/file-analyzer/file-analyzer.service';

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

@Component({
  selector: 'app-file-upload-component',
  templateUrl: './file-upload-component.component.html',
  styleUrls: ['./file-upload-component.component.scss'],
  providers: [MessageService],
})
export class FileUploadComponentComponent {
  message = 'hey';
  uploadedFiles: any[] = [];
  maxSizeFile = 1000000;

  constructor(
    private messageService: MessageService,
    private fileAnalyzerService: FileAnalyzerService
  ) {}

  onUpload(event: UploadEvent) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
      this.fileAnalyzerService.analyze(file).subscribe({
        next: (data) => {
          console.log('la data es:');
          console.log(data.data);
          this.message = data.data;
        },
        error: (error) => {
          this.uploadedFiles.push(error);
        },
      });
      /* this.fileAnalyzerService.analyze(file).subscribe((data) => {
        console.log('#RECIBIDO');
        console.log(data);
        this.uploadedFiles.push(data);
      }); */
    }

    this.messageService.add({
      severity: 'info',
      summary: 'File Uploaded',
      detail: '',
    });
  }
}
