import { ClassServiceService } from './../../../service/class-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  List:any;
  constructor(private service:ClassServiceService) { }

  ngOnInit(): void {
    this.service.subject_list().subscribe((res)=>{
      this.List = res;
    },(e)=>{
      console.log(e.error);
   
    });
  }

}
