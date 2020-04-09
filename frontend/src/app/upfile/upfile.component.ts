import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-upfile',
  templateUrl: './upfile.component.html',
  styleUrls: ['./upfile.component.scss']
})
export class UpfileComponent implements OnInit {

  headers=new HttpHeaders();
  constructor(private http:HttpClient) { 
    this.headers.append('enctype','multipart/form-data');;
    this.headers.append('Content-type','application/json');
    //this.headers.append('X-Requested-With','XMLhttpRequest');
  }

  ngOnInit() {
  }

  myfile:File=null;

  detectfile(event){
    this.myfile=event.target.files[0];
    console.log(this.myfile)
  }

  upload(){

     var fd=new FormData();
     fd.append('image',this.myfile,this.myfile.name);
     this.http.post('http://localhost:8001/user/upload',fd,{headers:this.headers}).subscribe(
       
     )
  }
}
