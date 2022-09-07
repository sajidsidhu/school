import { AllTechListService } from './../../../service/all-tech-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech-list',
  templateUrl: './tech-list.component.html',
  styleUrls: ['./tech-list.component.css']
})
export class TechListComponent implements OnInit {
TeachersList:any;
  constructor(private service:AllTechListService) { }

  ngOnInit(): void {
    this.service.detail_list().subscribe(res=>{
      this.TeachersList = res;
    });
  }

}
