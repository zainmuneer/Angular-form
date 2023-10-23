import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { SlotAppComponent } from './slot-app/slot-app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormComponent } from './form/form.component';



const routes: Routes = [
    //   {
    //     path: '',
    //     pathMatch: 'full',
    //     component: LandingComponent,
    //   },


    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },

    { path: 'dashboard', component: DashboardComponent },

    // {
    //     path: '',
    //     pathMatch: 'full',
    //     component: AppointmentsComponent
    // },
    {
        path: 'slot',
        component: SlotAppComponent,
    },
    {
        path:'form',
        component: FormComponent,
    },
 
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }