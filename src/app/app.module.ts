import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { ModalModule } from 'ngx-bootstrap';
import { BsModalRef, BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './user/header/header.component';
import { FooterComponent } from './user/footer/footer.component';
import { SelectBusComponent } from './user/select-bus/select-bus.component';
import { SelectSeatComponent } from './user/select-seat/select-seat.component';
import { BusSearchResultComponent } from './user/bus-search-result/bus-search-result.component';
import { SelectBusService } from './user/services/selectBus.service';
import { UserFormComponent } from './user/user-form/user-form.component';
import { BookingService } from './user/services/booking.service';
import { UserService } from './user/services/user.service';
import { PrintComponent } from './user/print/print.component';
import { FacilitiesComponent } from './user/facilities/facilities.component';
import { NewsComponent } from './user/news/news.component';
import { AboutComponent } from './user/about/about.component';
import { BlogComponent } from './user/blog/blog.component';
import { ContactusComponent } from './user/contactus/contactus.component';
import { CelebrationGalleryComponent } from './user/celebration-gallery/celebration-gallery.component';

import {EmployeeService} from './user/services/employee.service'
import {Employee} from './employee';
import { EmployeeComponent } from './user/employee/employee.component'
// import {FormsModule} from '@angular/forms';
const userRoute:Routes=[
{path:'',component:SelectBusComponent},
{path:'search',component:BusSearchResultComponent},
{path:'user-form',component:UserFormComponent},
{path:'print',component:PrintComponent},
{path:'gallery',component:CelebrationGalleryComponent},
{path:'Facilities',component:FacilitiesComponent},
{path:'News',component:NewsComponent},
{path:'About',component:AboutComponent},
{path:'Blog',component:BlogComponent},
{path:'contactus',component:ContactusComponent},
{path:'employees',component:EmployeeComponent}


]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HeaderComponent,
    FooterComponent,
    SelectBusComponent,
    SelectSeatComponent,
    BusSearchResultComponent,
    UserFormComponent,
    PrintComponent,
    FacilitiesComponent,
    NewsComponent,
    AboutComponent,
    BlogComponent,
    ContactusComponent,
    CelebrationGalleryComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(userRoute, { relativeLinkResolution: 'legacy' }),
    HttpClientModule,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    SelectBusService,
    BookingService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
