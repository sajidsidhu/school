import { ToastrService } from 'ngx-toastr';
import { ClassServiceService } from './../../../service/class-service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent implements OnInit {

  constructor(
    public route: Router,
    private formBuilder: FormBuilder,
    private Service: ClassServiceService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  subjectForm = this.formBuilder.group({
    name:'', 
    description: ''
  });
  onSubmit(): void {

    if (this.subjectForm.valid) {

      this.Service.add(this.subjectForm.value).subscribe((res) => {
        this.route.navigate(['admin/subjects']);
      }, (err) => {
        this.toastr.error(err.error.message, 'Error', {
          timeOut: 5000,
        });
      })
    }
  }
}
