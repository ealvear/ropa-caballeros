import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VenderComponent } from '../vender/vender.component';
import { HomeComponent } from '../home/home.component';
import { AppComponent } from '../app.component';
const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'inicio', component: HomeComponent },
    { path: 'pedido', component: VenderComponent },
    { path: '**', component: HomeComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RouterRoutingModule { }
