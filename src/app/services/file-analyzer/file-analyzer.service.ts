import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServerResponse } from 'src/app/models/server-response';

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
    return this.http.post<ServerResponse>(
      'http://localhost:3000/api/index',
      formData
    );
  }
}
