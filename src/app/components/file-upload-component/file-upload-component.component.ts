import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Product } from 'src/app/models/product';
import { ScheduleFile } from 'src/app/models/schedule-file';
import { FileAnalyzerService } from 'src/app/services/file-analyzer/file-analyzer.service';
import { ProductServiceService } from 'src/app/services/product-service/product-service.service';
import { environment } from 'src/environments/environment';

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
  errorMessage?: string = undefined;
  uploadedFiles: any[] = [];
  maxSizeFile = 1000000;
  products!: Product[];
  scheduleFile?: ScheduleFile;
  backendUrl?: string;
  isLoading: boolean = false;

  constructor(
    private messageService: MessageService,
    private fileAnalyzerService: FileAnalyzerService,
    private productService: ProductServiceService
  ) {
    this.backendUrl = environment.backendUrl;
    //this.initSchedule(true);
  }

  ngOnInit() {
    this.productService.getProducts().then((data) => (this.products = data));
  }

  onBeforeUpload() {
    this.isLoading = true;
  }

  onUpload(event: UploadEvent) {
    this.isLoading = false;
    const originalEvent: any = event.originalEvent;
    this.scheduleFile = originalEvent.body.data;
    if (originalEvent.body.errors.length !== 0) {
      const error: string = originalEvent.body.errors[0];
      this.messageService.add({
        severity: 'warning',
        summary: 'Importante',
        detail: error,
      });
    }
  }
}
