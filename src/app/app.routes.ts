import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        loadComponent: () => import('./pages/deferred-view/deferred-view.component').then(m => m.DeferredViewComponent)
    },
    {
        path: 'control-flow',
        loadComponent: () => import('./pages/control-flow/control-flow.component').then(m => m.ControlFlowComponent)
    }];
