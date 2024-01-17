import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { AppComponent } from './app.component';
import { FileUploadComponentComponent } from './components/file-upload-component/file-upload-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { DataViewModule } from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductServiceService } from './services/product-service/product-service.service';

@NgModule({
  declarations: [AppComponent, FileUploadComponentComponent],
  imports: [
    BrowserModule,
    ButtonModule,
    FileUploadModule,
    ToastModule,
    BrowserAnimationsModule,
    TabViewModule,
    DataViewModule,
    RatingModule,
    TagModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ProductServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
