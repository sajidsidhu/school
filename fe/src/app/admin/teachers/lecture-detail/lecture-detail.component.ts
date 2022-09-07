import { AllTechListService } from './../../../service/all-tech-list.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lecture-detail',
  templateUrl: './lecture-detail.component.html',
  styleUrls: ['./lecture-detail.component.css']
})
export class LectureDetailComponent implements OnInit {
  TeacherDetail:any;
  TeacherLectures:any;
  url:any;
  constructor(private service:AllTechListService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.url = this.route.snapshot.params;
    let id = this.url.id;
    let day = this.url.day;
    this.service.teacher_detail(id,day).subscribe(res=>{
      let data:any = res;
      this.TeacherDetail = data.data.teacher;
      this.TeacherLectures = data.data.schedules;
    });
  }

}
