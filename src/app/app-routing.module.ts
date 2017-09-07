import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfilePageComponent } from './profile-page/profile-page.component';
import { MyOrdersComponent } from './profile-page/my-orders/my-orders.component';
import { MySettingsComponent } from './profile-page/my-settings/my-settings.component';
import { MyGalleryComponent } from './profile-page/my-gallery/my-gallery.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { OrderPageComponent } from './order-page/order-page.component';

import { RedactorPageComponent } from './redactor-page/redactor-page.component';


const routes: Routes = [
    {
        path: 'profile-page',
        component: ProfilePageComponent,
        children: [
            {
                path: 'my-orders',
                component: MyOrdersComponent
            },
            {
                path: 'my-settings',
                component: MySettingsComponent
            },
            {
                path: 'my-gallery',
                component: MyGalleryComponent
            }
        ]
    },
    {
        path: 'redactor-page',
        component: RedactorPageComponent
    },
    {
        path: 'registration-page',
        component: RegistrationPageComponent
    },
    {
        path: 'login-page',
        component: LoginPageComponent
    },
        path: 'order-page',
        component: OrderPageComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{}
export const routingComponents = [ProfilePageComponent, MyOrdersComponent, MySettingsComponent, MyGalleryComponent, RegistrationPageComponent, OrderPageComponent, LoginPageComponent, RedactorPageComponent];
