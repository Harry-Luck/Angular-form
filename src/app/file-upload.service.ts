import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
 providedIn: 'root'
})
export class UploadService {

 constructor(
   private httpClient: HttpClient,
 ) { }

 public uploadfile(file: File) {
   let formParams = new FormData();
   formParams.append('file', file);
   return alert("Uploaded");
   //return this.httpClient.post('http://localhost:3000/uploadFile', formParams)
 }
}
