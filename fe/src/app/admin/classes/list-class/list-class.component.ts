import { ClassServiceService } from './../../../service/class-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-class',
  templateUrl: './list-class.component.html',
  styleUrls: ['./list-class.component.css']
})
export class ListClassComponent implements OnInit {
  List:any;
  constructor(private service:ClassServiceService) { }

  ngOnInit(): void {
    this.service.class_list().subscribe((res)=>{
      this.List = res;
    },(e)=>{
      console.log(e.error);
   
    });
  }
}
