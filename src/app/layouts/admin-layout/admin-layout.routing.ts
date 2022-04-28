import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { MenuComponent } from '../../pages/menu/menu.component';
import { GratisComponent } from 'app/gratis/gratis.component';
import { CortoComponent } from 'app/corto/corto.component';
import { LargoComponent } from 'app/largo/largo.component';
import { EspecializacionComponent } from 'app/especializacion/especializacion.component';
import { FormularioComponent } from 'app/formulario/formulario.component';
import { PagoComponent } from 'app/pago/pago.component';
import { AnswersComponent } from 'app/answers/answers.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user',           component: UserComponent },
    { path: 'table',          component: TableComponent },
    { path: 'menu',          component: MenuComponent },
    { path: 'free',          component: GratisComponent },
    { path: 'corto',          component: CortoComponent },
    { path: 'largo',          component: LargoComponent },
    { path: 'pago',          component: PagoComponent },
    { path: 'answer',          component: AnswersComponent },
    { path: 'formulario',          component: FormularioComponent },
    { path: 'especializacion',          component: EspecializacionComponent },
];
