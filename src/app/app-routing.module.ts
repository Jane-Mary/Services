import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { LeftBtnComponent } from './btn/left-btn/left-btn.component';
import { RightBtnComponent } from './btn/right-btn/right-btn.component';

const routes: Routes = [
  {path:'left-btn', component:LeftBtnComponent},
  {path:'right-btn', component:RightBtnComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
