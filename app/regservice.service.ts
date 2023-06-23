import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegserviceService {

  constructor(public http:HttpClient) {}
  public GetData ()
  {
    return this.http.get('http://172.17.15.189:9090/showdata');
  }
  public PostData(a:any)
  {
    return this.http.post('http://172.17.15.189:9090/adddata',a);
  }
  LoginData(data: any) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    
    return this.http.post('http://172.17.15.189:9090/login', data, {
      headers: headers,
      responseType: 'text'
    });
  }
  public FeedBData(a:any)
  {
    return this.http.post('http://172.17.15.189:9090/insertFeedback',a);
  }
}
