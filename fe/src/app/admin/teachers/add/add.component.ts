import { AllTechListService } from './../../../service/all-tech-list.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(
    public route: Router,
    private formBuilder: FormBuilder,
    private Service: AllTechListService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  addForm = this.formBuilder.group({
    name:'',
    email: '',
    password: '',
    qualification:'',
    starting_date:'',
    time_from:'',
    time_to:''
  });
  onSubmit(): void {

    if (this.addForm.valid) {

      this.Service.add(this.addForm.value).subscribe(res => {
        this.route.navigate(['admin/teachers']);
      }, err => {
        this.toastr.error(err.error.message, 'Error', {
          timeOut: 5000,
        });
      })
    }
  }
}
