import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { TechListComponent } from './teachers/tech-list/tech-list.component';
import { LectureDetailComponent } from './teachers/lecture-detail/lecture-detail.component';
import { AddComponent } from './teachers/add/add.component';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { ListComponent } from './subject/list/list.component';
import { AddSubjectComponent } from './subject/add-subject/add-subject.component';
import { AddClassComponent } from './classes/add-class/add-class.component';
import { ListClassComponent } from './classes/list-class/list-class.component';
import { ScheduleClassComponent } from './classes/schedule-class/schedule-class.component';
import { ScheduleAllComponent } from './classes/schedule-all/schedule-all.component';
import { ScheduleDetailComponent } from './classes/schedule-detail/schedule-detail.component';


@NgModule({
  declarations: [
    LayoutComponent,
    SideBarComponent,
    FooterComponent,
    TechListComponent,
    LectureDetailComponent,
    AddComponent,
    ListComponent,
    AddSubjectComponent,
    AddClassComponent,
    ListClassComponent,
    ScheduleClassComponent,
    ScheduleAllComponent,
    ScheduleDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
