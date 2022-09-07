import { ClassServiceService } from './../../../service/class-service.service';
import { Component, OnInit } from '@angular/core';
import { AllTechListService } from './../../../service/all-tech-list.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-schedule-class',
  templateUrl: './schedule-class.component.html',
  styleUrls: ['./schedule-class.component.css']
})
export class ScheduleClassComponent implements OnInit {

  ClassList:any = {data:[]};
  SubjectList:any = {data:[]};
  TeachersList:any = {data:[]};
  Daylist:any = [
    {id:'mo',name:'Monday'},
    {id:'tu',name:'Tuesday'},
    {id:'we',name:'Wednesday'},
    {id:'th',name:'Thresday'},
    {id:'fr',name:'Friday'},
    {id:'sa',name:'Saturday'},
  ]
  constructor(
    public route: Router,
    private formBuilder: FormBuilder,
    private Service: AllTechListService,
    private toastr: ToastrService,
    private service:ClassServiceService) { }


  ngOnInit(): void {
    this.service.class_list().subscribe((res)=>{
      this.ClassList = res;
    },(e)=>{
      console.log(e.error);
   
    });
      this.service.subject_list().subscribe((res)=>{
        this.SubjectList = res;
      },(e)=>{
        console.log(e.error);
     
      });
      this.Service.list().subscribe((res)=>{
        this.TeachersList = res;
      },(e)=>{
        console.log(e.error);
     
      });
    
  }

  addForm = this.formBuilder.group({
    grade_id:'',
    subject_id: '',
    teacher_id: '',
    day:'',
    start_time:'',
    end_time:''
  });
  onSubmit(): void {

    if (this.addForm.valid) {

      this.service.addSchedule(this.addForm.value).subscribe(res => {
        this.route.navigate(['admin/teachers']);
      }, err => {
        this.toastr.error(err.error.message, 'Error', {
          timeOut: 5000,
        });
      })
    }
  }
}
