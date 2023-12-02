import { Routes } from '@angular/router';
import { PruebarutaComponent } from './pruebaruta/pruebaruta.component';
import { PruebaenrutamientoComponent } from './pruebaenrutamiento/pruebaenrutamiento.component';
import { PruebaenvivoComponent } from './pruebaenvivo/pruebaenvivo.component';

export const routes: Routes = [
    {
        path:'',
        component:PruebarutaComponent
    },
    {
        path:'enrutando/enrutandoconotropath',
        component: PruebaenrutamientoComponent
    },
    {
        path:'enrutandoenvivo',
        component: PruebaenvivoComponent
    }
];
