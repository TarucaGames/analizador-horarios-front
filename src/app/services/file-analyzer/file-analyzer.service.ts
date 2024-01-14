import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FileAnalyzerService {
  constructor(private http: HttpClient) {}

  public analyze(file: File) {
    console.log(file.name + ' | ' + file.size);
    //return this.http.get('http://localhost:3000/api/index');
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<any>(
      'https://analizador-horarios.vercel.app/api/index',
      formData
    );
  }
}
