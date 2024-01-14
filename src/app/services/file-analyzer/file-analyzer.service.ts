import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FileAnalyzerService {
  constructor(private http: HttpClient) {}

  public analyze(file: File) {
    console.log(file.name + ' | ' + file.size);
    const response = this.http
      .get('https://analizador-horarios.vercel.app/api/index')
      .subscribe((data) => {
        console.log('#RECIBIDO');
        console.log(data);
      });
  }
}
