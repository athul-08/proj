import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    {
        component: HomeComponent,
        path: ''
    },
    {
        component: ContactComponent,
        path: 'contact'
    },
    {
        component: ProductComponent,
        path: 'product'
    },
    {
        component: AboutComponent,
        path: 'about'
    },
    {
        component: HomeComponent,
        path: '**'
    }
];
