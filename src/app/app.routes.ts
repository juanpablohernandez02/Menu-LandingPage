import { Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { ConceptualMapComponent } from './components/conceptual-map/conceptual-map.component';

export const routes: Routes = [
    {path: 'actividad1', component: ConceptualMapComponent},
    {path: 'actividad2', component: FormComponent},
];
