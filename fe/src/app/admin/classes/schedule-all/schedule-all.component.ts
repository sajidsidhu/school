import { ClassServiceService } from './../../../service/class-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule-all',
  templateUrl: './schedule-all.component.html',
  styleUrls: ['./schedule-all.component.css']
})
export class ScheduleAllComponent implements OnInit {

  List:any;
  constructor(private service:ClassServiceService) { }

  ngOnInit(): void {
    this.service.schedule_list().subscribe((res)=>{
      this.List = res;
    },(e)=>{
      console.log(e.error);
   
    });
  }
}
