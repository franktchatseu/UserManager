import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { format } from 'url';
import { SignupComponent } from './auth/signup/signup.component';
import { UserlistComponent } from './users/userlist/userlist.component';
import { UserFormComponent } from './users/user-form/user-form.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { UserService } from './service/user.service';
import { AuthService } from './service/auth.service';
import { AutorisationService } from './service/autorisation.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import { MatComponent } from './mat/mat.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import { UpdateComponent } from './users/update/update.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { OneuserComponent } from './users/oneuser/oneuser.component';
import { JwPaginationComponent } from 'jw-angular-pagination';
import { UpfileComponent } from './upfile/upfile.component';

const approute=[
  {path:'',component:SignupComponent},
  {path:'auth/signup',component:SignupComponent},
  
  {path:'user/list/:status',canActivate:[AutorisationService], component:UserlistComponent},
  {path:'user/edit',canActivate:[AutorisationService],component:UserFormComponent},
  {path:'user/update/:id',canActivate:[AutorisationService],component:UpdateComponent},
  {path:'user/detail/:id',canActivate:[AutorisationService],component:UserDetailComponent}
  

];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    UserlistComponent,
    UserFormComponent,
    UserDetailComponent,
    HeaderComponent,
    MatComponent,
    UpdateComponent,
    SpinnerComponent,
    OneuserComponent,
    JwPaginationComponent,
    UpfileComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(approute),
    BrowserAnimationsModule,
    MatSliderModule,
    MatInputModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatCardModule,
    MatInputModule,
    HttpClientModule

  ],
  
 entryComponents: [SpinnerComponent],
  providers: [UserService,AuthService,AutorisationService],
  bootstrap: [AppComponent]  
})
export class AppModule { }
