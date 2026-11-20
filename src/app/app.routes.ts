import { Routes } from '@angular/router';
import { Login, PageNotFound,MainLayoutComponent, PredictionComponent, PackageInspectionComponent } from './Pages';



export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',component: Login
    },
    //  {
    //     path: 'prediction',component: PredictionComponent
    // },
    {
        path: '',
        component: MainLayoutComponent,
        children: [
        {
            path: 'prediction',component: PredictionComponent
        },
         {
            path: 'package-inspection',component: PackageInspectionComponent
        },
            { path: '**', component: PageNotFound }
        ]
    }
];