import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { AppComponent } from './app.component';
import { FileUploadComponentComponent } from './components/file-upload-component/file-upload-component.component';

import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [AppComponent, FileUploadComponentComponent],
  imports: [BrowserModule, ButtonModule, FileUploadModule, ToastModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
