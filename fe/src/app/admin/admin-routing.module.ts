import { ScheduleAllComponent } from './classes/schedule-all/schedule-all.component';
import { ScheduleClassComponent } from './classes/schedule-class/schedule-class.component';
import { AddClassComponent } from './classes/add-class/add-class.component';
import { ListClassComponent } from './classes/list-class/list-class.component';
import { AddSubjectComponent } from './subject/add-subject/add-subject.component';
import { AddComponent } from './teachers/add/add.component';
import { LectureDetailComponent } from './teachers/lecture-detail/lecture-detail.component';
import { TechListComponent } from './teachers/tech-list/tech-list.component';
import { AuthGuard } from './../guard/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { ListComponent } from './subject/list/list.component';
import { ScheduleDetailComponent } from './classes/schedule-detail/schedule-detail.component';

const routes: Routes = [
  { path: '', component: LayoutComponent,
  children:[
    {path:'home',component:HomeComponent},
    {path:'teachers',component:TechListComponent},
    {path:'teachers/add',component:AddComponent},
    {path:'teacher-detail/:id/:day',component:LectureDetailComponent},
    {path:'subjects',component:ListComponent},
    {path:'subjects/add',component:AddSubjectComponent},
    {path:'class',component:ListClassComponent},
    {path:'class/add',component:AddClassComponent},
    {path:'class/schedule',component:ScheduleClassComponent},
    {path:'class/schedules',component:ScheduleAllComponent},
    {path:'class/schedule-detail/:id/:day',component:ScheduleDetailComponent},
    {path:'',redirectTo:'/admin/home',pathMatch:'full'}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
