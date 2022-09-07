import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClassServiceService {

  apiurl = 'http://localhost:8000/api/';
  constructor(
  private service:AuthService,
    private http: HttpClient
    ) { }



    subject_list(){
      let auth_token = this.service.getToken();
  
      const head = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${auth_token}`
        });
   
      const requestOptions = { headers: head };
      return this.http.get(this.apiurl+'subject',requestOptions);
    }


    schedule_detail(id:number,day:string){
      let auth_token = this.service.getToken();
  
      const head = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${auth_token}`
        });
   
      const requestOptions = { headers: head };
      return this.http.get(this.apiurl+'class/'+id+'/'+day,requestOptions);
    }

    schedule_list(){
      let auth_token = this.service.getToken();
  
      const head = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${auth_token}`
        });
   
      const requestOptions = { headers: head };
      return this.http.get(this.apiurl+'classes-all',requestOptions);
    }


    class_list(){
      let auth_token = this.service.getToken();
  
      const head = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${auth_token}`
        });
   
      const requestOptions = { headers: head };
      return this.http.get(this.apiurl+'class',requestOptions);
    }
     add(data:any){
      let auth_token = this.service.getToken();
  
      const head = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${auth_token}`
        });
      const requestOptions = { headers: head };
      return this.http.post(this.apiurl+'subject',data,requestOptions);
     }
     addClass(data:any){
      let auth_token = this.service.getToken();
  
      const head = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${auth_token}`
        });
      const requestOptions = { headers: head };
      return this.http.post(this.apiurl+'class',data,requestOptions);
     }
     addSchedule(data:any){
      let auth_token = this.service.getToken();
  
      const head = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${auth_token}`
        });
      const requestOptions = { headers: head };
      return this.http.post(this.apiurl+'schedule',data,requestOptions);
     }


}
