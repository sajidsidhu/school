import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AllTechListService {
  
  apiurl = 'http://localhost:8000/api/';
  constructor(
  private service:AuthService,
    private http: HttpClient
    ) { }

    detail_list(){
      let auth_token = this.service.getToken();
  
      const head = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${auth_token}`
        });
   
      const requestOptions = { headers: head };
      return this.http.get(this.apiurl+'teacher-all',requestOptions);
    }

    list(){
      let auth_token = this.service.getToken();
  
      const head = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${auth_token}`
        });
   
      const requestOptions = { headers: head };
      return this.http.get(this.apiurl+'teacher',requestOptions);
    }

    teacher_detail(id:number,day:string){
      let auth_token = this.service.getToken();
  
      const head = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${auth_token}`
        });
   
      const requestOptions = { headers: head };
      return this.http.get(this.apiurl+'teacher/'+id+'/'+day,requestOptions);
    }
     add(data:any){
      let auth_token = this.service.getToken();
  
      const head = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${auth_token}`
        });
   console.log(head);
      const requestOptions = { headers: head };
      return this.http.post(this.apiurl+'teacher',data,requestOptions);
     }
}
