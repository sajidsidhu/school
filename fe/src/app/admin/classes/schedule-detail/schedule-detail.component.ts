import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClassServiceService } from 'src/app/service/class-service.service';

@Component({
  selector: 'app-schedule-detail',
  templateUrl: './schedule-detail.component.html',
  styleUrls: ['./schedule-detail.component.css']
})
export class ScheduleDetailComponent implements OnInit {

  constructor(private service:ClassServiceService,private route:ActivatedRoute) { }
  ScheduleDetail:any;
  url:any;

  ngOnInit(): void {
    this.url = this.route.snapshot.params;
    let id = this.url.id;
    let day = this.url.day;
    this.service.schedule_detail(id,day).subscribe(res=>{
      let data:any = res;
      this.ScheduleDetail = data.data;
    });
  }

}
