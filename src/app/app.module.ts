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
import { AccordionModule } from 'primeng/accordion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductServiceService } from './services/product-service/product-service.service';
import { AccordionComponent } from './components/accordion/accordion.component';
import { DividerModule } from 'primeng/divider';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponentComponent,
    AccordionComponent,
  ],
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
    AccordionModule,
    DividerModule,
    ProgressSpinnerModule,
  ],
  providers: [ProductServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
