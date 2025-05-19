import { Routes } from '@angular/router';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { AboutComponent } from './about/about.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';

export const routes: Routes = [
    // Out two main routes:
    { path: '', redirectTo: 'courses', pathMatch: 'full' },
    { path: 'courses', component: CoursesListComponent },
    { path: 'courses/:id', component: CourseDetailComponent },
    { path: 'about', component: AboutComponent },
    { path: 'sign-up', component: SignUpFormComponent },
    {
        path: 'admin',
        loadChildren: () => import('./features/admin/admin-routing.module').then(m => m.AdminRoutingModule)
    }
];
