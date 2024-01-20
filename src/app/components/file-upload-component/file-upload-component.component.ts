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

  onUpload(event: UploadEvent) {
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

  initSchedule(withErrors: boolean = false) {
    this.scheduleFile = {
      id: undefined,
      name: 'CARLA.xlsx',
      weeks: [
        {
          id: undefined,
          name: 'SEMANA 1',
          days: [
            {
              id: undefined,
              name: 'LUNES',
              start: '15:00',
              end: '23:15',
              isFree: false,
              errors: [],
            },
            {
              id: undefined,
              name: 'MARTES',
              start: '15:00',
              end: '23:15',
              isFree: false,
              errors: [],
            },
            {
              id: undefined,
              name: 'MIÉRCOLES',
              start: '15:00',
              end: '23:15',
              isFree: false,
              errors: [],
            },
            {
              id: undefined,
              name: 'JUEVES',
              start: '14:00',
              end: '20:30',
              isFree: false,
              errors: [],
            },
            {
              id: undefined,
              name: 'VIERNES',
              start: '09:00',
              end: '15:15',
              isFree: false,
              errors: [],
            },
            {
              id: undefined,
              name: 'SÁBADO',
              start: undefined,
              end: undefined,
              isFree: true,
              errors: [],
            },
            {
              id: undefined,
              name: 'DOMINGO',
              start: undefined,
              end: undefined,
              isFree: true,
              errors: [],
            },
          ],
          totalHours: 37.5,
          workHours: 36.75,
          breakHours: 0.75,
          nightHours: 3.75,
          errors: [],
          hasErrors: false,
        },
        {
          id: undefined,
          name: 'SEMANA 2',
          days: [
            {
              id: undefined,
              name: 'LUNES',
              start: '07:00',
              end: '15:30',
              isFree: false,
              errors: withErrors ? ['Más de 7 días de trabajo seguidos'] : [],
            },
            {
              id: undefined,
              name: 'MARTES',
              start: '07:00',
              end: '15:30',
              isFree: false,
              errors: withErrors ? ['Más de 7 días de trabajo seguidos'] : [],
            },
            {
              id: undefined,
              name: 'MIÉRCOLES',
              start: '07:00',
              end: '15:00',
              isFree: false,
              errors: [],
            },
            {
              id: undefined,
              name: 'JUEVES',
              start: undefined,
              end: undefined,
              isFree: true,
              errors: [],
            },
            {
              id: undefined,
              name: 'VIERNES',
              start: undefined,
              end: undefined,
              isFree: true,
              errors: [],
            },
            {
              id: undefined,
              name: 'SÁBADO',
              start: '15:00',
              end: '21:15',
              isFree: false,
              errors: [],
            },
            {
              id: undefined,
              name: 'DOMINGO',
              start: '15:00',
              end: '21:15',
              isFree: false,
              errors: [],
            },
          ],
          totalHours: 37.5,
          workHours: 36.75,
          breakHours: 0.75,
          nightHours: 0,
          errors: [],
          hasErrors: withErrors,
        },
        {
          id: undefined,
          name: 'SEMANA 3',
          days: [
            {
              id: undefined,
              name: 'LUNES',
              start: '14:00',
              end: '21:30',
              isFree: false,
              errors: [],
            },
            {
              id: undefined,
              name: 'MARTES',
              start: '14:00',
              end: '21:15',
              isFree: false,
              errors: [],
            },
            {
              id: undefined,
              name: 'MIÉRCOLES',
              start: '14:00',
              end: '21:15',
              isFree: false,
              errors: [],
            },
            {
              id: undefined,
              name: 'JUEVES',
              start: '15:30',
              end: '23:15',
              isFree: false,
              errors: [],
            },
            {
              id: undefined,
              name: 'VIERNES',
              start: '15:30',
              end: '23:15',
              isFree: false,
              errors: [],
            },
            {
              id: undefined,
              name: 'SÁBADO',
              start: undefined,
              end: undefined,
              isFree: true,
              errors: [],
            },
            {
              id: undefined,
              name: 'DOMINGO',
              start: undefined,
              end: undefined,
              isFree: true,
              errors: [],
            },
          ],
          totalHours: 37.5,
          workHours: 36.25,
          breakHours: 1.25,
          nightHours: 2.5,
          errors: [],
          hasErrors: false,
        },
        {
          id: undefined,
          name: 'SEMANA 4',
          days: [
            {
              id: undefined,
              name: 'LUNES',
              start: '07:00',
              end: '14:30',
              isFree: false,
              errors: [],
            },
            {
              id: undefined,
              name: 'MARTES',
              start: '07:00',
              end: '14:30',
              isFree: false,
              errors: [],
            },
            {
              id: undefined,
              name: 'MIÉRCOLES',
              start: '07:00',
              end: '14:30',
              isFree: false,
              errors: [],
            },
            {
              id: undefined,
              name: 'JUEVES',
              start: '07:00',
              end: '14:30',
              isFree: false,
              errors: [],
            },
            {
              id: undefined,
              name: 'VIERNES',
              start: '07:00',
              end: '14:30',
              isFree: false,
              errors: [],
            },
            {
              id: undefined,
              name: 'SÁBADO',
              start: undefined,
              end: undefined,
              isFree: true,
              errors: [],
            },
            {
              id: undefined,
              name: 'DOMINGO',
              start: undefined,
              end: undefined,
              isFree: true,
              errors: [],
            },
          ],
          totalHours: 37.5,
          workHours: 36.25,
          breakHours: 1.25,
          nightHours: 0,
          errors: [],
          hasErrors: false,
        },
        {
          id: undefined,
          name: 'SEMANA 5',
          days: [
            {
              id: undefined,
              name: 'LUNES',
              start: '14:45',
              end: '23:15',
              isFree: false,
              errors: [],
            },
            {
              id: undefined,
              name: 'MARTES',
              start: '14:45',
              end: '23:15',
              isFree: false,
              errors: [],
            },
            {
              id: undefined,
              name: 'MIÉRCOLES',
              start: '14:45',
              end: '23:15',
              isFree: false,
              errors: [],
            },
            {
              id: undefined,
              name: 'JUEVES',
              start: undefined,
              end: undefined,
              isFree: true,
              errors: [],
            },
            {
              id: undefined,
              name: 'VIERNES',
              start: undefined,
              end: undefined,
              isFree: true,
              errors: [],
            },
            {
              id: undefined,
              name: 'SÁBADO',
              start: '09:00',
              end: '15:00',
              isFree: false,
              errors: [],
            },
            {
              id: undefined,
              name: 'DOMINGO',
              start: '09:00',
              end: '15:00',
              isFree: false,
              errors: [],
            },
          ],
          totalHours: 37.5,
          workHours: 36.75,
          breakHours: 0.75,
          nightHours: 3.75,
          errors: [],
          hasErrors: false,
        },
      ],
    };
  }
}
