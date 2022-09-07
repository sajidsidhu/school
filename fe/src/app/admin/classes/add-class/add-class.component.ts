import { ToastrService } from 'ngx-toastr';
import { ClassServiceService } from './../../../service/class-service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.css']
})
export class AddClassComponent implements OnInit {

 
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

      this.Service.addClass(this.subjectForm.value).subscribe((res) => {
        this.route.navigate(['admin/class']);
      }, (err) => {
        this.toastr.error(err.error.message, 'Error', {
          timeOut: 5000,
        });
      })
    }
  }
}
